"use client";

import { useEffect, useMemo, useState } from "react";
import Papa from "papaparse";

type EventRow = {
  title: string;
  slug: string;
  date: string;
  location: string;
  price?: string;
  registration_url?: string;
  image?: string;
  description?: string;
};

const SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSzKcL42kKLA681-_-upPJhPAV1cJ_U1DbhqD3jmjhLciDVXvE1oI7Cnuva9aSH7ONZ-sUciWes85dG/pub?gid=1653992489&single=true&output=csv";

function parseDate(date: string) {
  const d = new Date(date);
  return isNaN(d.getTime()) ? null : d;
}

function formatDate(date: string) {
  const d = parseDate(date);
  if (!d) return date;

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(d);
}

export default function EventsListClient() {
  const [events, setEvents] = useState<EventRow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const res = await fetch(SHEET_URL, { cache: "no-store" });
      const text = await res.text();

      const parsed = Papa.parse(text, {
        header: true,
        skipEmptyLines: true,
      });

      setEvents(parsed.data as EventRow[]);
      setLoading(false);
    }

    load();
  }, []);

  const sorted = useMemo(() => {
    return [...events].sort((a, b) => {
      const aDate = parseDate(a.date);
      const bDate = parseDate(b.date);
      if (!aDate || !bDate) return 0;
      return aDate.getTime() - bDate.getTime();
    });
  }, [events]);

  if (loading) return <div className="mt-8">Loading events...</div>;

  return (
    <div className="mt-8 grid gap-6 md:grid-cols-2">
      {sorted.map((event) => (
        <div
          key={event.slug}
          className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft"
        >
          <h2 className="text-xl font-bold">{event.title}</h2>
          <p className="text-slate-500 mt-1">
            {formatDate(event.date)} · {event.location}
          </p>

          {event.description && (
            <p className="mt-3 text-slate-600">{event.description}</p>
          )}

          {event.price && (
            <p className="mt-2 font-semibold">{event.price}</p>
          )}

          {event.registration_url && (
            <a
              href={event.registration_url}
              target="_blank"
              className="mt-4 inline-block rounded-2xl bg-brand px-4 py-2 font-semibold text-white"
            >
              Register
            </a>
          )}
        </div>
      ))}
    </div>
  );
}
