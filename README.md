# Portfolio Personal - React

Deployed on Vercel - matias-speroni-portfolio

Portfolio web moderno y responsive construido con React, con las siguientes secciones:

## Secciones

1. **Home/Hero** - Sección de bienvenida con llamada a la acción
2. **About Me** - Información personal y profesional con badges de habilidades
3. **Skills** - Logos de tecnologías (íconos grandes y centrados)
4. **Projects** - Proyectos en formato de cards con enlaces
5. **Contact** - Enlaces a redes sociales y contacto

## Características

- ✅ Construido con React 18
- ✅ Diseño responsive (móvil, tablet, desktop)
- ✅ Navegación suave entre secciones
- ✅ Menú hamburguesa para móviles
- ✅ Animaciones y efectos hover avanzados
- ✅ Navegación fija con efecto al hacer scroll
- ✅ Hooks de React para manejo de estado
- ✅ Componentes modulares y reutilizables
- ✅ Íconos grandes (5rem) y centrados cuando la cantidad es impar

## Instalación y Uso

### Prerrequisitos
- Node.js (versión 14 o superior)
- npm o yarn

### Pasos

1. **Instalar dependencias:**
```bash
npm install
```

2. **Iniciar el servidor de desarrollo:**
```bash
npm start
```

La aplicación se abrirá en `http://localhost:3000`

3. **Crear build para producción:**
```bash
npm run build
```

Esto creará una carpeta `build` con los archivos optimizados para producción.

## Estructura del Proyecto

```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Skills.js
│   │   ├── Projects.js
│   │   ├── Contact.js
│   │   └── Footer.js
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
└── README.md
```

## Personalización

### Cambiar colores
Edita las variables CSS en `src/App.css`:
```css
:root {
    --primary-color: #2c3e50;
    --secondary-color: #3498db;
    --accent-color: #e74c3c;
    /* ... */
}
```

### Agregar proyectos
Edita `src/components/Projects.js` y agrega objetos al array `projects`:
```javascript
{
  type: 'Website',
  title: 'Mi Proyecto',
  description: 'Descripción del proyecto',
  image: 'url-de-la-imagen',
  demo: 'https://demo.com',
  code: 'https://github.com/usuario/repo'
}
```

### Agregar/modificar tecnologías
Edita `src/components/Skills.js` y modifica el array `skills`:
```javascript
{ icon: 'fab fa-react', name: 'React' }
```

### Actualizar información personal
Edita `src/components/About.js` para modificar:
- Foto de perfil (cambiar la URL de la imagen)
- Textos descriptivos
- Badges de habilidades
- Información de idiomas y QA

### Actualizar enlaces de contacto
Edita `src/components/Contact.js` para modificar los enlaces a tus redes sociales.

## Tecnologías utilizadas

- **React 18** - Framework de JavaScript
- **CSS3** - Estilos con Grid, Flexbox y Animaciones
- **Font Awesome 6** - Iconos
- **React Scripts** - Herramientas de build

## Skills Incluidas

- Java
- JavaScript
- React
- HTML5
- CSS3
- MySQL
- Git
- Bootstrap
- Node.js
- QA Testing

## Notas

- Reemplaza las imágenes placeholder con tus propias imágenes
- Actualiza los enlaces de contacto con tus redes sociales
- Personaliza los textos según tu experiencia
- Los íconos se centran automáticamente cuando hay cantidad impar

## Despliegue

Para desplegar en GitHub Pages, Netlify, Vercel u otro servicio:

1. Ejecuta `npm run build`
2. Sube la carpeta `build` al servicio de hosting
3. Configura el servicio para servir desde la carpeta `build`

### GitHub Pages
Puedes usar `gh-pages`:
```bash
npm install --save-dev gh-pages
```
Luego agrega al `package.json`:
```json
"homepage": "https://tuusuario.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

