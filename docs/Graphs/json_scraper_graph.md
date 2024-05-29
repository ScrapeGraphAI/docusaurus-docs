# JSONScraperGraph Module

The `JSONScraperGraph` module defines a class for creating and executing a graph that automates the process of extracting information from JSON files using a natural language model.

## Classes

### `JSONScraperGraph`

`JSONScraperGraph` defines a scraping pipeline for JSON files.

#### Attributes

- **prompt (str)**: The prompt for the graph.
- **source (str)**: The source of the graph.
- **config (dict)**: Configuration parameters for the graph.
- **schema (str)**: The schema for the graph output.
- **llm_model**: An instance of a language model client, configured for generating answers.
- **embedder_model**: An instance of an embedding model client, configured for generating embeddings.
- **verbose (bool)**: A flag indicating whether to show print statements during execution.
- **headless (bool)**: A flag indicating whether to run the graph in headless mode.
- **input_key (str)**: The key for the input source (either `json` or `json_dir`).
- **graph**: The graph of nodes representing the workflow for web scraping.
- **final_state**: The final state of the graph after execution.
- **execution_info**: Information about the execution of the graph.

#### Methods

- **`__init__(self, prompt: str, source: str, config: dict, schema: Optional[str] = None)`**
  - Initializes the `JSONScraperGraph` with a prompt, source, and configuration.
  - **Args**:
    - `prompt (str)`: The prompt for the graph.
    - `source (str)`: The source of the graph.
    - `config (dict)`: Configuration parameters for the graph.
    - `schema (Optional[str])`: The schema for the graph output.

- **`_create_graph(self) -> BaseGraph`**
  - Creates the graph of nodes representing the workflow for web scraping.
  - **Returns**: An instance of `BaseGraph`.

- **`run(self) -> str`**
  - Executes the web scraping process and returns the answer to the prompt.
  - **Returns**: The answer to the prompt.

## Example Usage

Here is an example of how to use the `JSONScraperGraph` class:

```python
from json_scraper_graph import JSONScraperGraph

# Define the prompt, source, and configuration
prompt = "List me all the attractions in Chioggia."
source = "data/chioggia.json"
config = {
    "llm": {"model": "gpt-3.5-turbo"},
    "verbose": True,
    "headless": False,
}

# Create the scraper graph
json_scraper = JSONScraperGraph(prompt, source, config)

# Run the scraper graph
result = json_scraper.run()

print(result)
