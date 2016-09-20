
var app = angular.module('Restaurant', []);


app.controller("RestaurantController", ["$scope","$http", function($scope, $http) {

	$scope.billRequested = false;
	$scope.totalBill = 0;
	$scope.billedItems = [];
	$scope.restaurantMenu = [
		{
			"id" : 1,
			"name" : "Prawns Rolls",
			"description":"marinated prawns with garlic, glass noodles, green onions, cilantro, and black pepper. wrapped in egg roll wrapper. served with house sweet & sauce.",
			"price" : 8.95,
			"quantity" : 0
		},
		{
			"id" : 2,
			"name" : "Satay Chicken",
			"description":"marinated chicken breast on skewers in coconut milk with a hint of curry. grilled and served with peanut sauce and cucumber salad.",
			"price" : 7.95,
			"quantity" : 0
		},
		{
			"id" : 3,
			"name" : "Vegetarian Spring Rolls",
			"description":"mixed cabbage, carrots, mushrooms, celery and glass noodles. wrapped in egg roll wrapper and deep-fried. served with sweet and sour sauce.",
			"price" : 6.95,
			"quantity" : 0
		},
		{
			"id" : 4,
			"name" : "Fresh Rolls",
			"description":"steamed tofu mix with bean sprout, carrots, lettuce, and mint leaves. wrapped in steamed thin rice noodle sheet. served with peanut sauce and sweet and sour sauce.",
			"price" : 6.95,
			"quantity" : 0
		},
		{
			"id" : 5,
			"name" : "Sweet Potatoes",
			"description":"deep-fried sweet potatoes with sesame seeds and house special batter mix. served with special sweet sauce and ground peanuts",
			"price" : 6.95,
			"quantity" : 0
		},
		{
			"id" : 6,
			"name" : "Tofu Triangle",
			"description":"deep-fried tofu triangle served with sweet and sour sauce and ground peanut.",
			"price" : 6.95,
			"quantity" : 0
		},
		{
			"id" : 7,
			"name" : "Stuffed Chicken Wings",
			"description":"deep-fried boneless chicken with stuffed with ground chicken, shrimp, carrots, cabbage, mushrooms, celery and glass noodles. served with sweet and sour sauce.",
			"price" : 8.95,
			"quantity" : 0
		},
		{
			"id" : 8,
			"name" : "Seafood Dumpling",
			"description" : "steamed and deep-fried mixed shredded crabmeat, pork and ground shrimp with jacamar, egg and green onion. wrapped in soybean wrapper.",
			"price" : 8.95,
			"quantity" : 0
		}
	];

	$scope.generateBill = function () {
		$scope.billRequested = true;
		$scope.billedItems = [];
		$scope.totalBill = 0;
		for(var i = 0, j=0; i < $scope.restaurantMenu.length ; i++) {
			if($scope.restaurantMenu[i].quantity > 0) {
				$scope.billedItems.push($scope.restaurantMenu[i]);
				$scope.billedItems[j].amount = Math.round($scope.restaurantMenu[i].price * $scope.restaurantMenu[i].quantity * 100) / 100;
				$scope.totalBill += $scope.billedItems[j].amount;
				j++;
			}
		}
		if($scope.billedItems.length === 0) {
			alert("No items selected!");
			$scope.billRequested = false;
		}
	}
}]);