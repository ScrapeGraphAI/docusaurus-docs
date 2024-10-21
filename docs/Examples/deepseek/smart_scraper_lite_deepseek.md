```python
""" 
Basic example of scraping pipeline using SmartScraper
"""
import os
import json
from dotenv import load_dotenv
from scrapegraphai.graphs import SmartScraperLiteGraph
from scrapegraphai.utils import prettify_exec_info

load_dotenv()

graph_config = {
    "llm": {
        "api_key": os.getenv("DEEPSEEK_API_KEY"),
        "model": "deepseek/deepseek-coder-33b-instruct",
    },
    "verbose": True,
    "headless": False,
}

smart_scraper_lite_graph = SmartScraperLiteGraph(
    prompt="Who is Marco Perini?",
    source="https://perinim.github.io/",
    config=graph_config
)

result = smart_scraper_lite_graph.run()
print(json.dumps(result, indent=4))

graph_exec_info = smart_scraper_lite_graph.get_execution_info()
print(prettify_exec_info(graph_exec_info))
