# 🦷 ScriptCreatorGraph Module

The `ScriptCreatorGraph` module defines a class for creating and executing a graph that generates web scraping scripts.

## Classes

### `ScriptCreatorGraph`

`ScriptCreatorGraph` defines a scraping pipeline for generating web scraping scripts.

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
- **library (str)**: The library used for web scraping.

#### Methods

- **`__init__(self, prompt: str, source: str, config: dict, schema: Optional[str] = None)`**
  - Initializes the `ScriptCreatorGraph` with a prompt, source, configuration, and schema.
  - **Args**:
    - `prompt (str)`: The prompt for the graph.
    - `source (str)`: The source of the graph.
    - `config (dict)`: Configuration parameters for the graph.
    - `schema (str)`: The schema for the graph output.

- **`_create_graph(self) -> BaseGraph`**
  - Creates the graph of nodes representing the workflow for generating web scraping scripts.
  - **Returns**: An instance of `BaseGraph`.

- **`run(self) -> str`**
  - Executes the web scraping process and returns the answer to the prompt.
  - **Returns**: The answer to the prompt.

## Example Usage

Here is an example of how to use the `ScriptCreatorGraph` class:

```python
from script_creator_graph import ScriptCreatorGraph

# Define the prompt, source, and configuration
prompt = "List me all the attractions in Chioggia."
source = "https://en.wikipedia.org/wiki/Chioggia"
config = {
    "llm": {"model": "gpt-3.5-turbo"},
    "library": "BeautifulSoup"
}

# Create the script creator graph
script_creator = ScriptCreatorGraph(prompt, source, config)

# Run the script creator graph
result = script_creator.run()

print(result)
