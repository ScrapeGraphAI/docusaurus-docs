# ⚾️ csv scraper graph 

The `CSVScraperGraph` module provides a class for creating and executing a graph that automates the process of extracting information from web pages using a natural language model.

## Classes

### `CSVScraperGraph`

`CSVScraperGraph` is a comprehensive web scraping tool that automates the process of extracting information from web pages using a natural language model to interpret and answer prompts.

#### Attributes

- **prompt (str)**: The prompt for the graph.
- **source (str)**: The source of the graph.
- **config (dict)**: Configuration parameters for the graph.
- **schema (Optional[str])**: The schema for the graph output.
- **input_key (str)**: The key for the input source (either `csv` or `csv_dir`).
- **llm_model**: An instance of a language model client, configured for generating answers.
- **embedder_model**: An instance of an embedding model client, configured for generating embeddings.
- **verbose (bool)**: A flag indicating whether to show print statements during execution.
- **headless (bool)**: A flag indicating whether to run the graph in headless mode.
- **loader_kwargs**: Additional keyword arguments for the loader.
- **graph**: The graph of nodes representing the workflow for web scraping.
- **final_state**: The final state of the graph after execution.
- **execution_info**: Information about the execution of the graph.

#### Methods

- **`__init__(self, prompt: str, source: str, config: dict, schema: Optional[str] = None)`**
  - Initializes the `CSVScraperGraph` with a prompt, source, and configuration.
  - **Args**:
    - `prompt (str)`: The prompt for the graph.
    - `source (str)`: The source of the graph.
    - `config (dict)`: Configuration parameters for the graph.
    - `schema (Optional[str])`: The schema for the graph output.

- **`_create_graph(self)`**
  - Creates the graph of nodes representing the workflow for web scraping.
  - **Returns**: An instance of `BaseGraph`.

- **`run(self) -> str`**
  - Executes the web scraping process and returns the answer to the prompt.
  - **Returns**: The answer to the prompt.

## Example Usage

Here is an example of how to use the `CSVScraperGraph` class:

```python
from csv_scraper_graph import CSVScraperGraph

# Define the prompt, source, and configuration
prompt = "Extract information from this CSV."
source = "data.csv"
config = {
    "llm": {"model": "gpt-3.5-turbo"},
    "verbose": True,
    "headless": False,
}

# Create the scraper graph
scraper_graph = CSVScraperGraph(prompt, source, config)

# Run the scraper graph
answer = scraper_graph.run()

print(answer)
