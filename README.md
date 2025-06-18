# Daily Art 1

An interactive p5.js artwork: the square changes size with your mouse, and you can adjust colors with the GUI.

![Screenshot 2025-06-18 at 23 14 16](https://github.com/user-attachments/assets/0e8b35e5-debf-4ba0-a28f-35bcbffff698)
![Screenshot 2025-06-18 at 23 14 16](https://github.com/user-attachments/assets/0e8b35e5-debf-4ba0-a28f-35bcbffff698)
![Screenshot 2025-06-18 at 23 14 52](https://github.com/user-attachments/assets/48419ff7-201a-48dc-b3bb-80a40f66272d)
![Screenshot 2025-06-18 at 23 14 52](https://github.com/user-attachments/assets/48419ff7-201a-48dc-b3bb-80a40f66272d)
![Screenshot 2025-06-18 at 23 14 49](https://github.com/user-attachments/assets/a432b590-f07f-4110-8313-8c375d9ae669)
![Screenshot 2025-06-18 at 23 14 49](https://github.com/user-attachments/assets/a432b590-f07f-4110-8313-8c375d9ae669)
![Screenshot 2025-06-18 at 23 14 49 (1)](https://github.com/user-attachments/assets/cab974f5-6e5d-464e-b4b1-37e8175be9d8)
![Screenshot 2025-06-18 at 23 14 49 (1)](https://github.com/user-attachments/assets/cab974f5-6e5d-464e-b4b1-37e8175be9d8)
![Screenshot 2025-06-18 at 23 14 21](https://github.com/user-attachments/assets/ed1b2560-3506-40c9-b4b2-05deb49c6679)
![Screenshot 2025-06-18 at 23 14 21](https://github.com/user-attachments/assets/ed1b2560-3506-40c9-b4b2-05deb49c6679)

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
