// Funcție pentru a reda videoclipul
function playVideo() {
    var videoLink = document.getElementById('videoInput').value;
    var videoId = extractVideoId(videoLink);
    
    if (videoId) {
        var playerDiv = document.getElementById('player');
        playerDiv.innerHTML = ''; // Șterge orice player existent
        
        var iframe = document.createElement('iframe');
        iframe.setAttribute('src', 'https://www.youtube.com/embed/' + videoId + '?autoplay=1');
        iframe.setAttribute('width', '560');
        iframe.setAttribute('height', '315');
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('allowfullscreen', '');
        
        playerDiv.appendChild(iframe);
    } else {
        alert('Linkul introdus nu este valid!');
    }
}

// Funcție pentru a extrage ID-ul videoclipului din linkul YouTube
function extractVideoId(url) {
    var match = url.match(/[?&]v=([a-zA-Z0-9_-]{11})/);
    return match ? match[1] : null;
}
