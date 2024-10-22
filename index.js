import plugin from 'tailwindcss/plugin'
import * as icons from 'lucide-static'

const toKebap = (str) => str.replace(/[A-Z]+(?![a-z])|[A-Z]/g, ($, ofs) => (ofs ? "-" : "") + $.toLowerCase())

export default plugin(({ matchComponents, theme, addComponents }) => {
  const values = Object.keys(icons).reduce((acc, name) => {
    const kebabName = toKebap(name);
    acc[kebabName] = { content: icons[name] }
    return acc
  }, {})

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
      icon: ({ content }) => {
        return {
          '--lucide-icon-content': `url('data:image/svg+xml;utf8,${encodeURIComponent(content)}')`,
        }
      },
    },
    { values }
  )
})
