"use strict";

$(document).ready(function(){
/** onlick to submit feedback form*/
  $("#submitFeedback").on("click", function(e){
    e.preventDefault();
    submitFeedbackForm();
  });
});

/** function to handle user feedback input*/
function submitFeedbackForm(){
/** user input saved in variables */
  let subject = $('#subject').val();
  let email = $('#email').val();
  let feedback = $('#feedback-text').val();

  /** ajax post request for feedback */
  $.ajax("https://vast-plains-82531.herokuapp.com/feedback/", {
    type : "POST",
    data : {
      subject : subject,
      email : email,
      feedback : feedback
    },
    success : (result) => {
      console.log("success ", result);
      alert("Your feedback is successfully submitted. Thank you for your feedback");
    },
    error : (error) => {
      console.log("error", error);
      alert("Failed to submit feedback. Please try again.");
    }
  });
}
