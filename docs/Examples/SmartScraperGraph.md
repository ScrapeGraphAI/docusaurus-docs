# 🧑🏻‍💻 SmartScraperGraph 

```python
""" 
Basic example of scraping pipeline using SmartScraper
"""

import os
from dotenv import load_dotenv
from scrapegraphai.graphs import SmartScraperGraph

load_dotenv()

# Define the configuration for the language model
openai_key = os.getenv("OPENAI_APIKEY")
llm_config = {
    "api_key": openai_key,
    "model_name": "gpt-3.5-turbo",
}

# Define URL and PROMPT
URL = "https://www.ansa.it/veneto/"
PROMPT = "List me all the news with their description."

# Create the SmartScraperGraph instance
smart_scraper_graph = SmartScraperGraph(PROMPT, URL, llm_config)

answer = smart_scraper_graph.run()
print(answer)
```

```python
answer["projects"][0]
```
The dictionary of the result is:
```bash
{'title': 'Rotary Pendulum RL',
 'description': 'Open Source project aimed at controlling a real life rotary pendulum using RL algorithms'}
```