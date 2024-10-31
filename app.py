import time
import os
import random

# Liste des chemins d'images
images = [
    'images/yacine1.jpg',
    'images/yacine2.jpg',
    'images/yacine3.jpg',
    'images/yacine4.jpg'
]

def clear_console():
    os.system('clear')  # Utiliser 'clear' pour macOS

def display_hacking_animation():
    characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    print("⚠️ SYSTÈME COMPROMIS! YACINE, TU T'ES FAIT HACKER! ⚠️\n")
    time.sleep(2)
    clear_console()

    for _ in range(10):  # Afficher 10 lignes d'animation
        line = ''.join(random.choice(characters) for _ in range(30))
        print(line)
        time.sleep(0.1)
        clear_console()

    # Afficher le message d'anniversaire
    print("🎉 JOYEUX ANNIVERSAIRE, YACINE! 🎉")
    time.sleep(2)
    clear_console()

def display_images():
    for img_path in images:
        os.system(f'open "{img_path}"')  # Utiliser 'open' pour macOS
        time.sleep(2)  # Afficher chaque image pendant 2 secondes
        # Ferme l'image après la durée (cela dépend de l'outil utilisé par défaut)

if __name__ == "__main__":
    display_hacking_animation()
    display_images()
