// Generated by CoffeeScript 1.9.2
(function() {
  document.documentElement.className = document.documentElement.className.replace(/no-js/, 'js');

  jQuery(function($) {
    $('.banner nav a').on('focus', function(e) {
      return $(this).parentsUntil('.menu').addClass('open').siblings().removeClass('open');
    });
    $('.banner nav a').on('blur', function(e) {
      return $(this).parentsUntil('.menu').removeClass('open');
    });
    return $('.banner nav select').on('change', function(e) {
      if ($(this).val()) {
        return window.location.href = $(this).val();
      }
    });
  });

}).call(this);