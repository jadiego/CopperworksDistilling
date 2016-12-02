(function($){
  $(function(){
    $('.button-collapse').sideNav();
    
    $('.slider').slider({
      height: 500,
      full_width: true,
      indicators: false,
      transition: 2000
    });

    $(".dropdown-button").dropdown({
      constrain_width: false,
      hover: true, 
      belowOrigin: true,
      alignment: 'left'
    });
  }); // end of document ready
})(jQuery); // end of jQuery name space