import os
import shutil
from PIL import Image, ImageFile

ImageFile.LOAD_TRUNCATED_IMAGES = True

PROJECT_ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
SOURCE_DIR = PROJECT_ROOT
DEST_DIR = os.path.join(PROJECT_ROOT, "public", "images", "new")
BACKUP_DIR = os.path.join(PROJECT_ROOT, "public", "images", "backup")
MAX_WIDTH_HERO = 1920
MAX_WIDTH_THUMB = 800
QUALITY = 80

MAPPING_PARTIALS = {
    "pv70zwp": "hero-mud-therapy.avif",
    "i96m54": "about-reception.avif",
    "qxi6h9": "service-naturopathy.avif",
    "no49a7": "service-ayurveda.avif",
    "1h5f24": "service-physiotherapy.avif",
    "dhcmq6": "service-wellness.avif",
    "1vk10n": "testimonial-woman.avif",
    "wxabqo": "blog-naturopathy.avif",
    "d9teuk": "blog-panchakarma.avif",
    "xelhjn": "conditions-facade.avif",
    "pwkwoc": "footer-garden.avif",
}


def find_src_images():
    found = []
    files = sorted(os.listdir(SOURCE_DIR))

    for file in files:
        if not file.startswith("Gemini_Generated_Image") or not file.endswith(".png"):
            continue

        try:
            parts = file.split("Gemini_Generated_Image_")
            if len(parts) <= 1:
                continue

            partial = parts[1].split(".")[0].split(" ")[0][:7]
            mapped_name = MAPPING_PARTIALS.get(partial)
            if mapped_name:
                full_path = os.path.join(SOURCE_DIR, file)
                found.append((file, full_path, mapped_name))
                print(f"✅ Found: {file} -> {mapped_name}")
        except Exception as exc:
            print(f"Skipping file {file}: {exc}")

    for file in files:
        if "d9teuk" not in file or "Gemini_Generated_Image" not in file:
            continue

        if "(3)" in file:
            found.append((file, os.path.join(SOURCE_DIR, file), "blog-panchakarma.avif"))
        elif "(2)" in file:
            found.append((file, os.path.join(SOURCE_DIR, file), "blog-hydrotherapy.avif"))
        elif "(1)" in file:
            found.append((file, os.path.join(SOURCE_DIR, file), "blog-yoga.avif"))
        elif "(" not in file:
            found.append((file, os.path.join(SOURCE_DIR, file), "blog-mud-therapy.avif"))

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
                img.save(dest_path, 'AVIF', quality=QUALITY, method=6)
                size = os.path.getsize(dest_path) / 1024
                print(f"✅ {new_name} saved ({size:.1f}KB)")
        except Exception as e:
            print(f"❌ {file}: {e}")

if __name__ == "__main__":
    setup_dirs()
    process_images()
    print(f"🎉 Check {DEST_DIR}")
