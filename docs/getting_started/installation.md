---
sidebar_position: 2
---

# Installation

In the following sections I will guide you through the installation process of the required components
for this project.

## Prerequisites

- [Python >=3.9](https://www.python.org/downloads/)
- [pip](https://pip.pypa.io/en/stable/getting-started/)
- [Ollama](https://ollama.com/) (optional for local models)

## Install the library

The library is available on PyPI, so it can be installed using the following command:

```bash
pip install scrapegraphai
```

> **Important**: It is highly recommended to install the library in a virtual environment (conda, venv, etc.)

If you clone the repository, it is recommended to use a package manager like [uv](https://github.com/astral-sh/uv).
To install the library using uv, you can run the following command:

```bash
uv pin 3.10
uv sync
uv build
```

> **Caution**: **uv** must be installed first by following the instructions on the [official website](https://github.com/astral-sh/uv).

## Additionally on Windows when using WSL

If you are using Windows Subsystem for Linux (WSL) and you are facing issues with the installation of the library, you might need to install the following packages:

```bash
sudo apt-get -y install libnss3 libnspr4 libgbm1 libasound2
``` 