// logic.js

$(document).ready(function () {
  // Display the current day at the top of the calendar
  $("#currentDay").text(dayjs().format("dddd, MMMM D"));
