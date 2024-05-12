# 🏆 `save_audio_from_bytes`

## Introduction
The `save_audio_from_bytes` utility function saves the byte response as an audio file.

The implementation of the class is in this [link](https://github.com/VinciGit00/Scrapegraph-ai/blob/main/scrapegraphai/utils/save_audio_from_bytes.py).

## Implementation
```python
"""
This utility function saves the byte response as an audio file.
"""
from pathlib import Path
from typing import Union


def save_audio_from_bytes(byte_response: bytes, output_path: Union[str, Path]) -> None:
    """
    Saves the byte response as an audio file.

    Args:
        byte_response (bytes): The byte response containing the generated speech.
        output_path (str or Path): The file path where the generated speech should be saved.
    """
    if not isinstance(output_path, Path):
        output_path = Path(output_path)

    with open(output_path, 'wb') as audio_file:
        audio_file.write(byte_response)
```


## Example
```python
""" 
Example for th e file save_audio_from_bytes
"""
from scrapegraphai.utils.save_audio_from_bytes import save_audio_from_bytes

BYTE_RESPONSE = b'\x12\x34\x56\x78\x90'

OUTPUT_PATH = "generated_speech.wav"

save_audio_from_bytes(BYTE_RESPONSE, OUTPUT_PATH)

```