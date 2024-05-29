# 🦑 SearchInternetNode Module

The `SearchInternetNode` module implements a node that generates a search query based on the user's input and searches the internet for relevant information. The node constructs a prompt for the language model, submits it, and processes the output to generate a search query. It then uses the search query to find relevant information on the internet and updates the state with the generated answer.

## Classes

### `SearchInternetNode`

`SearchInternetNode` is a node that generates a search query based on the user's input and searches the internet for relevant information.

#### Attributes

- **llm_model**: An instance of the language model client used for generating search queries.
- **verbose (bool)**: A flag indicating whether to show print statements during execution.
- **max_results (int)**: Maximum number of search results to retrieve. Defaults to 3.

#### Methods

- **`__init__(self, input: str, output: List[str], node_config: Optional[dict] = None, node_name: str = "SearchInternet")`**
  - Initializes the `SearchInternetNode` with a node name and other optional configurations.
  - **Args**:
    - `input (str)`: Boolean expression defining the input keys needed from the state.
    - `output (List[str])`: List of output keys to be updated in the state.
    - `node_config (dict, optional)`: Additional configuration for the node. Defaults to None.
    - `node_name (str, optional)`: The unique identifier name for the node. Defaults to "SearchInternet".

- **`execute(self, state: dict) -> dict`**
  - Generates an answer by constructing a prompt from the user's input and the scraped content, querying the language model, and parsing its response. The method updates the state with the generated answer.
  - **Args**:
    - `state (dict)`: The current state of the graph. The input keys will be used to fetch the correct data types from the state.
  - **Returns**:
    - `dict`: The updated state with the output key containing the generated answer.
  - **Raises**:
    - `ValueError`: If the input keys are not found in the state, indicating that the necessary information for generating the answer is missing.

#### Example Usage

Here is an example of how to use the `SearchInternetNode` class:

```python
from search_internet_node import SearchInternetNode

# Define a SearchInternetNode
search_internet_node = SearchInternetNode(
    input="user_prompt",
    output=["search_results"],
    node_config={"llm_model": ..., "verbose": True, "max_results": 5},
    node_name="SearchInternet"
)

# Define the state
state = {
    "user_prompt": "How does climate change affect biodiversity?",
}

# Execute the SearchInternetNode
state = search_internet_node.execute(state)

# Retrieve the search results from the state
search_results = state["search_results"]

print("Search Results:")
for result in search_results:
    print(result)
