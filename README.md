# CV – Ernesto Jimenez

Sitio estático del CV personal publicado en GitHub Pages, con tema visual de terminal retro.

**Demo:** [ernestojim.github.io/cv-ernesto-jimenez](https://ernestojim.github.io/cv-ernesto-jimenez/)

## Características

- **Tema terminal** — tipografía monoespaciada (JetBrains Mono), paleta verde oscuro, marcas de agua SVG y scanlines CSS.
- **Bilingüe** — botón EN/ES que cambia todo el contenido entre español e inglés en tiempo real, sin recarga de página.
- **Visualización de experiencia** — gráfico de barras con duración por empresa (web) y gráfico de torta (solo PDF/impresión).
- **Exportación a PDF** — botón flotante que activa `window.print()` con estilos de impresión dedicados.
- **Diseño responsivo** — adaptado a móvil, tableta y escritorio.
- **Desarrollado con IA** — flujo de trabajo asistido por [Cursor](https://cursor.sh/), [Claude](https://claude.ai/) y [ChatGPT](https://chat.openai.com/).

## Estructura del proyecto

```
index.html   — contenido principal con atributos data-i18n para traducciones
styles.css   — estilos visuales, media queries para responsive e impresión
script.js    — año dinámico, diccionario i18n, toggle de idioma, exportación PDF
assets/      — logos SVG de tecnologías usados como marcas de agua
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
