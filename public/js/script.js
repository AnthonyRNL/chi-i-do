$(document).ready(function(){
  $("#background").hide()
  $("#menuicn").on("click", function(e){
    $("#content").on("click", function(e){
      $("#main").removeClass("display-nav")
      $("#content").off("click")
    })
    toggleNav()
  })

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
})
var map;
var mapOptions = {
  zoom: 5,
  center: new google.maps.LatLng(-34.397, 150.644)
};
map = new google.maps.Map(document.getElementById("map"), mapOptions)
function toggleNav(){
  if($("#main").hasClass("display-nav")){
    $("#main").removeClass("display-nav")
    $("#content").off("click")
  } else {
    $("#main").addClass("display-nav")
  }
}
