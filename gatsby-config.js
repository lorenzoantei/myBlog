module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "lorenzo antei",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `lorenzoantei`,
        short_name: `loranto`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#a2466c`,
        display: `standalone`,
        lang: `en`,
        icon: `src/images/logo.png`,
        theme_color_in_head: false, // This will avoid adding theme-color meta tag.
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    `gatsby-plugin-postcss`,
  ],
};
