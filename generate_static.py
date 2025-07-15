#!/usr/bin/env python3
"""
Script pour générer une version statique du site Django pour GitHub Pages
"""

import os
import sys
import django
from pathlib import Path
import shutil
from urllib.parse import urljoin

# Configuration Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'mysite.settings')
django.setup()

from django.test import Client
from django.urls import reverse
from django.conf import settings

def create_static_site():
    """Génère une version statique du site"""
    
    # Dossier de sortie pour le site statique
    output_dir = Path('docs')  # GitHub Pages utilise le dossier 'docs'
    
    # Nettoyer le dossier de sortie
    if output_dir.exists():
        shutil.rmtree(output_dir)
    output_dir.mkdir()
    
    # Client Django pour simuler les requêtes
    client = Client()
    
    # Pages à générer (en français et anglais)
    pages = {
        'home': '/',
        'skills': '/skills/',
        'education': '/education/',
        'academic': '/academic/',
    }
    
    languages = ['fr', 'en']
    
    print("🚀 Génération du site statique...")
    
    for lang in languages:
        print(f"  📄 Génération des pages en {lang.upper()}...")
        
        # Créer le dossier de langue
        lang_dir = output_dir / lang
        lang_dir.mkdir(exist_ok=True)
        
        for page_name, url in pages.items():
            print(f"    - {page_name}.html")
            
            # Faire la requête avec la langue appropriée
            response = client.get(f'/{lang}{url}', HTTP_ACCEPT_LANGUAGE=lang)
            
            if response.status_code == 200:
                # Sauvegarder la page
                if page_name == 'home':
                    filename = lang_dir / 'index.html'
                else:
                    page_dir = lang_dir / page_name
                    page_dir.mkdir(exist_ok=True)
                    filename = page_dir / 'index.html'
                
                with open(filename, 'w', encoding='utf-8') as f:
                    content = response.content.decode('utf-8')
                    # Ajuster les liens statiques pour GitHub Pages (bricepetit.github.io)
                    content = content.replace('/static/', '/static/')
                    f.write(content)
            else:
                print(f"    ❌ Erreur {response.status_code} pour {page_name}")
    
    # Copier les fichiers statiques
    print("  📁 Copie des fichiers statiques...")
    static_source = Path('mysite/static')
    static_dest = output_dir / 'static'
    
    if static_source.exists():
        shutil.copytree(static_source, static_dest)
    
    # Créer une page d'accueil qui redirige vers /fr/
    print("  🏠 Création de la page d'accueil...")
    index_content = """<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Brice Petit - Site Personnel</title>
    <script>
        // Redirection automatique vers la version française
        window.location.href = './fr/';
    </script>
</head>
<body>
    <p>Redirection vers <a href="./fr/">la version française</a>...</p>
    <p>Redirect to <a href="./en/">English version</a></p>
</body>
</html>"""
    
    with open(output_dir / 'index.html', 'w', encoding='utf-8') as f:
        f.write(index_content)
    
    # Créer le fichier .nojekyll pour GitHub Pages
    (output_dir / '.nojekyll').touch()
    
    print("✅ Site statique généré dans le dossier 'docs/'")
    print("🔗 Structure:")
    print("   docs/")
    print("   ├── index.html (redirection)")
    print("   ├── .nojekyll")
    print("   ├── static/ (CSS, JS, images)")
    print("   ├── fr/ (version française)")
    print("   └── en/ (version anglaise)")

if __name__ == '__main__':
    create_static_site()
