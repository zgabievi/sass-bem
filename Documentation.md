# Documentation

+ [Mixins](https://github.com/zgabievi/bem/blob/master/Documentation.md#mixins)
	- [Block](https://github.com/zgabievi/bem/blob/master/Documentation.md#block-mixin)
	- [Element](https://github.com/zgabievi/bem/blob/master/Documentation.md#element-mixin)
	- [Modifier](https://github.com/zgabievi/bem/blob/master/Documentation.md#modifier-mixin)
	- [Relations](https://github.com/zgabievi/bem/blob/master/Documentation.md#relations)
		- [at](https://github.com/zgabievi/bem/blob/master/Documentation.md#at)
		- [duo](https://github.com/zgabievi/bem/blob/master/Documentation.md#duo)
		- [with](https://github.com/zgabievi/bem/blob/master/Documentation.md#with)
		- [while](https://github.com/zgabievi/bem/blob/master/Documentation.md#while)
	- [States](https://github.com/zgabievi/bem/blob/master/Documentation.md#states)
		- [is](https://github.com/zgabievi/bem/blob/master/Documentation.md#is)
		- [hover](https://github.com/zgabievi/bem/blob/master/Documentation.md#hover)
		- [focus](https://github.com/zgabievi/bem/blob/master/Documentation.md#focus)
		- [active](https://github.com/zgabievi/bem/blob/master/Documentation.md#active)
		- [checked](https://github.com/zgabievi/bem/blob/master/Documentation.md#checked)
		- [disabled](https://github.com/zgabievi/bem/blob/master/Documentation.md#disabled)
		- [readonly](https://github.com/zgabievi/bem/blob/master/Documentation.md#readonly)
	- [Pseudo Element](https://github.com/zgabievi/bem/blob/master/Documentation.md#pseudo-elements)
		- [first](https://github.com/zgabievi/bem/blob/master/Documentation.md#first)
		- [last](https://github.com/zgabievi/bem/blob/master/Documentation.md#last)
		- [even](https://github.com/zgabievi/bem/blob/master/Documentation.md#even)
		- [odd](https://github.com/zgabievi/bem/blob/master/Documentation.md#odd)
		- [before](https://github.com/zgabievi/bem/blob/master/Documentation.md#before)
		- [after](https://github.com/zgabievi/bem/blob/master/Documentation.md#after)
+ [Functions](https://github.com/zgabievi/bem/blob/master/Documentation.md#functions)
	- [bem-index()](https://github.com/zgabievi/bem/blob/master/Documentation.md#bem-index)
	- [get-block()](https://github.com/zgabievi/bem/blob/master/Documentation.md#get-block)
	- [is-block()](https://github.com/zgabievi/bem/blob/master/Documentation.md#is-block)
	- [is-element()](https://github.com/zgabievi/bem/blob/master/Documentation.md#is-element)
	- [is-modifier()](https://github.com/zgabievi/bem/blob/master/Documentation.md#is-modifier)

## Mixins

### Block mixin:

#### b(...) || block(...)

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

### Element mixin:

#### e(...) || element(...)

```scss
@include b(list) {
	@include e(item) {
		padding: 0.5em 1em;
	}
}
```

> You can use `@include element(...) {...}` too

CSS Output:

```css
.list__item {
	padding: 0.5em 1em;
}
```

---

### Modifier mixin:

#### m(...) || modifier(...)

```scss
@include b(list) {
	@include m(ordered) {
		list-style-type: decimal;
	}
}
```

> You can use `@include modifier(...) {...}` too

CSS Output:

```css
.list--ordered {
	list-style-type: decimal;
}
```

---

### Relations

#### at(...)

```scss
@include b(list) {
	@include e(item) {
		@include at(ordered) {
			padding: 1em;
		}
	}
}
```

CSS Output:

```css
.list--ordered .list__item {
	padding: 1em;
}
```

----

#### duo()

```scss
@include b(list) {
	@include e(item) {
		@include duo {
			margin-left: 10px;
		}
	}
}
```

CSS Output:

```css
.list__item + .list__item {
	margin-left: 10px;
}
```

----

#### with(...)

```scss
@include b(list) {
	@include e(item) {
		@include with(element) {
			margin-left: 5px;
		}
	}
}
```

CSS Output:

```css
.list__item + .list__element {
	margin-left: 5px;
}
```

----

#### while(...)

```scss
@include b(list) {
	@include m(inline) {
		@include while(odered) {
			list-style-type: decimal;
		}
	}
}
```

CSS Output:

```css
.list--inline.list--odered {
	list-style-type: decimal;
}
```

----

### States

#### is(...)

```scss
a {
	@include is(active) {
		font-weight: bold;
	}
}
```

CSS Output:

```css
a.is-active {
	font-weight: bold;
}
```

---

#### hover()

```scss
a {
	@include hover {
		color: red;
	}
}
```

CSS Output:

```css
a:hover {
	color: red;
}
```

---

#### focus()

```scss
a {	
	@include focus {
		color: blue;
	}
}
```

CSS Output:

```css
a:focus {
	color: blue;
}
```

---

#### active()

```scss
a {		
	@include active {
		color: green;
	}
}
```

CSS Output:

```css
a:active {
	color: green;
}
```

---

#### checked()

```scss
input {		
	@include checked {
		display: block;
	}
}
```

CSS Output:

```css
input:checked {
	display: block;
}
```

---

#### disabled()

```scss
button {		
	@include disabled {
		opacity: 0.8;
	}
}
```

CSS Output:

```css
button[disabled] {
	opacity: 0.8;
}
```

---

#### readonly()

```scss
input {		
	@include readonly {
		border-color: #cecece;
	}
}
```

CSS Output:

```css
input[readonly] {
	border-color: #cecece;
}
```

### Pseudo Elements

#### first()

```scss
a {
	@include first {
		color: orange;
	}
}
```

CSS Output:

```css
a:first-child {
	color: orange;
}
```

---

#### last()

```scss
a {
	@include last {
		color: blue;
	}
}
```

CSS Output:

```css
a:last-child {
	color: blue;
}
```

---

#### even()

```scss
a {
	@include even {
    	color: green;
    }
}
```

CSS Output:

```css
a:nth-child(even) {
	color: green;
}
```

---

#### odd()

```scss
a {
	@include odd {
		color: aqua;
	}
}
```

CSS Output:

```css
a:nth-child(odd) {
	color: aqua;
}
```

---

#### before()

```scss
a {
	@include before {
		color: orange;
	}
}
```

CSS Output:

```css
a:before {
	color: orange;
}
```

---

#### after()

```scss
a {
	@include after {
		color: sky;
	}
}
```

CSS Output:

```css
a:after {
	color: sky;
}
```

### Functions

#### bem-index()

```scss
bem-index('.list__item'); // @returns '6'
bem-index('.navbar--inverse'); // @returns '8'
bem-index('.form'); // @returns '0'
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
