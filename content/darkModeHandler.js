
const bulletURL = chrome.runtime.getURL("assets/images/bullet.svg");
const fontURL = chrome.runtime.getURL("assets/fonts/Inter-VariableFont.ttf");

document.documentElement.style.setProperty("--bullet-url", `url('${bulletURL}')`);
document.documentElement.style.setProperty("--font-url", `url('${fontURL}')`);


function applyDarkMode(enabled) {
    if (enabled) {
        document.documentElement.classList.toggle("bb-dark-mode", true);
    } else {
        document.documentElement.classList.toggle("bb-dark-mode", false);
    }
}

// update at startup
chrome.storage.sync.get('darkModeEnabled', (data) => {
    applyDarkMode(data.darkModeEnabled !== false);
});

// listen for changes in dark mode setting
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.type === 'TOGGLE_DARK_MODE') {
        console.log("Dark mode toggle received:", msg.enabled);
        applyDarkMode(msg.enabled);
    }
});
