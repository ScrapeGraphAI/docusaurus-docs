Imagine you are a real estate agent who specializes in apartment rentals. You have a client who is looking for a specific type of apartment, and they ask you if there are any apartments available that meet their criteria.

You decide to write a web scraping program using ScrapeGraphAI that scrapes the internet for apartments that match your client's requirements. Your program should be able to extract information from multiple websites, so you decide to use a graph-based approach.

Here is an example of how you could do this:
```python
""" 
Basic example of scraping pipeline using SmartScraper
"""

import os
import json
from dotenv import load_dotenv
from scrapegraphai.graphs import SmartScraperGraph
from scrapegraphai.utils import prettify_exec_info

load_dotenv()

# ************************************************
# Define the configuration for the graph
# ************************************************


graph_config = {
    "llm": {
        "api_key": os.getenv("OPENAI_API_KEY"),
        "model": "openai/gpt-4o",
    },
    "verbose": True,
    "headless": False,
}

# ************************************************
# Create the SmartScraperGraph instance and run it
# ************************************************

smart_scraper_graph = SmartScraperGraph(
    prompt="List me all the appartments",
    source="https://www.engelvoelkers.com/us/en/properties/res/rent/house",
    config=graph_config
)

result = smart_scraper_graph.run()
print(json.dumps(result, indent=4))
```
In this example, we define a scraper that fetches a website, extracts apartment information using an API call, and gets search results from multiple websites. The graph is created with three nodes: "Fetch Website", "Extract Apartments", and "Get Search Results". The edges between these nodes specify the flow of execution.

This is just one example of how you could use ScrapeGraphAI to create a scraper for extracting information about apartments. You can customize the nodes and edges to fit your specific use case.