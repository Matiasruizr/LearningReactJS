# LearningReactJS 

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
```
    "devDependencies": {
    "babel-preset-stage-2": "^6.24.1",
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
```
   **Podemos copiar TODAS las dependencias de otro proyecto copiando esta parte del package.json y luego corriento "npm i"
    
    
  Una vez configurado todo esto con WEBPACK instalamos REACT
  
  npm install react react-dom --save 
  **Save guarda esto como dependencia de desarrollo
  
  React nos permitira crear nuestros componentes
  React DOM Servira para renderizar estos componentes en el navegador
  
  En el archivo index.js que estemos utilizando importamos React y React DOM, además, renderizamos con ReactDom.render();
  ```
  index:html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Mi app de Video</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="dist/js/app-de-video.032ae12addf220baabb4.js"></script>
  </body>
  </html>

  index.js:
  import React from 'react';
  import ReactDom from 'react-dom';

  const app = document.getElementById("app"); // Creamos una constante con el div con ID app
  const holaMundo =<h1>hola mundo</h1>;
  ReactDom.render(holaMundo,app); // El primer parametro es qué renderizar, el segundo es donde hacerlo
  
```

Para compilar esto de manera local de forma mas simple corremos npm run build:dev, y en el html, cargamos el js que ocupa el localhost:9000
 ```
  index:html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Mi app de Video</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="http://localhost:9000/js/app-de-video.032ae12addf220baabb4.js"></script>
  </body>
  </html>
```




Carpeta 

  SRC
    Components
  
  En los  componentes utilizamos JSX, javascript con HTML!
  
  Los componentes tienen:
  
  Un import de React,
  luego se crea la clase extendiendo los atributos de component de React
  en el metodo render, creamos lo que vamos a retornar, lo cual sera codigo jsx (html js)
  
  luego elegimos que deseamos exportar, en la mayoria de los casos, será la clase del componente
```

import React, { Component } from'react'

class Media extends React.Component {
    render(){
        return(
            <div>
               <img 
               src="" 
               alt="" 
               width={260} 
               height={160} 
               />
               <h3>¿Por qué aprender React?</h3>
               <p>Matias Ruiz</p>
            </div>
        )
    }
}

export default Media;
```

  
En nuestro index lo importamos y lo cargamos en el render, con tags de HTML para que REACT sepa que es un componente.
```
import React from 'react';
import ReactDom from 'react-dom';
import Media from './src/components/media';
ReactDom.render(<Media />,app);
```
Tipos de componentes que podemos utilizar:
Funcional: Este tipo de componentes se definen como funciones y no tiene ni trabajan con estados.

Puro: También se implementan como clases, pero en este caso van a extender de React.PureComponent.

Normal o de Estado: Las principales características de este tipo de componentes es que utilizan la encapsulación en clases, tienen un estado que definen, y actualizan.




# Estilos en componentes
Para agregar estilos a nuestros componentes crearemos un archivo css para cada uno de ellos, en la misma carpeta e importaremos este css en nuestro componente
