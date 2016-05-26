angular.module('demoApp')
.component('grandChild', {
	templateUrl: 'grandChild.html',
	controllerAs: 'grandChild',
	bindings: {
		data: '<',
		changeData: '&'
	},
	controller: function(){
		var grandChild= this;
		grandChild.changeGrand= function(foo){
			grandChild.changeData({dat:foo});
		}
	}		

});