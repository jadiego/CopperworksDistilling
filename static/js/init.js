(function($){
  $(function(){
    $('.button-collapse').sideNav();
    
    $('.slider').slider({
      height: 500,
      full_width: true,
      indicators: false,
      transition: 2000
    });

    $('select').material_select();

    $(".dropdown-button").dropdown({
      constrain_width: false,
      hover: true, 
      belowOrigin: true,
      alignment: 'left'
    });

    $('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15 // Creates a dropdown of 15 years to control year
    });
      

    $("#add-ingredient").click(function() {
      $(".ingredient-row").last().after($(".ingredient-row").first().clone());
    })
    
    $("#add-phase").click(function() {
      $(".phase-row").last().after($(".phase-row").first().clone());
    })

    $("#phase-select").change(function() {
      console.log(this.value);
      if(this.value == "fermentation") {
        $(".fermentation-info").removeClass("hide")
      } else if (this.value == "washdistil") {
        $(".fermentation-info").addClass("hide")
      } else if (this.value == "whiskeydistil") {
        $(".fermentation-info").addClass("hide")
      } else if (this.value == "mature") {
        $(".fermentation-info").addClass("hide")
      } else {
        $(".fermentation-info").addClass("hide")
      }
    })
  }); // end of document ready
})(jQuery); // end of jQuery name space

