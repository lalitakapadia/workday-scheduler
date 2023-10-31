// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
//$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
//;

 var today = $('#currentDay');
 var today = dayjs();
 $('#currentDay').text(today.format('dddd,MMMM D, YYYY'));

// reference the whole task (time and textarea)
var timeBlockEl = document.querySelector('.container');


// EVENT LISTENER
// Event listener for saveBtn click
$('.saveBtn').on('click', function () {
    // get nearby values of the description in jQuery
    var textValue = $(this).siblings('.description').val();
    // get the id attribute of the parent div element
    var timeKey = $(this).parent().attr('id');
  
    // save in local storage
    localStorage.setItem(timeKey, textValue);
  });
  
  // Get item from local storage if any
$('#hour-09 .description').val(localStorage.getItem('hour9'));
$('#hour-10 .description').val(localStorage.getItem('hour10'));
$('#hour-11 .description').val(localStorage.getItem('hour11'));
$('#hour-12 .description').val(localStorage.getItem('hour12'));
$('#hour-13 .description').val(localStorage.getItem('hour13'));
$('#hour-14 .description').val(localStorage.getItem('hour14'));
$('#hour-15 .description').val(localStorage.getItem('hour15'));
$('#hour-16 .description').val(localStorage.getItem('hour16'));
$('#hour-17 .description').val(localStorage.getItem('hour17'));




// Function to track tasks and make them change colors if they are in the past, present or future
function auditTask() {
    // get current number of hours
    var currentHour = today.hour();
   console.log("current hour:" + currentHour);
    // loop over each time block
    $('.time-block').each(function () {
      var timeId = parseInt($(this).attr('id').split("hour-")[1]);
        console.log("hour id:" + timeId);
      // if the time Id attribute is before the current hour, add the past class
      if (timeId < currentHour) {
        $(this).addClass('past');
      } // if the time Id attribute is equal to the current hour, remove the past and future classes and add the present class
      else if (timeId === currentHour) {
        $(this).removeClass('past');
        $(this).removeClass('future');
        $(this).addClass('present');
      } // If the time Id attribute is greater than the current time, remove the past and present classes and add the future class
      else {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
      }
    });
  }

  // Call the audit task function
auditTask();


// Use setTimeout to update the time every minute (1000ms * 60s)
setTimeout(function () {
    // clear the current URL
    location = ''; // location references the current URL
  }, 1000 * 60);