# 👕 Proyecto Final: Tienda Virtual de Ropa

¡Bienvenidos a la documentación oficial de nuestra Tienda Virtual de Ropa! Este es un proyecto final diseñado para ofrecer una experiencia de compra fluida, moderna y eficiente.

---

## 🚀 Descripción del Proyecto

Esta aplicación es una plataforma de comercio electrónico diseñada para la venta de prendas de vestir. Combina un diseño estético atractivo con una funcionalidad robusta, permitiendo a los usuarios navegar por colecciones, ver detalles de productos y gestionar sus compras.

---

## ✨ Características Principales

-   **Catálogo de Productos**: Visualización dinámica de prendas con filtros por categoría.
-   **Carrito de Compras**: Gestión de pedidos en tiempo real.
-   **Interfaz Responsiva**: Optimizado para móviles, tablets y computadoras.
-   **Diseño Premium**: Estética moderna con micro-animaciones y transiciones suaves.
-   **Gestión de Sesiones**: Autenticación de usuarios para una experiencia personalizada.

---

## 🛠️ Tecnologías Utilizadas

El proyecto está construido con un stack moderno de desarrollo web:

-   **Backend**: [Node.js](https://nodejs.org/) & [Express.js](https://expressjs.com/)
-   **Motor de Plantillas**: [EJS (Embedded JavaScript templates)](https://ejs.co/)
-   **Estilos**: CSS3 Puro (Vanilla CSS) con variables y Grid/Flexbox.
-   **Monitoreo**: [Morgan](https://www.npmjs.com/package/morgan) para registro de peticiones HTTP.
-   **Variables de Entorno**: [Dotenv](https://www.npmjs.com/package/dotenv).
-   **Desarrollo**: [Nodemon](https://nodemon.io/) para reinicio automático del servidor.

---

## 📥 Instalación y Configuración

Sigue estos pasos para obtener una copia local en funcionamiento:

1.  **Clonar el repositorio:**
    ```bash
    git clone <url-del-repositorio>
    cd poyecto-final_test
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Configurar variables de entorno:**
    Crea un archivo `.env` en la raíz del proyecto y añade las configuraciones necesarias (ejemplo: puerto).
    ```env
    PORT=3000
    ```

4.  **Iniciar el servidor de desarrollo:**
    ```bash
    npm run dev
    ```
    La aplicación estará disponible en `http://localhost:3000`.

---

## 📂 Estructura del Proyecto

```text
poyecto-final_test/
├── public/          # Archivos estáticos (CSS, Imágenes, JS Cliente)
├── views/           # Plantillas EJS
├── routes/          # Definición de rutas
├── controllers/     # Lógica de la aplicación
├── .env             # Configuración secreta
├── index.js         # Punto de entrada principal
└── package.json     # Dependencias y scripts
```

---

## 🖋️ Autor

- **Tu Nombre** - *Desarrollador Principal*

---

## 📄 Licencia

Este proyecto está bajo la Licencia ISC.
