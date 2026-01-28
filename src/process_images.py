import os
import shutil
from PIL import Image, ImageFile
ImageFile.LOAD_TRUNCATED_IMAGES = True

# SPECIFIC: Images in src/ folder (Current directory since we run from src/)
SOURCE_DIR = "."  
DEST_DIR = "../public/images/new"  # Relative from src/ to public/
BACKUP_DIR = "../public/images/backup"
MAX_WIDTH_HERO = 1920
MAX_WIDTH_THUMB = 800
QUALITY = 80

# Partial matches (first 8-10 chars after Gemini_)
MAPPING_PARTIALS = {
    "pv70zwp": "hero-mud-therapy.webp",
    "i96m54": "about-reception.webp", 
    "qxi6h9": "service-naturopathy.webp",
    "no49a7": "service-ayurveda.webp",
    "1h5f24": "service-physiotherapy.webp",
    "dhcmq6": "service-wellness.webp",
    "1vk10n": "testimonial-woman.webp",
    "wxabqo": "blog-naturopathy.webp",
    "d9teuk": "blog-panchakarma.webp",  
    "xelhjn": "conditions-facade.webp",
    "pwkwoc": "footer-garden.webp"
}

def find_src_images():
    # Look for files in current dir (SOURCE_DIR=".")
    found = []
    files = os.listdir(SOURCE_DIR)
    for file in files:
        if "Gemini_Generated_Image" in file and file.endswith('.png'):
            try:
                # Handle potential variations in naming structure
                parts = file.split('Gemini_Generated_Image_')
                if len(parts) > 1:
                    partial = parts[1].split('.')[0].split(' ')[0][:7] # Take first 7 chars
                    if partial in MAPPING_PARTIALS:
                        full_path = os.path.join(SOURCE_DIR, file)
                        found.append((file, full_path, MAPPING_PARTIALS[partial]))
                        print(f"✅ Found in src/: {file} -> {MAPPING_PARTIALS[partial]}")
            except Exception as e:
                print(f"Skipping file {file}: {e}")
                
    # Also handle the blog ones specifically if key matches are tricky
    # "d9teuk" maps to blog-panchakarma, but there are multiple d9teuk... 
    # MAPPING_PARTIALS has keys. The user mapping had:
    # d9teuk... (3) -> panchakarma
    # d9teuk... (2) -> hydrotherapy
    # d9teuk... (1) -> yoga
    # d9teuk... -> mud-therapy
    
    # Let's add specific logic for these duplicates if they exist
    for file in files:
        if "d9teuk" in file and "Gemini" in file:
             if "(3)" in file: 
                 found.append((file, os.path.join(SOURCE_DIR, file), "blog-panchakarma.webp"))
             elif "(2)" in file:
                 found.append((file, os.path.join(SOURCE_DIR, file), "blog-hydrotherapy.webp"))
             elif "(1)" in file:
                 found.append((file, os.path.join(SOURCE_DIR, file), "blog-yoga.webp"))
             elif "(" not in file: # Main one
                 found.append((file, os.path.join(SOURCE_DIR, file), "blog-mud-therapy.webp"))

    # Dedup
    unique_found = {}
    for f, p, n in found:
        unique_found[n] = (f, p, n)
        
    return list(unique_found.values())

def setup_dirs():
    os.makedirs(DEST_DIR, exist_ok=True)
    os.makedirs(BACKUP_DIR, exist_ok=True)
    print(f"Dirs ready: {DEST_DIR}, {BACKUP_DIR}")

def process_images():
    images = find_src_images()
    if not images:
        print("❌ No matches in src/! List: ls src/*Gemini*.png")
        return
    
    for file, src_path, new_name in images:
        try:
            backup_path = os.path.join(BACKUP_DIR, file)
            shutil.copy(src_path, backup_path)
            print(f"Backup: {backup_path}")
            
            with Image.open(src_path) as img:
                img = img.convert('RGB')
                max_w = MAX_WIDTH_HERO if any(x in new_name for x in ['hero','footer','about','conditions']) else MAX_WIDTH_THUMB
                if img.width > max_w:
                    ratio = img.height / img.width
                    new_h = int(max_w * ratio)
                    img = img.resize((max_w, new_h), Image.Resampling.LANCZOS)
                    print(f"Resized to {max_w}x{new_h}")
                
                dest_path = os.path.join(DEST_DIR, new_name)
                img.save(dest_path, 'WEBP', quality=QUALITY, method=6)
                size = os.path.getsize(dest_path) / 1024
                print(f"✅ {new_name} saved ({size:.1f}KB)")
        except Exception as e:
            print(f"❌ {file}: {e}")

if __name__ == "__main__":
    os.chdir(os.path.dirname(os.path.abspath(__file__)))  # Ensure src context
    setup_dirs()
    process_images()
    print("🎉 Check ../public/images/new/")
