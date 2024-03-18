# 🧑🏻‍💻 SmartScraperGraph 
The link of the example is: [link](https://github.com/VinciGit00/Scrapegraph-ai/blob/main/examples/graph_examples/smart_scraper_example.py).

```python
""" 
Basic example of scraping pipeline using SmartScraper
"""

import os
from dotenv import load_dotenv
from scrapegraphai.graphs import SmartScraperGraph

load_dotenv()
openai_key = os.getenv("OPENAI_APIKEY")

# Define the configuration for the graph
graph_config = {
    "llm": {
        "api_key": openai_key,
        "model": "gpt-3.5-turbo",
    },
}

# Create the SmartScraperGraph instance
smart_scraper_graph = SmartScraperGraph(
    prompt="List me all the news with their description.",
    file_source="https://www.ansa.it/veneto/",  # also accepts a local file path
    config=graph_config
)

result = smart_scraper_graph.run()
print(result)
```

```python
answer["projects"][0]
```
The dictionary of the result is:
```bash
{'title': 'Rotary Pendulum RL',
 'description': 'Open Source project aimed at controlling a real life rotary pendulum using RL algorithms'}
```