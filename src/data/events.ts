import { EventItem } from '@/types';

export const events: EventItem[] = [
  {
    slug: 'fall-youth-clinic',
    title: 'Fall Youth Clinic',
    date: 'Nov 2, 2026',
    location: 'Newington Ice Arena',
    price: '$40',
    description: 'A skills clinic for youth players focused on skating, puck control, and shooting fundamentals led by club team players and staff.',
    registrationOpen: true
  },
  {
    slug: 'alumni-skate-night',
    title: 'Alumni Skate Night',
    date: 'Nov 15, 2026',
    location: 'Newington Ice Arena',
    price: '$25',
    description: 'Reconnect with former players and supporters for an evening skate, team social, and fundraiser.',
    registrationOpen: true
  },
  {
    slug: 'booster-night',
    title: 'Booster Night',
    date: 'Dec 6, 2026',
    location: 'Student Center Ballroom',
    price: '$20',
    description: 'An off-ice community fundraising event supporting travel, equipment, and future recruiting.',
    registrationOpen: true
  }
];
