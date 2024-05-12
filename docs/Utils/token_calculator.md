# 🇹🇰 `token_calculator` 

## Introduction
The `truncate_text_tokens` retrieves the number of tokens and a list of chunks from a link, to then pass onto the model.

The implementation of the class is in this [link](https://github.com/VinciGit00/Scrapegraph-ai/blob/main/scrapegraphai/utils/token_calculator.py).

## Implementation
```python
""" 
Module for truncating in chunks the messages
"""
from typing import List
import tiktoken
from ..helpers.models_tokens import models_tokens


def truncate_text_tokens(text: str, model: str, encoding_name: str) -> List[str]:
    """
    It creates a list of strings to create max dimension tokenizable elements

    Args:
        text (str): The input text to be truncated into tokenizable elements.
        model (str): The name of the language model to be used.
        encoding_name (str): The name of the encoding to be used (default: EMBEDDING_ENCODING).

    Returns:
        List[str]: A list of tokenizable elements created from the input text.
    """

    encoding = tiktoken.get_encoding(encoding_name)
    max_tokens = models_tokens[model] - 500
    encoded_text = encoding.encode(text)

    chunks = [encoded_text[i:i + max_tokens]
              for i in range(0, len(encoded_text), max_tokens)]

    result = [encoding.decode(chunk) for chunk in chunks]

    return result
```
## Example
```python
"""
Example for calclating the tokenizer
"""
from scrapegraphai.utils.token_calculator import truncate_text_tokens
INPUT_TEXT = "http://nba.com"

MODEL_NAME = "gpt-3.5-turbo"
ENCODING_NAME = "EMBEDDING_ENCODING"

tokenized_chunks = truncate_text_tokens(INPUT_TEXT, MODEL_NAME, ENCODING_NAME)

for i, chunk in enumerate(tokenized_chunks):
    print(f"Chunk {i+1}: {chunk}")
```

