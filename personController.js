function personController($scope){
	$scope.person = {
		firstName   : "辉",
		lastName    : "孙",
		firstNameEn : 'hui',
		lastNameEn  : 'sun',
		fullName    : function(){
			var x;
			x = $scope.person;
			return x.lastName + ' ' + x.firstName
		}
	}
	$scope.fullName = function(){
		var x;
		x = $scope.person;
		return x.lastName + ' ' + x.firstName
	}
}