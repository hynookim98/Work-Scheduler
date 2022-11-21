// same as document.ready - will run once document is initially loaded
$(function () { 

  // same as document.addEventListener
  // same as .saveBtn.onclick(saveData);
  $('.saveBtn').on("click", saveData);

  function saveData() {

    // saves data from sibling class of button with id of description which is text area
    var value = $(this).siblings('.description').val();
    // saves value of parent class of button which is div with id of current block hour
    var time = $(this).parent().attr('id');

    // save data to local storage
    localStorage.setItem(time, value);

  };

  function refreshHour() {

    var hour = dayjs().hour();

    // running function for each time block
    $('.time-block').each(function() {
      
      // parseInt converts the string into an integer
      // grabs each id and places it in appHour ex: 'hour-1'
      // split function splits each one into array [hour, 1] and we grab the element at position 1
      var appHour = parseInt($(this).attr('id').split("-")[1]);

      //used for debugging
      console.log(appHour);

      if (appHour < hour) {
        $(this).removeClass('present');
        $(this).removeClass('future');
        $(this).addClass('past');
      } else if ( appHour === hour) {
        $(this).removeClass('past');
        $(this).removeClass('future');
        $(this).addClass('present');
      } else if (appHour > hour) {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
      }


    });


  }


  // run function initially when page is loaded
  refreshHour();

  // rerun function every 20 seconds
  setInterval(refreshHour, 20000);


  // code to grab each specific code box and manually change text area content value to stored data
  $('#hour-1 .description').val(localStorage.getItem('hour-1'));
  $('#hour-2 .description').val(localStorage.getItem('hour-2'));
  $('#hour-3 .description').val(localStorage.getItem('hour-3'));
  $('#hour-4 .description').val(localStorage.getItem('hour-4'));
  $('#hour-5 .description').val(localStorage.getItem('hour-5'));
  $('#hour-6 .description').val(localStorage.getItem('hour-6'));
  $('#hour-7 .description').val(localStorage.getItem('hour-7'));
  $('#hour-8 .description').val(localStorage.getItem('hour-8'));
  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));
  $('#hour-18 .description').val(localStorage.getItem('hour-18'));
  $('#hour-19 .description').val(localStorage.getItem('hour-19'));
  $('#hour-20 .description').val(localStorage.getItem('hour-20'));
  $('#hour-21 .description').val(localStorage.getItem('hour-21'));
  $('#hour-22 .description').val(localStorage.getItem('hour-22'));
  $('#hour-23 .description').val(localStorage.getItem('hour-23'));
  $('#hour-24 .description').val(localStorage.getItem('hour-24'));

  $('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY'));

  // $('.description').val(localStorage.getItem('hour-9'));
  // $('.description').val(localStorage.getItem('hour-10'));
  // $('.description').val(localStorage.getItem('hour-11'));
  // $('.description').val(localStorage.getItem('hour-12'));
  // $('.description').val(localStorage.getItem('hour-13'));
  // $('.description').val(localStorage.getItem('hour-14'));
  // $('.description').val(localStorage.getItem('hour-15'));
  // $('.description').val(localStorage.getItem('hour-16'));
  // $('.description').val(localStorage.getItem('hour-17'));

  // $('#hour-9').val(localStorage.getItem('hour-9'));
  // $('#hour-10').val(localStorage.getItem('hour-10'));
  // $('#hour-11').val(localStorage.getItem('hour-11'));
  // $('#hour-12').val(localStorage.getItem('hour-12'));
  // $('#hour-13').val(localStorage.getItem('hour-13'));
  // $('#hour-14').val(localStorage.getItem('hour-14'));
  // $('#hour-15').val(localStorage.getItem('hour-15'));
  // $('#hour-16').val(localStorage.getItem('hour-16'));
  // $('#hour-17').val(localStorage.getItem('hour-17'));


});
