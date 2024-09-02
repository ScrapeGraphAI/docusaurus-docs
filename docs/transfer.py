import os

# Define the source and target directories
source_dir = os.path.expanduser('~/github/Scrapegraph-ai/examples')
target_dir = os.path.expanduser('~/github/Scrapegraph-ai-documentation/docs/Examples')

# Function to copy and modify files
def copy_and_modify_files(src, dst):
    if not os.path.exists(dst):
        os.makedirs(dst)

    for item in os.listdir(src):
        item_path = os.path.join(src, item)
        if os.path.isfile(item_path) and not item.endswith('.env.example'):
            # Skip non-text files based on common extensions
            if item.endswith(('.py', '.md', '.txt', '.json', '.xml', '.csv')):
                # Change the extension from .py to .md
                dst_file = os.path.join(dst, os.path.splitext(item)[0] + '.md')
                try:
                    with open(item_path, 'r', encoding='utf-8') as f_src:
                        content = f_src.read()

                    # Modify the content of the file by adding the first line
                    content = '```python\n' + content

                    with open(dst_file, 'w', encoding='utf-8') as f_dst:
                        f_dst.write(content)

                    print(f"Copied and modified {item} to {dst_file}")
                except UnicodeDecodeError:
                    print(f"Skipped {item} due to encoding issues")

        elif os.path.isdir(item_path):
            copy_and_modify_files(item_path, os.path.join(dst, item))

# Iterate through the folders in 'examples' and copy the files
for folder in os.listdir(source_dir):
    folder_path = os.path.join(source_dir, folder)
    if os.path.isdir(folder_path):
        copy_and_modify_files(folder_path, os.path.join(target_dir, folder))
