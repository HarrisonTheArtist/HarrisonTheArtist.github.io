window.addEventListener("scroll", function() {
  var currentY = window.pageYOffset;
  var scope = angular.element($("#sideBarContainer")).scope();
  scope.$apply(function(){
    if (currentY > scope.oldY) {
      scope.showSideBar = false;
      scope.oldY = currentY;
    } else {
      scope.showSideBar = true;
      scope.oldY = currentY;
    }
  })
});