// script.js
var isDate = function (input) {
  // Check if the input is a Date object
  if (input instanceof Date) {
    return true;
  }

  // Check if the input is a string that can be parsed into a valid date
  const parsedDate = new Date(input);
  return !isNaN(parsedDate.getTime());
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
