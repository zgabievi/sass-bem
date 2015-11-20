# BEM
[![Release](https://img.shields.io/github/release/zgabievi/bem.svg?style=flat-square)](https://github.com/zgabievi/bem)
[![License](https://img.shields.io/github/license/zgabievi/bem.svg?style=flat-square)](http://opensource.org/licenses/MIT)

:package: Collection of BEM Mixins &amp; Helpers

+ [Installation](https://github.com/zgabievi/bem/blob/master/README.md#installation)
+ [Usage](https://github.com/zgabievi/bem/blob/master/README.md#usage)
+ [Documentation](https://github.com/zgabievi/bem/blob/master/README.md#docs)
+ [License](https://github.com/zgabievi/bem/blob/master/README.md#license)

## Installation
### Install With [Bower](http://bower.io/search/?q=bem):
```
$ bower install bem --save
```

### Install With [NPM](https://www.npmjs.com/package/sass-bem):
```
$ npm install sass-bem --save
```

### Install Manually
- [Download Package Archive](https://github.com/zgabievi/bem/archive/master.zip)
- Place `/scss/` or `/sass/` directory to your project.

## Usage
Insert following code in top of your file:

:clipboard: for `scss` syntax:
```scss
@import "/bower_components/bem/scss/bem";
```

:clipboard: for `sass` syntax:
```sass
@import /bower_components/bem/scss/bem
```

### Configuration
:fire: In your `style.scss`, after you import `bem`, you can configure separators
```scss
$bem: (
	'element': '__',
	'modifier': '--',
	'state': '-'
);
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

## License
The BEM package is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).
