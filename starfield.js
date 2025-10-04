// Starfield animation
const canvas = document.createElement('canvas');
canvas.id = 'starfield';
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');
let stars = [];
const STAR_COUNT = 270;

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function createStars() {
    stars = [];
    for (let i = 0; i < STAR_COUNT; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 1.5 + 0.5,
            alpha: Math.random(),
            speed: Math.random() * 0.05 + 0.02
        });
    }
}
createStars();

function animateStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let star of stars) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(249, 178, 52, ${star.alpha})`;
        ctx.fill();

        // Update star position for twinkle effect
        star.alpha += star.speed;
        if (star.alpha >= 1 || star.alpha <= 0) {
            star.speed = -star.speed;
        }
    }
    requestAnimationFrame(animateStars);
}
animateStars();
