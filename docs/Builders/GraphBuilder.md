# 💫 Graph Builder
# GraphBuilder Module

The `GraphBuilder` module constructs web scraping graphs based on user prompts. It uses a natural language understanding model to interpret user prompts and generate a graph configuration for scraping web content.

## Classes

### `GraphBuilder`

`GraphBuilder` is a dynamic tool for constructing web scraping graphs based on user prompts.

#### Attributes

- **prompt (str)**: The user's natural language prompt for the scraping task.
- **llm (ChatOpenAI)**: An instance of the `ChatOpenAI` class configured with the specified `llm_config`.
- **nodes_description (str)**: A string description of all available nodes and their arguments.
- **chain (LLMChain)**: The extraction chain responsible for processing the prompt and creating the graph.

#### Methods

- **`__init__(self, user_prompt: str, config: dict)`**
  - Initializes the `GraphBuilder` with a user prompt and language model configuration.

- **`_create_llm(self, llm_config: dict)`**
  - Creates an instance of the `OpenAI` class with the provided language model configuration.
  - **Returns**: `OpenAI` - An instance of the `OpenAI` class.
  - **Raises**: `ValueError` - If 'api_key' is not provided in `llm_config`.

- **`_generate_nodes_description(self)`**
  - Generates a string description of all available nodes and their arguments.
  - **Returns**: `str` - A string description of all available nodes and their arguments.

- **`_create_extraction_chain(self)`**
  - Creates an extraction chain for processing the user prompt and generating the graph configuration.
  - **Returns**: `LLMChain` - An instance of the `LLMChain` class.

- **`build_graph(self)`**
  - Executes the graph creation process based on the user prompt and returns the graph configuration.
  - **Returns**: `dict` - A JSON representation of the graph configuration.

- **`convert_json_to_graphviz(json_data, format: str = 'pdf')`**
  - Converts a JSON graph configuration to a Graphviz object for visualization.
  - **Args**:
    - `json_data (dict)`: A JSON representation of the graph configuration.
    - `format (str)`: The output format of the Graphviz object. Defaults to 'pdf'.
  - **Returns**: `graphviz.Digraph` - A Graphviz object representing the graph configuration.

#### Args

- **prompt (str)**: The user's natural language prompt describing the desired scraping operation.
- **url (str)**: The target URL from which data is to be scraped.
- **llm_config (dict)**: Configuration parameters for the language model, where 'api_key' is mandatory, and 'model_name', 'temperature', and 'streaming' can be optionally included.

#### Raises

- **ValueError**: If 'api_key' is not included in `llm_config`.

## Example Usage

Here is an example of how to use the `GraphBuilder` class:

```python
from scrapegraphai.builders.graph_builder import GraphBuilder

# Define user prompt and configuration
user_prompt = "Scrape all article titles and publish dates from the homepage"
config = {
    "llm": {
        "api_key": "your_api_key_here",
        "model_name": "gpt-3.5-turbo",
        "temperature": 0.7,
        "streaming": False
    }
}

# Initialize GraphBuilder
graph_builder = GraphBuilder(user_prompt, config)

# Build the graph
graph_config = graph_builder.build_graph()

# Convert graph config to Graphviz for visualization
graphviz_graph = GraphBuilder.convert_json_to_graphviz(graph_config)

# Render the graph to a file
graphviz_graph.render(filename='graph', format='pdf')
