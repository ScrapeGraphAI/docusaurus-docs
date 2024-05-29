# 😽 SearchGraph Module

The `SearchGraph` module defines a class for creating and executing a graph that searches the internet for answers to a given prompt.

## Classes

### `SearchGraph`

`SearchGraph` is a scraping pipeline that searches the internet for answers to a given prompt. It only requires a user prompt to search the internet and generate an answer.

#### Attributes

- **prompt (str)**: The user prompt to search the internet.
- **llm_model (dict)**: The configuration for the language model.
- **embedder_model (dict)**: The configuration for the embedder model.
- **headless (bool)**: A flag to run the browser in headless mode.
- **verbose (bool)**: A flag to display the execution information.
- **model_token (int)**: The token limit for the language model.

#### Methods

- **`__init__(self, prompt: str, config: dict, schema: Optional[str] = None)`**
  - Initializes the `SearchGraph` with a prompt, configuration, and schema.
  - **Args**:
    - `prompt (str)`: The user prompt to search the internet.
    - `config (dict)`: Configuration parameters for the graph.
    - `schema (Optional[str])`: The schema for the graph output.

- **`_create_graph(self) -> BaseGraph`**
  - Creates the graph of nodes representing the workflow for web scraping and searching.
  - **Returns**: An instance of `BaseGraph`.

- **`run(self) -> str`**
  - Executes the web scraping and searching process.
  - **Returns**: The answer to the prompt.

## Example Usage

Here is an example of how to use the `SearchGraph` class:

```python
from search_graph import SearchGraph

# Define the prompt and configuration
prompt = "What is Chioggia famous for?"
config = {
    "llm": {"model": "gpt-3.5-turbo"}
}

# Create the search graph
search_graph = SearchGraph(prompt, config)

# Run the search graph
result = search_graph.run()

print(result)
