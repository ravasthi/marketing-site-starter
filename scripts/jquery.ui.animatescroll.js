/*------------------------------------------------------------------------------
| animatescroll.js
| application name v1.0
|
| JS to animate in-page scrolls.
------------------------------------------------------------------------------*/

(function($) {
  $.widget("ui.animatescroll", {
    options: {
      duration: 1500
    },
    
    _create: function() {
      var that = this;

      this.element.click(function(e) {
        e.preventDefault();
        e.stopPropagation();

        $("html, body").animate({
          scrollTop: $(that.element.attr("href")).offset().top
        }, that.options.duration);
      });
    },
  });
})(jQuery);

