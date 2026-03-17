"use client";

import { useEffect, useMemo, useState } from "react";
import Papa from "papaparse";

type ScheduleRow = {
  id: string;
  opponent: string;
  date: string;
  time: string;
  location: string;
  rink: string;
  result?: string | null;
};

const SHEET_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSzKcL42kKLA681-_-upPJhPAV1cJ_U1DbhqD3jmjhLciDVXvE1oI7Cnuva9aSH7ONZ-sUciWes85dG/pub?gid=0&single=true&output=csv";

function parseGameDate(dateString: string): Date | null {
  const parsed = new Date(dateString);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

function formatGameDate(dateString: string): string {
  const parsed = parseGameDate(dateString);
  if (!parsed) return dateString;

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(parsed);
}

function isUpcoming(dateString: string): boolean {
  const parsed = parseGameDate(dateString);
  if (!parsed) return false;

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return parsed >= today;
}

export default function ScheduleTableClient() {
  const [games, setGames] = useState<ScheduleRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadGames() {
      try {
        setLoading(true);
        setError("");

        const res = await fetch(SHEET_URL, { cache: "no-store" });
        if (!res.ok) {
          throw new Error(`Failed to fetch schedule: ${res.status}`);
        }

        const text = await res.text();
        const parsed = Papa.parse(text, {
          header: true,
          skipEmptyLines: true,
        });

        const rows = (parsed.data as any[]).map((game, index) => ({
          id: index.toString(),
          opponent: game.opponent ?? "",
          date: game.date ?? "",
          time: game.time ?? "",
          location: game.location ?? "",
          rink: game.rink ?? "",
          result: game.result || null,
        }));

        setGames(rows);
      } catch (err) {
        setError("Unable to load the latest schedule right now.");
      } finally {
        setLoading(false);
      }
    }

    loadGames();
  }, []);

  const sortedGames = useMemo(() => {
    return [...games].sort((a, b) => {
      const aDate = parseGameDate(a.date);
      const bDate = parseGameDate(b.date);

      if (!aDate && !bDate) return 0;
      if (!aDate) return 1;
      if (!bDate) return -1;

      return aDate.getTime() - bDate.getTime();
    });
  }, [games]);

  if (loading) {
    return (
      <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
        Loading latest schedule...
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-8 rounded-3xl border border-rose-200 bg-rose-50 p-6 text-rose-700 shadow-soft">
        {error}
      </div>
    );
  }

  return (
    <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft">
      <table className="min-w-full divide-y divide-slate-200 text-left">
        <thead className="bg-slate-50 text-sm text-slate-500">
          <tr>
            <th className="px-5 py-4">Date</th>
            <th className="px-5 py-4">Opponent</th>
            <th className="px-5 py-4">Location</th>
            <th className="px-5 py-4">Time</th>
            <th className="px-5 py-4">Result</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {sortedGames.map((game) => {
            const upcoming = isUpcoming(game.date);

            return (
              <tr
                key={game.id}
                className={upcoming ? "bg-blue-50/40" : ""}
              >
                <td className="px-5 py-4">
                  <div className="font-medium text-slate-900">
                    {formatGameDate(game.date)}
                  </div>
                  {upcoming ? (
                    <div className="mt-1 inline-flex rounded-full bg-brand/10 px-2 py-1 text-xs font-semibold text-brand">
                      Upcoming
                    </div>
                  ) : null}
                </td>
                <td className="px-5 py-4 font-semibold">{game.opponent}</td>
                <td className="px-5 py-4">
                  {game.location} · {game.rink}
                </td>
                <td className="px-5 py-4">{game.time}</td>
                <td className="px-5 py-4">{game.result || "Upcoming"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
