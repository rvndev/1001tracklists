import { solveChallenge, type Solution, requestChallenge } from './challenge';
import { JSDOM } from 'jsdom';
import { type Tracklist, extractTracklist } from './tracklist';

export async function fetchTracklist(url: string): Promise<Tracklist> {
  const challenge = await requestChallenge(url);
  const solution = await solveChallenge(challenge);
  const res = await sendResponse(url, solution);
  const html = await res.text();
  const { document } = new JSDOM(html).window;

  return extractTracklist(document);
}

export async function sendResponse(url: string, solution: Solution): Promise<Response> {
  const { captcha, ts, bChk, guid } = solution;
  return fetch(url, {
    headers: {
      accept:
        'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
      'accept-language': 'en,en-DE;q=0.9,pl-PL;q=0.8,pl;q=0.7',
      'cache-control': 'max-age=0',
      'content-type': 'application/x-www-form-urlencoded',
      'sec-ch-ua': '"Google Chrome";v="113", "Chromium";v="113", "Not-A.Brand";v="24"',
      'sec-ch-ua-mobile': '?1',
      'sec-ch-ua-platform': '"Android"',
      'sec-fetch-dest': 'document',
      'sec-fetch-mode': 'navigate',
      'sec-fetch-site': 'same-origin',
      'upgrade-insecure-requests': '1',
      cookie: `guid=${guid}`,
      Referer: url,
      'Referrer-Policy': 'strict-origin-when-cross-origin',
    },
    body: `captcha=${captcha}&ts=${ts}&bChk=${bChk}`,
    method: 'POST',
  });
}
