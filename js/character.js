// $(document).ready(function(){
//   $("#sh").click(function() {
//           var text = $(this).html();
//       $('<img src="https://psv4.userapi.com/c520036/u509127371/docs/d27/f91d7da31025/shpicture.png?extra=bIwUcNjTSj5gcKnfw6RIrhS6-hN4TWQJZyBo8jtp_eLf8OS7P_fZFdv9T4eOPLOhADP8RfCv-mRyNlWLpo14uCxaSvtIh3UO48IJrjz3VTODO9B9_srqmXp8fM9EKr-XRfkdBIYY0pOpJO2eTxoysMv9Wg" alt="">').appendTo($(this));
//       });
//       $(function (){
//         $('#sh').click(function(){
//             // $('#sh').remove()
//             $("#sh").add('<img src="https://psv4.userapi.com/c520036/u509127371/docs/d27/f91d7da31025/shpicture.png?extra=bIwUcNjTSj5gcKnfw6RIrhS6-hN4TWQJZyBo8jtp_eLf8OS7P_fZFdv9T4eOPLOhADP8RfCv-mRyNlWLpo14uCxaSvtIh3UO48IJrjz3VTODO9B9_srqmXp8fM9EKr-XRfkdBIYY0pOpJO2eTxoysMv9Wg" alt="">')
//         });
//     });
//       })


$(document).ready(function(){
      $('#sh').click(function(){
        if (!$(this).data('status')) {
          $(this).html('<img src="https://psv4.userapi.com/c520036/u509127371/docs/d27/f91d7da31025/shpicture.png?extra=bIwUcNjTSj5gcKnfw6RIrhS6-hN4TWQJZyBo8jtp_eLf8OS7P_fZFdv9T4eOPLOhADP8RfCv-mRyNlWLpo14uCxaSvtIh3UO48IJrjz3VTODO9B9_srqmXp8fM9EKr-XRfkdBIYY0pOpJO2eTxoysMv9Wg" alt="">');
          $(this).data('status', true);
        }
        else {
          $(this).html($('#sh'));
          $(this).data('status', false);
        }
      });
})
