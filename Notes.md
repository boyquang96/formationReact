
## Structure des fichiers

1 composant = fichiers .jsx, css, style

1 composant est dans 1 répertoire avec le nom du composant

import react meme si ça ne renvoie pas d'erreur

src
    --app
        --components
                    --ui
                    --layout
                    --functional
                    --pages


## générer fichier json qui permet de configurer par défaut 

npx generate-react-cli

## mettre à jour le fichier json avec nom des type des componsant (ex: uiCmp, layoutCmp,...)

définir le chemin, les paramètres, etc.

## générer un composant par défaut avec son type, par exemple "Header", "Footer"

npx generate-react-cli c Header Footer --type=uiCmp



# utilisation de yarn à la place de npm

npm i -g yarn
yarn add orsys-tjs-meme


# utiliser un db server (ici json server)

créer un fichier db.json
lancer le server:
npx json-server -p 5679 db/db.json

## installer redux
npm i @reduxjs/toolkit react-redux


