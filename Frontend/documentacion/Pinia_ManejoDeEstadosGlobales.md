# Pinia: Manejo de Estado a nivel global

1. [Introducción a Pinia](#1-introducción-a-pinia)
2. [Configuración de Pinia en nuestro proyecto](#2-configuración-de-pinia-en-nuestro-proyecto)
3. [Configuración de un almacén de datos de Pinia](#3-configuración-de-un-almacén-de-datos-de-pinia)

## 1. Introducción a **Pinia**

Si necesitamos manejar un contenido de estado entre varias vistas, componentes, o páginas de nuestro proyecto (como suele ser usual), necesitamos una forma de tener estructuras a las que todos estos componentes puedan acceder, pero que no sean exclusivas de ninguno de ellos.

La forma recomendada de hacerlo es mediante una librería llamada **[Pinia][l1]**.

Esta librería nos permite definir estructuras, comunmente llamadas **_almacenes_** o `stores`, para manejar **datos que deben estar disponibles para todos los componentes** de nuestro proyecto (consulta [este artículo de MDN][l2] para más información).

[_Volver al Inicio_](#pinia-manejo-de-estado-a-nivel-global)

## 2. Configuración de Pinia en nuestro proyecto

En primer lugar, instalaremos las librerías de _Pinia_ en nuestro proyecto mediante el siguiente comando:

```sh
npm install pinia
```

Una vez instaladas estas librerías, debemos configurarlas en el archivo `src/main.js` ([ver en el archivo][l3]) para que los almacenes que creemos se activen al ejecutar la aplicación de _Vue_.

En primer lugar, importaremos el método `createPinia` del paquete `pinia`:

```js
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";

import { createPinia } from "pinia";
```

Luego debemos inicializar las funcionalidades mediante una instancia que declararemos con el método que acabamos de importar.

```js
const pinia = createPinia();
```

Ahora, luego de declarar la instancia de la App, configuraremos la misma para que use la instancia de _Pinia_ que declaramos:

```js
const app = createApp(App);
app.use(pinia);
```

> **NOTA:** Es importante que la instancia de _Pinia_ se declare y configure **antes** que la instancia de la App, para asegurarnos de que la funcionalidad de _Pinia_ esté disponible para la App en el momento de su inicialización.

Ahora podemos agregar el resto de los componentes de la App a la instancia de la misma y montarla normalmente:

```js
app.use(router);
app.mount("#app");
```

[_Volver al Inicio_](#pinia--manejo-de-estado-a-nivel-global)

## 3. Configuración de un almacén de datos de Pinia

Ahora crearemos un almacén de datos para nuestra aplicación.

Los almacenes se configuran en **archivos individuales con nombres descriptivos** (de forma semejante a los componentes de la aplicación) en un directorio dedicado que suele llamarse `store` ubicado en `/src`.

En este ejemplo llamaremos al archivo `notas.js` ([ir al archivo][l4])

[_Volver al Inicio_](#pinia--manejo-de-estado-a-nivel-global)

[l1]: https://pinia.vuejs.org/
[l2]: https://developer.mozilla.org/es/docs/Learn_web_development/Extensions/Client-side_APIs/Client-side_storage
[l3]: ../EjemplosBase/notas-base/src/main.js
[l4]: ../EjemplosBase/notas-base/src/store/notas.js
