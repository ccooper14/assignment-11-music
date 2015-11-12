$(document).ready(function(){

    function hideAll() {
      $('mmhmmSong').hide();
      $('5scoreSong').hide();
      $('ForgetandSong').hide();
      $('KisforSong').hide();
    }

    hideAll();

    $('.albumArt').click (function() {
      hideAll();

      switch ( $(this).attr("id") ) {
        case "mmhmmStuff" :
          $('#mmhmmSong').show();
          break;
        case "5scoreStuff" :
          $('#5scoreSong').show;
          break;
        case "forgetandStuff" :
          $('#ForgetandSong').show;
          break;
        case "kisforStuff" :
          $('#KisforSong').show;
          break;
      }
    });

    $('#mmhmmStuff').click (function() {
      $('#mmhmmSong').slideToggle();
    });

    $('5scoreStuff').click (function() {
      $('5scoreSong').slideToggle();
    });

    $('kisforStuff').click (function() {
      $('KisforSong').slideToggle();
    });

    $('forgetandStuff').click (function() {
      $('ForgetandSong').slideToggle();
    });

});
