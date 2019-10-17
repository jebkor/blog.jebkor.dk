module.exports = {
  title: "Jebkor's Blog",
  description: 'Ramblings of a delusional frontend developer',
  themeConfig: {
      nav: [
          { text: 'Home', link: '/' },
          { text: 'Blog', link: '/blog/' }
      ]
  },
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-150276903-1'
      }
    ]
  ]
}