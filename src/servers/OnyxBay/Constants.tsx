/**
 * Префиксы изменении.
 */
export type ChangePrefix =
  | 'bugfix'
  | 'tweak'
  | 'soundadd'
  | 'sounddel'
  | 'rscadd'
  | 'rscdel'
  | 'imageadd'
  | 'imagedel'
  | 'maptweak'
  | 'spellcheck'
  | 'experiment'
  | 'admin'
  | 'balance'

/**
 * Биндинги префикса изменения к Font Awesome иконки.
 */
// WTF
// eslint-disable-next-line no-unused-vars
export const ICON_BINDINGS: { [key in ChangePrefix as string]: string } = {
  bugfix: 'fas fa-bug',
  tweak: 'fas fa-wrench',
  soundadd: 'fas fa-music',
  sounddel: 'fas fa-minus',
  rscadd: 'fas fa-plus',
  rscdel: 'fas fa-minus',
  imageadd: 'fas fa-palette',
  imagedel: 'fas fa-minus',
  maptweak: 'far fa-compass',
  spellcheck: 'fas fa-spell-check',
  experiment: 'fas fa-hard-hat',
  admin: 'fas fa-crown',
  balance: 'fas fa-balance-scale'
}

// eslint-disable-next-line no-unused-vars
export const COLOR_BINDINGS: { [key in ChangePrefix as string]: string } = {
  bugfix: 'green',
  tweak: 'green',
  soundadd: 'green',
  rscadd: 'green',
  imageadd: 'green',
  maptweak: 'green',
  spellcheck: 'green',
  admin: 'green',
  balance: 'yellow',
  experiment: 'yellow',
  sounddel: 'red',
  rscdel: 'red',
  imagedel: 'red'
}

interface Link {
  title: string
  url: string
  icon: string
}

export const LINKS: Link[] = [
  {
    title: 'Patreon',
    url: 'https://www.patreon.com/chaoticonyx',
    icon: 'fab fa-patreon'
  },
  {
    title: 'Wiki',
    url: 'https://wiki.ss13.ru',
    icon: 'fas fa-book'
  },
  {
    title: 'GitHub',
    url: 'https://github.com/ChaoticOnyx/OnyxBay',
    icon: 'fab fa-github'
  },
  {
    title: 'Discord',
    url: 'https://discord.gg/5BRMMFg',
    icon: 'fab fa-discord'
  }
]
