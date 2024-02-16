import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '470'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '4f1'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '28c'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'dba'),
            routes: [
              {
                path: '/docs/activation',
                component: ComponentCreator('/docs/activation', 'c61'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/basic_usage',
                component: ComponentCreator('/docs/basic_usage', '8a1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Contributing/acknowledgements',
                component: ComponentCreator('/docs/Contributing/acknowledgements', '5bb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Contributing/contributing_markdown',
                component: ComponentCreator('/docs/Contributing/contributing_markdown', 'dfd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Contributing/designers',
                component: ComponentCreator('/docs/Contributing/designers', '8cc'),
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
