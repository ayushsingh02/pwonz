$(document).ready(function(){
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
      $("#sf1").show();
      $("#sf2").hide();
    }
    function validateEmail($email) {
      var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
      return emailReg.test($email);
    }
  });
});
$(".prev-btn").click(function() {
    $("#sf2").hide();
    $("#sf1").show();
  });



jQuery(document).ready(function() {

    var val = $(".signup_form").validate({
      rules: {
        name: {
          required: true,
          minlength: 2,
        //   maxlength: 16,
        },
        email: {
          required: true,
          minlength: 2,
          email: true,
          maxlength: 100,
        },
        mobile:{
            required:true,
        },
        username:{
            required:true,
        },
        password: {
          required: true,
          minlength: 6,
            maxlength: 15,
        },
        confirmPassword: {
          required: true,
          minlength: 6,
          equalTo: "#password",
        }
    
      },
      errorElement: "span",
      errorClass: "help-inline",
    });
});
// jQuery().ready(function() {

//     // Binding next button on first step
//     // $(".next-btn").click(function() {
//     //   if (v.form()) {
//         // $("#sf1").hide();
//         // $("#sf2").show();
//     //   }
//     // });
//     $(".next-btn").click(function() {
//     //   if (val.form()) {
//         $("#sf1").hide();
//         $("#sf2").show();
//     //   }
//     });
    
    // Binding next button on second step
    // $(".open2").click(function() {
    //   if (v.form()) {
    //     $(".frm").hide("fast");
    //     $("#sf3").show("slow");
    //   }
    // });
    
     // Binding back button on second step
    // $(".prev-btn").click(function() {
    //   $("#sf2").hide();
    //   $("#sf1").show();
    // });
    
     // Binding back button on third step
    //  $(".back3").click(function() {
    //   $(".frm").hide("fast");
    //   $("#sf2").show("slow");
    // });
    
    $(".open3").click(function() {
      if (val.form()) {
        // optional
    //     // used delay form submission for a seccond and show a loader 
    // image
    //     $("#loader").show();
    //      setTimeout(function(){
    //        $("#basicform").html('<h2>Thanks for your time.</h2>');
    //      }, 1000);
        // Remove this if you are not using ajax method for submitting 
    // values
        return false;
      }
    });


    