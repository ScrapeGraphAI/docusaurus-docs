# 🐔 PromptRefinerNode Module

The `PromptRefinerNode` module refines the user's initial prompt using the output schema and any additional provided context. It aims to create a more precise prompt that establishes explicit links between elements in the user's original input and their corresponding representations in the JSON schema.

## Classes

### `PromptRefinerNode`

`PromptRefinerNode` refines the user's prompt using the output schema and any additional provided context.

#### Attributes

- **llm_model**: An instance of a language model client, configured for generating answers.
- **verbose (bool)**: A flag indicating whether to show print statements during execution.
- **additional_info**: Additional context to help the language model better understand the request.
- **output_schema**: The output schema to be used for prompt refinement.

#### Methods

- **`__init__(self, input: str, output: List[str], node_config: Optional[dict] = None, node_name: str = "PromptRefiner")`**
    - Initializes the `PromptRefinerNode` with necessary configurations.
    - **Args**:
        - `input (str)`: Boolean expression defining the input keys needed from the state.
        - `output (List[str])`: List of output keys to be updated in the state.
        - `node_config (dict, optional)`: Additional configuration for the node.
        - `node_name (str, optional)`: The unique identifier name for the node. Defaults to "PromptRefiner".

- **`execute(self, state: dict) -> dict`**
    - Generates a refined prompt using the user's prompt, the schema, and additional context.
    - **Args**:
        - `state (dict)`: The current state of the graph. The input keys will be used to fetch the correct data from the state.
    - **Returns**:
        - `dict`: The updated state with the output key containing the generated refined prompt.
    - **Raises**:
        - `KeyError`: If the input keys are not found in the state, indicating that the necessary information for generating an answer is missing.

#### Example Usage

Here is an example of how to use the `PromptRefinerNode` class:

```python
from prompt_refiner_node import PromptRefinerNode

# Define a prompt refiner node
prompt_refier_node = PromptRefinerNode(
    input="user_prompt",
    output=["refined_prompt"]
)

# Define the state
state = {"user_input": "What are the attractions in Chioggia?"}

# Execute the generate answer node
state = prompt_refier_node.execute(state)

# Retrieve the generated answer from the state
refined_prompt = state["refined_prompt"]

print(f"Refined Prompt: {refined_prompt}")
```