angular.module('medhack', [])
  .directive('scrollTo', function () {
    return function (scope, element, attrs) {
      var section = $(attrs.scrollTo);
      if (section) {
        var top = section.offset().top;
        element.on('click', function() {
          $('html, body').stop().animate({scrollTop: top-10}, 300);
          return false;
        })
      } else {
        console.warn('id de section introuvable : '+section);
      }
    }
  });