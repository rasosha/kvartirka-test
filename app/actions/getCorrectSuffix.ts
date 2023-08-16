const getCorrectSuffix = (num: number, words: string[]) => {
  if (num % 10 === 1 && num % 100 !== 11) {
    return `${num} ${words[0]}`;
  } else if (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20)) {
    return `${num} ${words[1]}`;
  }
  return `${num} ${words[2]}`;
};

export default getCorrectSuffix;
