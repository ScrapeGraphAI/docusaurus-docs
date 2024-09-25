# 🌐 HtmlAnalyzerNode Module

The `HtmlAnalyzerNode` module analyzes HTML code based on the desired information to be extracted and returns a reduced version of the HTML content. The output of this node is primarily intended to enhance the reasoning capabilities of the `GenerateCodeNode`, enabling it to generate more accurate and context-aware code.

## Classes

### `HtmlAnalyzerNode`

`HtmlAnalyzerNode` generates an analysis of the HTML code and returns a reduced version of the HTML, primarily to improve the `GenerateCodeNode`'s reasoning.

#### Attributes

- **llm_model**: An instance of a language model client, configured for generating answers.
- **verbose (bool)**: A flag indicating whether to show print statements during execution.
- **additional_info**: Additional context to be included in the HTML analysis.
- **reduction (int)**: The level of reduction to apply to the HTML content.
    - 0: Minification only.
    - 1: Minification and removal of unnecessary tags and attributes
    - 2: Minification, removal of unnecessary tags and attributes, simplification of text content, and removal of the `<head>` tag.

#### Methods

- **`__init__(self, input: str, output: List[str], node_config: Optional[dict] = None, node_name: str = "HtmlAnalyzer")`**
    - Initializes the `HtmlAnalyzerNode` with necessary configurations.
    - **Args**:
        - `input (str)`: Boolean expression defining the input keys needed from the state.
        - `output (List[str])`: List of output keys to be updated in the state.
        - `node_config (dict, optional)`: Additional configuration for the node.
        - `node_name (str, optional)`: The unique identifier name for the node. Defaults to "HtmlAnalyzer".

- **`execute(self, state: dict) -> dict`**
    - Generates an analysis of the provided HTML code based on the wanted information to be extracted and returns a reduced version of the HTML content. The analysis is primarily used to enhance the reasoning of the `GenerateCodeNode`.
    - The information to be extracted can be either the user's original input or, preferably, the refined prompt from the `PromptRefinerNode` for better results.
    - **Args**:
        - `state (dict)`: The current state of the graph. The input keys will be used to fetch the correct data from the state.
    - **Returns**:
        - `dict`: The updated state with the following output keys:
            - The generated HTML analysis.
            - The reduced HTML code based on the specified reduction strength.
    - **Raises**:
        - `KeyError`: If the input keys are not found in the state, indicating that the necessary information for generating an answer is missing.

#### Example Usage

Here is an example of how to use the `HtmlAnalyzerNode` class:

```python
from html_analyzer_node import HtmlAnalyzerNode

# Define a html analyzer node
html_analyzer_node = HtmlAnalyzerNode(
    input="refined_prompt & original_html",
    output=["html_info", "reduced_html"]
)

# Define the state
state = {"refined_prompt": "What are the attractions in Chioggia?",
        "original_html": "<html>...</html>"}

# Execute the generate answer node
state = html_analyzer_node.execute(state)

# Retrieve the generated answer from the state
html_info = state["html_info"]
reduced_html = state["reduced_html"]

print(f"HTML Analysis: {html_info}")
```