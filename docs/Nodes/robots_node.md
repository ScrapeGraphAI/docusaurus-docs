# RobotsNode Module

The `RobotsNode` module implements a node responsible for checking if a website is scrapeable or not based on the robots.txt file. It uses a language model to determine if the website allows scraping of the provided path.

## Classes

### `RobotsNode`

`RobotsNode` is a node responsible for checking if a website is scrapeable or not based on the robots.txt file.

#### Attributes

- **llm_model**: An instance of the language model client used for checking scrapeability.
- **force_scraping (bool)**: A flag indicating whether scraping should be enforced even if disallowed by robots.txt.
- **verbose (bool)**: A flag indicating whether to show print statements during execution.

#### Methods

- **`__init__(self, input: str, output: List[str], node_config: Optional[dict] = None, node_name: str = "Robots")`**
  - Initializes the `RobotsNode` with a node name and other optional configurations.
  - **Args**:
    - `input (str)`: Boolean expression defining the input keys needed from the state.
    - `output (List[str])`: List of output keys to be updated in the state.
    - `node_config (dict, optional)`: Additional configuration for the node. Defaults to None.
    - `node_name (str, optional)`: The unique identifier name for the node. Defaults to "Robots".

- **`execute(self, state: dict) -> dict`**
  - Checks if a website is scrapeable based on the robots.txt file and updates the state with the scrapeability status. The method constructs a prompt for the language model, submits it, and parses the output to determine if scraping is allowed.
  - **Args**:
    - `state (dict)`: The current state of the graph. The input keys will be used to fetch the correct data from the state.
  - **Returns**:
    - `dict`: The updated state with the output key containing the scrapeability status.

#### Example Usage

Here is an example of how to use the `RobotsNode` class:

```python
from robots_node import RobotsNode

# Define a RobotsNode
robots_node = RobotsNode(
    input="source",
    output=["is_scrapable"],
    node_config={"llm_model": ..., "force_scraping": False, "verbose": True},
    node_name="Robots"
)

# Define the state
state = {
    "source": "https://example.com",
}

# Execute the RobotsNode
state = robots_node.execute(state)

# Retrieve the scrapeability status from the state
is_scrapable = state["is_scrapable"]

print(f"Is Scrapable: {is_scrapable}")
