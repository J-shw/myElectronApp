function getCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0'); // Get hours and pad with leading zero if needed
    const minutes = String(now.getMinutes()).padStart(2, '0'); // Get minutes and pad with leading zero if needed
    const seconds = String(now.getSeconds()).padStart(2, '0'); // Get seconds and pad with leading zero if needed
    return `${hours}:${minutes}:${seconds}`;
}

function updateTime() {
    const currentTimeElement = document.getElementById('current-time');
    if (currentTimeElement) {
        currentTimeElement.textContent = getCurrentTime();
    }
}

updateTime();

// Update time every second
setInterval(updateTime, 1000);