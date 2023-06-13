const TRACKLISTS = [
  'https://www.1001tracklists.com/tracklist/1u4wskj1/vinne-1001tracklists-exclusive-mix-laroc-club-sao-paulo-brazil-2023-05-22.html',
  'https://www.1001tracklists.com/tracklist/2n7cstd9/weareidyll-aphropedia-may-2023-2023-05-15.html',
  'https://www.1001tracklists.com/tracklist/1c8237h9/kodename47-friday-night-showcase-2023-05-19.html',
  'https://www.1001tracklists.com/tracklist/1ytx8c01/moonbeam-new-moon-podcast-046-2023-05-23.html',
  'https://www.1001tracklists.com/tracklist/1zrqxwjt/max-pavlov-skver-russia-2023-04-29.html',
  'https://www.1001tracklists.com/tracklist/14rgd31k/vlof-arcadia-online-3-2023-05-11.html',
  'https://www.1001tracklists.com/tracklist/2bxc0sl9/twisted-arcadia-online-3-twitch-2023-05-12.html',
  'https://www.1001tracklists.com/tracklist/22k3yk31/terry-golden-art-of-rave-91-2023-05-17.html',
  'https://www.1001tracklists.com/tracklist/1u4ww9mt/ken-bauer-power-hour-067-2023-05-16.html',
  'https://www.1001tracklists.com/tracklist/pumlr4k/karybde-ptp-rebound-session-027-2023-05-22.html',
  'https://www.1001tracklists.com/tracklist/uhmyjqt/alex-m.o.r.p.h.-universal-nation-414-2023-05-19.html',
  'https://www.1001tracklists.com/tracklist/l3dw97k/rave-republic-master-shanghai-china-2023-05-19.html',
  'https://www.1001tracklists.com/tracklist/21mb8rs9/jerome-kontor-radio-show-210-2023-05-22.html',
  'https://www.1001tracklists.com/tracklist/1hx2gr91/dor-dekel-100fm-line-out-radioshow-734-2023-05-19.html',
  'https://www.1001tracklists.com/tracklist/2fqs15bk/nghtmre-slander-gud-vibrations-radio-325-2023-05-18.html',
  'https://www.1001tracklists.com/tracklist/25bjyxv9/dj-georgie-porgie-mpg-radio-mixshow-538-2023-05-22.html',
  'https://www.1001tracklists.com/tracklist/1f3p9t0k/martin-garrix-kineticfield-edc-las-vegas-united-states-2023-05-21.html',
  'https://www.1001tracklists.com/tracklist/1qfq0ju1/armin-van-buuren-kineticfield-edc-las-vegas-united-states-2023-05-21.html',
  'https://www.1001tracklists.com/tracklist/2hlc6guk/marshmello-svdden-death-circuitgrounds-edc-las-vegas-united-states-2023-05-21.html',
  'https://www.1001tracklists.com/tracklist/27641s81/hardwell-harbour-convention-centre-vancouver-canada-2023-05-19.html',
  'https://www.1001tracklists.com/tracklist/1qfpvjp1/tiesto-kineticfield-edc-las-vegas-united-states-2023-05-20.html',
  'https://www.1001tracklists.com/tracklist/clrtu2t/sub-focus-bbc-radio-1-essential-mix-2023-05-13.html',
  'https://www.1001tracklists.com/tracklist/2n7b4y6k/meduza-1001tracklists-exclusive-mix-1001tracklists-the-future-of-dance-miami-showcase-miami-music-week-united-states-2023-03-24-2023-05-12.html',
  'https://www.1001tracklists.com/tracklist/1wy9bn81/morten-1001tracklists-exclusive-mix-1001tracklists-the-future-of-dance-miami-showcase-united-states-2023-05-19.html',
  'https://www.1001tracklists.com/tracklist/1qfpvjp1/tiesto-kineticfield-edc-las-vegas-united-states-2023-05-20.html',
  'https://www.1001tracklists.com/tracklist/rq476qk/armin-van-buuren-ruben-de-ronde-ferry-corsten-a-state-of-trance-1119-2023-05-04.html',
  'https://www.1001tracklists.com/tracklist/1nl2usp9/rave-republic-universal-stage-ravolution-music-festival-ho-chi-minh-city-vietnam-2022-12-04.html',
  'https://www.1001tracklists.com/tracklist/1u4wvtzt/aoton-oubi-athens-greece-2023-05-15.html',
  'https://www.1001tracklists.com/tracklist/24dr8nwk/speaker-honey-sound-nightclub-los-angeles-united-states-2023-04-13.html',
  'https://www.1001tracklists.com/tracklist/1rchu471/nicole-fiallo-rastro-live-spain-2023-05-19.html',
  'https://www.1001tracklists.com/tracklist/mz04v79/roger-sanchez-release-yourself-1126-ivy-sydney-australia-2023-04-01-2023-05-15.html',
  'https://www.1001tracklists.com/tracklist/1gz41m5k/miss-monique-mimo-weekly-podcast-039-2023-04-21.html',
  'https://www.1001tracklists.com/tracklist/1gz41m5k/miss-monique-mimo-weekly-podcast-039-2023-04-21.html#tlp_8946467',
  'https://www.1001tracklists.com/tracklist/23gt2t6k/adam-port-rampa-andme-yuma-coachella-festival-weekend-2-united-states-2023-04-22.html',
  'https://www.1001tracklists.com/tracklist/23gt2t6k/adam-port-rampa-andme-yuma-coachella-festival-weekend-2-united-states-2023-04-22.html#tlp_8950910',
  'https://www.1001tracklists.com/tracklist/1lqdwu81/miss-monique-special-bday-podcast-2023-05-05.html',
  'https://www.1001tracklists.com/tracklist/1lqdwu81/miss-monique-special-bday-podcast-2023-05-05.html#tlp_8996937',
  'https://www.1001tracklists.com/tracklist/1gz3jq51/mochakk-plaza-de-espana-sevilla-spain-cercle-2023-04-17.html',
  'https://www.1001tracklists.com/tracklist/1gz3jq51/mochakk-plaza-de-espana-sevilla-spain-cercle-2023-04-17.html#tlp_8934293',
  'https://www.1001tracklists.com/tracklist/1gz3jq51/mochakk-plaza-de-espana-sevilla-spain-cercle-2023-04-17.html',
  'https://www.1001tracklists.com/tracklist/1gz3jq51/mochakk-plaza-de-espana-sevilla-spain-cercle-2023-04-17.html#tlp_8934291',
  'https://www.1001tracklists.com/tracklist/1kskf2fk/four-tet-fred-again..-skrillex-coachella-stage-coachella-festival-weekend-2-united-states-2023-04-23.html',
  'https://www.1001tracklists.com/tracklist/1kskf2fk/four-tet-fred-again..-skrillex-coachella-stage-coachella-festival-weekend-2-united-states-2023-04-23.html#tlp_8954224',
  'https://www.1001tracklists.com/tracklist/1kskf2fk/four-tet-fred-again..-skrillex-coachella-stage-coachella-festival-weekend-2-united-states-2023-04-23.html#tlp_8954161',
  'https://www.1001tracklists.com/tracklist/25bdkqb9/sasha-john-digweed-yuma-tent-coachella-festival-weekend-2-united-states-2023-04-23.html',
  'https://www.1001tracklists.com/tracklist/25bdkqb9/sasha-john-digweed-yuma-tent-coachella-festival-weekend-2-united-states-2023-04-23.html#tlp_8996693',
  'https://www.1001tracklists.com/tracklist/24d6vg81/solomun-mute-mar-del-plata-buenos-aires-argentina-2023-01-28.html',
  'https://www.1001tracklists.com/tracklist/24d6vg81/solomun-mute-mar-del-plata-buenos-aires-argentina-2023-01-28.html#tlp_8683001',
  'https://www.1001tracklists.com/tracklist/17jqzj2t/mau-p-zoom-room-ubbi-dubbi-festival-united-states-2023-04-22.html',
  'https://www.1001tracklists.com/tracklist/17jqzj2t/mau-p-zoom-room-ubbi-dubbi-festival-united-states-2023-04-22.html#tlp_8954001',
];

export function getRandomTracklist(): string {
  return TRACKLISTS[Math.floor(Math.random()) * TRACKLISTS.length];
}

export function getMetaContent(element: ParentNode, selectors: string, defaultValue = ''): string {
  return element.querySelector(`meta[${selectors}]`)?.getAttribute('content') ?? defaultValue;
}

// TODO: will break if the track contained ' - ' in title
export function getTrackName(element: ParentNode): string {
  const nameWithArist = getMetaContent(element, 'itemprop=name', 'ID');
  const nameSplit = nameWithArist.split(' - ');

  return nameSplit.length > 1 ? nameSplit[1] : 'ID';
}

export function parseDurationToNumber(durationString: string): number {
  // Regular expressions to match duration components
  const regex = /P((\d+)Y)?((\d+)M)?((\d+)D)?T?((\d+)H)?((\d+)M)?((\d+(\.\d+)?)S)?/;

  // Extract duration components using regex
  const match = regex.exec(durationString);
  if (match === null || match.length < 13) {
    throw new Error(`Invalid duration string ${durationString}`);
  }

  // Parse each duration component
  const years = match[2] ? parseInt(match[2]) : 0;
  const months = match[4] ? parseInt(match[4]) : 0;
  const days = match[6] ? parseInt(match[6]) : 0;
  const hours = match[8] ? parseInt(match[8]) : 0;
  const minutes = match[10] ? parseInt(match[10]) : 0;
  const seconds = match[12] ? parseFloat(match[12]) : 0;

  // Calculate the total duration in seconds
  const totalSeconds = years * 31536000 + months * 2592000 + days * 86400 + hours * 3600 + minutes * 60 + seconds;

  return totalSeconds;
}
