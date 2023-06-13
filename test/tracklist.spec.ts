import { readFileSync } from 'fs';
import { JSDOM } from 'jsdom';
import assert from 'node:assert';
import { describe, it } from 'node:test';
import { extractTrack, extractTracklist, type Track, type Tracklist } from '../src/tracklist';
import { omit } from './utils';

describe('Track', () => {
  const html = readFileSync('./test/tracklist.html', 'utf8');
  const { document } = new JSDOM(html).window;

  it('should parse a fully identified track', () => {
    const track: Track = {
      name: 'Emotion 1',
      artist: 'Reece Cox',
      publisher: 'KULØR',
      duration: 295,
      genre: 'Electronica',
      url: 'https://www.1001tracklists.com/track/fpc4djf/reece-cox-emotion-1/index.html',
    };

    const selector = '[id="tlp5_content"]';
    const trackDiv = document.querySelector(selector);
    if (trackDiv === null) {
      throw new Error(`No results match the ${selector} selector in the html code`);
    }

    assert.deepStrictEqual(track, extractTrack(trackDiv));
  });

  it('should parse an unidentified track', () => {
    const track: Track = {
      name: 'ID',
      artist: 'ID',
      publisher: '',
      duration: 0,
      genre: '',
      url: '',
    };

    const selector = '[id="tlp7_content"]';
    const trackDiv = document.querySelector(selector);

    if (trackDiv === null) {
      throw new Error(`No results match the ${selector} selector in the html code`);
    }

    assert.deepStrictEqual(track, extractTrack(trackDiv));
  });

  it('should parse an unnamed track', () => {
    const track: Track = {
      name: 'ID',
      artist: 'Bicep',
      publisher: '',
      duration: 0,
      genre: '',
      url: '',
    };

    const selector = '[id="tlp8_content"]';
    const trackDiv = document.querySelector(selector);

    if (trackDiv === null) {
      throw new Error(`No results match the ${selector} selector in the html code`);
    }

    assert.deepStrictEqual(track, extractTrack(trackDiv));
  });

  it('should throw on invalid input', () => {
    const selector = '[id="sBox"]';
    const nonTrackDiv = document.querySelector(selector);

    if (nonTrackDiv === null) {
      throw new Error("Couldn't find find a valid track in given html");
    }

    assert.throws(() => extractTrack(nonTrackDiv));
  });
});

describe('Tracklist', () => {
  it('should parse a tracklist', () => {
    const html = readFileSync('./test/tracklist.html', 'utf8');
    const { document } = new JSDOM(html).window;

    const mockTrack: Track = {
      name: '',
      artist: '',
      publisher: '',
      duration: 0,
      genre: '',
      url: '',
    };

    const mockTracklist: Tracklist = {
      name: 'Bicep - The Warehouse Project, RDM Rotterdam, Netherlands 2023-04-28',
      artist: 'Bicep',
      date: new Date('2023-04-28'),
      tracks: Array(22).fill(mockTrack),
      genres: ['Electronica', 'Breaks'],
      url: 'https://www.1001tracklists.com/tracklist/1gz59x6t/bicep-the-warehouse-project-rdm-rotterdam-netherlands-2023-04-28.html',
    };

    const parsedTracklist = extractTracklist(document);

    assert.strictEqual(parsedTracklist.tracks.length, mockTracklist.tracks.length);

    assert.deepStrictEqual(omit(parsedTracklist, 'tracks'), omit(mockTracklist, 'tracks'));
  });

  it('should throw on invalid input', () => {
    const html = readFileSync('./test/captcha.html', 'utf8');
    const { document } = new JSDOM(html).window;

    assert.throws(() => extractTracklist(document));
  });
});
