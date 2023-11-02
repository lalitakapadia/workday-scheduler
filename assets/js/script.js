var currentHour = 0;
 var todayP = $('#currentDay');
 var saveBtn = document.querySelector(".saveBtn");

 var today = dayjs();
 todayP.text(today.format('dddd,MMMM D, YYYY'));

// reference the whole task (time and textarea)
var timeBlockEl = document.querySelector('.container');
 
// Function to track tasks and make them change colors if they are in the past, present or future
function colorCodeTask() {
    // get current number of hours
    currentHour = dayjs().hour();
   console.log("current hour:" + currentHour);
    // loop over each time block
    $('.time-block').each(function () {
      var hourId = parseInt($(this).attr('id').split("hour-")[1]);
        console.log("hour id:" + hourId);
      // if the hour Id attribute is before the current hour, add the past class
      if (hourId < currentHour) {
        $(this).removeClass('present');
         $(this).removeClass('future');
        $(this).addClass('past');
      } // if the hour Id attribute is equal to the current hour, remove the past and future classes and add the present class
      else if (hourId === currentHour) {
         $(this).removeClass('past');
         $(this).removeClass('future');
        $(this).addClass('present');
      } // If the hour Id attribute is greater than the current time, remove the past and present classes and add the future class
      else {
         $(this).removeClass('past');
         $(this).removeClass('present');
        $(this).addClass('future');
      }
    });
  }

  // EVENT LISTENER
// Event listener for saveBtn click
$('.saveBtn').on('click', function () {
  // get nearby values of the description in jQuery
  var textValue = $(this).siblings('.description').val();
  
  // current date to differntiate the hours betweem days 
  // this represents the button got clicked
  // this.parents represents the buttons parent div
  // get the id attribute of the parent div element that contains hour Id
  var timeKey = today.format('YYYY-MM-DD') + "-" + $(this).parent().attr('id');
  console.log(timeKey);
  // save in local storage
  localStorage.setItem(timeKey, textValue);
  
});

  // Get item from local storage if any
  // combination of current date and hour is the key to get the value
  $('#hour-9 .description').val(localStorage.getItem(today.format('YYYY-MM-DD') + "-" + 'hour-9'));
  $('#hour-10 .description').val(localStorage.getItem(today.format('YYYY-MM-DD') + "-" + 'hour-10'));
  $('#hour-11 .description').val(localStorage.getItem(today.format('YYYY-MM-DD') + "-" + 'hour-11'));
  $('#hour-12 .description').val(localStorage.getItem(today.format('YYYY-MM-DD') + "-" + 'hour-12'));
  $('#hour-13 .description').val(localStorage.getItem(today.format('YYYY-MM-DD') + "-" + 'hour-13'));
  $('#hour-14 .description').val(localStorage.getItem(today.format('YYYY-MM-DD') + "-" + 'hour-14'));
  $('#hour-15 .description').val(localStorage.getItem(today.format('YYYY-MM-DD') + "-" + 'hour-15'));
  $('#hour-16 .description').val(localStorage.getItem(today.format('YYYY-MM-DD') + "-" + 'hour-16'));
  $('#hour-17 .description').val(localStorage.getItem(today.format('YYYY-MM-DD') + "-" + 'hour-17'));
  

  // Call the color code  task function
colorCodeTask();

setInterval(checkHour, 60000);
//refresh the colorcode every hour
function checkHour(){
  if(currentHour != dayjs().hour()){
    colorCodeTask();
  }
}
