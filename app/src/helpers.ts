export enum SearchEngine {
  GOOGLE = "GOOGLE",
  BING = "BING",
  // YAHOO,
  // DUCK_DUCK_GO,
  // ECOSIA,
  CHAT_GPT = "CHAT_GPT",
  // CLAUDE = "CLAUDE",
  PERPLEXITY = "PERPLEXITY",
}

type SearchEngineData = {
  name: string;
  getUrl: (query: string) => string;
  icon: string;
};

export const searchEngineInfo: {
  [key in SearchEngine]: SearchEngineData;
} = {
  [SearchEngine.GOOGLE]: {
    name: "Google",
    getUrl: (query) => `https://google.com/search?q=${query}`,
    icon: "/google.png",
  },
  [SearchEngine.BING]: {
    name: "Bing",
    getUrl: (query) => `https://bing.com/search?q=${query}`,
    icon: "/bing.png",
  },
  [SearchEngine.CHAT_GPT]: {
    name: "ChatGPT",
    getUrl: (query) => `https://chatgpt.com/search?q=${query}`,
    icon: "/chatgpt.png",
  },
  [SearchEngine.PERPLEXITY]: {
    name: "Perplexity",
    getUrl: (query) => `https://www.perplexity.ai/?q=${query}`,
    icon: "/perplexity.png",
  },
};

export function getBrowserEngine(): "chromium" | "firefox" | "webkit" | null {
  const ua = navigator.userAgent;

  if (ua.includes("Firefox")) return "firefox";
  if (ua.includes("Edg") || ua.includes("Chrome") || ua.includes("Chromium"))
    return "chromium";
  if (ua.includes("Safari")) return "webkit";

  return null;
}
