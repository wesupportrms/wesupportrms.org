module.exports = {
  siteMetadata: {
    title: `WE SUPPORT RMS`,
    description: `Wesupportrms`,
    author: `wesupportrms.org`,
    siteUrl: `https://www.wesupportrms.org/`,
    // supportedLanguages: [`en`]
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/static/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `fonts`,
        path: `${__dirname}/src/static/fonts`,
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        formats: [`auto`, `webp`],
        backgroundColor: `transparent`,
        blurredOptions: 10,
      }
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `WE-SUPPORT-RMS`,
        short_name: `WE-SUPPORT-RMS`,
        start_url: `/`,
        background_color: `#f7fbff`,
        theme_color: `#f7fbff`,
        display: `standalone`,
        path: `${__dirname}/src/static/images`,
        icon: `src/static/images/favicon.png`,
        // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-react-helmet`,
    // env
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        allowList: ["GATSBY_API_URL", "GATSBY_INTL_GITHUB","GATSBY_MD_GITHUB"]
      },
    },
    // md
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
      __key: "md",
    },
  // Ability to set custom IDs for headings (for translations)
    // i.e. https://www.markdownguide.org/extended-syntax/#heading-ids
    `gatsby-remark-autolink-headers`,
    // Image support in markdown
    `gatsby-remark-images`,
    `gatsby-remark-copy-linked-files`,
    // READING time
    "gatsby-remark-reading-time",
    // MDX support
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
      // Note: in order for MDX to work with gatsby-remark-plugins
      // The plugin must be listed top-level & in gatsbyRemarkPlugins
      // See: https://www.gatsbyjs.org/docs/mdx/plugins/
      gatsbyRemarkPlugins: [
        {
          // Local plugin to adjust the images urls of the translated md files
          //resolve: require.resolve(`./plugins/gatsby-remark-image-urls`),
        },
        {
          resolve: `gatsby-remark-autolink-headers`,
          options: {
            enableCustomId: true,
            elements: [`h1`, `h2`, `h3`, `h4`],
            className: `header-anchor`,
          },
        },
        {
          resolve: `gatsby-remark-images`,
          options: {
            backgroundColor: `transparent`,
            maxWidth: 1200,
          },
        },
        {
          resolve: `gatsby-remark-copy-linked-files`,
          options: {
            maxWidth: 1200,
          },
        },
      ],
      remarkPlugins: [],
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content`,
        name: 'content',
      },
    }
  ],
}
