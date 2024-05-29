# RAGNode Module

The `RAGNode` module implements a node responsible for compressing input tokens and storing the document in a vector database for retrieval. Relevant chunks are stored in the state.

## Classes

### `RAGNode`

`RAGNode` is a node responsible for implementing RAG (Retrieval-Augmented Generation).

#### Attributes

- **llm_model**: An instance of a language model client, configured for generating answers.
- **embedder_model**: An instance of an embedding model client, configured for generating embeddings.
- **verbose (bool)**: A flag indicating whether to show print statements during execution.

#### Methods

- **`__init__(self, input: str, output: List[str], node_config: Optional[dict] = None, node_name: str = "RAG")`**
  - Initializes the `RAGNode` with a node name and other optional configurations.
  - **Args**:
    - `input (str)`: Boolean expression defining the input keys needed from the state.
    - `output (List[str])`: List of output keys to be updated in the state.
    - `node_config (dict, optional)`: Additional configuration for the node. Defaults to None.
    - `node_name (str, optional)`: The unique identifier name for the node. Defaults to "RAG".

- **`execute(self, state: dict) -> dict`**
  - Executes the node's logic to implement RAG (Retrieval-Augmented Generation). The method updates the state with relevant chunks of the document.
  - **Args**:
    - `state (dict)`: The current state of the graph. The input keys will be used to fetch the correct data from the state.
  - **Returns**:
    - `dict`: The updated state with the output key containing the relevant chunks of the document.

#### Example Usage

Here is an example of how to use the `RAGNode` class:

```python
from rag_node import RAGNode

# Define a RAGNode
rag_node = RAGNode(
    input="document",
    output=["compressed_docs"],
    node_config={"verbose": True},
    node_name="RAG"
)

# Define the state
state = {
    "document": ["<html><body><h1>Hello, world!</h1><p>This is a test.</p></body></html>"],
}

# Execute the RAGNode
state = rag_node.execute(state)

# Retrieve the relevant chunks of the document from the state
compressed_docs = state["compressed_docs"]

print(f"Compressed Documents: {compressed_docs}")
