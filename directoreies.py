import os
import zipfile

def backup_to_zip(folder_path):
    # Set the zip filename to be in the current working directory
    print(f"folder_path:{folder_path}")
    folder_name = os.path.basename(folder_path)
    print(f"folder_name:{folder_name}")
    zip_filename = f"{folder_name}.zip"
    print(f"zip_filename:{zip_filename}")
    zip_path = os.path.join(os.getcwd(), zip_filename)
    print(f"zip_path:{zip_path}")
    
    with zipfile.ZipFile(zip_path, 'w') as backup_zip:
        for foldername, subfolders, filenames in os.walk(folder_path):
            for file in filenames:
                print(f"file:{file}")
                file_path = os.path.join(foldername, file)
                print(f"foldername:{foldername}")
                print(f"file_path:{file_path}")
                print(f"rel_path:{os.path.relpath(file_path, folder_path)}")
                backup_zip.write(file_path)
    
    print(f"Zip file successfully created with name {zip_filename}")


folder_to_backup = os.path.join(os.getcwd(), "zz")
backup_to_zip(folder_to_backup)
