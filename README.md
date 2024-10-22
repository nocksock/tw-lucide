# tw-lucide

Simple plugin for tailwind to use [lucide](https://lucide.dev) icons.

## Installation

Install with your package manager of choice. `npm` example:

```sh
$ npm install tw-lucide
```

require the plugin in `tailwind.config.js`

```js
module.exports = {
    // ...
    plugins: [
        // ...
        require('tw-lucide'),
    ],
}
```

## Usage

Use `.icon-[name]`, where `[name]` is the name of an icon.
Use https://lucide.dev to easily search the name of an icon.

```html
<button>
    <span aria-label="Edit some" class="icon-pencil"></span>
</button>
```

Change the color and/or size:

```html
<span aria-hidden class="icon-x text-red-500"></span>
<span aria-hidden class="icon-x size-32 text-red-500"></span>
```

## How it works

It creates a component-class for each icon. e.g.: `.icon-right-arrow` that
class will set the variable `--lucide-icon-content` which contains the svg code
for that icon. All other icon settings are applied via `[class*=icon-]`

So tailwind will only keep the minimum in the CSS.

## Configuration

There is no configuration. 

This is a simple plugin if you want a different class-name, I recommend copy 
pasting the contents of the index.js directly into your tailwind.config.js.
