// logic.js

$(document).ready(function () {
  // Display the current day at the top of the calendar
  $("#currentDay").text(dayjs().format("dddd, MMMM D"));

// Function to colour-code timeblocks based on past, present, or future
  function updateHourstyles() {
    var currentHour = dayjs().hour();

  $(".time-block").each(function () {
    var blockHour = parseInt($(this).attr("data.hour"));
    var $textarea = $(this).find("textarea");


     $textarea.removeClass("past present future");

          if (clockHour < currentHour) {
           $textarea.addClass("past");
          } else if (blockhour === currentHour) {
            $textarea.addClass("present")
          } else {
            $textarea.addClass("future");
          }
  });
  }
