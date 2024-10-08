```python
""" 
Basic example of scraping pipeline using SmartScraper using Azure OpenAI Key
"""
import os
from dotenv import load_dotenv
from scrapegraphai.graphs import SmartScraperGraph
from scrapegraphai.utils import prettify_exec_info

load_dotenv()

# ************************************************
# Create the SmartScraperGraph instance and run it
# ************************************************

graph_config = {
    "llm": {
        "api_key": os.getenv("ANTHROPIC_API_KEY"),
        "model": "anthropic/claude-3-haiku-20240307",
    },
}

smart_scraper_graph = SmartScraperGraph(
    prompt="""Don't say anything else. Output JSON only. List me all the events, with the following fields: company_name, event_name, event_start_date, event_start_time, 
    event_end_date, event_end_time, location, event_mode, event_category, 
    third_party_redirect, no_of_days, 
    time_in_hours, hosted_or_attending, refreshments_type, 
    registration_available, registration_link""",
    # also accepts a string with the already downloaded HTML code
    source="https://www.hmhco.com/event",
    config=graph_config
)

result = smart_scraper_graph.run()
print(result)

# ************************************************
# Get graph execution info
# ************************************************

graph_exec_info = smart_scraper_graph.get_execution_info()
print(prettify_exec_info(graph_exec_info))
