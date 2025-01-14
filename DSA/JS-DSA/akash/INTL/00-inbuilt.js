// 1. Intl.NumberFormat - Number formatting
const number = 1234567.89;

// Formatting number in US locale
const formattedNumber = new Intl.NumberFormat("en-US").format(number);
console.log(formattedNumber); // "1,234,567.89"

// Formatting number as currency
const formattedCurrency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
}).format(number);
console.log(formattedCurrency); // "$1,234,567.89"

// Formatting percentage
const percentage = 0.25;
const formattedPercentage = new Intl.NumberFormat("en-US", {
  style: "percent",
}).format(percentage);
console.log(formattedPercentage); // "25%"

// Formatting number in German locale
const formattedDE = new Intl.NumberFormat("de-DE").format(number);
console.log(formattedDE); // "1.234.567,89"

// 2. Intl.DateTimeFormat - Date and time formatting
const date = new Date();

// Formatting date in US English
const formattedDate = new Intl.DateTimeFormat("en-US").format(date);
console.log(formattedDate); // Example: "1/14/2025"

// Formatting date with long options
const formattedLongDate = new Intl.DateTimeFormat("en-US", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
}).format(date);
console.log(formattedLongDate); // Example: "Monday, January 14, 2025"

// Formatting date in Japanese
const formattedJP = new Intl.DateTimeFormat("ja-JP").format(date);
console.log(formattedJP); // Example: "2025/01/14"

// 3. Intl.Collator - String comparison and sorting
const collator = new Intl.Collator("en-US");
console.log(collator.compare("apple", "banana")); // -1 (apple comes before banana)
console.log(collator.compare("apple", "apple")); // 0 (equal)

// Sorting an array in Spanish locale
const collatorES = new Intl.Collator("es-ES");
const fruits = ["banana", "apple", "cherry"];
const sortedFruits = fruits.sort(collatorES.compare);
console.log(sortedFruits); // ["apple", "banana", "cherry"]

// 4. Intl.RelativeTimeFormat - Relative time formatting
const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
console.log(rtf.format(-1, "day")); // "yesterday"
console.log(rtf.format(1, "day")); // "tomorrow"

// Formatting relative time in French
const rtfFR = new Intl.RelativeTimeFormat("fr", { numeric: "auto" });
console.log(rtfFR.format(-1, "hour")); // "hier"
console.log(rtfFR.format(1, "hour")); // "demain"

// 5. Intl.ListFormat - List formatting
const list = ["apple", "banana", "cherry"];
const listFormatterEN = new Intl.ListFormat("en", {
  style: "long",
  type: "conjunction",
});
console.log(listFormatterEN.format(list)); // "apple, banana, and cherry"

const listFormatterDE = new Intl.ListFormat("de", {
  style: "long",
  type: "conjunction",
});
console.log(listFormatterDE.format(list)); // "Apfel, Banane und Kirsche"

// 6. Intl.PluralRules - Plural rules
const pluralRules = new Intl.PluralRules("en-US");
console.log(pluralRules.select(1)); // "one"
console.log(pluralRules.select(2)); // "other"

// Determining plural forms in Russian
const pluralRulesRU = new Intl.PluralRules("ru-RU");
console.log(pluralRulesRU.select(1)); // "one"
console.log(pluralRulesRU.select(2)); // "few"

// 7. Intl.Locale - Locale representation
const localeFR = new Intl.Locale("fr-FR");
console.log(localeFR.toString()); // "fr-FR"

const localeJP = new Intl.Locale("ja-JP");
console.log(localeJP.toString()); // "ja-JP"
