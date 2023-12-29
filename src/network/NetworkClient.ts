import type { AuthData } from '../types';

type HttpMethod = 'DELETE' | 'GET' | 'POST' | 'PUT';

export class NetworkClient {
  private baseUrl = 'https://1001tracklists.com/';
  // Acts as an access token to non-protected resources
  private guid: string | null = null;
  // Access tokens to protected resources
  private uid: string | null = null;
  private sid: string | null = null;

  constructor(authData?: AuthData) {
    this.guid = this.getGuid();
    if (authData) {
      this.logIn(authData);
    }
  }

  // TODO: Implement login logic
  private async logIn(_authData: AuthData): Promise<void> {
    this.uid = 'loggedInUserId'; // example assignment
    this.sid = 'sessionToken'; // example assignment
  }

  private logOut(): void {
    this.uid = null;
    this.sid = null;
  }

  // Get GUID stub; TODO: properly handle CAPTCHA
  private getGuid(): string {
    if (process.env.TRACKLISTS_GUID) {
      return process.env.TRACKLISTS_GUID;
    }
    throw new Error('No TRACKLISTS_GUID specified in .env');
  }

  private getAuthCookie(): string {
    let cookie = `guid=${this.guid};`;
    if (this.uid && this.sid) {
      cookie += ` uid=${this.uid}; sid=${this.sid};`;
    }
    return cookie;
  }

  // TODO: fix body, content type etc...
  async makeRequest(method: HttpMethod, slug: string, body?: string, contentType?: string): Promise<string> {
    return fetch(`${this.baseUrl}${slug}`, {
      method,
      headers: {
        'Content-Type': contentType ?? 'application/x-www-form-urlencoded',
      },
      body,
    }).then((response) => response.text());
  }
}
