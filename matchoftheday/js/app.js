var slider = angular.module('Matchofday', []);

slider.controller('ModCtrl', ['$scope',
	function ($scope) {
         $scope.coeffsAreEmpty = function(sport){
            if (undefined === sport.odd1 || sport.odd1.length == 0) return true;
            if (undefined === sport.oddx || sport.oddx.length == 0) return true;
            if (undefined === sport.odd2 || sport.odd2.length == 0) return true;
            return false;
        };
		$scope.$on('onLastRepeat', function (scope, element, attrs) {

var slideshow = new Slideshow("slider", 6000);
slideshow.start();

		});
}]);
slider.directive('matchOfTheDay', ['$window', 'SportLineFactory',
	function ($window, SportLineFactory) {
		return {
			restrict: 'A',
			link: function (scope, elem, attrs, transclude) {
				var lang = attrs.matchOfTheDay;
				var sportID = 1; // Soccer id
				SportLineFactory.get(lang);
				scope.sportline = scope.sporttotal = null;
				$window.JSON_CALLBACK = function (data) {
					var logoUrl = 'http://s1.ad.oddsring.com/banner/day/';
					if (angular.isDefined(data.matches) && Object.keys(data.matches).length > 0) {
						scope.line = [];
						angular.forEach(data.matches, function (match) {
							if (match.sid == sportID) {
								match.homelogo = logoUrl + 'mod_' + match.mid + '_home.png?ver=' + data.ver;
								match.awaylogo = logoUrl + 'mod_' + match.mid + '_away.png?ver=' + data.ver;
								scope.line.push(match);
							}
						});
						if (Object.keys(scope.line).length > 0) {
							scope.sportline = scope.line;
						}
					}
					if (angular.isDefined(data.prematchSports)) {
						angular.forEach(data.prematchSports, function (sport, key) {
							if (key == sportID) {
								scope.sporttotal = '+' + sport;
							}
						});
					}

					if (!scope.sportline) {
						$('.itshidden').removeClass('itshidden');
					}

				};


			}
		};
    }]);
slider.directive('onLastRepeat', function () {
	return function (scope, element, attrs) {
		if (scope.$last) setTimeout(function () {
			scope.$emit('onLastRepeat', element, attrs);
		}, 1);
	};

});

slider.filter('cmdate', ['$filter',
     function ($filter) {
		return function (input, format) {
			var isoDate = new Date(input);
			return $filter('date')(new Date(isoDate.getTime()), format);
		};
     }
 ]);

slider.factory('SportLineFactory', ['$http',
	function ($http) {
		return {
			get: function (lang) {
				var time = new Date().getTime();
				$http({
					method: 'jsonp',
                    url: 'http://s1.ad.oddsring.com/banner/day/matchoftheday/'+lang+'_mod_json.js?t=' + time
                   // url: '/live1.js?t=' + time
				});

			}
		};
}]);
