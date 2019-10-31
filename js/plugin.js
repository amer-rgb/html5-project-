$(document).ready(function() { 
    $(document).scroll(function(){
      if($(this).scrollTop() > $(".nav-bar").height()) {
        $('.nav-bar').css({"background-color":"rgba(92,77,66,.8)", "color":"#fff"});
      } else {
        $('.nav-bar').css({"background-color":"transparent"});
      }
    });
    $(function() {  
        $("body").niceScroll({
            cursorcolor:"rgba(244,98,58,.9)",
            cursorwidth: "8px"
    });
  });
  // chane class active
  $(".links li ").click(function() {
    $(this).addClass("active").siblings().removeClass("active")
  });

  // smooth scrolling on anchors
  $(document).on("click", ".nav-link", function(e) {
    e.preventDefault();
  
    var hash = $(this).attr("href");
    if ($(hash).length === 0) {
      return;
    }
    //console.log($(hash).offset().top)
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800)
  })
});