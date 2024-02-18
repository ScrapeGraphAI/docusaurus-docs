# 📚 Basics 
The standard structure of Scrapegrah-ai is a graph made by nodes.

Each node has his own functionality

The principal nodes of this library are:

- **base_node**: abstract class where all the nodes come from
- **conditional_node**:  makes conditional branches
- **fetch_html_node**:  makes the HTML requests
- **generate_answer_node**: generates an answer using a language model (LLM) based on the user's input and the content extracted from a webpage.
- **get_probable_tags_node**: utilizes a language model to identify probable HTML tags within a document that are likely to contain the information relevant to a user's query
- **image_to_text_node**: given an image it retrieves the text
- **text_to_speach_node**: given a text it save the .mp3 file
