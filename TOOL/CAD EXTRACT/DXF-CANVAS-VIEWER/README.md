# DXF Canvas Viewer

A static, browser-based DXF viewer. The page reads files locally with the File API, parses them with the included `dxf-parser` project, stores the complete parser result in memory, and renders supported 2D geometry on Canvas.

## Run

Open this folder in VS Code and start Live Server with `index.html`. No backend or Node.js runtime is used by the viewer.

## Parser bundle

The supplied `dxf-parser-master` archive contains TypeScript source and a `commonjs` folder with only its package marker; it does not contain the browser bundle referenced by the project's own browser sample. The application expects the bundle at `dxf-parser/commonjs/index.js` and displays a clear error if it is absent.

The browser bundle has now been generated at `dxf-parser/commonjs/index.js`, so the viewer can load it directly. To rebuild it later, use the included parser checkout on a machine with Node.js and npm registry access:

```powershell
cd dxf-parser
npm install --ignore-scripts
npm run build-browser
```

`npm install --ignore-scripts` skips an unrelated legacy install hook from the parser's test tooling. After building, Live Server can run the viewer without Node.js or network access. The viewer itself does not load a CDN or make network requests.

## Controls

- Drop or choose a `.dxf` file.
- Scroll to zoom; drag to pan; press `F` or choose **Fit drawing** to fit the model extents.
- Toggle individual layers, grid, and canvas theme.
- Export the parsed DXF object as JSON or inspect the full object in the data panel.
- Choose **Export HTML** to download a single-file, full-screen canvas with the current geometry embedded, styled like the supplied FSK keyplan example. It includes Fit, zoom, distance, and area tools and opens directly in a browser.

Rendering covers common 2D entities including lines, circles, arcs, polylines with bulges, ellipses, splines, points, text, solids, and block inserts. Entities unsupported by the canvas renderer remain available in the parsed DXF data.
