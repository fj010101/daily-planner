// logic.js

$(document).ready(function () {
  // Display the current day at the top of the calendar
  $("#currentDay").text(dayjs().format("dddd, MMMM D"));

// Function to colour-code timeblocks based on past, present, or future
  function updateHourStyles() {
    var currentHour = dayjs().hour();

  $(".time-block").each(function () {
var blockHour = parseInt($(this).attr("data-hour"));
    var $textarea = $(this).find("textarea");


     $textarea.removeClass("past present future");

          if (blockHour < currentHour) {
           $textarea.addClass("past");
          } else if (blockHour === currentHour) {
            $textarea.addClass("present")
          } else {
            $textarea.addClass("future");
          }
  });
  }

  // Function to load events from local storage
  function loadEvents() {
    $(".time-block").each(function () {
    var blockHour = $(this).attr("data-hour");
    var savedEvent = localStorage.getItem("event-" + blockHour);
    if (savedEvent) {
      $ (this).find("textarea").val(savedEvent); 
        }
  });
}
})

// Function to save events to local storage

 $(".saveBtn").on("click", function () {
  var $hourBlock = $(this).parent();
  var hour = $hourBlock.attr("data-hour"); 
  var eventText = $hourBlock.find("textarea").val();

  localStorage.setItem("event-" + hour, eventText);
});

// load events, update timeblock styles, and set interval for continuous updating
loadEvents();
updateHourStyles();
setInterval(function () {
  updateHourstyles();
  console.log("Hour style updated");
}, 60000);
});
