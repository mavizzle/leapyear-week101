var leapYear = function(year){
  if ((year % 4 === 0) && (year % 100 !== 0 || year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
};

$(document).ready(function(){
  // debugger;
  $('#result').hide();

  $('form#leap-year').submit(function(event){
    event.preventDefault();

    var year = parseInt($('input#year').val());
    var result = leapYear(year);
    // alert(result);

    if (result === true) {
      $('#result').show();
      $('#year').text(result);
    } else {
      $('.not').text('not');
      $('#result').show();
      $('#year').text(result);
    }


  });

  event.preventDefault();
});
