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
    component: ComponentCreator('/docs', '959'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'f64'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'ff6'),
            routes: [
              {
                path: '/docs/activation',
                component: ComponentCreator('/docs/activation', 'c61'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Builders/GraphBuilder',
                component: ComponentCreator('/docs/Builders/GraphBuilder', '5df'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/builders',
                component: ComponentCreator('/docs/category/builders', 'ae7'),
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
                path: '/docs/category/evaluators',
                component: ComponentCreator('/docs/category/evaluators', 'f11'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/graphs',
                component: ComponentCreator('/docs/category/graphs', '2f5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/helpers',
                component: ComponentCreator('/docs/category/helpers', '42b'),
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
                path: '/docs/category/models',
                component: ComponentCreator('/docs/category/models', '3e0'),
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
                path: '/docs/Evaluators/trulens',
                component: ComponentCreator('/docs/Evaluators/trulens', '73c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Examples/CustomGraph',
                component: ComponentCreator('/docs/Examples/CustomGraph', '651'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Examples/GraphBuilder',
                component: ComponentCreator('/docs/Examples/GraphBuilder', 'de6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Examples/SmartScraperGraph',
                component: ComponentCreator('/docs/Examples/SmartScraperGraph', 'a1d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Examples/SpeechSummaryGraph',
                component: ComponentCreator('/docs/Examples/SpeechSummaryGraph', '789'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Graphs/base_graph',
                component: ComponentCreator('/docs/Graphs/base_graph', '1d8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Graphs/smart_scraper_graph',
                component: ComponentCreator('/docs/Graphs/smart_scraper_graph', '17f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Graphs/speech_summary',
                component: ComponentCreator('/docs/Graphs/speech_summary', '1cc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Helpers/models_tokens',
                component: ComponentCreator('/docs/Helpers/models_tokens', 'f49'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Helpers/nodes_metadata',
                component: ComponentCreator('/docs/Helpers/nodes_metadata', '2c0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Helpers/schemas',
                component: ComponentCreator('/docs/Helpers/schemas', '779'),
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
                path: '/docs/Models/openai',
                component: ComponentCreator('/docs/Models/openai', 'af0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Models/openai_iit',
                component: ComponentCreator('/docs/Models/openai_iit', 'b3d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Models/openai_tts',
                component: ComponentCreator('/docs/Models/openai_tts', 'a8c'),
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
                path: '/docs/Nodes/parsehtml_node',
                component: ComponentCreator('/docs/Nodes/parsehtml_node', '1ae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Nodes/rag',
                component: ComponentCreator('/docs/Nodes/rag', '9ce'),
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
                path: '/docs/Utils/convert_to_j',
                component: ComponentCreator('/docs/Utils/convert_to_j', '55e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Utils/r',
                component: ComponentCreator('/docs/Utils/r', '988'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Utils/save',
                component: ComponentCreator('/docs/Utils/save', 'c89'),
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
