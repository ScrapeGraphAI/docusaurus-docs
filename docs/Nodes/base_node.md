# 🌲 BaseNode

## Introduction
The basic unit of Scrapegraph-ai is the `BaseNode`.

Is the superclass from which all other nodes are created.

The implementation section includes a Python code snippet defining the `BaseNode` class. This class serves as an abstract base class for nodes in a graph-based workflow. It contains attributes such as `node_name` and `node_type` to uniquely identify and categorize nodes within the graph. The `execute` method, marked as abstract, must be implemented by subclasses to define the logic executed when the node is reached in the graph's flow. The constructor initializes the node with a unique identifier and a specified node type, ensuring that the provided type is valid.

The implementation of the class is in this [link](https://github.com/VinciGit00/Scrapegraph-ai/blob/main/scrapegraphai/nodes/base_node.py).

## Implementation
```python reference title="BaseNode"
https://github.com/VinciGit00/Scrapegraph-ai/blob/main/scrapegraphai/nodes/base_node.py
```
