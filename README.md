Notes
=====

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

CSS
==============

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

Angular
==============

Node
==============