# SearchLinkNode Module

The `SearchLinkNode` module implements a node that can filter out the relevant links in the webpage content for the user prompt. It expects already scraped links on the webpage, making it ideal to use after the `FetchNode`.

## Classes

### `SearchLinkNode`

`SearchLinkNode` is a node responsible for filtering out the relevant links from the webpage content for the user prompt.

#### Attributes

- **llm_model**: An instance of the language model client used for generating answers.
- **verbose (bool)**: A flag indicating whether to show print statements during execution.

#### Methods

- **`__init__(self, input: str, output: List[str], node_config: Optional[dict] = None, node_name: str = "GenerateLinks")`**
  - Initializes the `SearchLinkNode` with a node name and other optional configurations.
  - **Args**:
    - `input (str)`: Boolean expression defining the input keys needed from the state.
    - `output (List[str])`: List of output keys to be updated in the state.
    - `node_config (dict, optional)`: Additional configuration for the node. Defaults to None.
    - `node_name (str, optional)`: The unique identifier name for the node. Defaults to "GenerateLinks".

- **`execute(self, state: dict) -> dict`**
  - Filter out relevant links from the webpage that are relevant to the prompt. Out of the filtered links, also ensure that all links are navigable. The method updates the state with the list of relevant links.
  - **Args**:
    - `state (dict)`: The current state of the graph. The input keys will be used to fetch the correct data types from the state.
  - **Returns**:
    - `dict`: The updated state with the output key containing the list of links.
  - **Raises**:
    - `KeyError`: If the input keys are not found in the state, indicating that the necessary information for generating the answer is missing.

#### Example Usage

Here is an example of how to use the `SearchLinkNode` class:

```python
from search_link_node import SearchLinkNode

# Define a SearchLinkNode
search_link_node = SearchLinkNode(
    input=["user_prompt", "parsed_content_chunks"],
    output=["relevant_links"],
    node_config={"llm_model": ..., "verbose": True},
    node_name="GenerateLinks"
)

# Define the state
state = {
    "user_prompt": "How does climate change affect biodiversity?",
    "parsed_content_chunks": [chunk1, chunk2, ...],
}

# Execute the SearchLinkNode
state = search_link_node.execute(state)

# Retrieve the relevant links from the state
relevant_links = state["relevant_links"]

print("Relevant Links:")
for link in relevant_links:
    print(link)
