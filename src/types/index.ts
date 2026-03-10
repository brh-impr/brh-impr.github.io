export type Player = {
  slug: string;
  number: number;
  name: string;
  position: 'F' | 'D' | 'G';
  year: string;
  hometown: string;
  shoots?: string;
  previousTeam?: string;
  major?: string;
  bio?: string;
};

export type Game = {
  id: string;
  date: string;
  opponent: string;
  location: 'Home' | 'Away' | 'Neutral';
  rink: string;
  time: string;
  result?: string;
};

export type EventItem = {
  slug: string;
  title: string;
  date: string;
  location: string;
  price?: string;
  description: string;
  registrationOpen: boolean;
};

export type NewsItem = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
};
