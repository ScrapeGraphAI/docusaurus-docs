# SmartScraperMultiGraph Module

The `SmartScraperMultiGraph` module defines a class for creating and executing a graph that scrapes a list of URLs and generates answers to a given prompt.

## Classes

### `SmartScraperMultiGraph`

`SmartScraperMultiGraph` is a scraping pipeline that scrapes a list of URLs and generates answers to a given prompt. It only requires a user prompt and a list of URLs.

#### Attributes

- **prompt (str)**: The user prompt to search the internet.
- **llm_model (dict)**: The configuration for the language model.
- **embedder_model (dict)**: The configuration for the embedder model.
- **headless (bool)**: A flag to run the browser in headless mode.
- **verbose (bool)**: A flag to display the execution information.
- **model_token (int)**: The token limit for the language model.

#### Methods

- **`__init__(self, prompt: str, source: List[str], config: dict, schema: Optional[str] = None)`**
  - Initializes the `SmartScraperMultiGraph` with a prompt, source (list of URLs), configuration, and schema.
  - **Args**:
    - `prompt (str)`: The user prompt to search the internet.
    - `source (List[str])`: The source of the graph (list of URLs).
    - `config (dict)`: Configuration parameters for the graph.
    - `schema (Optional[str])`: The schema for the graph output.

- **`_create_graph(self) -> BaseGraph`**
  - Creates the graph of nodes representing the workflow for web scraping and searching.
  - **Returns**: An instance of `BaseGraph`.

- **`run(self) -> str`**
  - Executes the web scraping and searching process.
  - **Returns**: The answer to the prompt.

## Example Usage

Here is an example of how to use the `SmartScraperMultiGraph` class:

```python
from smart_scraper_multi_graph import SmartScraperMultiGraph

# Define the prompt, source (list of URLs), and configuration
prompt = "What is Chioggia famous for?"
source = ["https://en.wikipedia.org/wiki/Chioggia", "https://example.com"]
config = {
    "llm": {"model": "gpt-3.5-turbo"}
}

# Create the smart scraper multi graph
smart_scraper_multi = SmartScraperMultiGraph(prompt, source, config)

# Run the smart scraper multi graph
result = smart_scraper_multi.run()

print(result)
