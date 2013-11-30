angular.module('medhack', [])
  .directive('scrollTo', function () {
    return function (scope, element, attrs) {
      var section = $(attrs.scrollTo);
      if (section) {
        element.on('click', function() {
          if (section.offset()) {
            $('html, body').stop().animate({scrollTop: section.offset().top-64}, 300);
            return false;
          }
          return true;
        })
      } else {
        console.warn('id de section introuvable : '+section);
      }
    }
  });