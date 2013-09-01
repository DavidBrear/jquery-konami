/******* JQuery Konami Code. *******
*
* This plugin easily enables anyone to add a
* konami code feature into their application.
*
*/

(function($){
  $.extend({
    konami: function(callback){
      var code = [38,38,40,40,37,39,37,39,66,65];
      var key_counter = 0;
      var konami_callback = callback;
      $(document).keydown(function(evt) {
        if (code[key_counter] === evt.which) {
          key_counter++;
          if (key_counter === code.length) {
            konami_callback.call();
            $(document).off('keydown');
          }
        } else {
          key_counter = 0;
        }
      });
      return this;
    }
  });
}(jQuery));
