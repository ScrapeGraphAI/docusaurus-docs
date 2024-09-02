```python
"""
Module for showing how PDFScraper multi works
"""
import os
import json
from dotenv import load_dotenv
from scrapegraphai.graphs import JSONScraperMultiGraph

load_dotenv()

mistral_key = os.getenv("MISTRAL_API_KEY")

graph_config = {
    "llm": {
        "api_key": mistral_key,
        "model": "mistralai/open-mistral-nemo",
    }
}

FILE_NAME = "inputs/example.json"
curr_dir = os.path.dirname(os.path.realpath(__file__))
file_path = os.path.join(curr_dir, FILE_NAME)

with open(file_path, 'r', encoding="utf-8") as file:
    text = file.read()

sources = [text, text]

multiple_search_graph = JSONScraperMultiGraph(
    prompt= "List me all the authors, title and genres of the books",
    source= sources,
    schema=None,
    config=graph_config
)

result = multiple_search_graph.run()
print(json.dumps(result, indent=4))
