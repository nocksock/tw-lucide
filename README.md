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

## usage

Use `.icon-[name]`, where `[name]` is the name of an icon.
Use [https://lucide.dev] to easily search the name of an icon.

```
<button>
    <span aria-label="Edit some" class="icon-pencil"></span>
</button>

```

Change the color and/or size:

```
<span aria-hidden class="icon-x text-red-500"></span>
<span aria-hidden class="icon-x size-32 text-red-500"></span>
```
