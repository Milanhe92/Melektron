#!/bin/bash

# Kreiranje osnovne strukture
mkdir -p frontend/public
mkdir -p frontend/styles
mkdir -p frontend/components
mkdir -p frontend/lib
mkdir -p backend

# Premestanje fajlova za frontend
mv app frontend/ 2>/dev/null
mv components frontend/ 2>/dev/null
mv lib frontend/ 2>/dev/null
mv public frontend/ 2>/dev/null
mv styles frontend/ 2>/dev/null || mkdir frontend/styles
mv globals.css frontend/styles/ 2>/dev/null
mv next.config.js frontend/ 2>/dev/null
mv postcss.config.js frontend/ 2>/dev/null
mv tailwind.config.js frontend/ 2>/dev/null
mv tsconfig.json frontend/ 2>/dev/null
mv package.json frontend/ 2>/dev/null
mv package-lock.json frontend/ 2>/dev/null
mv .env frontend/ 2>/dev/null
mv .env.local frontend/ 2>/dev/null
mv .env.example frontend/ 2>/dev/null
mv .gitignore frontend/ 2>/dev/null
mv .replit frontend/ 2>/dev/null
mv CNAME frontend/public/ 2>/dev/null
mv LICENCE frontend/ 2>/dev/null
mv README.md frontend/ 2>/dev/null
mv next-sitemap.config.js frontend/ 2>/dev/null
mv vercel.json frontend/ 2>/dev/null

# Premestanje HTML fajlova
mv donacije.html frontend/public/ 2>/dev/null
mv dashboard.html frontend/public/ 2>/dev/null
mv mining-pool.html frontend/public/ 2>/dev/null
mv index.html frontend/public/ 2>/dev/null
mv favicon.ico frontend/public/ 2>/dev/null

# Brisanje duplikata i nepotrebnih fajlova
rm -rf quantum workflows contracts 'javascript:assets' melektron-blog assets
rm netlify.toml 2>/dev/null
rm next.js 2>/dev/null
rm redirects 2>/dev/null

# Brisanje suvišnih .gitignore fajlova
find . -name ".gitignore" -not -path "./frontend/.gitignore" -delete

echo "Reorganizacija završena!"