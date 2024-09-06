```python
""" 
Basic example of scraping pipeline using SmartScraper with a custom rate limit
"""

import os
from dotenv import load_dotenv
from scrapegraphai.utils import prettify_exec_info
from scrapegraphai.graphs import SmartScraperGraph
load_dotenv()


# ************************************************
# Define the configuration for the graph
# ************************************************

gemini_key = os.getenv("GOOGLE_APIKEY")

graph_config = {
    "llm": {
        "api_key": gemini_key,
        "model": "google_vertexai/gemini-1.5-pro",
        "rate_limit": {
            "requests_per_second": 1
        }
    },
}

# ************************************************
# Create the SmartScraperGraph instance and run it
# ************************************************

smart_scraper_graph = SmartScraperGraph(
    prompt="List me all the news with their description.",
    # also accepts a string with the already downloaded HTML code
    source="https://www.wired.com",
    config=graph_config
)

result = smart_scraper_graph.run()
print(result)

# ************************************************
# Get graph execution info
# ************************************************

graph_exec_info = smart_scraper_graph.get_execution_info()
print(prettify_exec_info(graph_exec_info))
