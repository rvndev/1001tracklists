import { getMetaContent, getTrackName, parseDurationToNumber } from './utils'

// TODO: implement genres
export interface Tracklist {
  name: string
  artist: string
  date: Date
  tracks: Track[]
  genres: string[]
  url: string
}

// TODO: implement "wrong/duplicate" tracks, allow for tracks with empty fields
export interface Track {
  name: string
  artist: string
  publisher: string
  duration: number
  genre: string
  url: string
}

export function parseTrack (element: Element): Track {
  if (!element.querySelector('.trackValue')) {
    console.log(element.outerHTML)
    throw new Error('Track not found')
  }

  const durationStr = getMetaContent(element, 'itemprop=duration')
  const path = getMetaContent(element, 'itemprop=url')

  const track = {
    name: getTrackName(element),
    artist: getMetaContent(element, 'itemprop=byArtist', 'ID'),
    publisher: getMetaContent(element, 'itemprop=publisher'),
    genre: getMetaContent(element, 'itemprop=genre'),
    duration: durationStr ? parseDurationToNumber(durationStr) : 0,
    url: path ? 'https://www.1001tracklists.com' + path : path
  }

  return track
}

// Create a function stub for parseTracklist(document: Document): Tracklist
export function parseTracklist (document: Document): Tracklist {
  const infoDiv = document.querySelector('#tlTab')

  if (!infoDiv) {
    throw new Error('Tracklist not found')
  }

  const genres = Array.from(document.querySelectorAll('#tlTab > meta[itemprop=genre]')).map(genre => genre.getAttribute('content') ?? ''),
  const tracks = Array.from(document.querySelectorAll('[id$="_content"]')).map(parseTrack)

  const tracklist = {
    name: getMetaContent(infoDiv, 'itemprop=name'),
    artist: getMetaContent(infoDiv, 'itemprop=author'),
    date: new Date(getMetaContent(infoDiv, 'itemprop=datePublished')),
    genres,
    tracks,
    url: getMetaContent(document, 'property="og:url"')
  }

  return tracklist
}
