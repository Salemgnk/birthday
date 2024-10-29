document.addEventListener("DOMContentLoaded", function() {
    const loadingTime = 5000; // Durée de la barre de chargement (5 secondes)

    // Simuler le chargement
    setTimeout(() => {
        document.querySelector('.loading-container').style.display = 'none';
        showVideo();
    }, loadingTime);

    // Fonction pour afficher la vidéo
    function showVideo() {
        const videoContainer = document.querySelector('.video-container');
        videoContainer.style.display = 'block';
    }
});
