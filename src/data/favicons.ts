const favicons: Array<React.ComponentPropsWithoutRef<'link'>> = [
  {
    rel: 'apple-touch-icon',
    sizes: '180x180',
    href: '/static/favicons/apple-touch-icon.png',
  }, {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: '/static/favicons/favicon-32x32.png',
  }, {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: '/static/favicons/favicon-16x16.png',
  }, {
    rel: 'manifest',
    href: '/static/favicons/site.webmanifest'
  }, {
    rel: 'mask-icon',
    href: '/static/favicons/safari-pinned-tab.svg',
    color: '#00e887',
  }, {
    rel: 'shortcut icon',
    href: '/static/favicons/favicon.ico'
  },
];

export default favicons;
