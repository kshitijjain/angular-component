angular.module('demoApp')
.component('childComponent', {
	templateUrl: 'childComponent.html',
	controllerAs: 'child',
	bindings: {
		data: '<',
		changeData: '&'
	},
	controller: function(){
		var child= this;
		child.changeChild= function(data){
			child.changeData({dat: data});
		}
	}
});