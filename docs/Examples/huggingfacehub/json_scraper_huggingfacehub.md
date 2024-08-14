```python
"""
Basic example of scraping pipeline using JSONScraperGraph from JSON documents
"""

import os
from dotenv import load_dotenv
from scrapegraphai.graphs import JSONScraperGraph
from scrapegraphai.utils import convert_to_csv, convert_to_json, prettify_exec_info
from langchain_community.llms import HuggingFaceEndpoint
from langchain_community.embeddings import HuggingFaceInferenceAPIEmbeddings

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
HUGGINGFACEHUB_API_TOKEN = os.getenv('HUGGINGFACEHUB_API_TOKEN')

repo_id = "mistralai/Mistral-7B-Instruct-v0.2"

llm_model_instance = HuggingFaceEndpoint(
    repo_id=repo_id, max_length=128, temperature=0.5, token=HUGGINGFACEHUB_API_TOKEN
)

embedder_model_instance = HuggingFaceInferenceAPIEmbeddings(
    api_key=HUGGINGFACEHUB_API_TOKEN, model_name="sentence-transformers/all-MiniLM-l6-v2"
)

# ************************************************
# Create the SmartScraperGraph instance and run it
# ************************************************

graph_config = {
    "llm": {"model_instance": llm_model_instance},
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

# ************************************************
# Get graph execution info
# ************************************************

graph_exec_info = json_scraper_graph.get_execution_info()
print(prettify_exec_info(graph_exec_info))

# Save to json or csv
convert_to_csv(result, "result")
convert_to_json(result, "result")

