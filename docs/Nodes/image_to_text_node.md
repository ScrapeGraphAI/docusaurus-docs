# 😆 ImageToTextNode Module

The `ImageToTextNode` module implements a node responsible for retrieving images from a list of URLs and returning a description of the images using an image-to-text model.

## Classes

### `ImageToTextNode`

`ImageToTextNode` is a node responsible for retrieving images from a list of URLs and returning a description of the images using an image-to-text model.

#### Attributes

- **llm_model**: An instance of the language model client used for image-to-text conversion.
- **verbose (bool)**: A flag indicating whether to show print statements during execution.

#### Methods

- **`__init__(self, input: str, output: List[str], node_config: dict, node_name: str = "ImageToText")`**
  - Initializes the `ImageToTextNode` with a language model client and a node name.
  - **Args**:
    - `input (str)`: Boolean expression defining the input keys needed from the state.
    - `output (List[str])`: List of output keys to be updated in the state.
    - `node_config (dict, optional)`: Additional configuration for the node. Defaults to None.
    - `node_name (str, optional)`: The unique identifier name for the node. Defaults to "ImageToText".

- **`execute(self, state: dict) -> dict`**
  - Generate text from an image using an image-to-text model. The method retrieves the image from the list of URLs provided in the state and returns the extracted text.
  - **Args**:
    - `state (dict)`: The current state of the graph. The input keys will be used to fetch the correct data types from the state.
  - **Returns**:
    - `dict`: The updated state with the input key containing the text extracted from the image.

#### Example Usage

Here is an example of how to use the `ImageToTextNode` class:

```python
from image_to_text_node import ImageToTextNode

# Define an ImageToTextNode
image_to_text_node = ImageToTextNode(
    input="image_urls",
    output=["image_descriptions"],
    node_config={"llm_model": llm_model},
    node_name="ImageToText"
)

# Define the state
state = {
    "image_urls": ["https://example.com/image1.jpg", "https://example.com/image2.jpg"],
}

# Execute the ImageToTextNode
state = image_to_text_node.execute(state)

# Retrieve the image descriptions from the state
image_descriptions = state["image_descriptions"]

print(f"Image Descriptions: {image_descriptions}")
