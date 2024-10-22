import plugin from 'tailwindcss/plugin'

const fs = require("fs")
const path = require("path")

export default plugin(({ matchComponents, theme, addUtilities, addBase, addComponents }) => {
  const iconsDir = path.join(__dirname, '/node_modules/lucide-static/icons/')
  const values = {}

  fs.readdirSync(iconsDir).forEach(file => {
    let name = path.basename(file, '.svg');
    values[name] = { name, fullPath: path.join(iconsDir, file) }
  })

  addComponents({
    '[class*=icon-]': {
      '-webkit-mask': `var(--lucide-icon-content)`,
      mask: `var(--lucide-icon-content)`,
      'mask-size': 'contain',
      'mask-repeat': 'no-repeat',
      'background-color': 'currentColor',
      'vertical-align': 'middle',
      display: 'inline-block',
      width: theme('spacing.6'),
      height: theme('spacing.6'),
    },
  })

  matchComponents(
    {
      icon: ({ name, fullPath }) => {
        let content = fs
          .readFileSync(fullPath)
          .toString()
          .replace(/\r?\n|\r/g, '')
        return {
          [`--lucide-icon-content`]: `url('data:image/svg+xml;utf8,${content}')`,
        }
      },
    },
    { values }
  )
})

