# 🚣 Remover

## Introduction
The remover is a module that given an html string it removes all the tags that are not necessary

## Implementation
```python
"""
Module for removing the unused html tags
"""
from bs4 import BeautifulSoup


def remover(html_content: str) -> str:
    """
    This function processes the HTML content, removes unnecessary tags,
     and retrieves the title and body content.

    Parameters:
        html_content (str): the HTML content to parse

    Returns:
        str: the parsed title followed by the body content without script tags
    """

    soup = BeautifulSoup(html_content, 'html.parser')

    title_tag = soup.find('title')
    title = title_tag.get_text() if title_tag else ""

    [script.extract() for script in soup.find_all('script')]

    body_content = soup.find('body')
    body = str(body_content) if body_content else ""

    return "Title: " + title + ", Body: " + body
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