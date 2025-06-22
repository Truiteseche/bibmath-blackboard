document.addEventListener("DOMContentLoaded", () => {
    console.log("Popup script loaded");
    const toggle = document.getElementById("darkModeToggle");

    chrome.storage.sync.get("darkModeEnabled", (data) => {
        toggle.checked = data.darkModeEnabled !== false; // enabled by default
    });

    toggle.addEventListener("change", () => {
        console.log("Dark mode toggle changed:", toggle.checked);
        chrome.storage.sync.set({ darkModeEnabled: toggle.checked });
        // send a message to the content script to toggle dark mode
        chrome.tabs.query({ url: "*://*.bibmath.net/*" }, (tabs) => {
            tabs.forEach(tab => {
                chrome.tabs.sendMessage(
                    tab.id,
                    { type: "TOGGLE_DARK_MODE", enabled: toggle.checked }
                );
            });
        });
    });
});