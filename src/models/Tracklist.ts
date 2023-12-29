import type { Track } from './Track'; // Assuming Track is another class or interface

export class Tracklist {
  name: string;
  artist: string;
  date: Date;
  tracks: Array<Track>;
  genres: Array<string>;
  url: string;

  constructor(name: string, artist: string, date: Date, tracks: Array<Track>, genres: Array<string>, url: string) {
    this.name = name;
    this.artist = artist;
    this.date = date;
    this.tracks = tracks;
    this.genres = genres;
    this.url = url;
  }
}
