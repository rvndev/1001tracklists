import { parseDurationToNumber } from './utils'

export interface Tracklist {
  name: string
  artist: string
  date: string
  description: string
  tracks: Track[]
  url: string
}

export interface Track {
  name: string
  artist: string
  publisher: string
  duration: number
  genre: string
  url: string
}
// export function extractTracklist (document: Document): Tracklist {

// }

export function extractTrack (element: Element): Track {
  const subpageUrl = (element.querySelector('meta[itemprop=url]')?.getAttribute('content') ?? '')

  const track = {
    name: element.querySelector('meta[itemprop=name]')?.getAttribute('content') ?? '',
    artist: element.querySelector('meta[itemprop=byArtist]')?.getAttribute('content') ?? '',
    publisher: element.querySelector('meta[itemprop=publisher]')?.getAttribute('content') ?? '',
    genre: element.querySelector('meta[itemprop=genre]')?.getAttribute('content') ?? '',
    duration: parseDurationToNumber(element.querySelector('meta[itemprop=duration]')?.getAttribute('content') ?? ''),
    url: subpageUrl === '' ? '' : 'https://www.1001tracklists.com' + subpageUrl
  }
  for (const value of Object.values(track)) {
    if (value === '') {
      throw new Error("Couldn't extract track: " + JSON.stringify(track, null, 2))
    }
  }

  return track
}
