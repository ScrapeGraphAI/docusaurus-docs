# 🍷 convert_to_csv

## Introduction
The convert_to_csv function takes a dictionary containing data, a filename, and a directory position, and saves the data in CSV format at the specified location.

## Implementation
```python
"""
Module that given a filename and a position saves the file in the csv format
"""
import os
import pandas as pd


def convert_to_csv(data: dict, filename: str, position: str):
    """
    Convert data to JSON format and save it to a file.

    Args:
        data (dict): Data to save.
        filename (str): Name of the file to save without .csv extension.
        position (str): Directory where the file should be saved.

    Raises:
        ValueError: If filename contains '.csv'.
        FileNotFoundError: If the specified directory does not exist.
        PermissionError: If the program does not have permission to write to the directory.
    """
    if ".csv" in filename:
        raise ValueError("The filename should not contain '.csv'")

    try:
        os.makedirs(position, exist_ok=True)
        pd.DataFrame.from_dict(data, orient='index').to_csv(
            os.path.join(position, f"{filename}.csv"), index=False)
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