```python
"""
Example of custom graph using existing nodes
"""

import os
from langchain_openai import OpenAIEmbeddings
from langchain_openai import ChatOpenAI
from scrapegraphai.graphs import BaseGraph
from scrapegraphai.nodes import FetchNode, ParseNode, RAGNode, GenerateAnswerNode, RobotsNode

# ************************************************
# Define the configuration for the graph
# ************************************************

graph_config = {
    "llm": {
        "model": "ollama/mistral",
        "temperature": 0,
        "format": "json",  # Ollama needs the format to be specified explicitly
        # "model_tokens": 2000, # set context length arbitrarily
        "base_url": "http://localhost:11434",
    },
  
    "verbose": True,
}

# ************************************************
# Define the graph nodes
# ************************************************

llm_model = ChatOpenAI(graph_config["llm"])
embedder = OpenAIEmbeddings(api_key=llm_model.openai_api_key)

# define the nodes for the graph
robot_node = RobotsNode(
    input="url",
    output=["is_scrapable"],
    node_config={
        "llm_model": llm_model,
        "force_scraping": True,
        "verbose": True,
        }
)

fetch_node = FetchNode(
    input="url | local_dir",
    output=["doc"],
    node_config={
        "verbose": True,
        "headless": True,
    }
)
parse_node = ParseNode(
    input="doc",
    output=["parsed_doc"],
    node_config={
        "chunk_size": 4096,
        "verbose": True,
    }
)

generate_answer_node = GenerateAnswerNode(
    input="user_prompt & (relevant_chunks | parsed_doc | doc)",
    output=["answer"],
    node_config={
        "llm_model": llm_model,
        "verbose": True,
    }
)

# ************************************************
# Create the graph by defining the connections
# ************************************************

graph = BaseGraph(
    nodes=[
        robot_node,
        fetch_node,
        parse_node,
        generate_answer_node,
    ],
    edges=[
        (robot_node, fetch_node),
        (fetch_node, parse_node),
        (parse_node, generate_answer_node)
    ],
    entry_point=robot_node
)

# ************************************************
# Execute the graph
# ************************************************

result, execution_info = graph.execute({
    "user_prompt": "Describe the content",
    "url": "https://example.com/"
})

# get the answer from the result
result = result.get("answer", "No answer found.")
print(result)
