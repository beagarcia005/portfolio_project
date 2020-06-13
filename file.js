/*Navbar JS*/
$(document).ready(function() {
    $(window).scroll(function() {
      if($(this).scrollTop() < $(".jumbotron").height()){
         $(".navbar").removeClass("bg-dark");
      }
      else{
         $(".navbar").addClass("bg-dark");
      }
    });
  });

 /*Read More JS*/
 function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read More";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read Less";
    moreText.style.display = "inline";
  }
}
/*More Specials Button*/
function showMore(){
  var moreSpecials = document.getElementById("moreInfo");
  var moreBtn = document.getElementById("mySpecials");

  if (moreSpecials.style.display === "none") {
    moreSpecials.style.display = "inline";
    moreBtn.innerHTML = "Less Specials";
  } else {
    moreSpecials.style.display = "none";
    moreBtn.innerHTML = "More Specials";
  }
}

//play/pause button Js
$(function() {
  $(".carousel").carousel( { interval: 2000 } );
  $("#carouselButton").click(function(){
      if ($("#carouselButton").children("i").hasClass("fa-pause")) {
          $(".carousel").carousel("pause");
          $("#carouselButton").children("i").removeClass("fa-pause");
          $("#carouselButton").children("i").addClass("fa-play");
      } else {
          $(".carousel").carousel("cycle");
          $("#carouselButton").children("i").removeClass("fa-play");
          $("#carouselButton").children("i").addClass("fa-pause"); 
      }
  });
//live band modal button
$("#liveBandButton").click(function() {
  $("#liveBandModal").modal("show");
});
});
//Hours of Operation
function changeImage() {
  $("#showCard").removeClass("none");
}
