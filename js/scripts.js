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
    gradient.addColorStop(0, '#4e0000'); // Center color
    gradient.addColorStop(1, '#151515'); // Edge color

    // Fill the canvas with the gradient
    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);
}

window.onload = function() {
    setCanvasSize();

    var canvas = document.getElementById('gradientCanvas');
    var radius = Math.min(canvas.width, canvas.height) / 2; // Smaller radius

    var currentX = canvas.width / 10;
    var currentY = canvas.height / 10;
    var targetX = currentX;
    var targetY = currentY;

    // Initial draw
    drawGradient(currentX, currentY, radius);

    // Update target position on mouse move
    window.onmousemove = function(event) {
        targetX = event.clientX;
        targetY = event.clientY;
    };

    function animate() {
        var distance = Math.sqrt(Math.pow(targetX - currentX, 2) + Math.pow(targetY - currentY, 2));
        var speed = canvas.height / 10; // pixels per second
        var step = speed / 60; // pixels per frame (assuming 60fps)

        if (distance > step) {
            var angle = Math.atan2(targetY - currentY, targetX - currentX);
            currentX += step * Math.cos(angle);
            currentY += step * Math.sin(angle);
        } else {
            currentX = targetX;
            currentY = targetY;
        }

        drawGradient(currentX, currentY, radius);
        requestAnimationFrame(animate);
    }

    animate();
};

window.onresize = function() {
    setCanvasSize();
    // Redraw the gradient on resize to avoid blank canvas
    var cx = canvas.width / 2;
    var cy = canvas.height / 2;
    var radius = Math.min(canvas.width, canvas.height) / 4; // Smaller radius
    drawGradient(cx, cy, radius);
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
