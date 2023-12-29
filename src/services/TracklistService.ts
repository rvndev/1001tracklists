import type { Tracklist } from '../models/Tracklist';
import type { NetworkClient } from '../network/NetworkClient';
import { TracklistScraper } from '../scrapers/TracklistScraper';

export class TracklistService {
  private networkClient: NetworkClient;
  private scraper = new TracklistScraper();

  constructor(networkClient: NetworkClient) {
    this.networkClient = networkClient;
  }

  async getTracklistById(id: string): Promise<Tracklist> {
    const htmlContent = await this.networkClient.makeRequest('GET', `/tracklist/${id}.html`);
    return this.scraper.scrape(htmlContent);
  }
}
