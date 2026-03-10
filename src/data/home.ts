import { events } from './events';
import { games } from './schedule';
import { products } from './store';
import { newsItems } from './news';

export const featuredStats = [
  { label: 'Overall Record', value: '18-7-2' },
  { label: 'Conference Record', value: '11-3-1' },
  { label: 'Goals Per Game', value: '4.1' },
  { label: 'Save %', value: '.921' }
];

export const nextGames = games.slice(0, 3);
export const upcomingEvents = events.slice(0, 3);
export const previewProducts = products.slice(0, 4);
export const latestNews = newsItems.slice(0, 2);
