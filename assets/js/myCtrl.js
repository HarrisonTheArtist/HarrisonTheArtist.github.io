app.controller("myCtrl", function($scope) {
    $scope.selectedPage = "home";
    $scope.gridWidth = 1;
    $scope.setCurrentLink = function(path) {
      $scope.selectedPage = path;
    }
    $scope.getLinkColorCss = function(path) {
      if ($scope.selectedPage === path) {
        return {"color": "darkgoldenrod"};
      } else {
        return "";
      }
    }
    $scope.range = function(len) {
      return Array.from(Array(len).keys());
    }
    $scope.showSideBar = true;
    $scope.oldY = 0;
});
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "/assets/partials/harrison.html"
    })
    .when("/new_orleans", {
        templateUrl : "/assets/partials/new_orleans.html"
    })
    .when("/detroit", {
        templateUrl : "/assets/partials/detroit.html"
    })
    .when("/other", {
        templateUrl : "/assets/partials/other.html"
    })
    .when("/sf_bay_area", {
        templateUrl : "/assets/partials/sf_bay_area.html"
    })
    .when("/contact", {
        templateUrl : "/assets/partials/contact.html"
    })
    .when("/friends_and_links", {
        templateUrl : "/assets/partials/friends_and_links.html"
    })
});