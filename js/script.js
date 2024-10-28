document.addEventListener("DOMContentLoaded", function() {
    const loadingTime = 3000; // Time for loading bar
    const cascadeTime = 3000; // Time for cascade effect
    const greetingDelay = loadingTime + cascadeTime;

    // Simulate loading
    setTimeout(() => {
        document.querySelector('.hacked-message').style.display = 'none';
        cascadeEffect();
    }, loadingTime);

    function cascadeEffect() {
        const greetingElement = document.querySelector('.birthday-greeting');
        const characters = 'Accessing files...';
        let displayText = '';
        let i = 0;

        const interval = setInterval(() => {
            if (i < characters.length) {
                displayText += characters.charAt(i);
                greetingElement.querySelector('h2').textContent = displayText;
                i++;
            } else {
                clearInterval(interval);
                setTimeout(() => {
                    greetingElement.style.display = 'block';
                    animateImages();
                }, 1000); // Delay before showing greeting
            }
        }, 100); // Speed of cascade effect
    }

    function animateImages() {
        const images = document.querySelectorAll('.photos img');
        images.forEach((img, index) => {
            img.style.animation = `bounce 1 s forwards ${index * 0.2}s`;
        });
    }
});