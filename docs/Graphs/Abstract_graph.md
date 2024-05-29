# 🆎 Abstract Graph

The `AbstractGraph` module provides a scaffolding class for creating a graph representation and executing it.

## Classes

### `AbstractGraph`

`AbstractGraph` is an abstract base class for creating and executing graph representations. It defines the structure and behavior for a graph-based execution model.

#### Attributes

- **prompt (str)**: The prompt for the graph.
- **source (Optional[str])**: The source of the graph.
- **config (dict)**: Configuration parameters for the graph.
- **schema (Optional[str])**: The schema for the graph output.
- **llm_model**: An instance of a language model client, configured for generating answers.
- **embedder_model**: An instance of an embedding model client, configured for generating embeddings.
- **verbose (bool)**: A flag indicating whether to show print statements during execution.
- **headless (bool)**: A flag indicating whether to run the graph in headless mode.

#### Methods

- **`__init__(self, prompt: str, config: dict, source: Optional[str] = None, schema: Optional[str] = None)`**
  - Initializes the graph with the given prompt and configuration.
  - **Args**:
    - `prompt (str)`: The prompt for the graph.
    - `config (dict)`: Configuration parameters for the graph.
    - `source (Optional[str])`: The source of the graph.
    - `schema (Optional[str])`: The schema for the graph output.

- **`set_common_params(self, params: dict, overwrite=False)`**
  - Passes common parameters to every node in the graph unless otherwise defined.
  - **Args**:
    - `params (dict)`: Common parameters and their values.
    - `overwrite (bool)`: Whether to overwrite existing parameters.

- **`_set_model_token(self, llm)`**
  - Sets the model token based on the type of language model.

- **`_create_llm(self, llm_config: dict, chat=False) -> object`**
  - Creates a large language model instance based on the configuration provided.
  - **Args**:
    - `llm_config (dict)`: Configuration parameters for the language model.
    - `chat (bool)`: Whether the model is used for chat.
  - **Returns**: An instance of the language model client.

- **`_create_default_embedder(self, llm_config=None) -> object`**
  - Creates a default embedding model instance based on the chosen LLM model.
  - **Returns**: An instance of the embedding model client.

- **`_create_embedder(self, embedder_config: dict) -> object`**
  - Creates an embedding model instance based on the configuration provided.
  - **Args**:
    - `embedder_config (dict)`: Configuration parameters for the embedding model.
  - **Returns**: An instance of the embedding model client.

- **`get_state(self, key=None) -> dict`**
  - Retrieves the final state of the graph.
  - **Args**:
    - `key (Optional[str])`: The key of the final state to retrieve.
  - **Returns**: The final state of the graph.

- **`get_execution_info(self)`**
  - Returns the execution information of the graph.
  - **Returns**: The execution information of the graph.

- **`_create_graph(self)`**
  - Abstract method to create a graph representation.
  - **Returns**: A graph representation.

- **`run(self) -> str`**
  - Abstract method to execute the graph and return the result.
  - **Returns**: The result of executing the graph.

## Example Usage

Here is an example of how to use the `AbstractGraph` class:

```python
from abstract_graph import AbstractGraph

class MyGraph(AbstractGraph):
    def _create_graph(self):
        # Implementation of graph creation here
        return graph
    
    def run(self):
        # Implementation of graph execution here
        return "Result"

my_graph = MyGraph("Example Graph", {"llm": {"model": "gpt-3.5-turbo"}}, "example_source")
result = my_graph.run()
print(result)
