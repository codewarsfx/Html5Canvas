let l = document.querySelector('canvas');
let ctx = l.getContext('2d');
let drawCircle = (x, y, r, color) => {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI, false);
  ctx.fill();
};

class Ball {
  constructor(x, y, color) {
    this.y = y;
    this.x = x;
    this.color = color;
    this.speedX = -3;
    this.speedY = 5;
  }
  drawBall() {
    drawCircle(this.x, this.y, 20, this.color);
  }
  moveBall() {
    this.x += this.speedX;
    // this.y += this.speedY;
  }
  checkCollision() {
    if (this.x < 0 || this.x > 400) {
      this.speedX = -this.speedX;
    }
    if (this.y < 0 || this.y > 400) {
      this.speedY = -this.speedY;
    }
  }
  changeDirection(direction) {
    if (direction == 'down') {
      this.speedY = -this.speedY;
    }
    if (direction == 'left') {
      this.speedX = -this.speedX;
    }
    if (direction == 'right') {
      this.speedX = -this.speedX;
    }
    if (direction == 'up') {
      this.speedY = -this.speedY;
    }
  }
}

ctx.lineWidth = 5;
let el = new Ball(50, 100);
window.addEventListener('keydown', (e) => {
  if (e.keyCode == 40) {
    el.changeDirection('down');
  }
});
setInterval(() => {
  ctx.clearRect(0, 0, 400, 400);
  el.drawBall();
  el.checkCollision();
  el.moveBall();
  ctx.strokeRect(0, 0, 400, 400);
});
