/**
 * [GeneralPageScripts are general things taken care of by javascript on the page. the functions here are the
 * random functions that didn't really fit anywhere else.]
 */
var GeneralPageScripts = (function () {

  /**
   * [navbarCollapse does a cool animation on the navbar when the page is scrolled more than 100 pixels]
   */
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
  };

  /**
   * [getCopyrightYear adds the current year next to the copyright at the bottom]
   */
  var getCopyrightYear = function() {
    var d = new Date();
    year = d.getFullYear();
    $('#year').text(year);
  };

  var init = function() {
    navbarCollapse();
    getCopyrightYear();
  };
  
  return {
    init: init
  };

})();

GeneralPageScripts.init();