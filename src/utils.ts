import TRACKLISTS from '../data/tracklists-urls.json';

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

export function encodeAsURLParams(data: Record<string, any>): string {
  const searchParams = new URLSearchParams();
  Object.entries(data).forEach(([key, value]) => {
    searchParams.append(key, value.toString());
  });

  return searchParams.toString();
}
