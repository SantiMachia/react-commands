# React Commands

- Arrcancamos el repo creandolo en la pagina de github.

- antes que nada, descargamos `nodejs`

- luego creamos una carpeta con el nombre que quieras, aunque si pones el mismo nombre que el repo es mejor.

- entramos a esa carpeta y para empezar, entramos a la terminal `cntrl + j`

- ponemos `npm create vite@latest`

- Elegimos nombre del proyecto que va a contener todos los archivos de vite, en este caso `react-structure`

- elegimos como framework `react`, y como variante `javascript + SWC`

- vamos al `package.json` y en el objeto `script`, ponemos un nuevo elemento, donde la key va a ser `start` y el value va a ser `vite`

- en la consola, entramos con `cd react-structure`

- luego ponemos `npm install`, para descargar todas las dependencias.

- y ponemos `npm start` o `npm run dev` para iniciarlo. y abrimos el url que nos pone, que siempre suele ser `localhost:5173`, que puede cambiar si hay otro corriendo en ese puerto.

- Luego de eso, lo unico que vamos a cambiar ahora seria `index.html`, donde solo cambiariamos el `<link ico>` y el `title`

- La carpeta `public` va a contener la imagen de vite, que se puede borrar

- En src borramos los archivos `index.css, App.css, y en assets, react.svg`

- Luego en `App.jsx` borramos todo y ponemos:
