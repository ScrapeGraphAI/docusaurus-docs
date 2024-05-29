# SpeechGraph Module

The `SpeechGraph` module defines a class for creating and executing a graph that scrapes the web, provides an answer to a given prompt, and generates an audio file.

## Classes

### `SpeechGraph`

`SpeechGraph` is a scraping pipeline that scrapes the web, provides an answer to a given prompt, and generates an audio file.

#### Attributes

- **prompt (str)**: The prompt for the graph.
- **source (str)**: The source of the graph.
- **config (dict)**: Configuration parameters for the graph.
- **schema (str)**: The schema for the graph output.
- **llm_model**: An instance of a language model client, configured for generating answers.
- **embedder_model**: An instance of an embedding model client, configured for generating embeddings.
- **verbose (bool)**: A flag indicating whether to show print statements during execution.
- **headless (bool)**: A flag indicating whether to run the graph in headless mode.
- **model_token (int)**: The token limit for the language model.

#### Methods

- **`__init__(self, prompt: str, source: str, config: dict, schema: Optional[str] = None)`**
  - Initializes the `SpeechGraph` with a prompt, source (URL or local directory), configuration, and schema.
  - **Args**:
    - `prompt (str)`: The prompt for the graph.
    - `source (str)`: The source of the graph (URL or local directory).
    - `config (dict)`: Configuration parameters for the graph.
    - `schema (Optional[str])`: The schema for the graph output.

- **`_create_graph(self) -> BaseGraph`**
  - Creates the graph of nodes representing the workflow for web scraping and audio generation.
  - **Returns**: An instance of `BaseGraph`.

- **`run(self) -> str`**
  - Executes the scraping process, generates the answer to the prompt, and saves the audio file.
  - **Returns**: The answer to the prompt.

## Example Usage

Here is an example of how to use the `SpeechGraph` class:

```python
from speech_graph import SpeechGraph

# Define the prompt, source (URL or local directory), and configuration
prompt = "List me all the attractions in Chioggia and generate an audio summary."
source = "https://en.wikipedia.org/wiki/Chioggia"
config = {
    "llm": {"model": "gpt-3.5-turbo"},
    "tts_model": {"engine": "Google", "language": "en"}
}

# Create the speech graph
speech_graph = SpeechGraph(prompt, source, config)

# Run the speech graph
result = speech_graph.run()

print(result)
