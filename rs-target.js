// angular.module('myAppName').directive('rsTarget', rsTarget);

function rsTarget() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      scope.$watch(
        function(scope) {
          return scope.$eval(attrs.rsTarget);
        },
        function(targetValue) {
          if (!targetValue)
            element.removeAttr('target');
          else
            element.attr({ target: targetValue });
        }
      );
    }
  };
}
