# Alfajores Capricho - Frontend

Este proyecto es el frontend de **Alfajores Capricho**, una tienda online de alfajores artesanales. Permite visualizar el catálogo, conocer la empresa y gestionar promociones conectadas a un backend.

## Tecnologías

- [React](https://reactjs.org/)
- [Bootstrap 5](https://getbootstrap.com/)
- [React Bootstrap](https://react-bootstrap.github.io/)
- [React Router DOM](https://reactrouter.com/)

## Estructura del proyecto

```
alfajores-frontend/
├── public/
│   └── images/
├── src/
│   ├── assets/
│   │   └── styles.css
│   ├── components/
│   │   ├── AboutUs.js
│   │   ├── BannerSlider.js
│   │   ├── Catalog.js
│   │   ├── Footer.js
│   │   ├── Navbar.js
│   │   ├── Promotions.js
│   │   └── PromoBanner.js
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## Instalación

1. Clona el repositorio:
   ```sh
   git clone https://github.com/tuusuario/alfajores-frontend.git
   cd alfajores-frontend
   ```

2. Instala las dependencias:
   ```sh
   npm install
   ```

3. Asegúrate de tener el backend corriendo en `http://localhost:3000` o ajusta la URL en los componentes si es necesario.

## Uso

Inicia la aplicación en modo desarrollo:
```sh
npm start
```
Esto abrirá la app en [http://localhost:3000](http://localhost:3000).

## Funcionalidades

- **Catálogo:** Visualiza todos los alfajores disponibles.
- **Banner:** Slider de imágenes promocionales.
- **Promociones:** CRUD completo (crear, ver, editar, eliminar) de promociones conectadas al backend.
- **Nosotros:** Página informativa sobre la empresa.
- **Footer:** Información de contacto y ubicación en Google Maps.

## Conexión con el Backend

- El frontend se conecta al backend mediante peticiones `fetch` a la API REST.
- Puedes configurar la URL de la API en los componentes según tu entorno.

## Personalización

- Las imágenes deben estar en la carpeta `public/images`.
- Los estilos personalizados están en `src/assets/styles.css`.

## Scripts útiles

- `npm start` - Inicia el servidor de desarrollo.
- `npm run build` - Genera la versión de producción.
- `npm test` - Ejecuta los tests (si los tienes configurados).

## Próximos Cambios

Actualmente, la sección de **Promociones** permite ver, crear, editar y eliminar promociones conectadas al backend.  
**Próximamente** se implementarán mejoras y nuevas funcionalidades en esta sección, como:

- Mejorar la interfaz de usuario para la gestión de promociones.
- Validaciones adicionales en los formularios.
- Visualización más detallada de los productos aplicables a cada promoción.
- Filtros y búsqueda de promociones.
- Mejor manejo de errores y mensajes al usuario.

¡Cualquier sugerencia o aporte es bienvenido!