# CV - Ernesto Jimenez

Sitio estático preparado para publicarse en GitHub Pages.

## Estructura

- `index.html`: contenido del CV.
- `styles.css`: estilo minimalista con estética terminal retro.
- `script.js`: utilidades ligeras (año dinámico en footer).
- `Ernesto Jimenez.docx`: fuente del contenido.

## Verlo antes de publicar

1. Abre una terminal en esta carpeta (`c:\Code\CV`).
2. Ejecuta:

```powershell
python -m http.server 5500
```

3. Abre en el navegador:

```text
http://localhost:5500
```

## Publicar en GitHub Pages

1. Sube esta carpeta a un repositorio en GitHub.
2. En el repo, entra a `Settings` -> `Pages`.
3. En `Build and deployment`, elige:
   - `Source`: `Deploy from a branch`
   - `Branch`: `main` (o la que uses) y `/root`
4. Guarda y espera que GitHub Pages genere la URL pública.
