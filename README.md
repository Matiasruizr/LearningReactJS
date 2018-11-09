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


# Propiedades en componentes

Podemos hacer nuestros componentes dinamicos, pasando atributos por parametro al agregar la etiqueta al render, estos son casi como agregar atributos de HTML

<Media title="¿Qué es responsive design?" autor="Matias Ruiz" image="/images/covers/responsive.jpg"/>

En nuestro componente el codigo quedaria así 
```
 <div className="Media">
       <img 
       src={this.props.image} 
       alt="" 
       width={260} 
       height={160} 
       className="Media-cover" />
       <h3 className="Media-title">{this.props.title}</h3>
       <p className="Media-author">{this.props.autor}</p>
    </div>
```


# Validando propiedades react

Instalamos prop types 
npm install prop-types

Lo importamos al inicio de nuestro proyecto 
```
import PropTypes from 'prop-types';
```
Luego antes del export, validamos lo que necesitemos.
Ejemplo:
```
Media.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string,
    author: PropTypes.string,
    type: PropTypes.oneOf(['video','audio']),
}
```
# Eventos Enlazados al DOM
Para utilizar un evento, por ejemplo, el click, debemos permitir utilizar las propiedades desde el constructor.
```
constructor(props){ // Esta clase se llama cuando se renderiza el elemento "Media", esta manera se utilizaba en EC6, es bueno considerarla
      super(props);   // Permitimos utilizar las propiedades
      this.handleClick = this.handleClick.bind(this); // Permitimos utilizar las propiedades para el evento
      this.state = {
          autor: props.autor
      }
    }
  ```
  Creamos un evento click que ejecute una accion, esta funcion se crea tambien en el codigo del componente
 ```
 handleClick(event){ 
        this.setState({
            autor: 'Ayleen Cisternas'
        });
    }
 ```
 
  ```
   <div className="Media" onClick={this.handleClick}>>
       <h3 className="Media-title">{this.props.title}</h3>
       <p className="Media-author">{this.state.autor}</p>
    </div>
   ```
   
   # Estado de los componentes en ReactJs
   
   Las propiedades son inmutables, para crear cambios en estas ocupamos los estados.
   Estos estados se inicializan en el constructor
   
   ```
    constructor(props){ // Esta clase se llama cuando se renderiza el elemento "Media", esta manera se utilizaba en EC6, es bueno considerarla
      this.state = {
          autor: props.autor
      }
    }
   ```
En el JSX utilizaremos 
```
   <div className="Media" onClick={this.handleClick}>>
       <h3 className="Media-title">{this.props.title}</h3>
       <p className="Media-author">{this.state.autor}</p>
    </div>
   ```
La funcuon para editar estados es 
```
     this.setState({
            autor: 'Ayleen Cisternas'
      });
```

# Ciclo de vida de un componente
```
constructor(){
	// Enlazo (bind) eventos y/o inicializo estado
	}
  componentWillMount(){
	// Se ejecuta antes de montar el componente
	// Se podría usar para hacer un setState()
	}
	render(){
	// Contiene todos los elementos a renderizar
	// podrías usarlo para calcular propiedades (ej: concatenar una cadena)
	}
	componentDidMount(){
	//Solo se lanza una vez
	//Ideal para llamar a una API, hacer un setInteval, etc
	}

	//Actualización:
	componentWillReceiveProps(){
	//Es llamado cuando el componente recibe nuevas propiedades.

	}
	shouldComponentUpdate(){
	//Idea para poner una condición y  si las propiedades que le llegaron anteriormente
	// eran las mismas que tenia retornar false para evitar re-renderear el componente
	}
	componentWillUpdate(){
	//metodo llamado antes de re-renderizar el componente si shouldComponentUpdate devolvió true
	}

	// re-render si es necesario...

	componentDidUpdate(){
	//Método llamado luego del re-render
	}
	componentWillUnmount(){
	//Método llamado antes de desmontar el componente
	}
	componentDidCatch(){
	// Si ocurre algún error, lo capturo desde acá:
	}


```

# Listas en React
Para cargar una api, simplemente dejamos nuestra api en nuestros archivos en src y los importamos

```
import Datos from './src/api.json';
```
Dentro de un rendes le pasamos por parametros estos datos a nuestro componente

```
render(<Playlist data={Datos}/>,app);
```
# Componentes puros y funcionales

PureComponent: tiene el método shouldComponentUpdate ya asignado (por defecto), si a este componente no se le actualizan las propiedades, no tenemos que validar a mano con shouldComponentUpdate, PureComponent lo hace por nosotros, es decir; si recibe nuevas propiedades pero son las que ya teniamos, no se re-renderiza.

```
import React, { PureComponent } from 'react';

classPlaylistextendsPureComponent{
  render() {
    <Componente />
    }
}
```

Componente Funcional: Es una función la cual solo retorna el JSX de nuestro componente (renderiza UI), es mas sencillo, mas fácil de probar y este componente no tiene ciclo de vida.
```
import React from 'react';

functionPlaylist(props) {
  return<Componentetitle={props.title} />
}
```
# Smart and dumb component

Como se vs como se hace

# Presentacional Cómo se ve

Puede contener smart components u otros componentes de UI
Permiten composición con `[props.children]`
No depeden del resto de la aplicación
No especifica cómo los datos son cargados o mutados
Recibe datos y callbacks solo con propiedades
Rara vez tienen su propio estado
Están escritos como componentes funcionales a menos que necesiten mejoras de performance. Sólo pueden ser Componentes funcionales o Pure Components


# Containers Qué hace

Concetrado en el funcionamiento de la aplicación
Contienen componentes de UI u otros containers
No tienen estilos
Proveen de datos a componentes de UI u otros contenedores
Proveen de callbacks a la UI
Normalmente tienen estado
Llaman acciones
Generados por higher order components


# Composicion de componentes



# Referencias
Las referencias nos permite alamacenar en react un elemento HTML.

//componente.jsx
<input type="text" ref={props.setRef} />
//usando el componente

setInputRef = element => {
  this.input = element;
}

render() {
  return (
    <ComponentesetRef={this.setInputRef}/>
  )
}
Input en React
Si se asigna el valor de value se define como un valor constanete, es decir, no va a poder ser modificado.

Si se desea asignar un valor inicial, pero que este pueda ser modificado, entonces se usa la propiedad defaultValue.

Si se desea manipular el valor asignado a value se puede hacer con el método onChange del input.

Si quieren ver mi resumen completo lo pueden hacer aquí. Lo iré actualizado a medida que vaya avanzado con el curso.
