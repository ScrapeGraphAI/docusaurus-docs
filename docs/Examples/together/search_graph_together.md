```python
"""
Example of Search Graph
"""
import os
from dotenv import load_dotenv
from scrapegraphai.graphs import SearchGraph
load_dotenv()

# ************************************************
# Define the configuration for the graph
# ************************************************

together_key = os.getenv("TOGETHER_APIKEY")

graph_config = {
    "llm": {
        "model": "togetherai/meta-llama/Meta-Llama-3.1-8B-Instruct-Turbo",
        "api_key": together_key,
    },
    "max_results": 2,
    "verbose": True,
}

# ************************************************
# Create the SearchGraph instance and run it
# ************************************************

search_graph = SearchGraph(
    prompt="List me the best escursions near Trento",
    config=graph_config
)

result = search_graph.run()
print(result)
