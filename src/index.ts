import { sendResponse, requestChallenge, solveChallenge } from './challenge'

const URL = 'https://www.1001tracklists.com/tracklist/13tn03s1/renaissance-the-sound-of-renaissance-033-2023-05-18.html'

async function main (): Promise<void> {
  const challenge = await requestChallenge(URL)
  const solution = await solveChallenge(challenge)
  const response = await sendResponse(URL, solution)
  const html = await response.text()

  console.log(html.search('captcha'))
}

main().then(() => process.exit(0)).catch(console.error)
