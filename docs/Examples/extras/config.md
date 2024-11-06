# ScrapeGraph-AI Configuration Documentation

## Overview
This document details all possible configurations for ScrapeGraph-AI graphs. The configuration is passed as a dictionary to the graph constructor.

## Basic Structure
```python
graph_config = {
    "llm": {
        # LLM-specific configurations
    },
    # General graph configurations
}
```

## LLM Configurations

### OpenAI
```python
"llm": {
    "api_key": "your_openai_api_key",
    "model": "openai/gpt-4",  # or other OpenAI models
    "temperature": 0.7  # optional
}
```

### Google Vertex AI / Gemini
```python
"llm": {
    "api_key": "your_gemini_api_key",
    "model": "google_vertexai/gemini-1.5-pro",
    "temperature": 0,
    "streaming": True  # optional
}
```

### Anthropic
```python
"llm": {
    "api_key": "your_anthropic_api_key",
    "model": "anthropic/claude-3-haiku-20240307"
}
```

### Ollama (Local Models)
```python
"llm": {
    "model": "ollama/mistral",
    "temperature": 0,
    "format": "json",
    "base_url": "http://localhost:11434",  # optional
    "model_tokens": 2000  # optional
}
```

## General Configurations

### Verbosity and Browser Control
```python
"verbose": True,  # Enable detailed logging
"headless": False  # Control browser visibility in scraping
```
