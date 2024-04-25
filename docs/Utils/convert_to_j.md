# 🤖 convert_to_json
## Introduction
The convert_to_json function takes a dictionary containing data, a filename, and a directory position, and saves the data in JSON format at the specified location.
## Implementation
```python
"""
Convert to json module
"""
import json
import os
import sys


def convert_to_json(data: dict, filename: str, position: str = None):
    """
    Convert data to JSON format and save it to a file.

    Args:
    data (dict): Data to save.
    filename (str): Name of the file to save without .json extension.
    position (str): Directory where the file should be saved. If None, 
    the directory of the caller script will be used.

    Raises:
    ValueError: If filename contains '.json'.
    FileNotFoundError: If the specified directory does not exist.
    PermissionError: If the program does not have permission to write to the directory.
    """
    if ".json" in filename:
        filename = filename.replace(".json", "")  # Remove .csv extension

  # Get the directory of the caller script
    if position is None:
        # Get directory of the main script
        caller_dir = os.path.dirname(os.path.abspath(sys.argv[0]))
        position = caller_dir

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