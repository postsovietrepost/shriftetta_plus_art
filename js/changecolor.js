
$(document).ready(function(){
  $('.sbc1').hover(
      function(){
          $('.sbc2').css('background-color','#519F75');
      },
      function(){
          $('.sbc2').css('background-color','#EA1C1C');
      },
  );

  $('.sbc3').hover(
      function(){
          $('.sbc4').css('background-color','#ECEF4D');
      },
      function(){
          $('.sbc4').css('background-color','#C4929D');
      },
  );

  $('.sbc5').hover(
      function(){
          $('.sbc6').css('background-color','#519F75');
      },
      function(){
          $('.sbc6').css('background-color','black');
      },
  );

  $('.sbc2').hover(
      function(){
          $('.sbc1').css('background-color','red');
      },
      function(){
          $('.sbc1').css('background-color','#519F75');
      },
  );

  $('.sbc4').hover(
      function(){
          $('.sbc3').css('background-color','#C4929D');
      },
      function(){
          $('.sbc3').css('background-color','#ECEF4D');
      },
  );

  $('.sbc6').hover(
      function(){
          $('.sbc5').css('background-color','black');
      },
      function(){
          $('.sbc5').css('background-color','#4078A7');
      },
  );

});
