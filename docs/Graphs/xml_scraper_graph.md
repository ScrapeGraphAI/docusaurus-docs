# XMLScraperGraph Module

The `XMLScraperGraph` module defines a class for creating and executing a graph that extracts information from XML files using a natural language model to interpret and answer prompts.

## Classes

### `XMLScraperGraph`

`XMLScraperGraph` is a scraping pipeline that extracts information from XML files using a natural language model to interpret and answer prompts.

#### Attributes

- **prompt (str)**: The prompt for the graph.
- **source (str)**: The source of the graph.
- **config (dict)**: Configuration parameters for the graph.
- **schema (str)**: The schema for the graph output.
- **llm_model**: An instance of a language model client, configured for generating answers.
- **embedder_model**: An instance of an embedding model client, configured for generating embeddings.
- **verbose (bool)**: A flag indicating whether to show print statements during execution.
- **headless (bool)**: A flag indicating whether to run the graph in headless mode.
- **model_token (int)**: The token limit for the language model.

#### Methods

- **`__init__(self, prompt: str, source: str, config: dict, schema: Optional[str] = None)`**
  - Initializes the `XMLScraperGraph` with a prompt, source (XML file or directory), configuration, and schema.
  - **Args**:
    - `prompt (str)`: The prompt for the graph.
    - `source (str)`: The source of the graph (XML file or directory).
    - `config (dict)`: Configuration parameters for the graph.
    - `schema (Optional[str])`: The schema for the graph output.

- **`_create_graph(self) -> BaseGraph`**
  - Creates the graph of nodes representing the workflow for web scraping.
  - **Returns**: An instance of `BaseGraph`.

- **`run(self) -> str`**
  - Executes the web scraping process and returns the answer to the prompt.
  - **Returns**: The answer to the prompt.

## Example Usage

Here is an example of how to use the `XMLScraperGraph` class:

```python
from xml_scraper_graph import XMLScraperGraph

# Define the prompt, source (XML file or directory), and configuration
prompt = "List me all the attractions in Chioggia."
source = "data/chioggia.xml"
config = {
    "llm": {"model": "gpt-3.5-turbo"}
}

# Create the XML scraper graph
xml_scraper = XMLScraperGraph(prompt, source, config)

# Run the XML scraper graph
result = xml_scraper.run()

print(result)
