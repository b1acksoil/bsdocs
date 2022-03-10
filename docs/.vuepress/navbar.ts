import { NavbarConfig } from '@vuepress/theme-default'

const navbar: NavbarConfig = [
  {
    text: 'lancelot.bot',
    children: [
      '/lancelot/README.md',
      '/lancelot/arcaea.md',
      '/lancelot/changelog.md',
    ],
  },
]

export default navbar