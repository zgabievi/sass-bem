# Documentation

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
