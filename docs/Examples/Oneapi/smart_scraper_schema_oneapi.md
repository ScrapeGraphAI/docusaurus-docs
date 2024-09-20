```python
""" 
Basic example of scraping pipeline using SmartScraper and OneAPI
"""
from typing import List
from pydantic import BaseModel, Field
from scrapegraphai.graphs import SmartScraperGraph
from scrapegraphai.utils import prettify_exec_info

# ************************************************
# Define the configuration for the graph
# ************************************************
class Project(BaseModel):
    title: str = Field(description="The title of the project")
    description: str = Field(description="The description of the project")

class Projects(BaseModel):
    projects: List[Project]

# ************************************************
# Define the configuration for the graph
# *********************************************

graph_config = {
    "llm": {
        "api_key": "***************************",
        "model": "oneapi/qwen-turbo",
        "base_url": "http://127.0.0.1:3000/v1",  # 设置 OneAPI URL
    }
}

# ************************************************
# Create the SmartScraperGraph instance and run it
# ************************************************

smart_scraper_graph = SmartScraperGraph(
     prompt="List me all the projects with their description",
    # also accepts a string with the already downloaded HTML code
    source="https://perinim.github.io/projects/",
    config=graph_config,
    schema=Projects
)

# ************************************************
# Get graph execution info
# ************************************************
result = smart_scraper_graph.run()
print(result)
print(prettify_exec_info(result))
