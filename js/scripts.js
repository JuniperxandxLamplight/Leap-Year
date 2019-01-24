$(function(){
  $("form#leap-year").submit(function(event){
    var leapYear = function(year){
      if (year % 4 === 0){
        return true;
      } else {
        return false;
      }
    }

    event.preventDefault();
    var year = parseInt($("input#year").val());
    var result = leapYear(year);
    $("#result").text(result);
  });
});
