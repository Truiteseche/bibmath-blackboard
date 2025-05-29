
const bulletURL = chrome.runtime.getURL("../assets/images/bullet.svg");
const fontURL = chrome.runtime.getURL("../assets/fonts/Inter-VariableFont.ttf");
console.log("Setting custom bullet image URL:", bulletURL);
console.log("Setting custom font URL:", fontURL);
console.log("document.body:", document.documentElement);
console.log("document.body:", document.body);
document.documentElement.style.setProperty("--bullet-url", `url('${bulletURL}')`);
document.documentElement.style.setProperty("--font-url", `url('${fontURL}')`);
