# 🐙 PDFScraperGraph Module

The `PDFScraperGraph` module defines a class for creating and executing a graph that extracts information from PDF files using a natural language model to interpret and answer prompts.

## Classes

### `PDFScraperGraph`

`PDFScraperGraph` is a scraping pipeline that extracts information from PDF files using a natural language model to interpret and answer prompts.

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
  - Initializes the `PDFScraperGraph` with a prompt, source, configuration, and schema.
  - **Args**:
    - `prompt (str)`: The prompt for the graph.
    - `source (str)`: The source of the graph.
    - `config (dict)`: Configuration parameters for the graph.
    - `schema (str)`: The schema for the graph output.

- **`_create_graph(self) -> BaseGraph`**
  - Creates the graph of nodes representing the workflow for PDF scraping.
  - **Returns**: An instance of `BaseGraph`.

- **`run(self) -> str`**
  - Executes the PDF scraping process and returns the answer to the prompt.
  - **Returns**: The answer to the prompt.

## Example Usage

Here is an example of how to use the `PDFScraperGraph` class:

```python
from pdf_scraper_graph import PDFScraperGraph

# Define the prompt, source, and configuration
prompt = "List me all the attractions in Chioggia."
source = "data/chioggia.pdf"
config = {
    "llm": {"model": "gpt-3.5-turbo"},
    "verbose": True,
    "headless": False
}

# Create the PDF scraper graph
pdf_scraper = PDFScraperGraph(prompt, source, config)

# Run the PDF scraper graph
result = pdf_scraper.run()

print(result)
