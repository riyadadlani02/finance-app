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

interface TF {
  id: string;
  name: string;
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

// interface Symbols {
//   data: Datum[];
//   count: number;
//   status: string;
// }

// interface Datum {
//   symbol: string;
//   name: string;
//   country: string;
//   currency: string;
//   exchange: string;
//   mic_code: string;
// }

interface Symbols {
  [key: string]: Quotes;
}

interface Quotes {
  symbol: string;
  name: string;
  exchange: string;
  mic_code: string;
  currency: string;
  datetime: string;
  timestamp: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  previous_close: string;
  change: string;
  percent_change: string;
  average_volume: string;
  is_market_open: boolean;
  fifty_two_week: Fiftytwoweek;
}

interface Fiftytwoweek {
  low: string;
  high: string;
  low_change: string;
  high_change: string;
  low_change_percent: string;
  high_change_percent: string;
  range: string;
}

interface FinancialData {
  meta: Meta;
  values: Value[];
  status: string;
}

interface Meta {
  symbol: string;
  interval: string;
  currency: string;
  exchange_timezone: string;
  exchange: string;
  mic_code: string;
  type: string;
}

interface Value {
  datetime: string;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
}
