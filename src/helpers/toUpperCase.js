export default function firstLetterToUpperCase(text) {
  let firstWord = text.replace(/ .*/, "");
  const firstLetter = firstWord.slice(0, 1).toUpperCase();
  firstWord = firstLetter + firstWord.slice(1);
  text = text.replace(/[^\s]*/, firstWord);
  return text;
}
