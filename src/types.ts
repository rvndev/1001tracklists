// Config types

export interface SDKConfiguration {
  stub: null;
}

export interface AuthData {
  email: string;
  password: string;
}

export interface BaseScraper<T> {
  scrape(html: string): T;
}

export interface BaseService {
  name: string;
  artist: string;
  publisher: string;
  duration: number;
  genre: string;
  url: string;
}
