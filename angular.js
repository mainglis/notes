// To repeat a series of elements instead of just one parent element, ngRepeat 
// (as well as other ng directives) supports extending the range of the repeater 
// by defining explicit start and end points by using ng-repeat-start and ng-repeat-end 
// respectively. The ng-repeat-start directive works the same as ng-repeat, but will 
// repeat all the HTML code (including the tag it's defined on) up to and including the 
// ending HTML tag where ng-repeat-end is placed.

<header ng-repeat-start="item in items">
	Header {{ item }}
</header>
<div class="body">
	Body {{ item }}
</div>
<footer ng-repeat-end>
	Footer {{ item }}
</footer>

// With an input os ['A','B'] for the items variable in the example above, the result will beginning
<header>
  Header A
</header>
<div class="body">
  Body A
</div>
<footer>
  Footer A
</footer>
<header>
  Header B
</header>
<div class="body">
  Body B
</div>
<footer>
  Footer B
</footer>

// directives
var app = angular.module('myapp', []);

app.directive('helloWorld', function() {
	return {
		restrict: 'AE',
		replace: 'true',
		template: '<h3>Hello World!!</h3>'
	};
});

// The restrict option lets you say how your directives will be triggered. It's default
// setting is to attribute only ('A'). 'E' is for element, 'C' is for class name. 
// Transclusion

		restrict: 'E',
		translude: true,
		template: <div class="panel" ng-transclude>This is a panel component</div>

// ng-transclude says where to put the transcluded content.