# 🐐 ParseNode Module

The `ParseNode` module implements a node responsible for parsing HTML content from a document and splitting it into chunks for further processing.

## Classes

### `ParseNode`

`ParseNode` is a node responsible for parsing HTML content from a document and splitting it into chunks for further processing.

#### Attributes

- **verbose (bool)**: A flag indicating whether to show print statements during execution.

#### Methods

- **`__init__(self, input: str, output: List[str], node_config: Optional[dict] = None, node_name: str = "Parse")`**
  - Initializes the `ParseNode` with a node name and other optional configurations.
  - **Args**:
    - `input (str)`: Boolean expression defining the input keys needed from the state.
    - `output (List[str])`: List of output keys to be updated in the state.
    - `node_config (dict, optional)`: Additional configuration for the node. Defaults to None.
    - `node_name (str, optional)`: The unique identifier name for the node. Defaults to "Parse".

- **`execute(self, state: dict) -> dict`**
  - Executes the node's logic to parse the HTML document content and split it into chunks.
  - **Args**:
    - `state (dict)`: The current state of the graph. The input keys will be used to fetch the correct data from the state.
  - **Returns**:
    - `dict`: The updated state with the output key containing the parsed content chunks.

#### Example Usage

Here is an example of how to use the `ParseNode` class:

```python
from parse_node import ParseNode

# Define a ParseNode
parse_node = ParseNode(
    input="document",
    output=["chunks"],
    node_config={"verbose": True, "parse_html": True},
    node_name="Parse"
)

# Define the state
state = {
    "document": ["<html><body><h1>Hello, world!</h1><p>This is a test.</p></body></html>"],
}

# Execute the ParseNode
state = parse_node.execute(state)

# Retrieve the parsed content chunks from the state
chunks = state["chunks"]

print(f"Parsed Chunks: {chunks}")
