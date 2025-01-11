---
sidebar_position: 1
---

# scrapegraphai

The main package containing all ScrapegraphAI functionality.

## Overview

ScrapegraphAI is organized into several submodules, each handling specific aspects of the scraping pipeline:

### Core Functionality
- [scrapegraphai.graphs](scrapegraphai.graphs.md) - Graph-based scraping pipelines
- [scrapegraphai.models](scrapegraphai.models.md) - LLM and embedding model implementations
- [scrapegraphai.nodes](scrapegraphai.nodes.md) - Building blocks for scraping graphs

### Support Modules
- [scrapegraphai.builders](scrapegraphai.builders.md) - Graph construction utilities
- [scrapegraphai.docloaders](scrapegraphai.docloaders.md) - Document loading and processing
- [scrapegraphai.helpers](scrapegraphai.helpers.md) - Helper functions and utilities
- [scrapegraphai.integrations](scrapegraphai.integrations.md) - Third-party service integrations
- [scrapegraphai.utils](scrapegraphai.utils.md) - General utility functions

## Installation

```bash
pip install scrapegraphai
```

## Basic Usage

```python
from scrapegraphai.graphs import SmartScraperGraph

# Create a scraper instance
scraper = SmartScraperGraph(
    prompt="Extract product information",
    source="https://example.com/products",
    config={
        "llm": {
            "model": "gpt-3.5-turbo"
        }
    }
)

# Run the scraper
result = scraper.run()
print(result)
``` 