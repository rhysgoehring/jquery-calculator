$(document).ready(function() {
  'use strict';

//  Identify DOM elements -
  let $clear = $('#clear');
  console.log("clear is" , $clear)
  let $screen = $('#screen');
  console.log("screen is: ", $screen);
  let $buttons = $('span');
  console.log("buttons are", $buttons);
  let $equals = $('#equals');
  console.log("equals is: ", $equals);

  $('span').each(function(){
    $(this).click(function(){
      let $btnVal = $(this).text();
      console.log("button value is ", $btnVal)
      let $btnId= $(this).attr('id');
      if ($btnId === "clear"){
        $screen.text('');
      } else if ($btnId === "equals" && $screen.text()) {
        let $result = eval($screen.text().replace(/x/, '*').replace(/÷/, '/'));
        $screen.text($result);
      } else {
        $screen.text($screen.text() + $btnVal);
      }
    })
  })
});
