; (function($, window, document, undefined) {
  var Countdown = function(elm, opt) {
    this.$element = elm,
    this.defaults = {
      default_str: '',
      sep: ' ',
      delay_class: 'active',
      delay_time: 10,
      step: 1000,
      before_count: function() {},
      after_count: function() {},
      append_before_str: '(',
      append_after_str: ')'
    },
    this.options = $.extend({},
    this.defaults, opt);
  }

  Countdown.prototype = {
    init: function() {
      var _this = this;
      return this.$element.each(function() {
        $(this).bind('click',
        function(e) {
          e.preventDefault();

          if (!_this.$element.hasClass(_this.options.delay_class)) {
            _this.options.before_count();
            _this.set_val();

            var show_time = _this.options.delay_time;

            _this.$element.addClass(_this.options.delay_class);
            var show_eta = setInterval(function() {
              var str = _this.options.default_str ? _this.options.default_str: _this.$element.data('val');
              if (show_time == 1) {
                _this.render(str).removeClass(_this.options.delay_class).attr('disabled', false);
                window.clearInterval(show_eta);
                _this.options.after_count();
              } else {
                str += _this.options.sep + _this.options.append_before_str + (--show_time) + _this.options.append_after_str;
                _this.render(str).attr('disabled', true);
              }
            },
            _this.options.step);
          }
        });
      });
    },

    set_val: function() {
      this.$element.each(function(i) {
        switch (this.localName) {
        case 'input':
          $(this).data('val', $(this).val());
          break;
        case 'button':
        case 'div':
        case 'a':
          $(this).data('val', $(this).text());
          break;
        }
      });
    },

    render: function(str) {
      this.$element.each(function(i) {
        switch (this.localName) {
        case 'input':
          $(this).val(str);
          break;
        case 'button':
        case 'div':
        case 'a':
          $(this).text(str);
          break;
        }
      });

      return this.$element;
    }
  }

  $.fn.Countdown = function(options) {
    var ctr = new Countdown(this, options);
    return ctr.init();
  }
})(jQuery, window, document);