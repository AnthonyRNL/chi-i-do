$(document).ready(function(){
  //hiding the fadeout
  $("#slideshowBG").addClass("hide")


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
  //this allows the respective info to be shown in the box and removes the non-related info
  $("#about").on("click", function(e){
    if(e.target.tagName === "H3"){
      $(e.currentTarget).children().children().removeClass("aboutActive")
      $(e.target).addClass("aboutActive")
      var index = $(e.target.parentNode).index()
      $("#aboutContainer").children().hide()
      $($("#aboutContainer").children()[index]).css({"display": "block"})
    }
  })

  //slideshow, when click on a thumnail pic, it becomes the main pic
   $(".thumbpic").on("click", function(e){
     $("#showpic").empty().append("<img src='" + e.target.currentSrc + "' />")
   })

  // $(".virtues > li").on("click", function(e){
  //   $(e.target.children).slideToggle()
  //
  // })

  function toggleNav(){
    if($("#main").hasClass("display-nav")){
      $("#main").removeClass("display-nav")
      $("#content").off("click")
    } else {
      $("#main").addClass("display-nav")
    }
  }
  function reveal(){
    var divEntrance = $("#sec5").offset().top
    var divExit = $("#sec6").offset().top
    console.log(divExit)
    if(divEntrance < 250 && divExit > 250){
      $("#slideshowBG").removeClass("hide").addClass("unhide")
    } else {
      if($("#slideshowBG").hasClass("unhide")){

        $("#slideshowBG").removeClass("unhide").addClass("hide")
      }
    }
  }
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
})
