# SmartScraperGraph Module

The `SmartScraperGraph` module defines a class for creating and executing a graph that automates the process of extracting information from web pages using a natural language model to interpret and answer prompts.

## Classes

### `SmartScraperGraph`

`SmartScraperGraph` is a scraping pipeline that automates the process of extracting information from web pages using a natural language model to interpret and answer prompts.

#### Attributes

- **prompt (str)**: The prompt for the graph.
- **source (str)**: The source of the graph.
- **config (dict)**: Configuration parameters for the graph.
- **schema (str)**: The schema for the graph output.
- **llm_model**: An instance of a language model client, configured for generating answers.
- **embedder_model**: An instance of an embedding model client, configured for generating embeddings.
- **verbose (bool)**: A flag indicating whether to show print statements during execution.
- **headless (bool)**: A flag indicating whether to run the graph in headless mode.

#### Methods

- **`__init__(self, prompt: str, source: str, config: dict, schema: Optional[str] = None)`**
  - Initializes the `SmartScraperGraph` with a prompt, source, configuration, and schema.
  - **Args**:
    - `prompt (str)`: The prompt for the graph.
    - `source (str)`: The source of the graph.
    - `config (dict)`: Configuration parameters for the graph.
    - `schema (Optional[str])`: The schema for the graph output.

- **`_create_graph(self) -> BaseGraph`**
  - Creates the graph of nodes representing the workflow for web scraping.
  - **Returns**: An instance of `BaseGraph`.

- **`run(self) -> str`**
  - Executes the scraping process and returns the answer to the prompt.
  - **Returns**: The answer to the prompt.

## Example Usage

Here is an example of how to use the `SmartScraperGraph` class:

```python
from smart_scraper_graph import SmartScraperGraph

# Define the prompt, source, and configuration
prompt = "List me all the attractions in Chioggia."
source = "https://en.wikipedia.org/wiki/Chioggia"
config = {
    "llm": {"model": "gpt-3.5-turbo"}
}

# Create the smart scraper graph
smart_scraper = SmartScraperGraph(prompt, source, config)

# Run the smart scraper graph
result = smart_scraper.run()

print(result)
