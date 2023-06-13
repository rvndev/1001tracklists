export interface Solution {
  guid: string;
  captcha: 1;
  ts: number;
  bChk: number;
}

// This function that was hidden  as String.prototype.toLowerText() in the HTML challenge page.
export function encode(plaintext: string): number {
  let h = 0;
  let i;
  let c;

  for (i = 0; i < plaintext.length; i++) {
    c = plaintext.charCodeAt(i);
    h = (h << 5) - h + c;
  }
  return h;
}

export async function solveChallenge(res: Response): Promise<Solution> {
  // Extract guid from cookies
  const cookies = res.headers.get('set-cookie')?.split(',');
  if (cookies === undefined) throw new Error("Couldn't extract cookies");
  const guidCookie = cookies.find((c) => c.includes('guid'));
  const guid = guidCookie?.split(';')?.[0].split('=')[1];

  if (guid === undefined) throw new Error("Couldn't extract guid");

  // Extract bChk, ts challenge values from raw HTML
  const html = await res.text();

  const tempVariableSnippet = html.match(/<script>var .*<\/script>/)?.[0];
  const tempVariableValue = tempVariableSnippet?.match(/'.*'/)?.[0].replace(/'/g, '');
  if (tempVariableValue === undefined) throw new Error('bChk could not be extracted');
  const bChk = encode(tempVariableValue);

  const timestampSnippet = html.match(/i\.name='ts';i\.value=\s\d+/);
  const ts = Number(timestampSnippet?.[0].match(/\d+/)?.[0]);
  if (Number.isNaN(ts) || ts === 0) throw new Error('ts could not be extracted');

  return {
    guid,
    captcha: 1,
    ts,
    bChk,
  };
}

export async function requestChallenge(url: string): Promise<Response> {
  return fetch(url, {
    headers: {
      accept:
        'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
      'accept-language': 'en,en-DE;q=0.9,pl-PL;q=0.8,pl;q=0.7',
      'cache-control': 'no-cache',
      pragma: 'no-cache',
      'sec-ch-ua': '"Google Chrome";v="113", "Chromium";v="113", "Not-A.Brand";v="24"',
      'sec-ch-ua-mobile': '?1',
      'sec-ch-ua-platform': '"Android"',
      'sec-fetch-dest': 'document',
      'sec-fetch-mode': 'navigate',
      'sec-fetch-site': 'same-origin',
      'sec-fetch-user': '?1',
      'upgrade-insecure-requests': '1',
    },
    referrer: url,
    referrerPolicy: 'strict-origin-when-cross-origin',
    method: 'GET',
    mode: 'cors',
    credentials: 'include',
  });
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
