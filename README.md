# BEM
[![Version](https://img.shields.io/bower/v/bem.svg)](https://github.com/zgabievi/bem)
[![License](https://img.shields.io/bower/l/bootstrap.svg)](http://opensource.org/licenses/MIT)

Collection of BEM Mixins &amp; Helpers

+ [Installation](https://github.com/zgabievi/bem/blob/master/README.md#installation)
+ [Usage](https://github.com/zgabievi/bem/blob/master/README.md#usage)
+ [Documentation](https://github.com/zgabievi/bem/blob/master/README.md#docs)
+ [License](https://github.com/zgabievi/bem/blob/master/README.md#license)

## Installation
### Install With [Bower](http://bower.io/):
```
$ bower install bem --save
```
### Install Manually
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

## Configuration
In your `style.scss`, after you import `bem`, you can configure separators
```scss
$bem: (
	'element': '__',
	'modifier': '--',
	'state': '-'
);
```

## DOCS

+ [Mixins](https://github.com/zgabievi/bem/blob/master/DOCS.md#mixins)
	- [Block](https://github.com/zgabievi/bem/blob/master/DOCS.md#block-mixin)
	- [Element](https://github.com/zgabievi/bem/blob/master/DOCS.md#element-mixin)
	- [Modifier](https://github.com/zgabievi/bem/blob/master/DOCS.md#modifier-mixin)
	- [Relations](https://github.com/zgabievi/bem/blob/master/DOCS.md#relations)
	- [States](https://github.com/zgabievi/bem/blob/master/DOCS.md#states)
	- [Pseudo Element](https://github.com/zgabievi/bem/blob/master/DOCS.md#pseudo-elements)
+ [Functions](https://github.com/zgabievi/bem/blob/master/DOCS.md#functions)
	- [bem-index()](https://github.com/zgabievi/bem/blob/master/DOCS.md#bem-index)
	- [get-block()](https://github.com/zgabievi/bem/blob/master/DOCS.md#get-block)
	- [is-block()](https://github.com/zgabievi/bem/blob/master/DOCS.md#is-block)
	- [is-element()](https://github.com/zgabievi/bem/blob/master/DOCS.md#is-element)
	- [is-modifier()](https://github.com/zgabievi/bem/blob/master/DOCS.md#is-modifier)
	- [math-min()](https://github.com/zgabievi/bem/blob/master/DOCS.md#math-min)
	- [explode()](https://github.com/zgabievi/bem/blob/master/DOCS.md#explode)

## License
The BEM package is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).
