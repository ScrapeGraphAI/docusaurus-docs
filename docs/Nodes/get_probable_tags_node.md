# 🦆 GetProbableTagsNode Module

The `GetProbableTagsNode` module implements a node responsible for utilizing a language model to identify probable HTML tags within a document that are likely to contain the information relevant to a user's query. This node generates a prompt describing the task, submits it to the language model, and processes the output to produce a list of probable tags.

## Classes

### `GetProbableTagsNode`

`GetProbableTagsNode` is a node responsible for utilizing a language model to identify probable HTML tags within a document that are likely to contain the information relevant to a user's query.

#### Attributes

- **llm_model**: An instance of the language model client used for tag predictions.
- **verbose (bool)**: A flag indicating whether to show print statements during execution.

#### Methods

- **`__init__(self, input: str, output: List[str], node_config: dict, node_name: str = "GetProbableTags")`**
  - Initializes the `GetProbableTagsNode` with a language model client and a node name.
  - **Args**:
    - `input (str)`: Boolean expression defining the input keys needed from the state.
    - `output (List[str])`: List of output keys to be updated in the state.
    - `node_config (dict)`: Additional configuration for the language model.
    - `node_name (str, optional)`: The unique identifier name for the node. Defaults to "GetProbableTags".

- **`execute(self, state: dict) -> dict`**
  - Generates a list of probable HTML tags based on the user's input and updates the state with this list.
  - **Args**:
    - `state (dict)`: The current state of the graph. The input keys will be used to fetch the correct data types from the state.
  - **Returns**:
    - `dict`: The updated state with the input key containing a list of probable HTML tags.
  - **Raises**:
    - `KeyError`: If input keys are not found in the state, indicating that the necessary information for generating tag predictions is missing.

#### Example Usage

Here is an example of how to use the `GetProbableTagsNode` class:

```python
from get_probable_tags_node import GetProbableTagsNode

# Define a GetProbableTagsNode
get_probable_tags_node = GetProbableTagsNode(
    input="user_input & document",
    output=["probable_tags"],
    node_config={"llm_model": llm_model},
    node_name="GetProbableTags"
)

# Define the state
state = {
    "user_input": "What tags contain relevant information for the query?",
    "document": [document],
    "url": "https://example.com"
}

# Execute the GetProbableTagsNode
state = get_probable_tags_node.execute(state)

# Retrieve the probable tags from the state
probable_tags = state["probable_tags"]

print(f"Probable Tags: {probable_tags}")
