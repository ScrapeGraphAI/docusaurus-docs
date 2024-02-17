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
    component: ComponentCreator('/docs', '636'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '920'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'b76'),
            routes: [
              {
                path: '/docs/activation',
                component: ComponentCreator('/docs/activation', 'c61'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/contributing',
                component: ComponentCreator('/docs/category/contributing', '9f4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/introduction',
                component: ComponentCreator('/docs/category/introduction', 'd40'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/tutorials',
                component: ComponentCreator('/docs/category/tutorials', 'f40'),
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
                path: '/docs/Contributing/contributing_guidelines',
                component: ComponentCreator('/docs/Contributing/contributing_guidelines', '11a'),
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
                path: '/docs/Examples/Example',
                component: ComponentCreator('/docs/Examples/Example', 'f9c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', 'aed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Introduction/base_node',
                component: ComponentCreator('/docs/Introduction/base_node', 'e39'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Introduction/Basics',
                component: ComponentCreator('/docs/Introduction/Basics', '8bd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Introduction/conditional_node',
                component: ComponentCreator('/docs/Introduction/conditional_node', '63f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Introduction/fetch_html_node',
                component: ComponentCreator('/docs/Introduction/fetch_html_node', '2c1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Introduction/generate_answer_node',
                component: ComponentCreator('/docs/Introduction/generate_answer_node', '3da'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Introduction/get_probable_tags_node',
                component: ComponentCreator('/docs/Introduction/get_probable_tags_node', '4e0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Introduction/Nodes',
                component: ComponentCreator('/docs/Introduction/Nodes', 'a20'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Introduction/parse_html_node',
                component: ComponentCreator('/docs/Introduction/parse_html_node', '4ad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Introduction/text_to_speach_node',
                component: ComponentCreator('/docs/Introduction/text_to_speach_node', '332'),
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
