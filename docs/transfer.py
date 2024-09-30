import os

source_dir = os.path.expanduser('~/github/Scrapegraph-ai/examples')
target_dir = os.path.expanduser('~/github/Scrapegraph-ai-documentation/docs/Examples')

def copy_and_modify_files(src, dst):
    if not os.path.exists(dst):
        os.makedirs(dst)

    for item in os.listdir(src):
        if item == 'inputs':
            continue

        item_path = os.path.join(src, item)
        if os.path.isfile(item_path) and not item.endswith('.env.example'):
            if item.endswith(('.py', '.md', '.txt', '.json', '.xml', '.csv')):
                dst_file = os.path.join(dst, os.path.splitext(item)[0] + '.md')
                try:
                    with open(item_path, 'r', encoding='utf-8') as f_src:
                        content = f_src.read()

                    content = '```python\n' + content

                    with open(dst_file, 'w', encoding='utf-8') as f_dst:
                        f_dst.write(content)

                    print(f"Copied and modified {item} to {dst_file}")
                except UnicodeDecodeError:
                    print(f"Skipped {item} due to encoding issues")

        elif os.path.isdir(item_path):
            copy_and_modify_files(item_path, os.path.join(dst, item))

for folder in os.listdir(source_dir):
    if folder == 'inputs':
        continue

    folder_path = os.path.join(source_dir, folder)
    if os.path.isdir(folder_path):
        copy_and_modify_files(folder_path, os.path.join(target_dir, folder))
