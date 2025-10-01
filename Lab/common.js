function applyDarkMode() {
    const now = new Date();
    const hour = now.getHours();
    if (hour >= 19 || (hour >= 0 && hour < 5)) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
}
applyDarkMode();
setInterval(applyDarkMode, 60 * 60 * 1000);