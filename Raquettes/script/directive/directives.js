angular.module('racketApp')
	.directive('imagesProduits', function(){
		return{
			restrict : 'E',
			templateUrl : 'views/images-produits.html',
			controller : 'imageController'
		}
	})