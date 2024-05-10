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
    component: ComponentCreator('/docs', 'ec5'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'b79'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '1a2'),
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
                path: '/docs/category/examples-docker',
                component: ComponentCreator('/docs/category/examples-docker', 'c95'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/examples-gemini',
                component: ComponentCreator('/docs/category/examples-gemini', '7f1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/examples-ollama',
                component: ComponentCreator('/docs/category/examples-ollama', 'a33'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/examples-openai',
                component: ComponentCreator('/docs/category/examples-openai', '7dd'),
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
                path: '/docs/category/utils',
                component: ComponentCreator('/docs/category/utils', 'b2e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/versions',
                component: ComponentCreator('/docs/category/versions', '517'),
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
                path: '/docs/Contributing/sponsors',
                component: ComponentCreator('/docs/Contributing/sponsors', '1bc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Docker Examples/Graph_text',
                component: ComponentCreator('/docs/Docker Examples/Graph_text', '603'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Docker Examples/scrape_xml',
                component: ComponentCreator('/docs/Docker Examples/scrape_xml', '082'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Docker Examples/SmartScraperGraph',
                component: ComponentCreator('/docs/Docker Examples/SmartScraperGraph', 'ad3'),
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
                path: '/docs/Gemini Examples/CustomGraph',
                component: ComponentCreator('/docs/Gemini Examples/CustomGraph', 'e43'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Gemini Examples/Graph_text',
                component: ComponentCreator('/docs/Gemini Examples/Graph_text', '71c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Gemini Examples/research_graph_example',
                component: ComponentCreator('/docs/Gemini Examples/research_graph_example', '9ed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Gemini Examples/scrape_xml',
                component: ComponentCreator('/docs/Gemini Examples/scrape_xml', '8f5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Gemini Examples/SmartScraperGraph',
                component: ComponentCreator('/docs/Gemini Examples/SmartScraperGraph', 'd01'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Graphs/Abstract_graph',
                component: ComponentCreator('/docs/Graphs/Abstract_graph', '29e'),
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
                path: '/docs/Graphs/script_creator_graph',
                component: ComponentCreator('/docs/Graphs/script_creator_graph', '906'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Graphs/serch_graph',
                component: ComponentCreator('/docs/Graphs/serch_graph', 'e27'),
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
                path: '/docs/Models/gemini',
                component: ComponentCreator('/docs/Models/gemini', '3c7'),
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
                path: '/docs/Nodes/generate_scraper_node',
                component: ComponentCreator('/docs/Nodes/generate_scraper_node', '3d6'),
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
                path: '/docs/Nodes/parse_text_node',
                component: ComponentCreator('/docs/Nodes/parse_text_node', '2c9'),
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
                path: '/docs/Nodes/robots_node',
                component: ComponentCreator('/docs/Nodes/robots_node', 'f79'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Nodes/search_node',
                component: ComponentCreator('/docs/Nodes/search_node', '05f'),
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
                path: '/docs/Ollama Examples/CustomGraph',
                component: ComponentCreator('/docs/Ollama Examples/CustomGraph', 'a20'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Ollama Examples/Graph_text',
                component: ComponentCreator('/docs/Ollama Examples/Graph_text', 'bc9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Ollama Examples/scrape_xml',
                component: ComponentCreator('/docs/Ollama Examples/scrape_xml', '7d8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Ollama Examples/SmartScraperGraph',
                component: ComponentCreator('/docs/Ollama Examples/SmartScraperGraph', '4f8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Openai Examples/CustomGraph',
                component: ComponentCreator('/docs/Openai Examples/CustomGraph', '38c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Openai Examples/Graph_text',
                component: ComponentCreator('/docs/Openai Examples/Graph_text', 'c5a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Openai Examples/research_graph_example',
                component: ComponentCreator('/docs/Openai Examples/research_graph_example', '141'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Openai Examples/scrape_xml',
                component: ComponentCreator('/docs/Openai Examples/scrape_xml', '6fb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Openai Examples/SmartScraperGraph',
                component: ComponentCreator('/docs/Openai Examples/SmartScraperGraph', 'a9b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Openai Examples/SpeechSummaryGraph',
                component: ComponentCreator('/docs/Openai Examples/SpeechSummaryGraph', 'e55'),
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
                path: '/docs/Utils/parse_state_key',
                component: ComponentCreator('/docs/Utils/parse_state_key', '4e9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Utils/prettify_info',
                component: ComponentCreator('/docs/Utils/prettify_info', 'a12'),
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
                path: '/docs/Utils/saveaudio',
                component: ComponentCreator('/docs/Utils/saveaudio', '84f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Utils/search_function',
                component: ComponentCreator('/docs/Utils/search_function', '3c9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Utils/token_calculator',
                component: ComponentCreator('/docs/Utils/token_calculator', '3b2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Versions/versioning',
                component: ComponentCreator('/docs/Versions/versioning', '4fc'),
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
