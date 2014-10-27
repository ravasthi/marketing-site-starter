/*------------------------------------------------------------------------------
| flyout.js
| application name v1.0
|
| JS to operate the nav menu flyout.
------------------------------------------------------------------------------*/

(function($) {
  $.widget("ui.flyout", {
    _create: function() {
      this.$nav = $("header.global nav");
      var that = this;

      this.element.click(function() {
        that.$nav.slideToggle({
          complete: function() {
            that.element.toggleClass('up', that.$nav.is(':visible'));
          }
        });
      });
    },
  });
})(jQuery);
