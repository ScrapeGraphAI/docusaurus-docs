# 🧚🏻‍♂️ SmartScraperMultiLiteGraph Module

The `SmartScraperMultiLiteGraph` module defines a class for creating and executing a graph that scrapes multiple URLs and generates answers to a given prompt. This is a lightweight version of the `SmartScraperMultiGraph`.

## Classes

### `SmartScraperMultiLiteGraph`

`SmartScraperMultiLiteGraph` is a scraping pipeline that scrapes multiple URLs and generates answers to a given prompt. It only requires a user prompt and a list of URLs.

#### Attributes

- **prompt (str)**: The user prompt to search the internet.
- **source (List[str])**: The list of URLs to scrape.
- **config (dict)**: Configuration parameters for the graph.
- **schema (Optional[str])**: The schema for the graph output.
- **llm_model**: An instance of a language model client, configured for generating answers.
- **embedder_model**: An instance of an embedding model client, configured for generating embeddings.
- **verbose (bool)**: A flag indicating whether to show print statements during execution.
- **headless (bool)**: A flag indicating whether to run the graph in headless mode.

#### Methods

- **`__init__(self, prompt: str, source: List[str], config: dict, schema: Optional[str] = None)`**
  - Initializes the `SmartScraperMultiLiteGraph` with a prompt, source (list of URLs), configuration, and schema.

- **`_create_graph(self) -> BaseGraph`**
  - Creates the graph of nodes representing the workflow for web scraping and searching.
  - **Returns**: An instance of `BaseGraph`.

- **`run(self) -> str`**
  - Executes the web scraping and searching process.
  - **Returns**: The answer to the prompt.
