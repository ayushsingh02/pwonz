jQuery(document).ready(function ($) {
  let slider = $(".owl-carousel");
  slider.each(function () {
    $(this).owlCarousel({
      nav: true,
      loop: true,
      dots: false,
      pagination: false,
      margin: 25,
      autoHeight: false,
      stagePadding: 50,
      boxShadow: "4px 4px 20px rgba(27, 25, 26, 0.08)",
      responsive: {
        0: {
          items: 1,
          stagePadding: 0,
          margin: 30,
        },
        576: {
          items: 2,
          stagePadding: 25,
        },
        1000: {
          items: 3,
        },
      },
    });
  });
});

//  Banner
$("#search_box a").click(function () {
  $("#search_box a").removeClass("active");
  $(this).addClass("active");
});

$("#pest_btn").click(function () {
  document.getElementById("b1").style.display = "none";
  document.getElementById("b2").style.display = "block";
  $("#card_box #pest_btn input").attr("checked", "");
  $("#card_box #hunt_btn  input").removeAttr("checked", "");
});
$("#hunt_btn").click(function () {
  document.getElementById("b1").style.display = "block";
  document.getElementById("b2").style.display = "none";
  $("#card_box #hunt_btn input").attr("checked", "");
  $("#card_box #pest_btn  input").removeAttr("checked", "");
});

// Step 4 yes no field select

$("#no_select").click(function () {
  $("#yes_no_inputs").addClass("d-none");
});
$("#yes_select").click(function () {
  $("#yes_no_inputs").removeClass("d-none");
});

$(".days_element .col-1").click(function(){
  
  if ($(this).find('input:checkbox').is(":checked")) {

    $(this).find('input:checkbox').attr("checked", false);
    $(this).removeClass("active");
}
else {
    $(this).find('input:checkbox').attr("checked", true);
    $(this).addClass("active");
}
});
//  Heart Btn
$(".like_btn .fa-heart").click(function () {
  $(this).toggleClass("fas");
  $(this).toggleClass("icon_red");
});

// Navbar
$("#navbarNav .nav-link").click(function () {
  $("#navbarNav .nav-link").removeClass("activeNav");
  $(this).addClass("activeNav");
});
// Dashboard
$(".sidebar a").click(function () {
  $(".sidebar a").removeClass("active_dash");
  $(this).addClass("active_dash");
});

// Dark Nav Bar
$(".bg-dark .nav-link ").click(function () {
  $(".bg-dark .nav-link ").removeClass("activeNav_d");
  $(this).addClass("activeNav_d");
});
//Time Slot
$(".btn-timeslot button").click(function () {
  $(".btn-timeslot button").removeClass("selected_time");
  $(this).addClass("selected_time");
});

// Pest Item Hover And Select

$(".pest_items_card .col-3 div").mouseover(function () {
  if ($(this).find("img").hasClass("img_green_click")) {
  } else {
    $oldimg = $(this).find("img").attr("src");
    $newimg = $oldimg.replace(".png", "_g.png");
    $(this).find("img").attr("src", $newimg);
    $(this).parent().closest(".col-3").find("span").addClass("green_label");
  }
});

$(".pest_items_card .col-3 div").mouseout(function () {
  $oldimg = $(this).find("img").attr("src");
  $newimg = $oldimg.replace("_g.png", ".png");
  if ($(this).find("img").hasClass("img_green_click")) {
  } else {
    $(this).find("img").attr("src", $newimg);
    $(this).removeClass("green_label");
    $(this).parent().closest(".col-3").find("span").removeClass("green_label");
  }
});

$(".pest_items_card .col-3 div").click(function () {
  $oldimg = $(this).find("img").attr("src");
  $newimg = $oldimg.replace("_g.png", ".png");
  $(this).find("input").attr("checked", "");
  if ($(this).find("img").hasClass("img_green_click")) {
    $(this).find("img").attr("src", $newimg);
    $(this).removeClass("green_label");
    $(this).parent().closest(".col-3").find("span").removeClass("green_label");
    $(this).find("input").removeAttr("checked", "");

    $oldimg = $(this).find("img").removeClass("img_green_click");
  } else {
    $oldimg = $(this).find("img").addClass("img_green_click");
  }
});

//Toady Date
$(document).ready(function ($) {
  var date = new Date();
  var year = date.getFullYear();
  var month = String(date.getMonth() + 1).padStart(2, "0");
  var todayDate = String(date.getDate()).padStart(2, "0");
  var datePattern = year + "-" + month + "-" + todayDate;
  document.getElementById("date_card").value = datePattern;
});

// Range Slider
const rangeInput = document.querySelectorAll(".range-input input"),
  priceInput = document.querySelectorAll(".price_input input"),
  range = document.querySelector(".slider_range .progress_range");
let priceGap = 50;

priceInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minPrice = parseInt(priceInput[0].value),
      maxPrice = parseInt(priceInput[1].value);

    if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
      if (e.target.className === "input_min") {
        rangeInput[0].value = minPrice;
        range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
      } else {
        rangeInput[1].value = maxPrice;
        range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
      }
    }
  });
});

rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minVal = parseInt(rangeInput[0].value),
      maxVal = parseInt(rangeInput[1].value);

    if (maxVal - minVal < priceGap) {
      if (e.target.className === "range-min") {
        rangeInput[0].value = maxVal - priceGap;
      } else {
        rangeInput[1].value = minVal + priceGap;
      }
    } else {
      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;
      range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
      range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
    }
  });
});

// Get Location
$("#location_mapapi").val(getLocation());
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Browser Not Supported";
  }
}
function showPosition(position) {
  var locAPI =
    "https://maps.googleapis.com/maps/api/geocode/json?&latlng=" +
    position.coords.latitude +
    "," +
    position.coords.longitude +
    "&key=AIzaSyAwTAIqQEjqjoDqsMat1H7pgDnke4yZdSA";
  $.get({
    url: locAPI,
    success: function (data) {
      $("#location_mapapi").val(data.results[0].formatted_address);
      $("#city_mapapi").val(data.results[0].address_components[4].long_name);

      $("#location_lat").val(position.coords.latitude);
      $("#location_lng").val(position.coords.longitude);
    },
  });

}

// Search Location

let autocomplete;
function initAuto() {
  autocomplete = new google.maps.places.Autocomplete(
    document.getElementById("location_mapapi"),
    {
      types: ["establishment"],
      componentRestrictions: { country: ["IN"] },
      fields: ["place_id", "geometry", "name"],
    }
  );
}
//SET VALUE

$("#location_mapapi").focusout(function () {
  var txt = $("#location_mapapi").val();
  // console.log(txt);
  var locAPI =
    "https://maps.googleapis.com/maps/api/geocode/json?address=" +
    txt +
    "&key=AIzaSyAwTAIqQEjqjoDqsMat1H7pgDnke4yZdSA";
  $.get({
    url: locAPI,
    success: function (data) {
      var lat = data.results[0].geometry.location.lat;
      var lng = data.results[0].geometry.location.lng;

      $("#location_lat").val(lat);
      $("#location_lng").val(lng);
    },
  });
});
// scroll to top btn 
      
$(document).ready(function(){ 
  $(window).scroll(function(){ 
      if ($(this).scrollTop() > 100) { 
          $('#scrollToTop_btn').fadeIn(); 
      } else { 
          $('#scrollToTop_btn').fadeOut(); 
      } 
  }); 
  $('#scrollToTop_btn').click(function(){ 
      $("html, body").animate({ scrollTop: 0 }, 100); 
      return false; 
  }); 
});



// multiple fields
var room = 1;
function education_fields() {

    room++;
    var objTo = document.getElementById('education_fields')
    var divtest = document.createElement("div");
    divtest.setAttribute("class", "row mb-3  form-group removeclass" + room);
    var rdiv = 'removeclass' + room;
    divtest.innerHTML = '<div class="col-5"><div class="form-group"> <input type="text" class="form-control frm" id="Schoolname" name="type" value="" placeholder="Type" ></div></div><div class="col-5 ms-2"><div class="form-group"> <input type="number" class="form-control frm p-2" id="Major" name="amount" value="" placeholder="$ 0-100"></div></div><div class="input-group-btn col-1 ms-1"> <div class="pt-2 float-end" type="button" onclick="remove_education_fields(' + room + ');"> <i class="fas fa-minus"></i></div></div></div></div></div></div>';

    objTo.appendChild(divtest)
}
function remove_education_fields(rid) {
    $('.removeclass' + rid).remove();
}

// multiselect option 

  // $(".chosen-select").chosen({
  //     max_selected_options: 5,
  //     width: '100%'
  // });
