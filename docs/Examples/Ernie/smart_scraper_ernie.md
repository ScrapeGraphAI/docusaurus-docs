```python
""" 
Basic example of scraping pipeline using SmartScraper
"""
from scrapegraphai.graphs import SmartScraperGraph
from scrapegraphai.utils import prettify_exec_info

# ************************************************
# Define the configuration for the graph
# ************************************************

graph_config = {
    "llm": {
        "model": "ernie/ernie-bot-turbo",
        "ernie_client_id": "<ernie_client_id>",
        "ernie_client_secret": "<ernie_client_secret>",
        "temperature": 0.1
    },
    "library": "beautifulsoup"
}

# ************************************************
# Create the SmartScraperGraph instance and run it
# ************************************************

smart_scraper_graph = SmartScraperGraph(
    prompt="List me all the projects with their description",
    # also accepts a string with the already downloaded HTML code
    source="https://perinim.github.io/projects/",
    config=graph_config,
)

result = smart_scraper_graph.run()
print(result)

# ************************************************
# Get graph execution info
# ************************************************

graph_exec_info = smart_scraper_graph.get_execution_info()
print(prettify_exec_info(graph_exec_info))
