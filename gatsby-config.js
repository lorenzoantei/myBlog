module.exports = {

  siteMetadata: {
    siteUrl: "https://www.lorenzoantei.gatsbyjs.io",
    title: "lorenzo antei",
    author: {
      name: `Lorenzo Antei`,
      summary: `I could write something`,
    },
    description: `my portfolio`,
    social: {
      twitter: `lorenzoantei`,
      linkedin: `lorenzoantei`,
      github: `lorenzoantei`,
    },
  },

  plugins: [

    "gatsby-plugin-image",

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/src/images`,
      }
    },
    
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        plugins: [`gatsby-remark-images`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1000,
              linkImagesToOriginal: false,
              wrapperStyle: 'margin-bottom: 2.0725rem; margin-top: 2.0725rem; '
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },

    `gatsby-transformer-sharp`,

    `gatsby-plugin-sharp`,

    `gatsby-plugin-postcss`,

    `gatsby-plugin-react-helmet`,

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
    
  ],
};
