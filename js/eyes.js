$(document).ready(function(){
    $(".third_third").mousemove(function(event) {
      let eye = $("#eyesbase_circle, #eyesbase_circle1, #eyesbase_circle2, #eyesbase_circle3, #eyesbase_circle4, #eyesbase_circle5");
      let x = (eye.offset().left) + (eye.width() / 2);
      let y = (eye.offset().top) + (eye.height() / 2);
      let rad = Math.atan2(event.pageX - x, event.pageY - y);
      let rot = (rad * (180 / Math.PI) * -1) + 180;
      eye.css({
        '-webkit-transform': 'rotate(' + rot + 'deg)',
        '-moz-transform': 'rotate(' + rot + 'deg)',
        '-ms-transform': 'rotate(' + rot + 'deg)',
        'transform': 'rotate(' + rot + 'deg)'
      });
    });

    let xPrev = 0;
     $(document).mousemove(function(e){
         xPrev<e.pageX ? $('#lr').html("right") : $('#lr').html("left");
         xPrev=e.pageX;
        $('#status').html(e.pageX +', '+ e.pageY);
        $('#cursor').css({
          left:e.pageX - 10,
          top:e.pageY - 10
  })

  $(document).mousemove(function(e) {
});
});

  })
