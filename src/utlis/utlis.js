export const truncateByWords = (text, wordLimit = 24) => {
  const words = text.trim().split(/\s+/);
  return words.length > wordLimit
    ? words.slice(0, wordLimit).join(" ") + "..."
    : text;
};

export const truncateByCharacters = (text, charLimit = 24) => {
  return text.length > charLimit ? text.slice(0, charLimit) + "..." : text;
};

export const getWordCount = (text) => {
  return text.trim().split(/\s+/).filter(Boolean).length;
};

export const getFontFamily = (lang) => {
  switch (lang) {
    case 'hi': // Hindi
    case 'or': // Odia
      return 'hindi';
    case 'en':
    default:
      return 'windhavi'; // or your default
  }
};