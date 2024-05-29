# 🦐 TextToSpeechNode Module

The `TextToSpeechNode` module converts text to speech using the specified text-to-speech model.

## Classes

### `TextToSpeechNode`

`TextToSpeechNode` is a node responsible for converting text to speech using the specified text-to-speech model.

#### Attributes

- **tts_model**: An instance of the text-to-speech model client.
- **verbose (bool)**: A flag indicating whether to show print statements during execution.

#### Methods

- **`__init__(self, input: str, output: List[str], node_config: Optional[dict] = None, node_name: str = "TextToSpeech")`**
  - Initializes the `TextToSpeechNode` with a node name and other optional configurations.
  - **Args**:
    - `input (str)`: Boolean expression defining the input keys needed from the state.
    - `output (List[str])`: List of output keys to be updated in the state.
    - `node_config (dict, optional)`: Additional configuration for the node. Defaults to None.
    - `node_name (str, optional)`: The unique identifier name for the node. Defaults to "TextToSpeech".

- **`execute(self, state: dict) -> dict`**
  - Converts text to speech using the specified text-to-speech model.
  - **Args**:
    - `state (dict)`: The current state of the graph. The input keys will be used to fetch the correct data types from the state.
  - **Returns**:
    - `dict`: The updated state with the output key containing the audio generated from the text.
  - **Raises**:
    - `KeyError`: If the input keys are not found in the state, indicating that the necessary information for generating the audio is missing.

#### Example Usage

Here is an example of how to use the `TextToSpeechNode` class:

```python
from text_to_speech_node import TextToSpeechNode

# Define a TextToSpeechNode
text_to_speech_node = TextToSpeechNode(
    input=["text_to_translate"],
    output=["audio"],
    node_config={"tts_model": ..., "verbose": True},
    node_name="TextToSpeech"
)

# Define the state
state = {
    "text_to_translate": "Hello, how are you?",
}

# Execute the TextToSpeechNode
state = text_to_speech_node.execute(state)

# Retrieve the generated audio from the state
audio = state["audio"]
