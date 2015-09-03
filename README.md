# BEM
[![Bower](https://img.shields.io/bower/v/bem.svg)](https://github.com/zgabievi/bem)

Collection of BEM Mixins &amp; Helpers

## Installation
### Install With [Bower](http://bower.io/):
```
$ bower install bem --save
```
### Install Manualy
- [Download Package Archive](https://github.com/zgabievi/bem/archive/master.zip)
- Place `/scss/` or `/sass/` directory to your project.

## Usage
Insert following code in top of your file:

for `scss` syntax:
```scss
@import "/bower_components/bem/scss/bem";
```

for `sass` syntax:
```sass
@import /bower_components/bem/scss/bem
```

## Documentation
### Mixins
#### Block mixin:
```scss
@include b(list) {
	list-style-type: disc;
}
```
> You can use `@include block(...) {...}` too

CSS Output:
```css
.list {
	list-style-type: disc;
}
```
---
#### Element mixin:
```scss
@include b(list) {
	list-style-type: disc;

	@include e(item) {
		padding: 0.5em 1em;
	}
}
```
> You can use `@include element(...) {...}` too

CSS Output:
```css
.list {
	list-style-type: disc;
}

.list__item {
	padding: 0.5em 1em;
}
```
---
#### Modifier mixin:
```scss
@include b(list) {
	list-style-type: disc;

	@include m(ordered) {
		list-style-type: decimal;
	}
}
```
> You can use `@include modifier(...) {...}` too

CSS Output:
```css
.list {
	list-style-type: disc;
}

.list--ordered {
	list-style-type: decimal;
}
```
---
#### Relations
```scss
@include b(list) {
	list-style-type: disc;

	@include e(item) {
		padding: 0.5em 1em;
		
		@include at(ordered) {
			padding: 1em;
		}

		@include duo {
			margin-left: 10px;
		}

		@include with(element) {
			margin-left: 5px;
		}
	}
}
```
CSS Output:
```css
.list {
	list-style-type: disc;
}

.list__item {
	padding: 0.5em 1em;
}

.list--ordered .list__item {
	padding: 1em;
}

.list__item + .list__item {
	margin-left: 10px;
}

.list__item + .list__element {
	margin-left: 5px;
}
```
----
#### States
```scss
a {

	@include is(active) {
		font-weight: bold;
	}
		
	@include hover {
		color: red;
	}
				
	@include focus {
		color: blue;
	}
				
	@include active {
		color: green;
	}
}
```
CSS Output:
```css
a.is-active {
	font-weight: bold;
}

a:hover {
	color: red;
}

a:focus {
	color: blue;
}

a:active {
	color: green;
}
```
---
#### Pseudo Elements
```scss
a {
	@include first {
		color: orange;
	}
	
	@include last {
		color: blue;
	}
		
	@include even {
		color: green;
	}
		
	@include odd {
		color: aqua;
	}
}
```
CSS Output:
```css
a:first-child {
	color: orange;
}

a:last-child {
	color: blue;
}

a:nth-child(even) {
	color: green;
}

a:nth-child(odd) {
	color: aqua;
}
```

## License
The BEM package is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).
