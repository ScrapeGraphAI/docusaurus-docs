# ⚾️ Base Graph

The `BaseGraph` module provides a class for managing and executing a graph composed of interconnected nodes.

## Classes

### `BaseGraph`

`BaseGraph` manages the execution flow of a graph composed of interconnected nodes.

#### Attributes

- **nodes (list)**: A list of node instances that will be part of the graph.
- **edges (list)**: A dictionary representing the directed edges of the graph where each key-value pair corresponds to the from-node and to-node relationship.
- **entry_point (str)**: The name of the entry point node from which the graph execution begins.
- **initial_state (dict)**: The initial state passed to the entry point node.
- **use_burr (bool)**: A flag indicating whether to use BurrBridge for execution.
- **burr_config (dict)**: Configuration parameters for BurrBridge.

#### Methods

- **`__init__(self, nodes: list, edges: list, entry_point: str, use_burr: bool = False, burr_config: dict = None)`**
  - Initializes the graph with the given nodes, edges, and entry point.
  - **Args**:
    - `nodes (list)`: An iterable of node instances that will be part of the graph.
    - `edges (list)`: An iterable of tuples where each tuple represents a directed edge in the graph, defined by a pair of nodes (from_node, to_node).
    - `entry_point (BaseNode)`: The node instance that represents the entry point of the graph.
    - `use_burr (bool)`: A flag indicating whether to use BurrBridge for execution.
    - `burr_config (dict)`: Configuration parameters for BurrBridge.
  - **Raises**:
    - `Warning`: If the entry point node is not the first node in the list.

- **`_create_edges(self, edges: list) -> dict`**
  - Helper method to create a dictionary of edges from the given iterable of tuples.
  - **Args**:
    - `edges (list)`: An iterable of tuples representing the directed edges.
  - **Returns**: A dictionary of edges with the from-node as keys and to-node as values.

- **`_execute_standard(self, initial_state: dict) -> Tuple[dict, list]`**
  - Executes the graph by traversing nodes starting from the entry point using the standard method.
  - **Args**:
    - `initial_state (dict)`: The initial state to pass to the entry point node.
  - **Returns**: A tuple containing the final state and a list of execution info.

- **`execute(self, initial_state: dict) -> Tuple[dict, list]`**
  - Executes the graph by either using BurrBridge or the standard method.
  - **Args**:
    - `initial_state (dict)`: The initial state to pass to the entry point node.
  - **Returns**: A tuple containing the final state and a list of execution info.

## Example Usage

Here is an example of how to use the `BaseGraph` class:

```python
from base_graph import BaseGraph

# Define your nodes and edges
fetch_node = ...
parse_node = ...
rag_node = ...
generate_answer_node = ...

# Create the graph
graph = BaseGraph(
    nodes=[fetch_node, parse_node, rag_node, generate_answer_node],
    edges=[
        (fetch_node, parse_node),
        (parse_node, rag_node),
        (rag_node, generate_answer_node)
    ],
    entry_point=fetch_node,
    use_burr=True,
    burr_config={"app_instance_id": "example-instance"}
)

# Execute the graph
initial_state = {}
final_state, exec_info = graph.execute(initial_state)

print(final_state)
print(exec_info)
