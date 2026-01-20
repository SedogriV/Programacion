// 1. MOCK DATA (This mimics what YouTube would send us)
const videos = [
    {
        title: "REGRESA el TROLEO en este MODO DE JUEGO | URF | LEAGUE OF LEGENDS",
        thumbnail: "https://img.youtube.com/vi/vngRiDYp51U/maxresdefault.jpg", // We will fix this link in a second
        url: "https://www.youtube.com/watch?v=vngRiDYp51U",
        views: "1.2k views"
    },
    {
        title: "Lulu en el NUEVO MAPA de ARAM | Puente del Progreso | League of Legends",
        thumbnail: "https://img.youtube.com/vi/bEfrlkc-Da8/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=bEfrlkc-Da8",
        views: "850 views"
    },
    {
        title: "Mi Setup Gamer 2026 🎮",
        thumbnail: "https://placehold.co/600x400/1e1e1e/E0B0FF?text=Video+3", // Placeholder for now
        url: "#",
        views: "2k views"
    }
];

// 2. Select the grid container
const videoGrid = document.querySelector('#video-grid');

// 3. The Function to Generate Cards
const loadVideos = () => {
    // Loop through the 'videos' array
    videos.forEach(video => {
        // Create the HTML structure for one card
        const cardHTML = `
            <a href="${video.url}" target="_blank" class="video-card">
                <div class="thumbnail-container">
                    <img src="${video.thumbnail}" alt="Thumbnail" class="thumbnail">
                </div>
                <div class="video-info">
                    <h3 class="video-title">${video.title}</h3>
                    <p class="video-views">${video.views}</p>
                </div>
            </a>
        `;

        // Inject the card into the grid
        videoGrid.innerHTML += cardHTML;
    });
};

// 4. Run the function when the page loads
loadVideos();