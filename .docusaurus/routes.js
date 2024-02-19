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
    component: ComponentCreator('/docs', 'b15'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '714'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '398'),
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
                path: '/docs/category/nodes',
                component: ComponentCreator('/docs/category/nodes', 'e9d'),
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
                path: '/docs/category/utils',
                component: ComponentCreator('/docs/category/utils', 'b2e'),
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
                path: '/docs/Introduction/Basics',
                component: ComponentCreator('/docs/Introduction/Basics', '8bd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Nodes/',
                component: ComponentCreator('/docs/Nodes/', '883'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Nodes/base_node',
                component: ComponentCreator('/docs/Nodes/base_node', 'f32'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Nodes/conditional_node',
                component: ComponentCreator('/docs/Nodes/conditional_node', '65d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Nodes/fetch_html_node',
                component: ComponentCreator('/docs/Nodes/fetch_html_node', 'ba8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Nodes/generate_answer_node',
                component: ComponentCreator('/docs/Nodes/generate_answer_node', '061'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Nodes/get_probable_tags_node',
                component: ComponentCreator('/docs/Nodes/get_probable_tags_node', '40c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Nodes/image_to_text_node',
                component: ComponentCreator('/docs/Nodes/image_to_text_node', '587'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Nodes/text_to_speach_node',
                component: ComponentCreator('/docs/Nodes/text_to_speach_node', '325'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Utils/convert_to_csv',
                component: ComponentCreator('/docs/Utils/convert_to_csv', '031'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Utils/convert_to_json',
                component: ComponentCreator('/docs/Utils/convert_to_json', '02a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Utils/remover',
                component: ComponentCreator('/docs/Utils/remover', 'f6d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Utils/save_audio_from_bytes',
                component: ComponentCreator('/docs/Utils/save_audio_from_bytes', '235'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Utils/token_calculator',
                component: ComponentCreator('/docs/Utils/token_calculator', '3b2'),
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
