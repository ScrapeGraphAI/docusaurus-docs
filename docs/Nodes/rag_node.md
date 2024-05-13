# 🪿 RagNode

## Introduction
The `RAGNode` is a vital component in the language chain framework, specializing in parsing HTML content from documents. It efficiently extracts relevant information using user-defined tags, enhancing the processing of large HTML documents. By integrating parsing techniques like `BeautifulSoupTransformer`, the `RAGNode` optimizes document processing pipelines, contributing to improved efficiency and effectiveness in text processing tasks.

The implementation of the class is in this [link](https://github.com/VinciGit00/Scrapegraph-ai/blob/main/scrapegraphai/nodes/rag_node.py).

## Usage
```python
from scrapegraphai.models import Ollama
from scrapegraphai.nodes import RAGNode

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

rag_node = RAGNode(
    input="user_prompt & (parsed_doc | doc)",
    output=["relevant_chunks"],
    node_config={"llm": llm_model},
)
```

## Implementation
```python reference title="RAGNode"
https://github.com/VinciGit00/Scrapegraph-ai/blob/main/scrapegraphai/nodes/rag_node.py
```
