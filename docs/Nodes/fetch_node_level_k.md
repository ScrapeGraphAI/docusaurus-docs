# FetchNodeLevelK

## Overview

`FetchNodeLevelK` is a node responsible for fetching the HTML content of a specified URL and all its sub-links recursively up to a certain level of hyperlink depth. This content is then used to update the graph's state. It uses `ChromiumLoader` to fetch the content from a web page asynchronously (with proxy protection).

## Attributes

- `llm_model`: An instance of a language model client, configured for generating answers.
- `verbose` (bool): A flag indicating whether to show print statements during execution.

## Args

- `input` (str): Boolean expression defining the input keys needed from the state.
- `output` (List[str]): List of output keys to be updated in the state.
- `node_config` (dict): Additional configuration for the node.
- `node_name` (str): The unique identifier name for the node, defaulting to "FetchLevelK".

## Example

```python
fetch_node = FetchNodeLevelK(
    input="url",
    output=["docs"],
    node_config={
        "loader_kwargs": {"some_key": "some_value"},
        "force": False,
        "cut": True,
        "browser_base": {"api_key": "your_api_key", "project_id": "your_project_id"},
        "depth": 2,
        "only_inside_links": False
    }
)
```
## Example Usage

```python
fetch_node = FetchNodeLevelK(
    input="url",
    output=["docs"],
    node_config={
        "loader_kwargs": {"some_key": "some_value"},
        "force": False,
        "cut": True,
        "browser_base": {"api_key": "your_api_key", "project_id": "your_project_id"},
        "depth": 2,
        "only_inside_links": False
    }
)
```