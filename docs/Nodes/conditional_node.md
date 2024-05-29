# ConditionalNode Module

The `ConditionalNode` module implements a node that determines the next step in the graph's execution flow based on the presence and content of a specified key in the graph's state. It extends the `BaseNode` class by adding condition-based logic to the execution process.

## Classes

### `ConditionalNode`

`ConditionalNode` is a node that determines the next step in the graph's execution flow based on the presence and content of a specified key in the graph's state.

#### Attributes

- **key_name (str)**: The name of the key in the state to check for its presence.

#### Methods

- **`__init__(self, key_name: str, node_name="ConditionalNode")`**
  - Initializes the node with the key to check and the next node names based on the condition.
  - **Args**:
    - `key_name (str)`: The name of the key to check in the graph's state.
    - `node_name (str, optional)`: The unique identifier name for the node. Defaults to "ConditionalNode".

- **`execute(self, state: dict) -> dict`**
  - Checks if the specified key is present in the state and decides the next node accordingly.
  - **Args**:
    - `state (dict)`: The current state of the graph.
  - **Returns**:
    - `str`: The name of the next node to execute based on the presence of the key.

#### Example Usage

Here is an example of how to use the `ConditionalNode` class:

```python
from conditional_node import ConditionalNode

# Define a conditional node to check for the presence of a key
conditional_node = ConditionalNode("example_key")

# Define the next nodes based on the condition
next_node_true = "NextNodeTrue"
next_node_false = "NextNodeFalse"

# Execute the conditional node
state = {"example_key": "value"}
state = conditional_node.execute(state)

# Determine the next node based on the condition
next_node_name = next_node_true if state["next_node"] == 0 else next_node_false

print(f"Next node to execute: {next_node_name}")
