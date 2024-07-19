function setCanvasSize() {
    const canvas = document.getElementById('gradientCanvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function drawGradient(cx, cy, radius) {
    const canvas = document.getElementById('gradientCanvas');
    const context = canvas.getContext('2d');

    // Clear the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Define gradient
    const gradient = context.createRadialGradient(cx, cy, 0, cx, cy, radius);
    gradient.addColorStop(0, '#3e0000'); // Center color
    gradient.addColorStop(1, '#000000'); // Edge color

    // Fill the canvas with the gradient
    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);
}

function updateGradientOnScroll() {
    const canvas = document.getElementById('gradientCanvas');
    const radius = Math.min(canvas.width, canvas.height) / 1.5; // Smaller radius

    // Calculate the scroll percentage
    // noinspection JSDeprecatedSymbols
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = scrollTop / docHeight;

    // Calculate the vertical position based on scroll percentage
    const cy = canvas.height * (0.9 - 0.8 * scrollPercent); // 90% at top, 10% at bottom
    const cx = canvas.width / 3; // Horizontal position in the center

    drawGradient(cx, cy, radius);
}

window.onload = function() {
    setCanvasSize();
    updateGradientOnScroll();
    window.addEventListener('scroll', updateGradientOnScroll);
};

window.onresize = function() {
    setCanvasSize();
    updateGradientOnScroll();
};
