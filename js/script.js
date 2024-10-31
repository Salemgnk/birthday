document.addEventListener("DOMContentLoaded", function() {
    const messages = [
        "Salut Yacine.",
        "Joyeux anniversaire",
        "Je voulais faire quelque chose de plus beau mais il me reste encore beaucoup de choses à apprendre",
        "Voici la petite surprise qui contient une autre surprise que j'ai pu faire"
    ];
    
    const messageElement = document.getElementById("message");
    const videoContainer = document.querySelector(".video-container");
    const loadingContainer = document.querySelector(".loading-container");
    const messageContainer = document.querySelector(".message-container");

    let index = 0;

    function showMessage() {
        if (index < messages.length) {
            messageElement.textContent = messages[index];
            messageContainer.style.display = "block";
            setTimeout(() => {
                messageContainer.style.display = "none";
                index++;
                setTimeout(showMessage, 2000); 
            }, 2000);
        } else {
            videoContainer.style.display = "block";
        }
    }

    document.querySelector(".progress").addEventListener("animationend", () => {
        loadingContainer.style.display = "none"; // Masquer la barre de chargement et le texte
        showMessage();
    });
});
