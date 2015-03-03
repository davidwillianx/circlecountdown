
;(function($){

  var defaults = {
      'readOnly': true,
      'max':60,
      'min':0,
      time:60
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
        this.draw();
        this.countdown();
    },
    draw: function(){
      this._element.knob(this._settings);
      this._element.val(this._settings.time).trigger('change');
    },
    countdown: function(){
        setInterval(this.timeControll,1000);
    },
    timeControll: function(){
        var progressValue = this._element.val();
        console.log( 'result '+ progressValue);
        this._element.val(--progressValue).trigger('change');
    }
  }

  $.fn.circleCountdown = function(options){

      var countdown = function(){
         drawCountdown = new DrawCountdown($(this),options);
      };
      return this.each(countdown);
  };



})(jQuery);
