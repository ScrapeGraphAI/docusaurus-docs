---
sidebar_position: 1
---

# ScrapegraphAI Package

ScrapegraphAI is a Python library that provides a flexible and powerful framework for web scraping using Large Language Models (LLMs). The library is organized into several subpackages, each handling specific functionality:

## Core Packages

### [Graphs](scrapegraphai.graphs.md)
The main scraping pipelines and graph implementations:
```python
from scrapegraphai.graphs import SmartScraperGraph, SearchGraph
```

### [Models](scrapegraphai.models.md)
LLM, embedding, and TTS model implementations:
```python
from scrapegraphai.models import OpenAIChat, OllamaEmbeddings
```

### [Nodes](scrapegraphai.nodes.md)
Building blocks for creating scraping graphs:
```python
from scrapegraphai.nodes import LLMNode, HTMLProcessingNode
```

## Support Packages

### [Builders](scrapegraphai.builders.md)
Helper functions for constructing graphs:
```python
from scrapegraphai.builders import build_basic_graph
```

### [DocLoaders](scrapegraphai.docloaders.md)
Document loading and processing utilities:
```python
from scrapegraphai.docloaders import WebLoader, PDFLoader
```

### [Helpers](scrapegraphai.helpers.md)
Various helper functions and utilities:
```python
from scrapegraphai.helpers import setup_logging, validate_config
```

### [Integrations](scrapegraphai.integrations.md)
Third-party service integrations:
```python
from scrapegraphai.integrations import GoogleSearch, ProxyRotator
```

### [Utils](scrapegraphai.utils.md)
General utility functions:
```python
from scrapegraphai.utils import clean_html, count_tokens
``` 