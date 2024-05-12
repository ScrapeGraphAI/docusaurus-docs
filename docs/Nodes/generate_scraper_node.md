# 🏀 GenerateScraperNode

## Introduction
The `GenerateScraperNode` class is designed to generate a response using a language model (LLM) based on user input and content extracted from a webpage. This node constructs a prompt by combining user input and the extracted content, then queries the language model to obtain a response. The response from the model is then interpreted and returned, updating the state with the generated answer.

The implementation of the class is in this [link](https://github.com/VinciGit00/Scrapegraph-ai/blob/main/scrapegraphai/nodes/generate_scraper_node.py).

## Usage
```python
from scrapegraphai.models import Ollama
from scrapegraphai.nodes import GenerateScraperNode

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

generateScraperNode= GenerateScraperNode(
    input="user_prompt & (parsed_doc | doc)",
    output=["relevant_chunks"],
    node_config={"llm": llm_model},
)
```
## Implementation
```python reference title="GenerateScraperNode"
https://github.com/VinciGit00/Scrapegraph-ai/blob/main/scrapegraphai/nodes/generate_scraper_node.py
```
