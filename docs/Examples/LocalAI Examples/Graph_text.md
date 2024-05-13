# 🥎 LocalAI Graph from text

For [LocalAI](https://localai.io), the OpenAI client can be used by specifing a "fake" `OPENAI_API_KEY` ( there is no need to specify a real OpenAI key ):

```python title="LocalAI Graph from text"
""" 
Basic example of scraping pipeline using SmartScraper from text
"""
from scrapegraphai.graphs import SmartScraperGraph

# Note: You can actually leave as-is
OPENAI_API_KEY = "YOUR_API_KEY"

graph_config = {
    "llm": {
        "api_key": OPENAI_API_KEY,
        "model": "gpt-4",
        "temperature": 0,
        "base_url": "http://localhost:8080",
    },
}

smart_scraper_graph = SmartScraperGraph(
    prompt="List me all the articles",
    # also accepts a string with the already downloaded HTML code
    source="https://perinim.github.io/projects",
    config=graph_config
)

result = smart_scraper_graph.run()
print(result)
```