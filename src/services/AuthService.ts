export class AuthService {
    private static _getAccessTokenSilently: (() => Promise<string>) | null = null;

    static setAccessTokenFetcher(fetcher: () => Promise<string>) {
        this._getAccessTokenSilently = fetcher;
    }

    static async getAccessToken(): Promise<string | null> {
        if (!this._getAccessTokenSilently) {
            console.warn("getAccessTokenSilently is not set");
            return null;
        }

        try {
            return await this._getAccessTokenSilently();
        } catch (err) {
            console.error("Failed to get access token", err);
            return null;
        }
    }
}
