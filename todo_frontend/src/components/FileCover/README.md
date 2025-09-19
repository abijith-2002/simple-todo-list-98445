# FileCover Component

This component ports the static "File cover — 61:8" Figma export into React.

- Styles from `assets/design-system.css` and `assets/file-cover-61-8.css` are relocated to `src/styles/` and imported in the component.
- Images are referenced from `/assets/...` under CRA `public/`.
- The layout uses absolute positioning to closely match the original.
- No interactions are defined beyond a console debug (mirrors `assets/app.js`).
