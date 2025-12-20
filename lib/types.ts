// Shared TypeScript interfaces for the application

export interface WeeklyProgramItem {
  datetime: string;
  recurring?: boolean;
  massType: string;
  language?: string;
  description?: string;
  location?: string;
}

export interface NewsItem {
  _id: string;
  title: string;
  slug?: { current: string };
  publishedAt?: string;
  date?: string;
  excerpt: string;
  featuredImage?: any;
  image?: any;
  category?: string;
  content?: any;
  featured?: boolean;
}
