# learninReactJS

Aprende una vez, escribe donde quieras

Para instalar REact, necesitaremos NPM

# NPM 
Gestor de paquetes.

# Crear app de React com Biolerplate o Scaffold
instalamos a travez de npm 
npm install -g create-react-app

  create react app es un boilerplate o scafold
  boilerplate o también llamado scafold es una estructura de archivos y paquetes (o andamiaje) base para crear una aplicación.

https://github.com/facebook/create-react-app

Creamos la app con
  npx create-react-app my-app
Nos posicionamos en el directorio con
  cd my-app
Iniciamos la app en un server local con
  npm start

# Crear app de react desde 0 con webpack

Tomamos las configuraciones de webpack del siguiente repo:
  https://github.com/LeonidasEsteban/webpack-curso/tree/master/invie
  
Uilizamos las siguientes dependencias
    "devDependencies": {
    "babel-core": "^6.26.0",
    "babel-loader": "^7.1.2",
    "babel-preset-es2015": "^6.24.1",
    "babel-preset-react": "^6.24.1",
    "clean-webpack-plugin": "^0.1.17",
    "css-loader": "^0.28.7",
    "extract-text-webpack-plugin": "^3.0.2",
    "file-loader": "^1.1.5",
    "style-loader": "^0.19.0",
    "url-loader": "^0.6.2",
    "webpack": "^3.8.1",
    "webpack-dev-server": "^2.9.3"
  }
    **Podemos copiar TODAS las dependencias de otro proyecto copiando esta parte del package.json y luego corriento "npm i"
