let x, y;
let startX;
let endX;

let diam = 60;

let elapsed;
let duration;

function setup() {
  createCanvas(720, 450);

  x = 50;
  y = height / 2;
  startX = 50;
  endX = width - 50;

  elapsed = 0; // in seconds
  duration = 1.2; // in seconds

  colorMode(HSB, 360, 100, 100, 100);
}

function draw() {
  // background(0, 0, 30);

  fill(0, 0, 30, 10);
  rect(0, 0, width, height);

  strokeWeight(4);

  translate(0, -5);

  const dt = deltaTime * 0.001;

  // update time and animation
  elapsed += dt;
  {
    const t = elapsed / duration;
    x = lerp(startX, endX, t);
    fill(0, 50, 100);
    ellipse(x, 50, diam, diam);
  }
  {
    const t = elapsed / duration;
    x = lerp(startX, endX, easeOutSine(t));
    fill(40, 50, 100);
    ellipse(x, 140, diam, diam);
  }
  {
    const t = elapsed / duration;
    x = lerp(startX, endX, easeInOutSine(t));
    fill(80, 50, 100);
    ellipse(x, 230, diam, diam);
  }
  {
    const t = elapsed / duration;
    x = lerp(startX, endX, easeInOutCubic(t));
    fill(120, 50, 100);
    ellipse(x, 320, diam, diam);
  }
  {
    const t = elapsed / duration;
    x = lerp(startX, endX, easeOutBounce(t));
    fill(160, 50, 100);
    ellipse(x, 410, diam, diam);
  }

  // reset time
  if (elapsed >= duration) {
    elapsed = 0;
    x = startX;
  }
}

function easeInOutSine(x) {
  return -(cos(PI * x) - 1) / 2;
}

function easeOutBounce(x) {
  const n1 = 7.5625;
  const d1 = 2.75;

  if (x < 1 / d1) {
    return n1 * x * x;
  } else if (x < 2 / d1) {
    return n1 * (x -= 1.5 / d1) * x + 0.75;
  } else if (x < 2.5 / d1) {
    return n1 * (x -= 2.25 / d1) * x + 0.9375;
  } else {
    return n1 * (x -= 2.625 / d1) * x + 0.984375;
  }
}

function easeOutSine(x) {
  return sin((x * PI) / 2);
}

function easeInOutCubic(x) {
  return x < 0.5 ? 4 * x * x * x : 1 - pow(-2 * x + 2, 3) / 2;
}
