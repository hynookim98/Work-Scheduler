// same as document.ready - will run once document is initially loaded
$(function () { 

  $('.saveBtn').on("click", grabData);

  function grabData() {

    localStorage.setItem($(this).siblings('.description').val(), $(this).parent().attr('id'));

  }

  function refreshHour() {
    var hour = dayjs().hour();

    // running function for each time block
    $('time-block').each(function() {
      
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

  
});
