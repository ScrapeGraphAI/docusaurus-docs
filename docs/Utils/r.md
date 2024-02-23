# 🚣 Remover

## Introduction
The remover is a module that given an html string it removes all the tags that are not necessary

## Implementation
```python
"""
Module for removing the unused html tags
"""


def remover(file: str, only_body: bool = False) -> str:
    """
    This function elaborates the HTML file and remove all the not necessary tag

    Parameters:
        file (str): the file to parse

    Returns:
        str: the parsed file
    """

    res = ""

    if only_body:
        is_body = True
    else:
        is_body = False

    for elem in file.splitlines():
        if "<title>" in elem:
            res = res + elem

        if "<body>" in elem:
            is_body = True

        if "</body>" in elem:
            break

        if "<script>" in elem:
            continue

        if is_body:
            res = res + elem

    return res.replace("\\n", "")
```
## Example
```python
""" 
Example of the remover method
"""
from scrapegraphai.utils.remover import remover

HTML_CONTENT = """
<html>
<head>
    <title>Test Page</title>
</head>
<body>
    <h1>This is a Test</h1>
    <p>Hello, World!</p>
    <script>alert("This is a script");</script>
</body>
</html>
"""

parsed_content = remover(HTML_CONTENT)

print(parsed_content)

```