# ChromiumLoader Module

The `ChromiumLoader` module scrapes HTML pages from URLs using a (headless) instance of the Chromium web driver with proxy protection.

## Classes

### `ChromiumLoader`

`ChromiumLoader` is designed to scrape HTML pages from a list of URLs using a specified web driver backend, such as Playwright.

#### Attributes

- **backend (str)**: The web driver backend library; defaults to 'playwright'.
- **browser_config (dict)**: A dictionary containing additional browser kwargs.
- **headless (bool)**: Whether to run the browser in headless mode.
- **proxy (Optional[Proxy])**: A dictionary containing proxy settings; None disables protection.
- **urls (List[str])**: A list of URLs to scrape content from.

#### Methods

- **`__init__(self, urls: List[str], *, backend: str = "playwright", headless: bool = True, proxy: Optional[Proxy] = None, **kwargs: Any)`**
  - Initializes the loader with a list of URL paths.
  - **Args**:
    - `backend (str)`: The web driver backend library; defaults to 'playwright'.
    - `headless (bool)`: Whether to run the browser in headless mode.
    - `proxy (Optional[Proxy])`: A dictionary containing proxy information; None disables protection.
    - `urls (List[str])`: A list of URLs to scrape content from.
    - `kwargs (Any)`: A dictionary containing additional browser kwargs.
  - **Raises**: `ImportError` - If the required backend package is not installed.

- **`ascrape_playwright(self, url: str) -> str`**
  - Asynchronously scrape the content of a given URL using Playwright's async API.
  - **Args**:
    - `url (str)`: The URL to scrape.
  - **Returns**: `str` - The scraped HTML content or an error message if an exception occurs.

- **`lazy_load(self) -> Iterator[Document]`**
  - Lazily load text content from the provided URLs.
  - **Yields**: `Document` - The scraped content encapsulated within a `Document` object.

- **`alazy_load(self) -> AsyncIterator[Document]`**
  - Asynchronously load text content from the provided URLs.
  - **Yields**: `Document` - A `Document` object containing the scraped content, along with its source URL as metadata.

## Example Usage

Here is an example of how to use the `ChromiumLoader` class:

```python
import asyncio
from chromium_loader import ChromiumLoader

# Define the list of URLs to scrape
urls = ["https://example.com", "https://example.org"]

# Initialize ChromiumLoader
loader = ChromiumLoader(urls, backend="playwright", headless=True, proxy=None)

# Lazy load documents (synchronous)
for document in loader.lazy_load():
    print(document.page_content)

# Asynchronously load documents
async def load_documents():
    async for document in loader.alazy_load():
        print(document.page_content)

# Run the asynchronous loader
asyncio.run(load_documents())
