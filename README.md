# Brice Petit - Site Web Personnel

Site web personnel de Brice Petit, PhD Student en Intelligence Artificielle et Prévision Énergétique à l'Université Libre de Bruxelles (ULB).

## 🚀 Fonctionnalités

- **Design moderne** avec glassmorphism et animations fluides
- **Multilingue** (Français/Anglais) avec Django i18n
- **Responsive** adapté à tous les écrans
- **Pages principales** :
  - 🏠 Accueil avec présentation et métriques
  - 🛠️ Compétences et projets
  - 🎓 Formation et expérience
  - 📚 Recherche académique
  - 🤖 Page 404 personnalisée

## 🛠️ Technologies

- **Backend** : Django 5.1
- **Frontend** : HTML5, CSS3 (Architecture modulaire), JavaScript
- **Internationalisation** : Django i18n
- **Design** : CSS Grid, Flexbox, Animations CSS/JS
- **Responsive** : Mobile-first approach

## 🎨 Architecture CSS

```
static/css/
├── style.css (fichier principal)
└── modules/
    ├── base.css (styles de base)
    ├── header.css (en-tête)
    ├── footer.css (pied de page)
    ├── home.css (page d'accueil)
    ├── skills.css (compétences)
    ├── education.css (formation)
    ├── academic.css (recherche)
    └── 404.css (page d'erreur)
```

## 🌐 Installation et lancement

1. Cloner le repository :
```bash
git clone https://github.com/BricePetit/BricePetit.git
cd BricePetit
```

2. Créer un environnement virtuel :
```bash
python -m venv venv
source venv/bin/activate  # Sur macOS/Linux
# ou
venv\Scripts\activate     # Sur Windows
```

3. Installer les dépendances :
```bash
pip install django
```

4. Compiler les traductions :
```bash
python manage.py compilemessages
```

5. Lancer le serveur de développement :
```bash
python manage.py runserver
```

6. Accéder au site : http://127.0.0.1:8000

## 🌍 Langues disponibles

- 🇫🇷 Français : http://127.0.0.1:8000/fr/
- 🇬🇧 Anglais : http://127.0.0.1:8000/en/

## 📞 Contact

- **Email** : Disponible sur le site
- **LinkedIn** : Disponible sur le site
- **Institution** : IRIDIA - Université Libre de Bruxelles

## 📝 Licence

Ce projet est un site web personnel. Tous droits réservés.
