import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'c6d'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '388'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '583'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '51b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'ac1'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '57c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'd7e'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '470'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'b49'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '59d'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '0fe'),
            routes: [
              {
                path: '/docs/activation-api-keys/activation',
                component: ComponentCreator('/docs/activation-api-keys/activation', '7bf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/authors/authors_markdown',
                component: ComponentCreator('/docs/authors/authors_markdown', '50e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/how-to-activate-keys',
                component: ComponentCreator('/docs/category/how-to-activate-keys', '099'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contributing/acknowledgements',
                component: ComponentCreator('/docs/contributing/acknowledgements', 'f57'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contributing/contributing_markdown',
                component: ComponentCreator('/docs/contributing/contributing_markdown', 'd54'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', 'aed'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'b71'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
