# OmniSearchGraph Module

The `OmniSearchGraph` module defines a class for creating and executing a graph that searches the internet for answers to a given prompt. It combines web scraping and internet searching to generate an answer based on the user's query.

## Classes

### `OmniSearchGraph`

`OmniSearchGraph` is a scraping pipeline that searches the internet for answers to a given prompt. It only requires a user prompt to search the internet and generate an answer.

#### Attributes

- **prompt (str)**: The user prompt to search the internet.
- **llm_model (dict)**: The configuration for the language model.
- **embedder_model (dict)**: The configuration for the embedder model.
- **headless (bool)**: A flag to run the browser in headless mode.
- **verbose (bool)**: A flag to display the execution information.
- **model_token (int)**: The token limit for the language model.
- **max_results (int)**: The maximum number of results to return.
- **input_key (str)**: The key for the input source (either `url` or `local_dir`).
- **graph**: The graph of nodes representing the workflow for web scraping and searching.
- **final_state**: The final state of the graph after execution.
- **execution_info**: Information about the execution of the graph.

#### Methods

- **`__init__(self, prompt: str, config: dict, schema: Optional[str] = None)`**
  - Initializes the `OmniSearchGraph` with a prompt, configuration, and schema.
  - **Args**:
    - `prompt (str)`: The user prompt to search the internet.
    - `config (dict)`: Configuration parameters for the graph.
    - `schema (Optional[str])`: The schema for the graph output.

- **`_create_graph(self) -> BaseGraph`**
  - Creates the graph of nodes representing the workflow for web scraping and searching.
  - **Returns**: An instance of `BaseGraph`.

- **`run(self) -> str`**
  - Executes the web scraping and searching process and returns the answer to the prompt.
  - **Returns**: The answer to the prompt.

## Example Usage

Here is an example of how to use the `OmniSearchGraph` class:

```python
from omni_search_graph import OmniSearchGraph

# Define the prompt and configuration
prompt = "What is Chioggia famous for?"
config = {
    "llm": {"model": "gpt-4o"},
    "max_results": 5,
    "headless": False,
}

# Create the search graph
omni_search = OmniSearchGraph(prompt, config)

# Run the search graph
result = omni_search.run()

print(result)
