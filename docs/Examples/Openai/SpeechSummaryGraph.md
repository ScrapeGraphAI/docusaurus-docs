# 🔊 Speech graph

```python
""" 
Basic example of scraping pipeline using SpeechSummaryGraph
"""

import os
from dotenv import load_dotenv
from scrapegraphai.graphs import SpeechGraph
from scrapegraphai.utils import prettify_exec_info
load_dotenv()

# ************************************************
# Define audio output path
# ************************************************

FILE_NAME = "website_summary.mp3"
curr_dir = os.path.dirname(os.path.realpath(__file__))
output_path = os.path.join(curr_dir, FILE_NAME)

# ************************************************
# Define the configuration for the graph
# ************************************************

openai_key = os.getenv("OPENAI_APIKEY")

graph_config = {
    "llm": {
        "api_key": openai_key,
        "model": "gpt-3.5-turbo",
        "temperature": 0.7,
    },
    "tts_model": {
        "api_key": openai_key,
        "model": "tts-1",
        "voice": "alloy"
    },
    "output_path": output_path,
}

# ************************************************
# Create the SpeechGraph instance and run it
# ************************************************

speech_graph = SpeechGraph(
    prompt="Give me a gift idea for a friend.",
    source="https://www.amazon.it/s?k=profumo&__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=17UXSZNCS2NKE&sprefix=profumo%2Caps%2C88&ref=nb_sb_noss_1",
    config=graph_config,
)

result = speech_graph.run()
print(result.get("answer", "No answer found"))

# ************************************************
# Get graph execution info
# ************************************************

graph_exec_info = speech_graph.get_execution_info()
print(prettify_exec_info(graph_exec_info))
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