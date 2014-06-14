Notes
=====

HTML
==============

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

Box Model
--------------


Flex Box Model
--------------

*I want italics*

**This will be Bold**

- This will be a list item
- This will be a list item

    Add a indent and this will end up as code
    <div>
    	<nav>
    		<ul>
    			<li>hi</li>
    			<li>there</li>
			</ul>
		</nav>
	</div>

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