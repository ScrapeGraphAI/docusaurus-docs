---
sidebar_position: 3
---

# AI Models and Token Limits

ScrapGraphAI supports a wide range of AI models from various providers. Each model has a specific token limit, which is important to consider when designing your scraping pipelines. Here's an overview of the supported models and their token limits:

## OpenAI Models
- GPT-3.5 Turbo (16,385 tokens)
- GPT-3.5 (4,096 tokens)
- GPT-3.5 Turbo Instruct (4,096 tokens)
- GPT-4 Turbo Preview (128,000 tokens)
- GPT-4 Vision Preview (128,000 tokens)
- GPT-4 (8,192 tokens)
- GPT-4 32k (32,768 tokens)
- GPT-4o (128,000 tokens)
- O1 Preview (128,000 tokens)
- O1 Mini (128,000 tokens)

## Azure OpenAI Models
- GPT-3.5 Turbo (16,385 tokens)
- GPT-3.5 (4,096 tokens)
- GPT-4 Turbo Preview (128,000 tokens)
- GPT-4 (8,192 tokens)
- GPT-4 32k (32,768 tokens)
- GPT-4o (128,000 tokens)
- O1 Preview (128,000 tokens)
- O1 Mini (128,000 tokens)

## Google AI Models
- Gemini Pro (128,000 tokens)
- Gemini 1.5 Flash (128,000 tokens)
- Gemini 1.5 Pro (128,000 tokens)
- Gemini 1.0 Pro (128,000 tokens)

## Anthropic Models
- Claude Instant (100,000 tokens)
- Claude 2 (9,000 tokens)
- Claude 2.1 (200,000 tokens)
- Claude 3 (200,000 tokens)
- Claude 3.5 (200,000 tokens)
- Claude 3 Opus (200,000 tokens)
- Claude 3 Sonnet (200,000 tokens)
- Claude 3 Haiku (200,000 tokens)

## Mistral AI Models
- Mistral Large Latest (128,000 tokens)
- Open Mistral Nemo (128,000 tokens)
- Codestral Latest (32,000 tokens)
- Open Mistral 7B (32,000 tokens)
- Open Mixtral 8x7B (32,000 tokens)
- Open Mixtral 8x22B (64,000 tokens)
- Open Codestral Mamba (256,000 tokens)

## Ollama Models
- Command-R (12,800 tokens)
- CodeLlama (16,000 tokens)
- DBRX (32,768 tokens)
- DeepSeek Coder 33B (16,000 tokens)
- Llama2 Series (4,096 tokens)
- Llama3 Series (8,192-128,000 tokens)
- Mistral Models (32,000-128,000 tokens)
- Mixtral 8x22B Instruct (65,536 tokens)
- Phi3 Series (12,800-128,000 tokens)
- Qwen Series (32,000 tokens)

## Hugging Face Models
- Grok-1 (8,192 tokens)
- Meta Llama 3 Series (8,192 tokens)
- Google Gemma Series (8,192 tokens)
- Microsoft Phi Series (2,048-131,072 tokens)
- GPT-2 Series (1,024 tokens)
- DeepSeek V2 Series (131,072 tokens)

## Bedrock Models
- Claude 3 Series (200,000 tokens)
- Llama2 & Llama3 Series (4,096-8,192 tokens)
- Mistral Series (32,768 tokens)
- Titan Embed Text (8,000 tokens)
- Cohere Embed (512 tokens)

## Fireworks Models
- Llama V2 7B (4,096 tokens)
- Mixtral 8x7B Instruct (4,096 tokens)
- Llama 3.1 Series (131,072 tokens)
- Mixtral MoE Series (65,536 tokens)

For a complete and up-to-date list of supported models and their token limits, please refer to the API documentation.

Understanding token limits is crucial for optimizing your scraping tasks. Larger token limits allow for processing more text in a single API call, which can be beneficial for scraping lengthy web pages or documents. 