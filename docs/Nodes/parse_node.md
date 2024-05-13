# ⛳️ ParseNode

## Introduction
Within the realm of text processing, the need often arises to extract specific content from documents. The `ParseNode` module serves this purpose by offering a robust mechanism for parsing HTML-like text and extracting the desired elements without relying on HTML parsing libraries like `BeautifulSoup`.

The implementation of the class is in this [link](https://github.com/VinciGit00/Scrapegraph-ai/blob/main/scrapegraphai/nodes/parse_node.py).

## Usage
```python
from scrapegraphai.models import Ollama
from scrapegraphai.nodes import ParseNode

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

parse_node = ParseNode(
    input="doc",
    output=["parsed_doc"],
    node_config={"chunk_size": 4096}
)
```
## Implementation
```python reference title="ParseNode"
https://github.com/VinciGit00/Scrapegraph-ai/blob/main/scrapegraphai/nodes/parse_node.py
```
