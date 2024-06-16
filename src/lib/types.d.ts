interface SideMenu {
  title: string;
  path: string;
  Component: ({ active }: { active: boolean }) => JSX.Element;
}

interface HeaderNav {
  id: number;
  tab?: string;
  title: string;
  path?: string;
  submenu?: HeaderNav[];
}

interface NewsSentimentData {
  items: string;
  sentiment_score_definition: string;
  relevance_score_definition: string;
  feed: Feed[];
}

interface Feed {
  title: string;
  url: string;
  time_published: string;
  authors: string[];
  summary: string;
  banner_image: null | string;
  source: string;
  category_within_source: string;
  source_domain: string;
  topics: Topic[];
  overall_sentiment_score: number;
  overall_sentiment_label: string;
  ticker_sentiment: Tickersentiment[];
}

interface Tickersentiment {
  ticker: string;
  relevance_score: string;
  ticker_sentiment_score: string;
  ticker_sentiment_label: string;
}

interface Topic {
  topic: string;
  relevance_score: string;
}

interface SectorPerformance {
  sector: string;
  changesPercentage: string;
}

interface FormattedSector {
  sector: string;
  formatted: string;
  textColor: string;
  gradientClass: string;
}
