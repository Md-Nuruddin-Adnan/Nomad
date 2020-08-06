// read more 1
function readMore1() {
  var dots = document.getElementById("dots1");
  var moreText = document.getElementById("more1");
  var btnText = document.getElementById("moreBtn1");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "block";
  }

  $("#author1").toggleClass("active");
}

// read more 2
function readMore2() {
  var dots = document.getElementById("dots2");
  var moreText = document.getElementById("more2");
  var btnText = document.getElementById("moreBtn2");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "block";
  }

  $("#author2").toggleClass("active");
}

// collapse btn click for profile btn correct position
$(".collapse-btn1").click(function(){
  $(".profile-btn1").toggleClass("remove-margin");
});

$(".collapse-btn2").click(function(){
  $(".profile-btn2").toggleClass("remove-margin");
});

// like/unlike btn
var greenBtn1 = document.querySelector('#green1');
var redBtn1 = document.querySelector('#red1');

greenBtn1.addEventListener('click', function() {
    if (redBtn1.classList.contains('red')) {
      redBtn1.classList.remove('red');
    } 
  this.classList.toggle('green');
});

redBtn1.addEventListener('click', function() {
    if (greenBtn1.classList.contains('green')) {
      greenBtn1.classList.remove('green');
    } 
  this.classList.toggle('red');
});


var greenBtn2 = document.querySelector('#green2');
var redBtn2 = document.querySelector('#red2');

greenBtn2.addEventListener('click', function() {
    if (redBtn2.classList.contains('red')) {
      redBtn2.classList.remove('red');
    } 
  this.classList.toggle('green');
});

redBtn2.addEventListener('click', function() {
    if (greenBtn2.classList.contains('green')) {
      greenBtn2.classList.remove('green');
    } 
  this.classList.toggle('red');
});