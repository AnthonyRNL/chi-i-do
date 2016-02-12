$(document).ready(function(){
  $("#background").hide()
  $("#menuicn").on("click", function(e){
    $("#content").on("click", function(e){
      $("#main").removeClass("display-nav")
      $("#content").off("click")
    })
    toggleNav()
  })
  $("#content").scroll(reveal)
  var scrollVal = 0
  $("#content").scroll(function(){
    var currentScroll = $("#content").scrollTop()
    if(currentScroll > scrollVal){
      $("nav").slideUp("slow")
    } else if(currentScroll <= scrollVal ){
      $("nav").slideDown("slow")
    }
    scrollVal = currentScroll
  })

  //event for the about container
  $($("#toggle").children()).on("click", function(e){
    toggleNav()
  })
  $("#about").on("click", function(e){
    if(e.target.tagName === "H3"){
      $(e.currentTarget).children().children().removeClass("aboutActive")
      $(e.target).addClass("aboutActive")
      var index = $(e.target.parentNode).index()
      $("#aboutContainer").children().hide()
      $($("#aboutContainer").children()[index]).css({"display": "block"})
    }
  })
  $.ajax({
    url: "/pics",
    dataType: "json",
    success: function(data){
      data.files.forEach(function(photo){
        $("#pics").append("<li><img class='thumbpic' src='imgs/slideshow/" + photo + "'></li>")
      })
      $("#showpic").append("<img src='imgs/slideshow/" + data.files[0] + "'/>")
      $(".thumbpic").on("click", function(e){

        $("#showpic").empty().append("<img src='" + e.target.currentSrc + "' />")
      })
    }
  })

})
var map;
var mapOptions = {
  zoom: 17,
  center: new google.maps.LatLng(40.7189998,-73.9981371)
};
map = new google.maps.Map(document.getElementById("map"), mapOptions)
var marker = new google.maps.Marker({
  position: {lat: 40.719180, lng: -73.998113},
  map: map
})
function toggleNav(){
  if($("#main").hasClass("display-nav")){
    $("#main").removeClass("display-nav")
    $("#content").off("click")
  } else {
    $("#main").addClass("display-nav")
  }
}
function reveal(){
  console.log($("#sec5").offset().top)
  console.log("position: " + $("#sec5").position().top)
  console.log("div size: " + $("#sec5").height())
  console.log("diff: " + ($("#sec5").position().top - $("#sec5").offset().top))
  var divEntrance = $("#sec5").offset().top - $("#sec5").height()
  // var divExit = $("#sec6").offset().top - $("#sec6").height()
  console.log("div entrance: " + divEntrance)
  if(divEntrance < 0 && -(divEntrance) < $("#sec5").height() + 50){
    console.log("fade iasdflkasjd;flkasd;fkjas;dhn")
    $("#slideshowBG").removeClass("hide").addClass("unhide")
  } else {
    if($("#slideshowBG").hasClass("unhide")){

      $("#slideshowBG").removeClass("unhide").addClass("hide")
    }
  }
}
