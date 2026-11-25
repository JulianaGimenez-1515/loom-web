# Web de LOOM

Sitio de LOOM hecho con **Astro**, con panel de edición **Decap CMS** y formulario con **Netlify Forms**.

## Ver la web en tu compu

En PowerShell, dentro de esta carpeta:

```
npm run dev
```

Abrí http://localhost:4321. Para apagarla: `Ctrl + C`.

## Editar textos e imágenes en tu compu

Con la web encendida, en **otra** ventana de PowerShell:

```
npm run cms
```

Abrí http://localhost:4321/admin y tocá "Iniciar sesión".

Una vez publicada, el panel está en `https://TU-WEB/admin` y se entra con GitHub.

## Dónde está cada cosa

| Qué | Dónde |
| --- | --- |
| Textos de cada página | `src/data/*.json` (mejor editarlos desde el panel) |
| Fotos subidas | `public/uploads/` |
| Páginas | `src/pages/` |
| Piezas repetidas (header, footer, etc.) | `src/components/` |
| Colores y tipografías | `src/styles/global.css` |
| Configuración del panel | `public/admin/config.yml` |
| Configuración de Netlify | `netlify.toml` |
