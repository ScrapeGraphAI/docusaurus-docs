# 🥖 Speech summary

```python
from scrapegraphai.graphs import SearchGraph

# Define the configuration for the graph
graph_config = {
    "llm": {
        "api_key": OPENAI_API_KEY,
        "model": "gpt-3.5-turbo",
        "temperature": 0,
    },
}

# Create the SmartScraperGraph instance
smart_scraper_graph = SearchGraph(
    prompt="List me all the regions of Italy.",
    config=graph_config
)

result = smart_scraper_graph.run()
print(result)
```