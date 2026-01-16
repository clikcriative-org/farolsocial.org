
export type Page = 'home' | 'donors' | 'programs' | 'about' | 'news';

export interface ImpactStat {
  label: string;
  value: string;
  description: string;
}

export interface Sponsor {
  name: string;
  logo: string;
  type: 'Gold' | 'Silver' | 'Bronze';
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface NewsPost {
  id: string;
  title: string;
  date: string;
  image: string;
  content: string;
}
