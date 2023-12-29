import { Track } from '../models/Track';
import type { Tracklist } from '../models/Tracklist';
import type { BaseScraper } from '../types';
import { getMetaContent, getTrackName, parseDurationToNumber } from '../utils';

// TODO move to seperate Scraper class
export function scrapeTrack(element: Element): Track {
  if (!element.querySelector('.trackValue')) {
    console.log(element.outerHTML);
    throw new Error('Track not found');
  }

  const durationStr = getMetaContent(element, 'itemprop=duration');
  const path = getMetaContent(element, 'itemprop=url');

  const track = new Track(
    getTrackName(element),
    getMetaContent(element, 'itemprop=byArtist', 'ID'),
    getMetaContent(element, 'itemprop=publisher'),
    durationStr ? parseDurationToNumber(durationStr) : 0,
    getMetaContent(element, 'itemprop=genre'),
    path ? 'https://www.1001tracklists.com' + path : path
  );

  return track;
}

export class TracklistScraper implements BaseScraper<Tracklist> {
  scrape(html: string): Tracklist {
    const document = new DOMParser().parseFromString(html, 'text/html');
    const infoDiv = document.querySelector('#tlTab');

    if (!infoDiv) {
      throw new Error('Tracklist not found');
    }

    const genres = Array.from(document.querySelectorAll('#tlTab > meta[itemprop=genre]')).map(
      (genre) => genre.getAttribute('content') ?? ''
    );
    const tracks = Array.from(document.querySelectorAll('[id$="_content"]')).map(scrapeTrack);

    const tracklist = {
      name: getMetaContent(infoDiv, 'itemprop=name'),
      artist: getMetaContent(infoDiv, 'itemprop=author'),
      date: new Date(getMetaContent(infoDiv, 'itemprop=datePublished')),
      genres,
      tracks,
      url: getMetaContent(document, 'property="og:url"'),
    };

    return tracklist;
  }
}
