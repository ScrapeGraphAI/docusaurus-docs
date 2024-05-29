# 🐸 BaseNode Module

The `BaseNode` module provides an abstract base class for nodes in a graph-based workflow, designed to perform specific actions when executed.

## Classes

### `BaseNode`

`BaseNode` is an abstract base class for nodes in a graph-based workflow.

#### Attributes

- **node_name (str)**: The unique identifier name for the node.
- **input (str)**: Boolean expression defining the input keys needed from the state.
- **output (List[str])**: List of output keys to be updated in the state.
- **min_input_len (int)**: Minimum required number of input keys.
- **node_config (Optional[dict])**: Additional configuration for the node.
- **logger (logging.Logger)**: The centralized root logger.

#### Methods

- **`__init__(self, node_name: str, node_type: str, input: str, output: List[str], min_input_len: int = 1, node_config: Optional[dict] = None)`**
  - Initializes the `BaseNode` with a name, type, input specification, output specification, minimum input length, and configuration.
  - **Args**:
    - `node_name (str)`: Name for identifying the node.
    - `node_type (str)`: Type of the node; must be 'node' or 'conditional_node'.
    - `input (str)`: Expression defining the input keys needed from the state.
    - `output (List[str])`: List of output keys to be updated in the state.
    - `min_input_len (int, optional)`: Minimum required number of input keys; defaults to 1.
    - `node_config (Optional[dict], optional)`: Additional configuration for the node; defaults to None.
  - **Raises**:
    - `ValueError`: If `node_type` is not one of the allowed types.

- **`execute(self, state: dict) -> dict`**
  - Execute the node's logic based on the current state and update it accordingly.
  - **Args**:
    - `state (dict)`: The current state of the graph.
  - **Returns**:
    - `dict`: The updated state after executing the node's logic.

- **`update_config(self, params: dict, overwrite: bool = False)`**
  - Updates the node_config dictionary as well as attributes with the same key.
  - **Args**:
    - `param (dict)`: The dictionary to update node_config with.
    - `overwrite (bool)`: Flag indicating if the values of node_config should be overwritten if their value is not None.

- **`get_input_keys(self, state: dict) -> List[str]`**
  - Determines the necessary state keys based on the input specification.
  - **Args**:
    - `state (dict)`: The current state of the graph used to parse input keys.
  - **Returns**:
    - `List[str]`: A list of input keys required for node operation.
  - **Raises**:
    - `ValueError`: If an error occurs in parsing input keys.

#### Example Usage

Here is an example of how to use the `BaseNode` class:

```python
from base_node import BaseNode

# Define a custom node class
class MyNode(BaseNode):
    def execute(self, state):
        # Implementation of node logic here
        return state

# Instantiate the custom node
my_node = MyNode("ExampleNode", "node", "input_spec", ["output_spec"])

# Execute the node
updated_state = my_node.execute({'key': 'value'})

print(updated_state)
