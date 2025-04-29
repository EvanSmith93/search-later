export enum SearchEngine {
  GOOGLE = "GOOGLE",
  // BING,
  // YAHOO,
  // DUCK_DUCK_GO,
  // ECOSIA,
  CHAT_GPT = "CHAT_GPT",
  // CLAUDE,
  // PERPLEXITY,
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
  [SearchEngine.CHAT_GPT]: {
    name: "ChatGPT",
    getUrl: (query) => `https://chatgpt.com/search?q=${query}`,
    icon: "/chatgpt.png",
  },
};
