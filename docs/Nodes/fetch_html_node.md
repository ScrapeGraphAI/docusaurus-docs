# FetchNode Module

The `FetchNode` module implements a node responsible for fetching the HTML content of a specified URL or loading various types of documents (such as JSON, XML, CSV, or PDF) and updating the graph's state with this content. It uses ChromiumLoader to fetch content from web pages asynchronously, ensuring proxy protection.

## Classes

### `FetchNode`

`FetchNode` is a node responsible for fetching the HTML content of a specified URL or loading various types of documents and updating the graph's state with this content.

#### Attributes

- **headless (bool)**: A flag indicating whether the browser should run in headless mode.
- **verbose (bool)**: A flag indicating whether to print verbose output during execution.

#### Methods

- **`__init__(self, input: str, output: List[str], node_config: Optional[dict] = None, node_name: str = "Fetch")`**
  - Initializes the node with the required input keys and output keys.
  - **Args**:
    - `input (str)`: Boolean expression defining the input keys needed from the state.
    - `output (List[str])`: List of output keys to be updated in the state.
    - `node_config (Optional[dict], optional)`: Additional configuration for the node.
    - `node_name (str, optional)`: The unique identifier name for the node. Defaults to "Fetch".

- **`execute(self, state)`**
  - Executes the node's logic to fetch HTML content from a specified URL or load various types of documents and update the state with this content.
  - **Args**:
    - `state (dict)`: The current state of the graph.
  - **Returns**:
    - `dict`: The updated state with a new output key containing the fetched HTML content.
  - **Raises**:
    - `KeyError`: If the input key is not found in the state, indicating that the necessary information to perform the operation is missing.

#### Example Usage

Here is an example of how to use the `FetchNode` class:

```python
from fetch_node import FetchNode

# Define a fetch node
fetch_node = FetchNode(
    input="url", 
    output=["fetched_content", "link_urls", "image_urls"]
)

# Define the state
state = {"url": "https://example.com"}

# Execute the fetch node
state = fetch_node.execute(state)

# Retrieve the fetched content and other information from the state
fetched_content = state["fetched_content"]
link_urls = state["link_urls"]
image_urls = state["image_urls"]

print(f"Fetched Content: {fetched_content}")
print(f"Link URLs: {link_urls}")
print(f"Image URLs: {image_urls}")
