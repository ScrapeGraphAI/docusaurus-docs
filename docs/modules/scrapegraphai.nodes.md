---
sidebar_position: 7
---

# scrapegraphai.nodes package

## Graph Nodes

### Base Nodes

The fundamental building blocks for creating graph nodes:

```python
from scrapegraphai.nodes import BaseNode, InputNode, OutputNode
```

### Processing Nodes

Nodes for processing and transforming data:

```python
from scrapegraphai.nodes import TextProcessingNode, HTMLProcessingNode
```

### LLM Nodes

Nodes that interact with language models:

```python
from scrapegraphai.nodes import LLMNode, EmbeddingNode
```

### Specialized Nodes

Nodes for specific tasks:

```python
from scrapegraphai.nodes import SearchNode, ScriptGeneratorNode, TTSNode
``` 