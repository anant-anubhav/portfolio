import os
import random
from PIL import Image

def create_noise_image(width=200, height=200, opacity=255):
    img = Image.new('RGBA', (width, height), (0, 0, 0, 0))
    pixels = img.load()
    
    for x in range(width):
        for y in range(height):
            # Random noise (black/white)
            val = random.randint(0, 255)
            # Alpha channel for transparency (low opacity)
            # User masked for opacity 0.04 in CSS, but image itself can be opaque noise or semi-transparent
            # Let's make it grayscale noise with varying alpha
            if random.random() > 0.5:
                # Black noise
                 pixels[x, y] = (0, 0, 0, random.randint(0, 50)) 
            else:
                 # White noise
                 pixels[x, y] = (255, 255, 255, random.randint(0, 50))

    img.save('public/noise.png')
    print("Noise image generated at public/noise.png")

if __name__ == "__main__":
    if not os.path.exists('public'):
        os.makedirs('public')
    create_noise_image()
