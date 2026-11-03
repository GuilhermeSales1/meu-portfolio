import { afterEach, describe, expect, it, vi } from "vitest";
import { getRepositories } from "./github";

describe("getRepositories", () => {
  afterEach(() => vi.unstubAllGlobals());

  it("returns only non-fork repositories", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({
      ok: true,
      json: async () => [
        { id: 1, name: "portfolio", fork: false, updated_at: "2026-11-01", html_url: "https://github.com/example/portfolio", description: null, language: "TypeScript", stargazers_count: 0 },
        { id: 2, name: "forked", fork: true, updated_at: "2026-11-02", html_url: "https://github.com/example/forked", description: null, language: null, stargazers_count: 0 }
      ]
    }));
    const repos = await getRepositories();
    expect(repos).toHaveLength(1);
    expect(repos[0].name).toBe("portfolio");
  });
});
