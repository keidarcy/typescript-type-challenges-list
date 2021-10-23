const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const title = 'Typescript Type Challenges List';

const lowerCaseTitle = title.toLocaleLowerCase().replace(/\s/g, '-');

const githubUrl = 'https://github.com/keidarcy/' + lowerCaseTitle;

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
  module.exports = {
    title,
    tagline: 'Typescript types are cool',
    url: `https://${lowerCaseTitle}.vercel.app/`,
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'keidarcy',
    projectName: lowerCaseTitle,

    presets: [
      [
        '@docusaurus/preset-classic',
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            sidebarPath: require.resolve('./sidebars.js'),
            // Please change this to your repo.
            path: './docs/',
            routeBasePath: '/',
            editUrl: `${githubUrl}/blob/master`,
          },
          theme: {
            customCss: require.resolve('./src/css/custom.css'),
          },
        }),
      ],
      [
        'docusaurus-preset-shiki-twoslash',
        {
          themes: ['min-light', 'nord'],
          addTryButton: true,
        },
      ],
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        algolia: {
          appId: 'BH4D9OD16A',
          apiKey: '10bd867cf7c65a2a7f1dc6f749e047a4',
          indexName: 'typescript-type-challenge',
          contextualSearch: true,
          searchParameters: { facetFilters: ['type:text'] },
        },
        navbar: {
          title,
          logo: {
            alt: 'Dark Ts Logo',
            src: 'img/logo.svg',
          },
          items: [
            {
              href: githubUrl,
              label: 'GitHub',
              position: 'right',
            },
          ],
        },
        footer: {
          style: 'dark',
          links: [
            {
              title: 'Inspired by',
              items: [
                {
                  label: 'type-challenges',
                  href: 'https://github.com/type-challenges/type-challenges',
                },
              ],
            },
            {
              title: 'Build with',
              items: [
                {
                  label: 'docusaurus',
                  href: 'https://docusaurus.io/docs/',
                },
              ],
            },
            {
              title: 'Thanks',
              items: [
                {
                  label: 'TS Playground',
                  href: 'https://www.typescriptlang.org/play',
                },
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} ${title}.`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
      }),
  }
);
