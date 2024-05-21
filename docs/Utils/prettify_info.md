# 🌧️ prettify_exec_info

## Introduction
Function that gives info about cost and time about the scraper call

## Implementation

```python
"""
Prettify the execution information of the graph.
"""

import pandas as pd


def prettify_exec_info(complete_result: dict) -> pd.DataFrame:
    """
    Transform the execution information of the graph into a DataFrame for better visualization.

    Args:
    - complete_result (dict): The complete execution information of the graph.

    Returns:
    - pd.DataFrame: The execution information of the graph in a DataFrame.
    """

    nodes_info = complete_result['nodes_info']
    total_info = {
        'total_exec_time': complete_result['total_exec_time'],
        'total_model_info': complete_result['total_model_info']
    }

    # Convert node-specific information to DataFrame
    flat_data = []
    for node_name, node_info in nodes_info.items():
        flat_data.append({
            'Node': node_name,
            'Execution Time': node_info['exec_time'],
            # Unpack the model_info dict into the row
            **node_info['model_info']
        })

    df_nodes = pd.DataFrame(flat_data)

    # Add a row for the total execution time and total model info
    total_row = {
        'Node': 'Total',
        'Execution Time': total_info['total_exec_time'],
        # Unpack the total_model_info dict into the row
        **total_info['total_model_info']
    }
    df_total = pd.DataFrame([total_row])

    # Combine the nodes DataFrame with the total info DataFrame
    df_combined_with_total = pd.concat([df_nodes, df_total], ignore_index=True)
    return df_combined_with_total
```

## Example

```python

from scrapegraphai.graphs import SmartScraperGraph
from scrapegraphai.utils import prettify_exec_info

graph_config = {
    "llm": {
        "model": "ollama/mistral",
        "temperature": 1,
        "format": "json",  # Ollama needs the format to be specified explicitly
        "base_url": "http://localhost:11434",  # set ollama URL arbitrarily
    },
    "embeddings": {
        "model": "ollama/nomic-embed-text",
        "temperature": 0,
        "base_url": "http://localhost:11434",  # set ollama URL arbitrarily
    }
}



smart_scraper_graph = SmartScraperGraph(
    prompt="List me all the news with their description.",
    source="https://perinim.github.io/projects",
    config=graph_config
)

result = smart_scraper_graph.run()
print(result)

graph_exec_info = smart_scraper_graph.get_execution_info()
print(prettify_exec_info(graph_exec_info))

```
