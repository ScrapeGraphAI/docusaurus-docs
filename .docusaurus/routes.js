import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/Scrapegraph-ai-documentation/markdown-page',
    component: ComponentCreator('/Scrapegraph-ai-documentation/markdown-page', 'e5a'),
    exact: true
  },
  {
    path: '/Scrapegraph-ai-documentation/docs',
    component: ComponentCreator('/Scrapegraph-ai-documentation/docs', '2ef'),
    routes: [
      {
        path: '/Scrapegraph-ai-documentation/docs',
        component: ComponentCreator('/Scrapegraph-ai-documentation/docs', '67e'),
        routes: [
          {
            path: '/Scrapegraph-ai-documentation/docs',
            component: ComponentCreator('/Scrapegraph-ai-documentation/docs', '7e0'),
            routes: [
              {
                path: '/Scrapegraph-ai-documentation/docs/activation-api-keys/activation',
                component: ComponentCreator('/Scrapegraph-ai-documentation/docs/activation-api-keys/activation', '199'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Scrapegraph-ai-documentation/docs/authors/authors_markdown',
                component: ComponentCreator('/Scrapegraph-ai-documentation/docs/authors/authors_markdown', '649'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Scrapegraph-ai-documentation/docs/category/how-to-activate-keys',
                component: ComponentCreator('/Scrapegraph-ai-documentation/docs/category/how-to-activate-keys', '6bf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Scrapegraph-ai-documentation/docs/contributing/contributing_markdown',
                component: ComponentCreator('/Scrapegraph-ai-documentation/docs/contributing/contributing_markdown', '9b8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Scrapegraph-ai-documentation/docs/intro',
                component: ComponentCreator('/Scrapegraph-ai-documentation/docs/intro', 'd41'),
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
    path: '/Scrapegraph-ai-documentation/',
    component: ComponentCreator('/Scrapegraph-ai-documentation/', '2b5'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
