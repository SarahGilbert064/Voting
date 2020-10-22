//calling the function
$(document).ready(function() {
  const age = parseInt(prompt("Are you old enough to vote? Enter age here:"));

  //business logic info
  if (age >=18) {
    $('#age').show();
  } else if (age === 18) {
    alert('Welcome to the world of voting!');
    $('#age').show(); 
  } else {
    $('#under-18').show();
  }
});

  //user logic interface 
