$(document).ready(function(){
  $('.parallax').parallax();
});

  $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
      dismissible: true;
      $('.close').closeModal();
  });

  $(".learnMore").click(function() {
    $('html, body').animate({
        scrollTop: $("#aboutSwap").offset().top
    }, 900);
});

  $(".brand-logo").click(function() {
    $('html, body').animate({
        scrollTop: $("#page-footer").offset().top
    }, 900);
});