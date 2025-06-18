import p5 from "p5";
import GUI from "lil-gui";

const params = {
  rectHue: 180,
  rectSat: 100,
  rectBri: 100,
  bgHue: 30,
  bgSat: 60,
  bgBri: 60,
};

function getCanvasSize() {
  return Math.min(window.innerWidth, window.innerHeight) / 2;
}

const sketch = (p: p5) => {
  p.setup = () => {
    const size = getCanvasSize();
    p.createCanvas(size, size);
    p.noCursor();
    p.colorMode(p.HSB, 360, 100, 100);
    p.rectMode(p.CENTER);
    p.noStroke();

    // lil-guiのセットアップ
    const gui = new GUI();
    gui.add(params, "rectHue", 0, 360).name("Rect Hue");
    gui.add(params, "rectSat", 0, 100).name("Rect Sat");
    gui.add(params, "rectBri", 0, 100).name("Rect Bri");
    gui.add(params, "bgHue", 0, 360).name("BG Hue");
    gui.add(params, "bgSat", 0, 100).name("BG Sat");
    gui.add(params, "bgBri", 0, 100).name("BG Bri");
  };

  p.draw = () => {
    p.background(params.bgHue, params.bgSat, params.bgBri);
    p.fill(params.rectHue, params.rectSat, params.rectBri);
    const w = Math.abs(p.mouseX - p.width / 2) * 2;
    const h = Math.abs(p.mouseY - p.height / 2) * 2;
    p.rect(p.width / 2, p.height / 2, w, h);
  };

  p.windowResized = () => {
    const size = getCanvasSize();
    p.resizeCanvas(size, size);
  };
};

new p5(sketch, document.getElementById("app")!);
