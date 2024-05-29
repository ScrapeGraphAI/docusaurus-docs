# 🐯 GenerateAnswerOmniNode Module

The `GenerateAnswerOmniNode` module implements a node responsible for generating an answer using a large language model (LLM) based on the user's input and the content extracted from a webpage. It constructs a prompt from the user's input and the scraped content, feeds it to the LLM, and parses the LLM's response to produce an answer.

## Classes

### `GenerateAnswerOmniNode`

`GenerateAnswerOmniNode` is a node responsible for generating an answer using a large language model (LLM) based on the user's input and the content extracted from a webpage.

#### Attributes

- **llm_model**: An instance of a language model client, configured for generating answers.
- **verbose (bool)**: A flag indicating whether to show print statements during execution.

#### Methods

- **`__init__(self, input: str, output: List[str], node_config: Optional[dict] = None, node_name: str = "GenerateAnswerOmni")`**
  - Initializes the GenerateAnswerOmniNode with a language model client and a node name.
  - **Args**:
    - `input (str)`: Boolean expression defining the input keys needed from the state.
    - `output (List[str])`: List of output keys to be updated in the state.
    - `node_config (dict, optional)`: Additional configuration for the node.
    - `node_name (str, optional)`: The unique identifier name for the node. Defaults to "GenerateAnswerOmni".

- **`execute(self, state: dict) -> dict`**
  - Generates an answer by constructing a prompt from the user's input and the scraped content, querying the language model, and parsing its response.
  - **Args**:
    - `state (dict)`: The current state of the graph. The input keys will be used to fetch the correct data from the state.
  - **Returns**:
    - `dict`: The updated state with the output key containing the generated answer.
  - **Raises**:
    - `KeyError`: If the input keys are not found in the state, indicating that the necessary information for generating an answer is missing.

#### Example Usage

Here is an example of how to use the `GenerateAnswerOmniNode` class:

```python
from generate_answer_node import GenerateAnswerOmniNode

# Define a generate answer node
generate_answer_omni_node = GenerateAnswerOmniNode(
    input="user_input & document & image_description", 
    output=["answer"]
)

# Define the state
state = {
    "user_input": "What is the history of the Roman Empire?", 
    "document": [document1, document2], 
    "image_description": "Image of Roman Colosseum"
}

# Execute the generate answer node
state = generate_answer_omni_node.execute(state)

# Retrieve the generated answer from the state
answer = state["answer"]

print(f"Generated Answer: {answer}")
