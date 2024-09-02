```python
""" 
Basic example of scraping pipeline using ScriptCreatorGraph
"""

from scrapegraphai.graphs import ScriptCreatorMultiGraph
from scrapegraphai.utils import prettify_exec_info

# ************************************************
# Define the configuration for the graph
# ************************************************

graph_config = {
    "llm": {
        "api_key": "***************************",
        "model": "oneapi/qwen-turbo",
        "base_url": "http://127.0.0.1:3000/v1",  # 设置 OneAPI URL
    },
    "library": "beautifulsoup"
}

# ************************************************
# Create the ScriptCreatorGraph instance and run it
# ************************************************

urls=[
    "https://schultzbergagency.com/emil-raste-karlsen/",
    "https://schultzbergagency.com/johanna-hedberg/",
]

# ************************************************
# Create the ScriptCreatorGraph instance and run it
# ************************************************

script_creator_graph = ScriptCreatorMultiGraph(
    prompt="Find information about actors",
    # also accepts a string with the already downloaded HTML code
    source=urls,
    config=graph_config
)

result = script_creator_graph.run()
print(result)

# ************************************************
# Get graph execution info
# ************************************************

graph_exec_info = script_creator_graph.get_execution_info()
print(prettify_exec_info(graph_exec_info))
