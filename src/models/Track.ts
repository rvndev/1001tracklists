// TODO: implement "wrong/duplicate" tracks, allow for tracks with empty fields
export class Track {
  name: string;
  artist: string;
  publisher: string;
  duration: number;
  genre: string;
  url: string;

  constructor(name: string, artist: string, publisher: string, duration: number, genre: string, url: string) {
    this.name = name;
    this.artist = artist;
    this.publisher = publisher;
    this.duration = duration;
    this.genre = genre;
    this.url = url;
  }
}
