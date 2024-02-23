# 👼🏻 Custom graph
## Introduction

## Implementation
```python
# if you plan on using text_to_speech and GPT4-Vision models be sure to use the
# correct APIKEY
OPENAI_API_KEY = "YOUR_API_KEY"
```
You can create **custom graphs** based on your necessities, using standard nodes provided by the library.

The list of the existing nodes can be found through the *nodes_metadata* json construct.
```python
# check available nodes
from scrapegraphai.helpers import nodes_metadata

nodes_metadata.keys()
```
```bash
dict_keys(['FetchHTMLNode', 'GetProbableTagsNode', 'ParseHTMLNode', 'GenerateAnswerNode', 'ConditionalNode', 'ImageToTextNode', 'TextToSpeechNode'])
```
```python
# to get more information about a node
nodes_metadata['ImageToTextNode']
```
```bash
{'description': 'Converts image content to text by \n        extracting visual information and interpreting it.',
 'type': 'node',
 'args': {'image_data': 'Data of the image to be processed.'},
 'returns': "Updated state with the textual description of the image under 'image_text' key."}
```
To create a custom graph we must:

1.   **Istantiate the nodes** you want to use
2.   Create the graph using **BaseGraph** class, which must have a **list of nodes**, tuples representing the **edges** of the graph, an **entry_point**
3.   Run it using the **execute** method
```python
"""
Example of custom graph using existing nodes
"""

from scrapegraphai.models import OpenAI
from scrapegraphai.graphs import BaseGraph
from scrapegraphai.nodes import FetchHTMLNode, ParseHTMLNode, GenerateAnswerNode

# Define the configuration for the language model
llm_config = {
    "api_key": OPENAI_API_KEY,
    "model_name": "gpt-3.5-turbo",
    "temperature": 0,
    "streaming": True
}
model = OpenAI(llm_config)

# define the nodes for the graph
fetch_html_node = FetchHTMLNode("fetch_html")
parse_document_node = ParseHTMLNode("parse_document")
generate_answer_node = GenerateAnswerNode(model, "generate_answer")

# create the graph
graph = BaseGraph(
    nodes={
        fetch_html_node,
        parse_document_node,
        generate_answer_node
    },
    edges={
        (fetch_html_node, parse_document_node),
        (parse_document_node, generate_answer_node)
    },
    entry_point=fetch_html_node
)

# execute the graph
inputs = {"user_input": "What is the title of the page?", "url": "https://example.com"}
result = graph.execute(inputs)

# get the answer from the result
answer = result.get("answer", "No answer found.")
print(answer)
```
```bash
Fetching pages: 100%|##########| 1/1 [00:00<00:00, 16.79it/s]
---PARSE HTML DOCUMENT---
No specific tags provided; returning document as is.
---GENERATE ANSWER---
{'title': 'Example Domain'}
```