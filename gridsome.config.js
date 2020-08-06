const path = require('path')

module.exports = {
  siteName: 'Kerwa App',
  siteDescription: 'Die Kerwalieder App der Ortsburschen Stübach',
  //pathPrefix: 'app', // app.steinermarco.de
  /*templates: {
    WordPressCategory: '/category/:slug', // adds a route for the "category" post type (Optional)
    WordPressPost: '/:year/:month/:day/:slug', // adds a route for the "post" post type (Optional)
    WordPressPostTag: '/tag/:slug' // adds a route for the "post_tag" post type (Optional)
  },*/

  plugins: [
    {
      use: '~/src/plugins/wp-source/',
      apiBase: 'wp-json',
      options: {
        baseUrl: 'https://app.kerwacrew.de/', // required
        typeName: 'WordPress', // GraphQL schema name (Optional)
        perPage: 100, // How many posts to load from server per request (Optional)
        concurrent: 10, // How many requests to run simultaneously (Optional)
        customEndpoints: [
          {
            typeName: "Textblock",
            route: '/wp/v2/textblock/?per_page=400',
            normalize: true,
          },
          {
            typeName: "Timetableblock",
            route: '/wp/v2/timetableblock?order=asc',
            normalize: true,
          },
          {
            typeName: "Event",
            route: '/wp/v2/event',
            normalize: true,
          },
          {
            typeName: "Infos",
            route: '/wp/v2/knowhow',
            normalize: true,
          },
          {
            typeName: "Menu",
            route: '/custom/menu/hauptmenu',
            normalize: true,
          },
        ],
        createPages: {
          approach: 'include', // include or exclude, default is include
          list: ['impressum'] //an array of page slugs to include or exclude, ex. ['about', 'our-team'], default is an empty array
        }
      }
    },
    {
      use: 'gridsome-plugin-pwa',
      options: {
        title: 'Kerwa App',
        startUrl: '/',
        display: 'standalone',
        statusBarStyle: 'default', //black-translucent
        manifestPath: 'manifest.json',
        serviceWorkerPath: 'service-worker.js',
        cachedFileTypes: 'js,json,css,html,png,jpg,jpeg,svg,gif,webp',
        shortName: 'Kerwa App',
        themeColor: '#FFEE81',
        backgroundColor: '#FFEE81',
        icon: 'dist/favicon.png' // must be supplied!
      }
    },
    /*{
      use: "gridsome-plugin-service-worker",
      options: {
        networkFirst: {
          routes: [
            "/",
            /\.(json|js|css|png)$/, // means "every JS, CSS, and PNG images"
          ],
        },
      },
    },*/
    {
      use: 'gridsome-plugin-sass-resources-loader',
      options: {
        // or array of paths
        resources: ['~/assets/style/_variables.scss', '~/assets/style/styles.scss'],
      }
    }
  ]
}
