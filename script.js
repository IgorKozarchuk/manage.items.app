var app = angular.module("myTestUI", []);

app.controller("myCtrl", function($scope, $window) {
    $scope.items = [
        { name: "Hello", comment: ["Hello! Some text..."] },
        { name: "World", comment: ["World! Some text...", "World! Some more text..."] }
    ];
    
    $scope.activeItem = $scope.items.length - 1;
    
    $scope.addItem = function() {
        if (!$scope.addMe) { return; } // check if adding empty item
        $scope.items.push(
            { name: $scope.addMe, comment: [] }
        );
        $scope.addMe = ""; // clear input after push
        $scope.activeItem = $scope.items.length - 1;
    };
    
    $scope.removeItem = function(x) {
        $scope.items.splice(x, 1);
        $scope.select($scope.items[$scope.items.length-1]);
    };
    
    $scope.select = function(item) {
        $scope.selected = item;
	};
    $scope.isActive = function(item) {
	    return $scope.selected === item;
	};
    
    $scope.makeActive = function(x) {
        $scope.activeItem = x;
    };
    
    $scope.postCommentEnter = function(e) {
        if (!$scope.txtcomment) { return; }
        if (e.keyCode === 13) {
            $scope.items[$scope.activeItem].comment.push($scope.txtcomment);
            $scope.txtcomment = "";
            e.preventDefault(); // returns cursor to 1st line
        }
    };    
    
    $window.localStorage.setItem("items", JSON.stringify($scope.items));    
});
