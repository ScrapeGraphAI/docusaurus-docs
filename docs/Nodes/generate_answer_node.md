# 🐝 GenerateAnswerNode

## Introduction
The `GenerateAnswerNode` plays a crucial role within Scrapegraph-ai by utilizing a language model (LLM) to generate answers based on the user's input and the content extracted from a webpage. This node constructs a prompt from the user's input and the scraped content, feeds it to the language model, and parses the model's response to produce a coherent answer.

The implementation of the class is in this [link](https://github.com/VinciGit00/Scrapegraph-ai/blob/main/scrapegraphai/nodes/generate_answer_node.py).

## Usage
```python
from scrapegraphai.models import Ollama
from scrapegraphai.nodes import GenerateAnswerNode

graph_config = {
    "llm": {
        "model": "ollama/mistral",
        "temperature": 0,
        "format": "json",  # Ollama needs the format to be specified explicitly
        # "model_tokens": 2000, # set context length arbitrarily
        "base_url": "http://localhost:11434",
    },
    "embeddings": {
        "model": "ollama/nomic-embed-text",
        "temperature": 0,
        "base_url": "http://localhost:11434",
    }
}

llm_model = Ollama(graph_config["llm"])

generate_answer_node = GenerateAnswerNode(
    input="user_prompt & (relevant_chunks | parsed_doc | doc)",
    output=["answer"],
    node_config={"llm": llm_model},
)
```


## Implementation
```python reference title="GenerateAnswerNode"
https://github.com/VinciGit00/Scrapegraph-ai/blob/main/scrapegraphai/nodes/generate_answer_node.py
```
