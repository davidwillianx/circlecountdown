
;(function($){
  var defaults = {
    value: 0,
     'readOnly': true,
      'width': 120,
      'height': 120,
      'dynamicDraw': true,
      'thickness': 0.2,
      'tickColorizeValues': true,
      'skin': 'tron',
      time: 60
  };
  var timersBase = {
     second: 1,
     minute:60,
     hour:3600,
     //day:21600
  };

  function DrawCountdown(element,options){
    // Magic it will happend
    this._settings = $.extend({} ,defaults,options);
    this._element = element;
    this.init();

  }

  DrawCountdown.prototype = {

    init: function(){
        this._element.data('targetValue',new Date().getSeconds());
        this.draw();
        this.countdown();
    },
    draw: function(){
      this._element.knob(this._settings);
    },
    countdown: function(){
        $.when(
            this._element.animate({
                value: 100
              },
              {
                duration:1000,
                easing: 'swing',
                progress: function(){
                  $(this).val(Math.round(this.value/100*$(this).data('targetValue'))).trigger('change')
                }
             }
          )
      ).then(function(){
         interval();
      });
    }
  }

  function interval(){
   var second = new Date().getSeconds();
       $(this).val(second).trigger('change');
       setTimeout(this.interval,1000);
  }


  $.fn.circleCountdown = function(options){
      var countdown = function(){
         drawCountdown = new DrawCountdown($(this),options);
      };
      return this.each(countdown);
  };



})(jQuery);
