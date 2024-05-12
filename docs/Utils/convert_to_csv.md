# 🍷 `convert_to_csv`

## Introduction
The `convert_to_csv` function takes a dictionary containing data, a filename, and a directory position, and saves the data in CSV format at the specified location.

The implementation of the class is in this [link](https://github.com/VinciGit00/Scrapegraph-ai/blob/main/scrapegraphai/utils/convert_to_csv.py).

## Implementation
```python
"""
Module that given a filename and a position saves the file in the csv format
"""
import os
import sys
import pandas as pd


def convert_to_csv(data: dict, filename: str, position: str = None):
    """
    Converts a dictionary to a CSV file and saves it.

    Args:
    data (dict): Data to be converted to CSV.
    position (str): Optional path where the file should be saved. If not provided,
    the directory of the caller script will be used.

    Raises:
    FileNotFoundError: If the specified directory does not exist.
    PermissionError: If the program lacks write permission for the directory.
    TypeError: If the input data is not a dictionary.
    Exception: For other potential errors during DataFrame creation or CSV saving.
    """

    if ".csv" in filename:
        filename = filename.replace(".csv", "")  # Remove .csv extension

    # Get the directory of the caller script if position is not provided
    if position is None:
        caller_dir = os.path.dirname(os.path.abspath(sys.argv[0]))
        position = caller_dir

    try:
        if not isinstance(data, dict):
            raise TypeError("Input data must be a dictionary")

        os.makedirs(position, exist_ok=True)  # Create directory if needed

        df = pd.DataFrame.from_dict(data, orient='index')
        df.to_csv(os.path.join(position, f"{filename}.csv"), index=False)

    except FileNotFoundError as fnfe:
        raise FileNotFoundError(
            f"The specified directory '{position}' does not exist.") from fnfe
    except PermissionError as pe:
        raise PermissionError(
            f"You don't have permission to write to '{position}'.") from pe
    except Exception as e:
        raise e  # Re-raise other potential errors

```

## Example
```python
""" 
Teest for convert_to_csv
"""
import os
from scrapegraphai.utils.convert_to_csv import convert_to_csv


def main():
    """
    Example usage of the convert_to_csv function.
    """
    # Example data
    data = {
        'Name': ['John', 'Alice', 'Bob'],
        'Age': [30, 25, 35],
        'City': ['New York', 'San Francisco', 'Seattle']
    }

    # Example filename and position
    filename = "example_data"
    position = "./output"

    try:
        # Convert data to CSV and save
        convert_to_csv(data, filename, position)
        print(
            f"Data saved successfully to {os.path.join(position, filename)}.csv")
    except ValueError as ve:
        print(f"ValueError: {ve}")
    except FileNotFoundError as fnfe:
        print(f"FileNotFoundError: {fnfe}")
    except PermissionError as pe:
        print(f"PermissionError: {pe}")
    except Exception as e:
        print(f"An unexpected error occurred: {e}")


if __name__ == "__main__":
    main()

```