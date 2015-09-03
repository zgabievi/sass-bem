# BEM
[![Bower](https://img.shields.io/bower/v/bem.svg)](https://github.com/zgabievi/bem)

Collection of BEM Mixins &amp; Helpers

+ [Installation](https://github.com/zgabievi/bem/blob/master/README.md#installation)
+ [Usage](https://github.com/zgabievi/bem/blob/master/README.md#usage)
+ [Documentation](https://github.com/zgabievi/bem/blob/master/README.md#documentation)
+ [License](https://github.com/zgabievi/bem/blob/master/README.md#license)

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

+ [Mixins](https://github.com/zgabievi/bem/blob/master/README.md#mixins)
	1. [Block](https://github.com/zgabievi/bem/blob/master/README.md#block-mixin)
	2. [Element](https://github.com/zgabievi/bem/blob/master/README.md#element-mixin)
	3. [Modifier](https://github.com/zgabievi/bem/blob/master/README.md#modifier-mixin)
	4. [Relations](https://github.com/zgabievi/bem/blob/master/README.md#relations)
	5. [States](https://github.com/zgabievi/bem/blob/master/README.md#states)
	6. [Pseudo Element](https://github.com/zgabievi/bem/blob/master/README.md#pseudo-elements)
+ [Functions](https://github.com/zgabievi/bem/blob/master/README.md#functions)
	1. [bem-index()](https://github.com/zgabievi/bem/blob/master/README.md#bem-index)
	2. [get-block()](https://github.com/zgabievi/bem/blob/master/README.md#get-block)
	3. [is-block()](https://github.com/zgabievi/bem/blob/master/README.md#is-block)
	4. [is-element()](https://github.com/zgabievi/bem/blob/master/README.md#is-element)
	5. [is-modifier()](https://github.com/zgabievi/bem/blob/master/README.md#is-modifier)

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
### Functions
#### bem-index()
```scss
bem-index(list__item); // @returns '5'
bem-index(navbar--inverse); // @returns '7'
bem-index(form); // @returns '0'
```
#### get-block()
```scss
get-block('.list__item'); // @returns 'list'
get-block('.navbar--inverse'); // @returns 'navbar'
get-block('.form'); // @returns 'form'
```
#### is-block()
```scss
is-block('.list__item'); // @returns false
is-block('.navbar--inverse'); // @returns false
is-block('.form'); // @returns true
```
#### is-element()
```scss
is-element('.list__item'); // @returns true
is-element('.navbar--inverse'); // @returns false
is-element('.form'); // @returns false
```
#### is-modifier()
```scss
is-element('.list__item'); // @returns false
is-element('.navbar--inverse'); // @returns true
is-element('.form'); // @returns false
```

## License
The BEM package is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).
