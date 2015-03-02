// var options = {
//   scaleColor: false,
//   trackColor: 'rgba(255,255,255,0.3)',
//   barColor: '#E7F7F5',
//   lineWidth: 6,
//   lineCap: 'butt',
//   size: 95
// };

;(function($){

  var defaults = {
    scaleColor: false,
    trackColor: 'rgba(255,255,255,0.3}',
    barColor: '#E7F7F5',
    lineWidth: 6,
    lineCap: 'butt',
    size: 95,
    time: 20
  };

  var drawCountdown =  function(element,options){
    // Magic it will happend
    var settings = $.extend({} ,defaults,options);

  }

  drawCountdown.prototype = {
    init: function(){

    }

  }

  $.fn.circleCountdown = function(options){

      var countdown = function(){
        var element = $(this);
         drawCountdown(element,options);

      };

      return this.each(countdown);
  };



})(jQuery);
