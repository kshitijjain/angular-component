angular.module('demoApp', ['ngComponentRouter'])
.value('$routerRootComponent', 'mainComponent')
.component('mainComponent', {
	templateUrl: 'mainComponent.html',
	$routeConfig: [
  		{ path: '/component1', component: 'component1' },
  		{path: '/component2', component: 'component2'},
  		{path: '/**', component: 'component3'}
	]
});