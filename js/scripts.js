function setCanvasSize() {
    var canvas = document.getElementById('gradientCanvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function drawGradient(cx, cy, radius) {
    var canvas = document.getElementById('gradientCanvas');
    var context = canvas.getContext('2d');

    // Clear the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Define gradient
    var gradient = context.createRadialGradient(cx, cy, 0, cx, cy, radius);
    gradient.addColorStop(0, '#3e0000'); // Center color
    gradient.addColorStop(1, '#000000'); // Edge color

    // Fill the canvas with the gradient
    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);
}

function updateGradientOnScroll() {
    var canvas = document.getElementById('gradientCanvas');
    var radius = Math.min(canvas.width, canvas.height) / 1.5; // Smaller radius

    // Calculate the scroll percentage
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var docHeight = document.documentElement.scrollHeight - window.innerHeight;
    var scrollPercent = scrollTop / docHeight;

    // Calculate the vertical position based on scroll percentage
    var cy = canvas.height * (0.9 - 0.8 * scrollPercent); // 90% at top, 10% at bottom
    var cx = canvas.width / 3; // Horizontal position in the center

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




$(document).ready(function() {
    $(window).on('scroll', function() {
        if ($(window).scrollTop() === 0) {
            $('.nav-bar-identifier').removeClass('nav-bar-scrolled').addClass('nav-bar');
        } else {
            $('.nav-bar-identifier').removeClass('nav-bar').addClass('nav-bar-scrolled');
        }
    });
});