# 🍇 GraphBuilder
The link of the example is: [link](https://github.com/VinciGit00/Scrapegraph-ai/blob/main/examples/graph_examples/graph_builder_example.py).
```python
""" 
Example of graph builder
"""
import os
from dotenv import load_dotenv
from scrapegraphai.builders import GraphBuilder

load_dotenv()
openai_key = os.getenv("OPENAI_APIKEY")

# Define the configuration for the graph
graph_config = {
    "llm": {
        "api_key": openai_key,
        "model": "gpt-3.5-turbo",
    },
}

# Example usage of GraphBuilder
graph_builder = GraphBuilder(
    user_prompt="Extract the news and generate a text summary with a voiceover.",
    config=graph_config
)

graph_json = graph_builder.build_graph()

# Convert the resulting JSON to Graphviz format
graphviz_graph = graph_builder.convert_json_to_graphviz(graph_json)

# Save the graph to a file and open it in the default viewer
graphviz_graph.render('ScrapeGraphAI_generated_graph', view=True)
```
```bash
{'input': 'Extract the news and generate a text summary with a voiceover.',
 'text': [{'nodes': [{'node_name': 'FetchHTMLNode', 'node_type': 'node'},
    {'node_name': 'GetProbableTagsNode', 'node_type': 'node'},
    {'node_name': 'ParseHTMLNode', 'node_type': 'node'},
    {'node_name': 'GenerateAnswerNode', 'node_type': 'node'},
    {'node_name': 'ConditionalNode', 'node_type': 'conditional_node'},
    {'node_name': 'ImageToTextNode', 'node_type': 'node'},
    {'node_name': 'TextToSpeechNode', 'node_type': 'node'}],
   'edges': [{'from': 'FetchHTMLNode', 'to': ['GetProbableTagsNode']},
    {'from': 'GetProbableTagsNode', 'to': ['ParseHTMLNode']},
    {'from': 'ParseHTMLNode', 'to': ['GenerateAnswerNode', 'ConditionalNode']},
    {'from': 'ConditionalNode',
     'to': ['ImageToTextNode', 'TextToSpeechNode']}],
   'entry_point': 'FetchHTMLNode'}]}

```