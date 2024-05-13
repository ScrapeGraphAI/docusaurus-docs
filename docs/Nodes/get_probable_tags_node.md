# 💫 GetProbableTagsNode

## Introduction

The `GetProbableTagsNode` is an essential component of Scrapegraph-ai, designed to utilize a language model to identify probable HTML tags within a document that are likely to contain information relevant to a user's query. By generating a prompt describing the task, submitting it to the language model, and processing the output, this node produces a list of probable tags crucial for subsequent processing in the scraping workflow.

The implementation of the class is in this [link](https://github.com/VinciGit00/Scrapegraph-ai/blob/main/scrapegraphai/nodes/get_probable_tags_node.py).

## Usage
```python
from scrapegraphai.models import Ollama
from scrapegraphai.nodes import GetProbableTagsNode

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

get_probable_tags_node = GetProbableTagsNode(
    input="user_prompt & (parsed_doc | doc)",
    output=["relevant_chunks"],
    node_config={"llm": llm_model},
)
```

## Implementation
```python reference title="GetProbableTagsNode"
https://github.com/VinciGit00/Scrapegraph-ai/blob/main/scrapegraphai/nodes/get_probable_tags_node.py
```
