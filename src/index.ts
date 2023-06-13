import { fetchTracklist } from './fetch';

async function main(): Promise<void> {
  const tracklist = await fetchTracklist(
    'https://www.1001tracklists.com/tracklist/1g1bqwbk/adam-beyer-yuma-tent-coachella-festival-weekend-2-united-states-2023-04-23.html'
  );
  console.log(tracklist);
}

main().then(() => process.exit(0));
