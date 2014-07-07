Notes
=====

WebSockets
----------
The WebSocket specification defines an API establishing "socket" connections between a web browser and a server. Plainly speaking: There is a persistent connection between the client and the server and both parties can start sending data at any time. This is well-suited for low latency applications (applications that need to have a quick response/no lag time). Previous solutions revolved around the request/response paradigm of HTTP, where a client loads up a webpage and nothing happens until the user clicks onto the next page. In 2005, AJAX started making the web feel more dynamic but still the HTTP communication was steered by the client, requiring user interaction or periodic polling to load new data from the server.


"Push" or "Comet" are names for technologies that enable the server to send data to the client in the very moment when it knows that new data is available. Long polling is a common hack to create the illusion of a server initated connection. With long polling, the client opens up an HTTP connection to the server which keeps it open until sending response. When the server actually ahs new data it sends the response... this works but it shares the problem of carrying the overhead of HTTP.

Text Measurements
==============
Scalable
--------
- em: One em is equal to the current font-size. So if the font-size is 12, 1em is equal to 12pt. Em's are scalable/mobile-friendly.

- %: much like the em, the current font-size is equal to 100%. 

Not scalable
------------
- px: One pixel is equal to one dot on the computer screen (the smallest division of your screen's resolution). Many web designers use this to create pixel-perfect representation of their site but it doesn't scale up or down for mobile devices.

- pt: Used in print design, with one point equlalling 1/72 of an inch. Fixed size, cannot scale. 

Generally, 1em = 12pt = 16px = 100%. The downside of using em's are that they scale text too abruptly, making the smallest text hardly legible and the large text too large. One fix is to set the overal body { font-size: 62.5%; } and then use em's from there. 

HTML
==============
Most HTML elements are displayed either as block level or inline elements. Block level elements normally start and end w/ a new line when displayed in the browser, as opposed to inline elements. Naturally block level elements include: 
- div, all h's, p, ul/ol/dl, li/dt/dd, table, blockquote, pre, form
Naturally inline elements include: 
- img, span, a, strong, em, br, input, abbr, acronym

Block level elements default to being 100% width of their parent element. Giving an element width: 100%; and adding padding will actually push the child element outside of the parent element's bounds. This is annoying with elements like textarea that needs to use the width property if you want to avoid the cols parameter (?). 

SVG vs. HTML Canvas
-------------------
SVG is to images what HTML is to text. SVG (Scalable Vector Graphics) is a XML markup language for describing/drawing 2-D vector graphics. It can either create an image from scratch by specifying all the lines and shapes necessary, or it can modify an already existing raster image, or it can combine both approaches. 

The HTML5 <canvas> element is used to draw graphics on the fly via scripting (most often, JavaScript). The <canvas> element is only a container for graphics. 

SVG is considered more accessible b/c it supports text. HTML canvas is dependent on JavaScript, which is only a bad thing if a user has disabled their JavaScript. SVG is vector-based (go figure) and Canvas is pixel-based.

CSS
==============

Including a CSS file is NOT done like this:
			<style type="text/css" href="style.css"></style>
But rather it's done like this (in head): 
			<link rel="stylesheet" type="text/css" href="style.css">

Vendor Prefixes
--------------
*Note that the -whatever prefixes are not always required*

- Gecko: Mozilla Firefox
	- ex: -mox-border-radius: 20px;
- WebKit: Chrome, Safari, Chromium
	- ex: -webkit-border-radius: 20px;
- Presto: Opera
	- ex: can be -o, -apple, -wap, -xv
- Trident: IE
	- ex: -ms

Basic Positioning
-----------------
*Static*
All DOM elements start out as static by default, and it's rare to have to declare anything position: static; unless you are trying to escape some otherwise unavoidable styling conflict.

*Relative*
Relative to itself! To where it would NORMALLY be. Also, now 1.) you can set a z-index and 2.) you are limiting the scope of absolutely positioned children element.

*Absolute*
At an absolutely accurate location on the page. Let's you literally place any element exactly where you want it using top, left, bottom, right. Note that these values will be relative to any parent element, whether the parent is relative or absolute. It will default up to html. Also remember that this removes th element entirely from the flow. 

*Fixed*
Positioned relative to the viewport, which is why it doesn't move when you scroll b/c the viewport (width of the window isn't changing just the content). 

Box Model
--------------
From the outside in: margin, border, padding, element/content.

*Margin collapsing*
Most block level elements have a default top and bottom margin. For p's, that's 1em or 16px in some browsers. Top and bottom margins will collapse (consolidate) when they are right next to eachother, but left and right ones won't. When top/bottom margins touch, the larger of the two wins out. When negative margins are in the picture, the largest positive margin is still taken and then the largest negative margin is subtracted from it to get the displayed margin.

The most unexpected part of collapsing comes with multiple divs, like so: 

		<div style="margin-top:10px">
		<div style="margin-top:20px">
		A
		</div>
		</div>

This will collapse, taking the larger margin-top of 20px. But where will that margin display? In between the divs? Outside? Answer, the collapsed margin always goes as far out as possible, so it will go to the outside of the outtermost div.

To fix this, if you need to, simply add something between the two divs, like padding or a border and the margins will not collapse. You can add a top border or top padding of at least 1 pixel in height.  


*Position:absolute; or position:fixed;* elements are removed from the flow and the margins no longer take part in any collapses at all. So strangely, this will result in A and B having a gap of 16px.

		<p>A</p>
		<p style="margin-top:100px;margin-bottom:50px;position:absolute;"></p>
		<p>B</p>

Float will also take elements out of the flow, so the margins of the siblings touch as if it was not there and they will collapse while completely ignoring it. 

*Absolute and floated boxes* w/ no width set on them will adopt the width of their content. So whether it's one word or twenty, it will be just that wide.

Flexbox Model
--------------
Flexbox allows for preditable element layout on screen resize. It's different from the box model in that: 
- Flexbox does not use floats. 
- Flexbox container margins collapse with the margins of its contents. 
- The children of a flex container can 'flex' their sizes, either growing to use the unused space or shrinking to avoid conflict with the parent. 

SASS & SCSS
==============
Sass has two syntaxes. The new, main syntax is known as SCSS (Sassy CSS) and is a superset of CSS3's syntax. In other words, every valid CSS sheet is also a valid SCSS sheet. 

The second and older syntax, known as the indented syntax, is Sass. Instead of brackets and semicolons, it uses the indentation of lines to specify blocks.

Both of these are compiled w/ the Sass pre-compiler, which produces CSS sheets that can be used in your app/site.

**Variables**
$ will make something into a variable.
_partial.scss will make a partial file, to be imported into the main file with the @import directive
- *Using the @import directive in Sass does not create another HTTP request like it would in normal CSS.*
@mixin will create a mixin that can be included with @include
- *Very useful for chunk CSS declarations that you want to reuse throughout your site. One great use case is vendor prefixes, for things like 'border-radius'. 

Sass converts to CSS by running (note that the names to not have to match):
		sass --watch demo.scss:demo.css 
You can specify within the command how you want Sass to output your CSS. Normal output is in the nested mode, you can specify expanded, compact, or compressed by adding:
		sass --watch --style expanded/compact/compressed demo.scss:demo.css



JavaScript
==============
Core
----
There are 4 patterns of function invocation, and they all differ in how 
the special 'this' parameter is initiatlized.
1. Method Invocation Pattern: when a function is stored as a property of an object, we call it a method, and when a method is invoked, this is bound to that object. The binding of this to the object happens at invocation time, which is very late and makes functions that use this highly reusable. Mthods that get their object context from this are called public methods. 

2. Function Invocation Pattern
WHAT?!? Only necessary b/c of global binding, a mistake in the language...

3. Constructor Invocation Pattern
Not recommended, but when you use them, it's suggested that you capitalize the first letter. They're meant to be invoked with "new" like so: var myQuo = new Quo("confused");

4. Apply Invocation Pattern
The apply method lets us construct an array of arguments to use to invoke a function. It also lets us choose the value of this. The apply method takes two parameters, the first is the value that should be bound to this and the second is an array of parameters. 

Angular
==============
Modules
-------
A module acgs as a container for other AngularJS managed objects (controllers, services, etc). The module function call takes two arguments, the first being the name of the controller and the second being dependencies, put in an array.

A call to the angular.module function retruns an instance of a newly created module. As soon as one has access to that instance, one can start defining controllers with the following arguments: controller's name and controlller's contructor function. 

Directives
----------
Directives allow you to add interactivity to your HTML elements by attaching event listeners to the elements and/or transforming the DOM. ng-model, ng-repeat, and ng-show are all very common directive examples, but you can also write your own. An Angular directive comes in four flavors in terms of appearance. 

1. A new HTML element ( <date-picker></date> )
2. An attribute on an element ( <input type="text" date-picker/> )
3. As a class ( <input type="text" class="date-picker" /> )
4. As comment ( <!--directive:date-picker--> )

Best Practice: Prefer using directives via tag name and attributes over comment and class names. Doing so generally makes it easier to determine what directives a given element matches.

Best Practice: Prefer using the dash-delimited format (e.g. ng-bind for ngBind). If you want to use an HTML validating tool, you can instead use the data-prefixed version (e.g. data-ng-bind for ngBind). x- or data- will make your code HTML5 compliant. 

Directives are registered the same way as a controller, but it returns a simple object that has several properties to configure the directive. 

		restrict – This provides a way to specify how a directive should be used in HTML (remember a directive can appear in four ways). In this case we have set it to 'AE'. So, the directive can be used as a new HTML element or an attribute. To allow this directive to be used as a class we can set restrict to 'AEC'.

		template – This specifies the HTML markup that will be produced when the directive is compiled and linked by Angular. This does not have to be a simple string. The template can be complex, often involving other directives, expressions ({{ }}), etc. In most cases you want to use templateUrl instead of template. So, ideally you should place the template in a separate HTML file and make templateUrl point to it.

		replace – This specifies if the generated template will replace the HTML element on which the directive is attached. In our case we have used the directive as <hello-world></hello-world>, and replace is set to true. So, after the directive is compiled, the produced output template replaces <hello-world></hello-world>. The final output is <h3>Hello World!!</h3>. If you set replace to false, the default, the output template will be inserted into the element on which the directive is invoked.

A directive inherits it's parent's scope. SO if a directive is present inside a controller, it will use that controller's scope. 

Transclusion
------------
Translusion is a feature that lets us wrap a directive aound arbitrary content. 
translude: true
then ng-transclude on an element will append that element 

Node
==============