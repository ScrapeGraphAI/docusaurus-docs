```python
"""
Basic example of scraping pipeline using JSONScraperGraph from JSON documents
"""

import os
from dotenv import load_dotenv
from scrapegraphai.graphs import JSONScraperGraph
from scrapegraphai.utils import prettify_exec_info
load_dotenv()

# ************************************************
# Read the JSON file
# ************************************************

FILE_NAME = "inputs/example.json"
curr_dir = os.path.dirname(os.path.realpath(__file__))
file_path = os.path.join(curr_dir, FILE_NAME)

with open(file_path, 'r', encoding="utf-8") as file:
    text = file.read()

# ************************************************
# Define the configuration for the graph
# ************************************************

gemini_key = os.getenv("GOOGLE_APIKEY")

graph_config = {
    "llm": {
        "api_key": gemini_key,
        "model": "google_vertexai/gemini-1.5-pro",
    },
}

# ************************************************
# Create the JSONScraperGraph instance and run it
# ************************************************

json_scraper_graph = JSONScraperGraph(
    prompt="List me all the authors, title and genres of the books",
    source=text,  # Pass the content of the file, not the file object
    config=graph_config
)

result = json_scraper_graph.run()
print(result)
