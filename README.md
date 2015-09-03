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
`scss` input
```scss
@include b(navbar) {
	display: block;

	@include e(item) {
		display: inline-block;

		@include is(active) {
			background-color: orange;
		}

		@include hover {
			background-color: blue;
		}

		@include focus {
			background-color: green;
		}

		@include active {
			background-color: purple;
		}

		@include duo {
			margin-left: 10px;
		}

		@include with(form) {
			margin-left: 5px;
		}

		@include first {
			border-radius: 10px;
		}

		@include last {
			border-radius: 5px;
		}

		@include even {
			background-color: yellow;
		}

		@include even {
			background-color: aqua;
		}
	}

	@include m(inverse) {
		background-color: black;

		@include e(item) {
			background-color: grey;
		}
	}

	@include e(form) {
		background-color: white;

		@include at(inverse) {
			background-color: lightgray;
		}
	}
}
```

`css` output
```css
.navbar {
	display: block;
}

.navbar__item {
	display: inline-block;
}

.navbar__item.is-active {
	background-color: orange;
}

.navbar__item:hover {
	background-color: blue;
}

.navbar__item:focus {
	background-color: green;
}

.navbar__item:active {
	background-color: purple;
}

.navbar__item + .navbar__item {
	margin-left: 10px;
}

.navbar__item + .navbar__form {
	margin-left: 5px;
}

.navbar__item:first-child {
	border-radius: 10px;
}

.navbar__item:last-child {
	border-radius: 5px;
}

.navbar__item:nth-child(even) {
	background-color: yellow;
}

.navbar__item:nth-child(even) {
	background-color: aqua;
}

.navbar--inverse {
	background-color: black;
}

.navbar--inverse .navbar__item {
	background-color: grey;
}

.navbar__form {
	background-color: white;
}

.navbar--inverse .navbar__form {
	background-color: lightgray;
}
```

## License
The BEM package is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).
