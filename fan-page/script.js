// --- CONFIGURATION ---
const API_KEY = 'AIzaSyAfbOaN_u0uD6Ba0JRlGWGuIMgGFRbATfg'; // <--- PASTE YOUR KEY HERE
const CHANNEL_ID = 'UCArVykRcC_sYYw3rIIic-yg'; 

// --- 1. FETCH & DISPLAY SHORTS (Vertical / Horizontal Scroll) ---
async function loadShorts() {
    const container = document.getElementById('shorts-container');
    
    // Fetch latest shorts
    const url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=15&type=video&videoDuration=short`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.items) {
            data.items.forEach(item => {
                const videoId = item.id.videoId;
                const thumbnail = item.snippet.thumbnails.high.url; // Use high-res thumb

                // Create the card container
                const card = document.createElement('div');
                card.className = 'short-card';
                card.setAttribute('data-id', videoId); // Store ID for later

                // Insert Thumbnail & Play Button (No Iframe yet!)
                card.innerHTML = `
                    <img src="${thumbnail}" class="short-poster" alt="Short">
                    <div class="play-overlay">
                        <i class="fa-solid fa-play play-icon"></i>
                    </div>
                `;

                // Add Click Event to Play/Expand
                card.addEventListener('click', () => {
                    activateShort(card, videoId);
                });

                container.appendChild(card);
            });
        }
    } catch (error) {
        console.error('Error fetching Shorts:', error);
    }
}

// Helper function to handle the "Expansion" logic
function activateShort(clickedCard, videoId) {
    // 1. Check if this card is already active (ignore click if so)
    if (clickedCard.classList.contains('active')) return;

    // 2. Find any currently active card and "Reset" it (shrink & stop video)
    const currentActive = document.querySelector('.short-card.active');
    if (currentActive) {
        currentActive.classList.remove('active');
        // Remove the iframe and restore the thumbnail HTML
        // (We saved the thumbnail URL in the img tag, so we just revert innerHTML)
        const oldId = currentActive.getAttribute('data-id');
        const oldThumb = currentActive.querySelector('img') ? currentActive.querySelector('img').src : `https://i.ytimg.com/vi/${oldId}/hqdefault.jpg`;
        
        currentActive.innerHTML = `
            <img src="${oldThumb}" class="short-poster">
            <div class="play-overlay">
                <i class="fa-solid fa-play play-icon"></i>
            </div>
        `;
    }

    // 3. Activate the clicked card
    clickedCard.classList.add('active');

    // 4. Inject the YouTube Iframe (Autoplay ON)
    clickedCard.innerHTML = `
        <iframe 
            src="https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
        </iframe>
    `;
}

// --- 2. FETCH & DISPLAY LATEST VIDEOS (Embedded Grid) ---
async function loadVideos() {
    const grid = document.getElementById('video-grid');

    // Filter: order=date, type=video, videoDuration=medium (4-20 mins)
    const url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=9&type=video&videoDuration=medium`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.items) {
            data.items.forEach(item => {
                const videoId = item.id.videoId;
                const title = item.snippet.title;
                const thumbnail = item.snippet.thumbnails.high.url;
                const publishTime = new Date(item.snippet.publishTime).toLocaleDateString();

                // Create the Card (DIV instead of A tag)
                const card = document.createElement('div');
                card.className = 'video-card';
                card.setAttribute('data-id', videoId);

                // Initial HTML: Image + Play Button + Info
                card.innerHTML = `
                    <div class="thumbnail-container">
                        <img src="${thumbnail}" alt="${title}" class="thumbnail">
                        <div class="play-overlay">
                            <i class="fa-solid fa-play play-icon"></i>
                        </div>
                    </div>
                    <div class="video-info">
                        <h3 class="video-title">${title}</h3>
                        <p class="video-views">Published: ${publishTime}</p>
                    </div>
                `;

                // Click to Play Logic
                card.addEventListener('click', () => {
                    playMainVideo(card, videoId);
                });

                grid.appendChild(card);
            });
        }
    } catch (error) {
        console.error('Error fetching Videos:', error);
        grid.innerHTML = '<p style="text-align:center; width:100%;">Unable to load videos.</p>';
    }
}

// Helper to handle playing main videos
function playMainVideo(clickedCard, videoId) {
    // 1. If already playing, do nothing
    if (clickedCard.classList.contains('playing')) return;

    // 2. Stop any OTHER playing main videos (so audio doesn't overlap)
    const currentPlaying = document.querySelector('.video-card.playing');
    if (currentPlaying) {
        currentPlaying.classList.remove('playing');
        const oldId = currentPlaying.getAttribute('data-id');
        const oldTitle = currentPlaying.querySelector('.video-title') ? currentPlaying.querySelector('.video-title').innerText : "";
        const oldThumb = `https://i.ytimg.com/vi/${oldId}/hqdefault.jpg`;

        // Restore the image and text on the old card
        // Note: You might need to fetch the original date again if you want it perfect, 
        // but for now we just restore the basics to keep it simple.
        currentPlaying.innerHTML = `
             <div class="thumbnail-container">
                <img src="${oldThumb}" class="thumbnail">
                <div class="play-overlay">
                    <i class="fa-solid fa-play play-icon"></i>
                </div>
            </div>
            <div class="video-info">
                <h3 class="video-title">Watch again...</h3> 
            </div>
        `;
    }

    // 3. Play the Clicked Video
    clickedCard.classList.add('playing');
    
    // We replace the WHOLE card content with just the iframe for a clean look
    // OR we just replace the thumbnail container if you want to keep the title under it.
    // Let's replace the thumbnail container specifically:
    
    const thumbContainer = clickedCard.querySelector('.thumbnail-container');
    thumbContainer.innerHTML = `
        <iframe 
            src="https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
        </iframe>
    `;
    
    // Optional: Hide the Play Overlay (it's gone anyway because we overwrote innerHTML)
}

// --- 3. INITIALIZE ---
document.addEventListener('DOMContentLoaded', () => {
    loadShorts();
    loadVideos();
});