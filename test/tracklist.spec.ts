import { readFileSync } from 'fs'
import { describe, it } from 'node:test'
import { JSDOM } from 'jsdom'
import { extractTrack, type Track } from '../src/tracklist'
import assert from 'node:assert'

describe('Track', () => {
  const html = readFileSync('./test/tracklist.html', 'utf8')
  const { document } = (new JSDOM(html)).window

  it('Should extract a track from a tracklist page', () => {
    const track: Track = {
      name: 'Caterina Barbieri - At Your Gamut',
      artist: 'Caterina Barbieri',
      publisher: 'light-years',
      duration: 426,
      genre: 'Electronica',
      url: 'https://www.1001tracklists.com/track/27jytsjp/caterina-barbieri-at-your-gamut/index.html'
    }

    const trackDiv = document.querySelector('[id="tlp13_content"]')
    if (trackDiv === null) {
      throw new Error("Couldn't find the DOM element in the html file")
    }

    assert.deepStrictEqual(track, extractTrack(trackDiv))
  })

  it("Should throw if page doesn't contain any valid tracks", () => {
    const nonTrackDiv = document.querySelector('[id="sBox"]')
    if (nonTrackDiv === null) {
      throw new Error("Couldn't find the DOM element in the html file")
    }
    assert.throws(() => extractTrack(nonTrackDiv), Error)
  })
})
