interface QuoteUtils {
  formatNumber: (numStr: string) => string;
  getFirstTwoWords: (name: string) => string;
  getChangeColor: (change: string) => string;
  getPercentChangeColor: (percentChange: string) => string;
}

const useQuotes = (): QuoteUtils => {
  const formatNumber = (numStr: string) => {
    const num = parseFloat(numStr);
    return num.toFixed(2);
  };

  const getFirstTwoWords = (name: string) => {
    if (!name) {
      return "";
    }
    const words = name.split(" ");
    if (words.length > 1) {
      return words.slice(0, 2).join(" ");
    } else {
      return name;
    }
  };

  const getChangeColor = (change: string) => {
    const num = parseFloat(change);
    return num >= 0 ? "text-green-400" : "text-red-400";
  };

  const getPercentChangeColor = (percentChange: string) => {
    const num = parseFloat(percentChange);
    return num >= 0 ? "bg-green-400/10" : "bg-red-400/10";
  };

  return {
    formatNumber,
    getFirstTwoWords,
    getChangeColor,
    getPercentChangeColor,
  };
};

export default useQuotes;
