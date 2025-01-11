---
sidebar_position: 5
---

# FAQ

1. **What is ScrapeGraphAI?**

   ScrapeGraphAI is an open-source python library that uses large language models (LLMs) and graph logic to automate the creation of scraping pipelines for websites and various document types.

2. **How does ScrapeGraphAI differ from traditional scraping tools?**

   Traditional scraping tools rely on fixed patterns and manual configurations, whereas ScrapeGraphAI adapts to website structure changes using LLMs, reducing the need for constant developer intervention.

3. **Which LLMs are supported by ScrapeGraphAI?**

   ScrapeGraphAI supports several LLMs, including GPT, Gemini, Groq, Azure, Hugging Face, and local models that can run on your machine using Ollama.

4. **Can ScrapeGraphAI handle different document formats?**

   Yes, ScrapeGraphAI can scrape information from various document formats such as XML, HTML, JSON, and more.

5. **I get an empty or incorrect output when scraping a website. What should I do?**

   There are several reasons behind this issue, but for most cases, you can try the following:

   - Set the `headless` parameter to `False` in the graph_config. Some javascript-heavy websites might require it.
   - Check your internet connection. Low speed or unstable connection can cause the HTML to not load properly.
   - Try using a proxy server to mask your IP address. Check out the [Proxy](../scrapers/proxy.md) section for more information on how to configure proxy settings.
   - Use a different LLM model. Some models might perform better on certain websites than others.
   - Set the `verbose` parameter to `True` in the graph_config to see more detailed logs.
   - Visualize the pipeline graphically using [Burr](../scrapers/burr.md).
   
   If the issue persists, please report it on the GitHub repository.

6. **How does ScrapeGraphAI handle the context window limit of LLMs?**

   By splitting big websites/documents into chunks with overlaps and applying compression techniques to reduce the number of tokens. If multiple chunks are present, we will have multiple answers to the user prompt, and therefore, we merge them together in the last step of the scraping pipeline.

7. **How can I contribute to ScrapeGraphAI?**

   You can contribute to ScrapeGraphAI by submitting bug reports, feature requests, or pull requests on the GitHub repository. Join our [Discord](https://discord.gg/uJN7TYcpNa) community and follow us on social media! 