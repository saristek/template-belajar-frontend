import application from "@/data/application"
import comment from "@/data/comment"
import social from "@/data/social"

const siteMetadata = {
  ...application,
  ...social,
  comment,
  language: 'en-us',
  theme: 'dark', // system, dark or light
  siteUrl: '',
  siteRepo: '',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.webp',
  socialBanner: '/static/images/twitter-card.png',
  locale: 'en-US',
}

export default siteMetadata
