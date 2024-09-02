```python
""" 
Basic example of scraping pipeline using ScriptCreatorGraph
"""

import os
from dotenv import load_dotenv
from scrapegraphai.graphs import ScriptCreatorGraph
from scrapegraphai.utils import prettify_exec_info

load_dotenv()


# ************************************************
# Define the configuration for the graph
# ************************************************

gemini_key = os.getenv("GOOGLE_APIKEY")

graph_config = {
    "llm": {
        "api_key": gemini_key,
        "model": "google_vertexai/gemini-1.5-pro",
    },
    "library": "beautifoulsoup"
}

# ************************************************
# Create the ScriptCreatorGraph instance and run it
# ************************************************

smart_scraper_graph = ScriptCreatorGraph(
    prompt="List me all the news with their description.",
    # also accepts a string with the already downloaded HTML code
    source="https://perinim.github.io/projects",
    config=graph_config
)

result = smart_scraper_graph.run()
print(result)

# ************************************************
# Get graph execution info
# ************************************************

graph_exec_info = smart_scraper_graph.get_execution_info()
print(prettify_exec_info(graph_exec_info))
