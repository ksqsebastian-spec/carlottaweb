"""
Replace the gray wall background behind Carlotta with dark green (#6f7d2d).

Heuristic: wall pixels are low-saturation (achromatic gray). Face/hair/clothing
have higher saturation. We threshold on saturation and brightness, then feather
the mask edges so the swap doesn't look harsh.
"""

from PIL import Image, ImageFilter
import numpy as np
from pathlib import Path

SRC = Path("public/reference/F0C3C4C2-D61A-4524-8C21-3D9552CE789D.JPG")
DST = Path("public/reference/about-green.jpg")

GREEN = np.array([0x6f, 0x7d, 0x2d], dtype=np.float32)  # #6f7d2d

img = Image.open(SRC).convert("RGB")
arr = np.asarray(img, dtype=np.float32)

r, g, b = arr[..., 0], arr[..., 1], arr[..., 2]
maxc = np.maximum(np.maximum(r, g), b)
minc = np.minimum(np.minimum(r, g), b)
chroma = maxc - minc
sat = np.where(maxc > 0, chroma / np.maximum(maxc, 1.0), 0.0)
val = maxc / 255.0

# Wall: low saturation + reasonably bright
# Person hair/face: higher saturation OR darker
wall_mask = (sat < 0.18) & (val > 0.30)

# Convert to float mask (0..1) and feather
mask_img = Image.fromarray((wall_mask * 255).astype(np.uint8))
mask_img = mask_img.filter(ImageFilter.GaussianBlur(radius=8))
mask = np.asarray(mask_img, dtype=np.float32) / 255.0
mask = mask[..., None]  # (H,W,1)

# Blend toward green where mask is high
out = arr * (1 - mask) + GREEN[None, None, :] * mask
out = np.clip(out, 0, 255).astype(np.uint8)

Image.fromarray(out).save(DST, quality=90)
print(f"Saved {DST}; mask coverage = {wall_mask.mean()*100:.1f}%")
