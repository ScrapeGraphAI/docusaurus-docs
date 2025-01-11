---
sidebar_position: 2
---

# scrapegraphai package

## Package Structure

ScrapegraphAI is organized into several key packages:

```
scrapegraphai/
├── graphs/          # Graph-based scraping pipelines
├── models/          # LLM and embedding implementations
├── nodes/           # Graph building blocks
├── builders/        # Graph construction utilities
├── docloaders/      # Document loading and processing
├── helpers/         # Helper functions
├── integrations/    # Third-party integrations
└── utils/          # Utility functions
```

Each package serves a specific purpose in the scraping pipeline:

- **graphs**: Contains the main scraping pipeline implementations
- **models**: Provides interfaces to various LLM and embedding models
- **nodes**: Defines the building blocks used to construct scraping graphs
- **builders**: Offers utilities for constructing custom graphs
- **docloaders**: Handles loading and processing of various document types
- **helpers**: Contains helper functions used throughout the library
- **integrations**: Manages integrations with third-party services
- **utils**: Provides general utility functions

For detailed information about each package, see their respective documentation pages. 