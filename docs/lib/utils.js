// Log to screen and console
export function log(message) {
    const logDiv = document.getElementById('log');
    logDiv.textContent += message + '\n';
    console.log(message);
}

// Crash-resistant alert
export function safeAlert(msg) {
    try {
        alert(msg);
    } catch (e) {
        log(`Alert blocked: ${msg}`);
    }
}
