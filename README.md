# sass-bem

[![sass-bem](http://s24.postimg.org/bxl0j4bbl/sass_bem.png)](https://github.com/zgabievi/sass-bem/)

[![Bower](https://img.shields.io/bower/v/zgabievi/sass-bem.svg?style=flat-square)](http://bower.io/search/?q=sass-bem)
[![NPM](https://img.shields.io/npm/v/sass-bem.svg?style=flat-square)](https://www.npmjs.com/package/sass-bem)

Collection of [BEM](https://en.bem.info/) Mixins &amp; Helpers for [sass](http://sass-lang.com/)

+ [Installation](#installation)
+ [Usage](#usage)
+ [Example](#example)
+ [Wiki](#wiki)
+ [License](#license)

## Installation
### Install With [Bower](http://bower.io/search/?q=sass-bem)
```
$ bower install sass-bem --save
```

### Install With [NPM](https://www.npmjs.com/package/sass-bem):
```
$ npm install sass-bem --save
```

### Install Manually
- [Download Package Archive](https://github.com/zgabievi/sass-bem/archive/master.zip)
- Extract archive to your project.

## Usage

> If you want to read about usage, you can visit [http://zgabievi.me/sass-bem/](http://zgabievi.me/sass-bem/) or read [Wiki](#wiki) documentation

## Example

#### style.scss

```scss
@import "bower_components/sass-bem/bem";

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
	
	@include parse(':hover', 'm:hover') {
		display: inline-block;
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

#### style.css

```css
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
      
    .block:hover, .block--hover {
      display: inline-block; }

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

> We would recomend you to read full documentation in our website: [http://zgabievi.me/sass-bem/](http://zgabievi.me/sass-bem/)

+ [**Mixins**](https://github.com/zgabievi/sass-bem/wiki/Mixins) - Collection of BEM Mixins
	- [Block](https://github.com/zgabievi/sass-bem/wiki/Mixins#block-mixin) - Creates block type selector
	- [Element](https://github.com/zgabievi/sass-bem/wiki/Mixins#element-mixin) - Creates element type selector
	- [Modifier](https://github.com/zgabievi/sass-bem/wiki/Mixins#modifier-mixin) - Creates modifier type selector
	- [Relations](https://github.com/zgabievi/sass-bem/wiki/Mixins#relations) - Relationship Mixins
	- [States](https://github.com/zgabievi/sass-bem/wiki/Mixins#states) - Element State Mixins
	- [Pseudo Element](https://github.com/zgabievi/sass-bem/wiki/Mixins#pseudo-elements) - Pseudo Class Mixins
	- [Parse](https://github.com/zgabievi/sass-bem/wiki/Mixins#parse) - Parse multi-selector Mixin
+ [**Functions**](https://github.com/zgabievi/sass-bem/wiki/Functions) - Collection of helper functions
	- [bem-index()](https://github.com/zgabievi/sass-bem/wiki/Functions#bem-index) - Returns first index of bem separator
	- [get-block()](https://github.com/zgabievi/sass-bem/wiki/Functions#get-block) - Returns bem block from string
	- [is-block()](https://github.com/zgabievi/sass-bem/wiki/Functions#is-block) - Checks if given string is block
	- [is-element()](https://github.com/zgabievi/sass-bem/wiki/Functions#is-element) - Checks if given string is element
	- [is-modifier()](https://github.com/zgabievi/sass-bem/wiki/Functions#is-modifier) - Checks if given string is modifier
	- [math-min()](https://github.com/zgabievi/sass-bem/wiki/Functions#math-min) - Returns smallest number from 2 numbers, or default
	- [explode()](https://github.com/zgabievi/sass-bem/wiki/Functions#explode) - Returns list from string
+ [**OOCSS**](https://github.com/zgabievi/sass-bem/wiki/OOCSS) - Object-Oriented CSS Classes

## License
The sass-bem package is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).
