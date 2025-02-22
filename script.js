const clientId = "Ingresa tu Client ID!!!";
const redirectUri = "Ingresa tu URL!!!";
const scope = "user-top-read";

document.getElementById("login-btn").addEventListener("click", () => {
    const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scope)}`;
    window.location.href = authUrl;
});

function getAccessToken() {
    const hash = window.location.hash.substring(1);
    const params = new URLSearchParams(hash);
    return params.get("access_token");
}

class PriorityQueue {
    constructor() {
        this.queue = [];
    }

    enqueue(song, artist, imageUrl, spotifyUrl, priority) {
        const songData = { song, artist, imageUrl, spotifyUrl, priority };
        let added = false;

        for (let i = 0; i < this.queue.length; i++) {
            if (this.queue[i].priority > priority) {
                this.queue.splice(i, 0, songData);
                added = true;
                break;
            }
        }

        if (!added) {
            this.queue.push(songData);
        }

        this.updateTable();
    }

    dequeue() {
        return this.queue.shift();
    }

    removeSong(index) {
        this.queue.splice(index, 1);
        this.updateTable();
    }

    updateTable() {
        const songList = document.getElementById('songList');
        songList.innerHTML = '';

        this.queue.forEach((songData, index) => {
            const row = document.createElement('tr');

            row.innerHTML = `
                <td><img src="${songData.imageUrl}" alt="${songData.song}" class="song-img"></td>
                <td>${songData.song}</td>
                <td>${songData.artist}</td>
                <td>${this.getPriorityText(songData.priority)}</td>
                <td><a href="${songData.spotifyUrl}" target="_blank">🎵 Escuchar</a></td>
                <td><button class="delete" onclick="priorityQueue.removeSong(${index})">❌</button></td>
            `;

            songList.appendChild(row);
        });
    }

    getPriorityText(priority) {
        switch (priority) {
            case 1: return "IMPORTANTE";
            case 2: return "NORMAL";
            default: return "DESCONOCIDO";
        }
    }
}

const priorityQueue = new PriorityQueue();

async function getTopTracks() {
    const token = getAccessToken();
    if (!token) return;

    const response = await fetch("https://api.spotify.com/v1/me/top/tracks?limit=10", {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
    
    if (!response.ok) {
        console.error('Error al obtener las canciones', response.status);
        return;
    }
    
    const data = await response.json();
    
    data.items.forEach(track => {
        const priority = Math.floor(Math.random() * 2) + 1; 
        priorityQueue.enqueue(
            track.name,
            track.artists[0].name,
            track.album.images[0].url,
            track.external_urls.spotify,
            priority
        );
    });
}

window.onload = () => {
    if (getAccessToken()) {
        getTopTracks();
    }
};