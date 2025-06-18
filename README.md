# Daily Art 1

An interactive p5.js artwork: the square changes size with your mouse, and you can adjust colors with the GUI.

## Features

- Responsive square whose size changes based on mouse position
- Color of the square and background can be adjusted in real time using lil-gui
- Stylish, centered layout with a modern serif font for the description

## Setup

1. **Install dependencies**

   ```sh
   npm install
   ```

2. **Start the development server**

   ```sh
   npm run dev
   ```

   This will launch the app at [http://localhost:5173](http://localhost:5173)

3. **Usage**
   - Move your mouse over the canvas to change the size of the square
   - Use the GUI (on the right) to adjust the hue, saturation, and brightness of both the square and the background

## Tech Stack

- [Vite](https://vitejs.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [p5.js](https://p5js.org/)
- [lil-gui](https://lil-gui.georgealways.com/)

## Customization

- Edit `src/sketch/mySketch.ts` to change the artwork's behavior or appearance
- Edit `src/style.css` for layout and style adjustments

## License

MIT
