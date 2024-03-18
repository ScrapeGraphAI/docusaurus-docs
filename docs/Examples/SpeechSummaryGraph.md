# 🔊 Speech graph
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
```bash
Fetching pages: 100%|##########| 1/1 [00:00<00:00, 13.14it/s]
---GET PROBABLE TAGS---
Possible tags:  h1 h2 h3 p ul li div
---GENERATE ANSWER---
---TRANSLATING TEXT TO SPEECH---
Audio saved to website_summary.mp3
{'summary': "This webpage is about Marco Perini's projects. It includes projects like Rotary Pendulum RL, DQN Implementation from scratch, Multi Agents HAED, and Wireless ESC for Modular Drones. The page also contains information about the author, links to other sections like About and CV, and a footer with copyright information. The webpage is designed with a fixed top navigation bar and a progress bar. It is powered by Jekyll with the al-folio theme and hosted on GitHub Pages."}
```