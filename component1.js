angular.module('demoApp')
.component('component1', {
	templateUrl: 'component1.html',
	controllerAs: 'parent',
	controller: function(){
		var parent= this;
		parent.changeData= function(data){
			console.log('called');
			parent.data=data;
		}
	}
});