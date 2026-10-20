# CV – Ernesto Jimenez

Sitio estático del CV personal publicado en GitHub Pages, con diseño de currículum sobrio en azul y formato preparado para impresión A4.

**Demo:** [ernestojim.github.io/cv-ernesto-jimenez](https://ernestojim.github.io/cv-ernesto-jimenez/)

## Características

- **Diseño profesional** — hoja blanca, tipografía clara y jerarquía visual en tonos azules.
- **Bilingüe** — botón EN/ES que cambia todo el contenido entre español e inglés en tiempo real, sin recarga de página.
- **Exportación a PDF** — botón flotante que activa `window.print()` con estilos de impresión dedicados.
- **Diseño responsivo** — adaptado a móvil, tableta y escritorio.
- **Contenido basado en el resumen profesional** — liderazgo, resultados concretos, experiencia seleccionada y competencias clave.

## Estructura del proyecto

```
index.html   — contenido principal con atributos data-i18n para traducciones
styles.css   — estilos visuales, media queries para responsive e impresión
script.js    — traducción EN/ES y exportación mediante impresión del navegador
assets/      — recursos conservados del proyecto anterior
```

## Ejecución local

```bash
python -m http.server 5500
```

Abre [http://localhost:5500](http://localhost:5500) en el navegador. También funciona con Live Server (VS Code / Cursor) o cualquier servidor estático equivalente.

## Despliegue

Configurado para GitHub Pages desde la rama `main` en la raíz (`/`). Cada push a `main` actualiza el sitio automáticamente.

## Repositorio

[github.com/ErnestoJim/cv-ernesto-jimenez](https://github.com/ErnestoJim/cv-ernesto-jimenez)
