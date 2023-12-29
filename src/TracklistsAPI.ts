// SDK structure is based on spotify-web-api-sdk https://github.com/spotify/spotify-web-api-ts-sdk

import { NetworkClient } from './network/NetworkClient';
import { TracklistService } from './services/TracklistService';
import type { AuthData, SDKConfiguration } from './types';

const DEFAULT_SDK_CONFIG: SDKConfiguration = {
  stub: null,
};

export class TracklistsAPI {
  private static rootUrl = 'https://1001tracklists.com/';

  private sdkConfig: SDKConfiguration;
  private networkClient: NetworkClient;
  private tracklists: TracklistService;

  constructor(authData?: AuthData, config?: Partial<SDKConfiguration>) {
    this.sdkConfig = this.intializeSdk(config);
    this.networkClient = new NetworkClient(authData);
    this.tracklists = new TracklistService(this.networkClient);
  }

  private intializeSdk(config?: Partial<SDKConfiguration>): SDKConfiguration {
    const sdkConfig = DEFAULT_SDK_CONFIG;
    return { ...sdkConfig, ...config };
  }

  // TODO: add error handling, validation etc...
}
