// 1. Create a new Date object representing the current date and time
const currentDate = new Date();
console.log("Current Date and Time:", currentDate);

// 2. Create a Date object with a specific date (month starts from 0)
const specificDate = new Date(2025, 0, 14); // January 14, 2025
console.log("Specific Date:", specificDate);

// 3. Create a Date object from a date string
const dateFromString = new Date("2025-01-14T15:30:00");
console.log("Date from String:", dateFromString);

// 4. Get the current timestamp (milliseconds since January 1, 1970)
const timestamp = Date.now();
console.log("Current Timestamp:", timestamp);

// 5. Get the full year (4 digits)
const year = currentDate.getFullYear();
console.log("Year:", year);

// 6. Get the month (0-based index, January is 0)
const month = currentDate.getMonth();
console.log("Month (0-11):", month);

// 7. Get the day of the month (1-31)
const dayOfMonth = currentDate.getDate();
console.log("Day of the Month:", dayOfMonth);

// 8. Get the day of the week (0-6, Sunday is 0)
const dayOfWeek = currentDate.getDay();
console.log("Day of the Week:", dayOfWeek);

// 9. Get the hours (0-23)
const hours = currentDate.getHours();
console.log("Hours:", hours);

// 10. Get the minutes (0-59)
const minutes = currentDate.getMinutes();
console.log("Minutes:", minutes);

// 11. Get the seconds (0-59)
const seconds = currentDate.getSeconds();
console.log("Seconds:", seconds);

// 12. Get the milliseconds (0-999)
const milliseconds = currentDate.getMilliseconds();
console.log("Milliseconds:", milliseconds);

// 13. Get the time (milliseconds since January 1, 1970)
const time = currentDate.getTime();
console.log("Time in Milliseconds:", time);

// 14. Get the UTC (Coordinated Universal Time) equivalent of the current date and time
const utcDate = currentDate.toUTCString();
console.log("UTC Date and Time:", utcDate);

// 15. Convert Date object to a string in a human-readable format
const dateString = currentDate.toString();
console.log("Human-readable Date:", dateString);

// 16. Set the full year (4 digits)
currentDate.setFullYear(2026);
console.log("Updated Year:", currentDate);

// 17. Set the month (0-based index, January is 0)
currentDate.setMonth(5); // June (since it's 0-based)
console.log("Updated Month:", currentDate);

// 18. Set the day of the month (1-31)
currentDate.setDate(25);
console.log("Updated Day of the Month:", currentDate);

// 19. Set the hours (0-23)
currentDate.setHours(10);
console.log("Updated Hours:", currentDate);

// 20. Set the minutes (0-59)
currentDate.setMinutes(30);
console.log("Updated Minutes:", currentDate);

// 21. Set the seconds (0-59)
currentDate.setSeconds(45);
console.log("Updated Seconds:", currentDate);

// 22. Set the milliseconds (0-999)
currentDate.setMilliseconds(500);
console.log("Updated Milliseconds:", currentDate);

// 23. Check if a date is valid
const invalidDate = new Date("invalid date string");
console.log("Is Invalid Date:", isNaN(invalidDate.getTime())); // true if invalid

// 24. Compare two dates
const date1 = new Date(2025, 0, 1); // January 1, 2025
const date2 = new Date(2026, 0, 1); // January 1, 2026
const isBefore = date1 < date2;
console.log("Is date1 before date2?", isBefore); // true

// 25. Format date into a specific format (using toLocaleDateString)
const formattedDate = currentDate.toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});
console.log("Formatted Date:", formattedDate);

// 26. Get the difference between two dates in days
const diffInDays = (date2.getTime() - date1.getTime()) / (1000 * 3600 * 24);
console.log("Difference in Days:", diffInDays);

// 27. Get the start of the day (midnight) for a given date
const startOfDay = new Date(currentDate.setHours(0, 0, 0, 0));
console.log("Start of the Day:", startOfDay);

// 28. Get the end of the day (11:59:59.999) for a given date
const endOfDay = new Date(currentDate.setHours(23, 59, 59, 999));
console.log("End of the Day:", endOfDay);
