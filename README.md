# BEM
[![Bower](https://img.shields.io/bower/v/zgabievi/sass-bem.svg?style=flat-square)](http://bower.io/search/?q=sass-bem)
[![NPM](https://img.shields.io/npm/v/sass-bem.svg?style=flat-square)](https://www.npmjs.com/package/sass-bem)

Collection of BEM Mixins &amp; Helpers

+ [Installation](#installation)
+ [Usage](#usage)
+ [Example](#example)
+ [Wiki](#wiki)
+ [License](#license)

## Installation
### Install With [Bower](http://bower.io/search/?q=sass-bem)
```
$ bower install bem --save
```

### Install With [NPM](https://www.npmjs.com/package/sass-bem):
```
$ npm install sass-bem --save
```

### Install Manually
- [Download Package Archive](https://github.com/zgabievi/sass-bem/archive/master.zip)
- Place `/scss/` or `/sass/` directory to your project.

## Usage
Insert following code in top of your file:

```scss
@import "/bower_components/sass-bem/bem";
```

### Configuration
In your `style.scss`, after you import `bem`, you can configure separators
```scss
$bem: (
	'element': '__',
	'modifier': '--',
	'state': '-'
);
```

Diable debugging using:

```scss
$bem-debug: false;
```

## Example

####style.scss

```scss
@import "bower_components/bem/scss/bem";

@include b('block') {
	display: block;

	@include e('element1') {
		display: element1;

		@include m('modifier1') {
			display: modifier1;
		}

		@include is('state') {
			display: is-state;
		}

		@include has('state') {
			display: has-state;
		}

		@include js('state') {
			display: js-state;
		}
	}

	@include m('modifier2') {
		display: modifier2;

		@include while('modifier1') {
			display: modifier2-1;
		}
	}

	@include e('element2') {
		display: element2;

		@include duo {
			display: element2-2;
		}

		@include with('element1') {
			display: element2-1;
		}

		@include at('modifier2') {
			display: modifier2;
		}
	}
}

@include o('object') {
	display: object;
}

@include c('component') {
	display: component;
}

@include u('utility') {
	display: utility;
}

@include t('theme') {
	display: theme;
}

@include s('scope') {
	display: scope;
}

@include _('hack') {
	display: hack;
}

@include qa('test') {
	display: test;
}
```

####style.css

```css
@charset "UTF-8";

.block {
  display: block; }

  .block__element1 {
    display: element1; }

    .block__element1--modifier1 {
      display: modifier1; }

    .block__element1.is-state {
      display: is-state; }

    .block__element1.has-state {
      display: has-state; }

    .block__element1.js-state {
      display: js-state; }

  .block--modifier2 {
    display: modifier2; }

    .block--modifier2.block--modifier1 {
      display: modifier2-1; }

  .block__element2 {
    display: element2; }

    .block__element2 + .block__element2 {
      display: element2-2; }

    .block__element2 + .block__element1 {
      display: element2-1; }
      
    .block--modifier2 .block__element2 {
      display: modifier2; }

.o-object {
  display: object; }

.c-component {
  display: component; }

.u-utility {
  display: utility; }

.t-theme {
  display: theme; }

.s-scope {
  display: scope; }

._hack {
  display: hack; }

.qa-test {
  display: test; }
```

## WiKi

+ [**Mixins**](https://github.com/zgabievi/bem/wiki/Mixins) - Collection of BEM Mixins
	- [Block](https://github.com/zgabievi/bem/wiki/Mixins#block-mixin) - Creates block type selector
	- [Element](https://github.com/zgabievi/bem/wiki/Mixins#element-mixin) - Creates element type selector
	- [Modifier](https://github.com/zgabievi/bem/wiki/Mixins#modifier-mixin) - Creates modifier type selector
	- [Relations](https://github.com/zgabievi/bem/wiki/Mixins#relations) - Relationship Mixins
	- [States](https://github.com/zgabievi/bem/wiki/Mixins#states) - Element State Mixins
	- [Pseudo Element](https://github.com/zgabievi/bem/wiki/Mixins#pseudo-elements) - Pseudo Class Mixins
+ [**Functions**](https://github.com/zgabievi/bem/wiki/Functions) - Collection of helper functions
	- [bem-index()](https://github.com/zgabievi/bem/wiki/Functions#bem-index) - Returns first index of bem separator
	- [get-block()](https://github.com/zgabievi/bem/wiki/Functions#get-block) - Returns bem block from string
	- [is-block()](https://github.com/zgabievi/bem/wiki/Functions#is-block) - Checks if given string is block
	- [is-element()](https://github.com/zgabievi/bem/wiki/Functions#is-element) - Checks if given string is element
	- [is-modifier()](https://github.com/zgabievi/bem/wiki/Functions#is-modifier) - Checks if given string is modifier
	- [math-min()](https://github.com/zgabievi/bem/wiki/Functions#math-min) - Returns smallest number from 2 numbers, or default
	- [explode()](https://github.com/zgabievi/bem/wiki/Functions#explode) - Returns list from string
+ [**OOCSS**](https://github.com/zgabievi/bem/wiki/OOCSS) - Object-Oriented CSS Classes

## License
The BEM package is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).
