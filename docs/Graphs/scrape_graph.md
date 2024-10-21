# 🕷️ ScrapeGraph Module

The `ScrapeGraph` module defines a class for creating and executing a graph that scrapes a single URL and generates an answer to a given prompt.

## Classes

### `ScrapeGraph`

`ScrapeGraph` is a scraping pipeline that scrapes a single URL and generates an answer to a given prompt. It requires a user prompt and a source URL.

#### Attributes

- **prompt (str)**: The user prompt to search the internet.
- **source (str)**: The URL to scrape.
- **config (dict)**: Configuration parameters for the graph.
- **schema (Optional[str])**: The schema for the graph output.
- **llm_model**: An instance of a language model client, configured for generating answers.
- **embedder_model**: An instance of an embedding model client, configured for generating embeddings.
- **verbose (bool)**: A flag indicating whether to show print statements during execution.
- **headless (bool)**: A flag indicating whether to run the graph in headless mode.

#### Methods

- **`__init__(self, prompt: str, source: str, config: dict, schema: Optional[str] = None)`**
  - Initializes the `ScrapeGraph` with a prompt, source URL, configuration, and schema.

- **`_create_graph(self) -> BaseGraph`**
  - Creates the graph of nodes representing the workflow for web scraping and answer generation.
  - **Returns**: An instance of `BaseGraph`.

- **`run(self) -> str`**
  - Executes the web scraping and answer generation process.
  - **Returns**: The answer to the prompt.

