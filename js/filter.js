$(document).ready(function(){

function activateFilterAnimation() {
  $("body").toggleClass("animated1");
}

$(".stroke_ball").on("click", activateFilterAnimation);
$(".stroke_ball2").off("click", activateFilterAnimation);
})

$(document).ready(function(){

function activateFilterAnimation() {
  $("body").toggleClass("animated2");
}

$(".stroke_ball2").on("click", activateFilterAnimation);
})
