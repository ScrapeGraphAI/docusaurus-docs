import os
import shutil

# Definisci i percorsi delle directory
source_dir = os.path.expanduser('~/github/Scrapegraph-ai/examples')
target_dir = os.path.expanduser('~/github/Scrapegraph-ai-documentation/docs/Examples')

# Funzione per copiare e modificare i file
def copy_and_modify_files(src, dst):
    if not os.path.exists(dst):
        os.makedirs(dst)
    
    for item in os.listdir(src):
        item_path = os.path.join(src, item)
        if os.path.isfile(item_path):
            # Cambia l'estensione da .py a .md
            dst_file = os.path.join(dst, os.path.splitext(item)[0] + '.md')
            with open(item_path, 'r') as f_src:
                content = f_src.read()
            
            # Modifica il contenuto del file aggiungendo la prima riga
            content = '```python\n' + content
            
            with open(dst_file, 'w') as f_dst:
                f_dst.write(content)
            
            print(f"Copied and modified {item} to {dst_file}")
        
        elif os.path.isdir(item_path):
            copy_and_modify_files(item_path, os.path.join(dst, item))

# Scorri attraverso le cartelle in 'examples' e copia i file
for folder in os.listdir(source_dir):
    folder_path = os.path.join(source_dir, folder)
    if os.path.isdir(folder_path):
        copy_and_modify_files(folder_path, os.path.join(target_dir, folder))

