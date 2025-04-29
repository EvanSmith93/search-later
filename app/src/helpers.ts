export enum SearchLocation {
  GOOGLE = "GOOGLE",
  // BING,
  // YAHOO,
  // DUCK_DUCK_GO,
  // ECOSIA,
  CHAT_GPT = "CHAT_GPT",
  // CLAUDE,
  // PERPLEXITY,
}

export type SearchLocationData = {
  name: string;
  getUrl: (query: string) => string;
  icon: string;
};

export const searchLocationInfo: {
  [key in SearchLocation]: SearchLocationData;
} = {
  [SearchLocation.GOOGLE]: {
    name: "Google",
    getUrl: (query) => `https://google.com/search?q=${query}`,
    icon: "/google.png",
  },
  [SearchLocation.CHAT_GPT]: {
    name: "ChatGPT",
    getUrl: (query) => `https://chatgpt.com/search?q=${query}`,
    icon: "/chatgpt.png",
  },
};
