# sass-bem

[![sass-bem](https://i.imgsafe.org/88b7a66.jpg)](https://github.com/zgabievi/sass-bem/)

[![Bower](https://img.shields.io/bower/v/zgabievi/sass-bem.svg?style=flat-square)](http://bower.io/search/?q=sass-bem)
[![NPM](https://img.shields.io/npm/v/sass-bem.svg?style=flat-square)](https://www.npmjs.com/package/sass-bem)

Amazing package for [sass](http://sass-lang.com/) to write [bem](https://en.bem.info/) classes, with namespaces and more advanced features.

**Pull requests** are welcome :tada:

## Table of Contents

+ [Installation](#installation)
+ [What? Why? How?](#what-why-how)
+ [Wiki](#wiki) or [Documentation](http://zgabievi.me/sass-bem/)
+ [License](#license)

## Installation
### Install with [bower](http://bower.io/search/?q=sass-bem) or [npm](https://www.npmjs.com/package/sass-bem)
```
$ bower install sass-bem --save

$ npm install sass-bem --save
```

### or install manually
- [Download Package Archive](https://github.com/zgabievi/sass-bem/archive/master.zip)
- Extract archive to your project.

## What? Why? How?

> I was inspired to create this package, after I read an article "[More Transparent UI Code with Namespaces](http://csswizardry.com/2015/03/more-transparent-ui-code-with-namespaces/)" written by [Harry Roberts](https://twitter.com/csswizardry).

> Also I can't miss about [bem](https://en.bem.info/), methodology for creating amazing html & css classes. If you don't know about it, you really should read more and get informed about bem.

**What about this package?**
This is great tool, if you want to stay strict at writing code. If you want your code to be more readable and easy to maintenance. If you want to be advanced in writing sass, install this package and became pro.

**Why do I love this package?**
When I'm writing with **sass-bem** I'm always strict to use same structure each time. I'm in love with all of its features, but two of them are most amazing.

- First one is `parse`, also known as `p` mixin. You can pass list of mixins, selectors, pseudo elements and etc. You will get comma separated selectors in your *css* file. You can pass *"m:inline"*, this will call `m` mixin with parameter *"inline"*, so you will get `&--inline`. You can also use `&` at your will.

- Second one is very helpfull to write more code in less time. You can define shortcodes to use in `parse` mixin. For example, you can define *"fha"* as list of `"focus", "hover", "active"`, and when you call `parse('fha')`, you will get pre-defined list parsed.

**How to use package?**
Simply `@import` *"bem"* at the very beggining of your *sass*/*scss* main file, configure some parameters at your will, and enjoy with great features.

**Looking for configuration docs?**
Visit your documentation website, and look at variables section. You will find [`$bem` map](http://zgabievi.me/sass-bem/#undefined-variable-bem), where you can see all parameters. Or scroll down to see how to change them separately.

## Wiki

> We would recomend you to read full documentation in our website: [http://zgabievi.me/sass-bem/](http://zgabievi.me/sass-bem/)
>
> Still prefer Wiki? Then follow this table of contents or go to our [Wiki](https://github.com/zgabievi/sass-bem/wiki) page.

+ [**mixins**](https://github.com/zgabievi/sass-bem/wiki/Mixins): [block](https://github.com/zgabievi/sass-bem/wiki/Mixins#block-mixin), [element](https://github.com/zgabievi/sass-bem/wiki/Mixins#element-mixin), [modifier](https://github.com/zgabievi/sass-bem/wiki/Mixins#modifier-mixin), [relations](https://github.com/zgabievi/sass-bem/wiki/Mixins#relations), [states](https://github.com/zgabievi/sass-bem/wiki/Mixins#states), [pseudo elements](https://github.com/zgabievi/sass-bem/wiki/Mixins#pseudo-elements), [parse](https://github.com/zgabievi/sass-bem/wiki/Mixins#parse)
+ [**namespaces**](https://github.com/zgabievi/sass-bem/wiki/OOCSS): [object](https://github.com/zgabievi/sass-bem/wiki/OOCSS#object-mixin), [component](https://github.com/zgabievi/sass-bem/wiki/OOCSS#component-mixin), [utility](https://github.com/zgabievi/sass-bem/wiki/OOCSS#utility-mixin), [theme](https://github.com/zgabievi/sass-bem/wiki/OOCSS#theme-mixin), [scope](https://github.com/zgabievi/sass-bem/wiki/OOCSS#scope-mixin), [hack](https://github.com/zgabievi/sass-bem/wiki/OOCSS#hack-mixin), [state](https://github.com/zgabievi/sass-bem/wiki/OOCSS#state-mixin)
+ [**functions**](https://github.com/zgabievi/sass-bem/wiki/Functions): [bem-index](https://github.com/zgabievi/sass-bem/wiki/Functions#bem-index), [get-block](https://github.com/zgabievi/sass-bem/wiki/Functions#get-block), [is-block](https://github.com/zgabievi/sass-bem/wiki/Functions#is-block), [is-element](https://github.com/zgabievi/sass-bem/wiki/Functions#is-element), [is-modifier](https://github.com/zgabievi/sass-bem/wiki/Functions#is-modifier), [math-min](https://github.com/zgabievi/sass-bem/wiki/Functions#math-min), [explode](https://github.com/zgabievi/sass-bem/wiki/Functions#explode)

## License
The sass-bem package is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).
