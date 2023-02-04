const comment = {
  provider: 'giscus',
  giscusConfig: {
    repo: process.env.NEXT_PUBLIC_GISCUS_REPO || '',
    repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID || '',
    category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY || '',
    categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID || '',
    mapping: 'pathname',
    reactions: '1',
    metadata: '0',
    theme: 'light',
    darkTheme: 'transparent_dark',
    themeURL: '',
  },
}
export default comment