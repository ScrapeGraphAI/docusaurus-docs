# 🦭 Proxy rotation
This is a Python script that demonstrates how to use the SmartScraperGraph class in the ScrapeGraphAI library for web scraping with rotating proxies. It shows the configuration of the graph, the creation of an instance of the SmartScraperGraph, and its execution with the specified prompt and source URL. The result of the scraping process is printed, as well as information about the execution of the graph.

## Implementation
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
        "api_key": "API_KEY",
        "model": "gpt-3.5-turbo",
    },
    "loader_kwargs": {
        "proxy" : {
            "server": "http:/**********",
            "username": "********",
            "password": "***",
        },
     },
    "verbose": True,
    "headless": False,
}

# ************************************************
# Create the SmartScraperGraph instance and run it
# ************************************************

smart_scraper_graph = SmartScraperGraph(
    prompt="List me all the projects with their description",
    # also accepts a string with the already downloaded HTML code
    source="https://perinim.github.io/projects/",
    config=graph_config
)

result = smart_scraper_graph.run()
print(result)

# ************************************************
# Get graph execution info
# ************************************************

graph_exec_info = smart_scraper_graph.get_execution_info()
print(prettify_exec_info(graph_exec_info))
```