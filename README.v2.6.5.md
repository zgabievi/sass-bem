# sass-bem

> **Please upgrade to version 2.6.0**, we have some great features. Thanks to @szalonna and @MartinN3 resolved issue in documentation and updated some mixins.

> **TEST RESULTS:** `124 Tests, 82 Passed, 0 Failed, 42 Output to CSS`

[![Bower](https://img.shields.io/bower/v/zgabievi/sass-bem.svg?style=flat-square)](http://bower.io/search/?q=sass-bem)
[![NPM](https://img.shields.io/npm/v/sass-bem.svg?style=flat-square)](https://www.npmjs.com/package/sass-bem)

| sass-bem |     |
|:----------:|:----|
| [![sass-bem](https://i.imgsafe.org/fbbe54a80d.png)](https://github.com/zgabievi/sass-bem/) | Amazing package for [sass](http://sass-lang.com/) to write [bem](https://en.bem.info/) classes, with namespaces and more advanced features. **Pull requests** are welcome :tada: |

## Table of Contents

+ [Installation](#installation)
+ [What? Why? How?](#what-why-how)
+ [Example](#example)
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

I suggest you to create `"ha"` and `"lv"` shortcuts, for `"hover", "active"` and `"link", "visited"`, just like **HATE & LOVE**. Also you can create shortcut called something like `"dsbld"`, which will cover `"disabled", "is:disabled"` mixins. This one will be generated as `&[disabled], &.is-disabled`, because of `disabled` mixin and `is` mixin with param "disabled". Keep playing with shortcuts. :stuck_out_tongue_closed_eyes:

**How to use package?**
Simply `@import` *"bem"* at the very beggining of your *sass*/*scss* main file, configure some parameters at your will, and enjoy with great features.

**Looking for configuration docs?**
Visit your documentation website, and look at variables section. You will find [`$bem` map](http://zgabievi.me/sass-bem/#variable-bem), where you can see all parameters. Or scroll down to see how to change them separately.

## Example

Let's work on [Nicole Sullivan](http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code/)'s post, about media object.

`index.html`

```html
<div class="o-media">
  <a href="#" class="o-media__image">
    <img src="#" class="o-media__thumb" alt="Thumb" />
  </a>
  <!-- /.o-media__image -->

  <div class="o-media__body">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
    deserunt mollit anim id est laborum.
  </div>
  <!-- /.o-media__body -->
</div>
<!-- /.o-media -->
```

---

`app.scss`

```scss
@import "node_modules/sass-bem/bem";

// coding...
@include object('media') { // or o('media')
  margin: 10px;
  
  @include parse('&', 'e:body') { // or p('&', 'e:body')
    overflow:hidden;
    _overflow:visible;
    zoom:1;
  }
  
  @include element('image') { // or e('image')
    float:left;
    margin-right: 10px;
    
    @include at('rtl') { // .o-media--rtl .o-media__image
      float: right;
      margin-left: 10px;
      margin-right: 0;
    }
  }
    
  @include element('thumb') { // or e('thumb')
    display: block;
  }
}
```

---

`app.css`

```css
.o-media {
  margin: 10px;
}

.o-media,
.o-media__body {
  overflow: hidden;
  _overflow: visible;
  zoom: 1;
}

.o-media__image {
  float: left;
  margin-right: 10px;
}
  
.o-media--rtl .o-media__image {
  float: right;
  margin-left: 10px;
  margin-right: 0;
}

.o-media__thumb {
  display: block;
}
```

---

![Result](http://i.imgsafe.org/ecb22dd.png)

> More examples [here](https://github.com/zgabievi/sass-bem/wiki/Examples) and even more will come soon...

## Wiki

> We would recomend you to read full documentation in our website: [http://zgabievi.me/sass-bem/](http://zgabievi.me/sass-bem/)
>
> Still prefer Wiki? Then follow this table of contents or go to our [Wiki](https://github.com/zgabievi/sass-bem/wiki) page.

+ [**mixins**](https://github.com/zgabievi/sass-bem/wiki/Mixins): [block](https://github.com/zgabievi/sass-bem/wiki/Mixins#block-mixin), [element](https://github.com/zgabievi/sass-bem/wiki/Mixins#element-mixin), [modifier](https://github.com/zgabievi/sass-bem/wiki/Mixins#modifier-mixin), [relations](https://github.com/zgabievi/sass-bem/wiki/Mixins#relations), [states](https://github.com/zgabievi/sass-bem/wiki/Mixins#states), [pseudo elements](https://github.com/zgabievi/sass-bem/wiki/Mixins#pseudo-elements), [parse](https://github.com/zgabievi/sass-bem/wiki/Mixins#parse)
+ [**namespaces**](https://github.com/zgabievi/sass-bem/wiki/OOCSS): [object](https://github.com/zgabievi/sass-bem/wiki/OOCSS#object-mixin), [component](https://github.com/zgabievi/sass-bem/wiki/OOCSS#component-mixin), [utility](https://github.com/zgabievi/sass-bem/wiki/OOCSS#utility-mixin), [theme](https://github.com/zgabievi/sass-bem/wiki/OOCSS#theme-mixin), [scope](https://github.com/zgabievi/sass-bem/wiki/OOCSS#scope-mixin), [hack](https://github.com/zgabievi/sass-bem/wiki/OOCSS#hack-mixin), [state](https://github.com/zgabievi/sass-bem/wiki/OOCSS#state-mixin)
+ [**functions**](https://github.com/zgabievi/sass-bem/wiki/Functions): [bem-index](https://github.com/zgabievi/sass-bem/wiki/Functions#bem-index), [get-block](https://github.com/zgabievi/sass-bem/wiki/Functions#get-block), [is-block](https://github.com/zgabievi/sass-bem/wiki/Functions#is-block), [is-element](https://github.com/zgabievi/sass-bem/wiki/Functions#is-element), [is-modifier](https://github.com/zgabievi/sass-bem/wiki/Functions#is-modifier), [math-min](https://github.com/zgabievi/sass-bem/wiki/Functions#math-min), [explode](https://github.com/zgabievi/sass-bem/wiki/Functions#explode)

## License
The sass-bem package is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).
