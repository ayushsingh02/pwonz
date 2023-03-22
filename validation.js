$(".login_val").validate({
    rules:{
        username:"required",
        password:{
            required:true,
            minlength:8

        },
    },
    messages:{
        username:"Please enter a valid username.",
    }
});

// signup form 
$(document).ready(function () {
  $(".next-btn").click(function (e) {
    e.preventDefault();
    $("#nameError").html("");
    $("#emailError").html("");
    $("#mobileError").html("");

    if ($("#name").val() == "") {
      $("#nameError").html("Name is required");
      return false;
    } else if ($("#name").val().length < 3) {
      $("#nameError").html("Name must be of more than 3 characters.");
      return false;
    } else if (!isNaN($("#name").val())) {
      $("#nameError").html("Numbers are not allowed.");
      return false;
    } else if ($("#email").val() == "") {
      $("#emailError").html("Email is required.");
      return false;
    } else if (!validateEmail($("#email").val())) {
      $("#emailError").html("Please enter a valid email.");
      return false;
    } else if ($("#mobile").val() == "") {
      $("#mobileError").html("Phone is required");
      return false;
    } else if (isNaN($("#mobile").val())) {
      $("#mobileError").html("Only numbers are allowed.");
      return false;
    } else if ($("#mobile").val().length != 10) {
      $("#mobileError").html("Phone number must be of 10 digit.");
      return false;
    } else {
      $(".step-2").show();
      $(".step-1").hide();
    }
    function validateEmail($email) {
      var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
      return emailReg.test($email);
    }
  });
  $(".prev-btn").click(function () {
    $(".step-2").hide();
    $(".step-1").show();
  });
  $(".submit_signup").click(function (e) {
    e.preventDefault();
    $("#usernameError").html("");
    $("#passwordError").html("");
    $("#confirmPasswordError").html("");

    if ($("#username").val() == "") {
      $("#usernameError").html("Username is required");
      return false;
    } else if ($("#username").val().length < 4) {
      $("#usernameError").html("Username must be of more than 4 characters.");
      return false;
    } else if (!isNaN($("#username").val())) {
      $("#usernameError").html("Numbers are not allowed.");
      return false;
    } else if ($("#password").val() == "") {
      $("#passwordError").html("Password is required.");
      return false;
    } else if ($("#password").val().length < 6) {
      $("#passwordError").html("Password must be of more than 6 characters.");
      return false;
    } else if ($("#confirmPassword").val() == "") {
      $("#confirmPasswordError").html("Confirm password is required.");
      return false;
    } else if ($("#password").val() != $("#confirmPassword").val()) {
      $("#confirmPasswordError").html("Confirm password did not matched.");
      return false;
    } 
  });
 
});

// Dashboard form 
$(document).ready(function () {
  $(".next-input").click(function (e) {
    if ($(".field-1 input[type=radio][name=select]:checked").length == 0) {
      $("#first_radioError").html("Please select atleast one");
      return false;
    } else {
      $(".field-2").show();
      $(".field-1").hide();
    }
  });

  $(".back-input").click(function (e) {
    e.preventDefault();
    $("#first_radioError").html("");
    $(".field-2").hide();
    $(".field-1").show();
  });

  $(".submit-input").click(function (e) {
    if ($(".field-2 input[type=radio][name=select]:checked").length == 0) {
      $("#second_radioError").html("Please select atleast one");
      return false;
    } 
  });
});

//Forget Password

$(document).ready(function () {
  $(".send_otp").click(function (e) {
    if ($("#forget_email").val() == "") {
      $("#forget_emailError").html("Email or Username is required.");
      return false;
    } else if (!validateEmail($("#forget_email").val())) {
      $("#forget_emailError").html("Please enter a valid email or username.");
      return false;
    } else {
      $(".alert-primary").show();
    }
    function validateEmail($email) {
      var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
      return emailReg.test($email);
    }
  });
});

//New Password

$(document).ready(function () {
  $(".update_pass").click(function (e) {
   if ($("#new_pass").val() == "") {
      $("#new_passError").html("Password is required.");
      return false;
    }
    
    else if ($("#new_pass").val().length < 6) {
      $("#new_passError").html("Password must be of more than 6 characters.");
      return false;
    } else if ($("#confirm_pass").val() == "") {
      $("#confirm_passError").html("Confirm password is required.");
      return false;
    } else if ($("#new_pass").val() != $("#confirm_pass").val()) {
      $("#confirm_passError").html("Confirm password did not matched.");
      return false;
    }
    else {
        $(".alert-success").show();
    }
    
  });
});

//Change Pass
$(document).ready(function () {
  $(".change_pass").click(function () {

    if ($("#old_pass").val() == "") {
      $("#old_passError").html("Old password is required.");
    
    }
   else if($("#change_new_pass").val() == "") {
      $("#change_new_passError").html("Password is required.");
      return false;
    }
    
    else if ($("#change_new_pass").val().length < 6) {
      $("#change_new_passError").html("Password must be of more than 6 characters.");
      return false;
    } else if ($("#change_confirm_pass").val() == "") {
      $("#change_confirm_passError").html("Confirm password is required.");
      return false;
    } else if ($("#change_new_pass").val() != $("#change_confirm_pass").val()) {
      $("#change_confirm_passError").html("Confirm password did not matched.");
      return false;
    } 
    else {
        $(".alert-success").show();
    }
    
  });
});

