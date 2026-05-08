import { localStg } from './storage';

export interface GitHubRelease {
  tag_name: string;
  name: string;
  body: string;
  html_url: string;
  published_at: string;
}

export const fetchGitHubLatestRelease = async (): Promise<GitHubRelease | null> => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000);

  try {
    const response = await fetch("https://api.github.com/repos/Hyk260/PureChat/releases/latest", {
      signal: controller.signal,
      headers: {
        "Accept": "application/vnd.github.v3+json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: GitHubRelease = await response.json();
    localStg.set("githubLatestRelease", data);
    return data;
  } catch (err) {
    console.error("[fetchGitHubLatestRelease] Failed to fetch latest release:", err);
    return null;
  } finally {
    clearTimeout(timeoutId);
  }
};
