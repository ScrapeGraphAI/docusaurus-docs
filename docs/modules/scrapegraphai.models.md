---
sidebar_position: 6
---

# scrapegraphai.models package

## Submodules

### Base Models

The base module provides abstract base classes and interfaces for all model types in the library.

```python
from scrapegraphai.models.base import BaseModel
```

### Embeddings Models

The embeddings module contains implementations for various text embedding models.

```python
from scrapegraphai.models.embeddings import OpenAIEmbeddings, OllamaEmbeddings
```

### LLM Models

The LLM module provides implementations for different large language models.

```python
from scrapegraphai.models.llm import OpenAIChat, OllamaLLM, GeminiChat
```

### Text-to-Speech Models

The TTS module contains implementations for text-to-speech models.

```python
from scrapegraphai.models.tts import OpenAITTS
``` 