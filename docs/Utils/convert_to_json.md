# 🤖 convert_to_json
## Introduction
This function given a filename, a dictionary and a position it saves it in the json format
## Implementation
```python
"""
Module that given a filename and a position saves the file in the json format
"""
import json
import os


def convert_to_json(data: dict, filename: str, position: str):
    """
    Convert data to CSV format and save it to a file.

    Args:
        data (dict): Data to save.
        filename (str): Name of the file to save without .json extension.
        position (str): Directory where the file should be saved.

    Raises:
        ValueError: If filename contains '.json'.
        FileNotFoundError: If the specified directory does not exist.
        PermissionError: If the program does not have permission to write to the directory.
    """
    if ".json" in filename:
        raise ValueError("The filename should not contain '.json'")

    try:
        os.makedirs(position, exist_ok=True)
        with open(os.path.join(position, f"{filename}.json"), "w", encoding="utf-8") as f:
            f.write(json.dumps(data))
    except FileNotFoundError as fnfe:
        raise FileNotFoundError(
            f"The specified directory '{position}' does not exist.") from fnfe
    except PermissionError as pe:
        raise PermissionError(
            f"You don't have permission to write to '{position}'.") from pe
    except Exception as e:
        raise e

```

## Example
```python
"""
Example of using convert_to_json function to save data in JSON format.
"""
import os
from scrapegraphai.utils.convert_to_json import convert_to_json

# Data to save in JSON format
data_to_save = {
    "name": "John Doe",
    "age": 30,
    "city": "New York"
}

FILENAME = "example_data"
DIRECTORY = "data_output"

try:
    convert_to_json(data_to_save, FILENAME, DIRECTORY)
    print(
        f"Data has been successfully saved to {os.path.join(DIRECTORY, FILENAME)}.json")
except ValueError as value_error:
    print(value_error)
except FileNotFoundError as file_not_found_error:
    print(file_not_found_error)
except PermissionError as permission_error:
    print(permission_error)
except Exception as exception:
    print(f"An error occurred: {exception}")

```