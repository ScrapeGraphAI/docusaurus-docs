# 🤖 GenerateCodeNode Module

The `GenerateCodeNode` module dynamically generates Python code for a function named `extract_data(html: str) -> dict()` that extracts specific data from HTML content, adhering to a predefined output schema. It utilizes a sophisticated reasoning loop that iteratively refines the code until it successfully extracts the desired data, ensuring both syntactic correctness and semantic alignment with the user's intent.

## Classes

### `GenerateCodeNode`

`GenerateCodeNode` generates Python code to extract data from HTML based on a schema. The generated code uses the BeautifulSoup library for parsing the HTML.

#### Attributes

- **llm_model**: An instance of a language model client, configured for generating answers.
- **verbose (bool)**: A flag indicating whether to show print statements during execution.
- **output_schema**: The output schema be used for the generated code returned data.
- **max_iterations (dict)**: Maximum number of iterations for each reasoning loop.  It should have the following structure:
    ```python
    {
        "overall": 10,   # Maximum iterations for the overall reasoning loop
        "syntax": 3,     # Maximum iterations for the syntax reasoning loop
        "execution": 3,  # Maximum iterations for the execution reasoning loop
        "validation": 3, # Maximum iterations for the validation reasoning loop
        "semantic": 3    # Maximum iterations for the semantic comparison loop
    }
    ```

#### Methods

- **`__init__(self, input: str, output: List[str], node_config: Optional[dict] = None, node_name: str = "GenerateCode")`**
    - Initializes the `GenerateCodeNode` with the necessary configurations.
    - **Args**:
        - `input (str)`: Boolean expression defining the input keys needed from the state.
        - `output (List[str])`: List of output keys to be updated in the state.
        - `node_config (dict, optional)`: Additional configuration for the node.
        - `node_name (str, optional)`: The unique identifier name for the node. Defaults to "GenerateCode".

- **`execute(self, state: dict) -> dict`**
    - Generates Python code that extracts data from HTML based on the specified schema.
    - Leverages the analysis from the `PromptRefinerNode` and `HtmlAnalyzerNode` to improve code generation reasoning.
    - **Args**:
        - `state (dict)`: The current state of the graph, containing user input, refined prompt, HTML analysis, and the reference answer.
    - **Returns**:
        - `dict`: The updated state with the generated Python code.
    - **Raises**:
        - `KeyError`: If required input keys are missing from the state.
        - `RuntimeError`: If the maximum number of iterations is reached without generating valid code.

#### Reasoning Loops

- **`overall_reasoning_loop(self, state: dict) -> dict`**
    - Orchestrates the iterative code refinement process, incorporating syntax, execution, validation, and semantic checks.
- **`syntax_reasoning_loop(self, state: dict) -> dict`**
    - Iteratively refines the code until it is syntactically correct.
- **`execution_reasoning_loop(self, state: dict) -> dict`**
    - Iteratively refines the code until it executes without errors.
- **`validation_reasoning_loop(self, state: dict) -> dict`**
    - Iteratively refines the code until its output adheres to the specified schema.
- **`semantic_comparison_loop(self, state: dict) -> dict`**
    - Iteratively refines the code until its output semantically aligns with the reference answer.

**Note:** The `HtmlAnalyzerNode` plays a crucial role in providing context and analysis to the `GenerateCodeNode`, ultimately leading to the generation of more refined and effective code.

#### Example Usage

Here is an example of how to use the `GenerateCodeNode` class:

```python
from generate_code_node import GenerateCodeNode

# Define a geenrate code node
generate_code_node = GenerateCodeNode(
    input="user_prompt & refined_prompt & html_info & reduced_html & answer",
    output=["generated_code"]
)

# Define the state
state = {
    "user_prompt": "What are the attractions in Chioggia?",
    "refined_prompt": "The user is asking about the attractions in Chioggia.",
    "html_info": "The HTML code contains...",
    "reduced_html": "<html>...</html>",
    "answer": answer
}

# Execute the generate answer node
state = generate_code_node.execute(state)

# Retrieve the generated answer from the state
generated_code = state["generated_code"]

print(f"Code generated: {generated_code}")
```