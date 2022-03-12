window.onload = () => {
  const darkBtn = document.createElement("button");
  darkBtn.id = "darkButton";
  darkBtn.textContent = chrome.i18n.getMessage("darkMessage");

  const ytEndButtons = document.getElementById("end");
  ytEndButtons.prepend(darkBtn);

  darkBtn.addEventListener("click", toggleDarkMode);

  applySettings();
};

function applySettings() {
  chrome.storage.local.get(["isDark"], (result) => {
    const isDarkMode = result.isDark;
    if (isDarkMode) {
      toggleDarkMode();
    }
    document.getElementById("darkButton").textContent = isDarkMode
      ? chrome.i18n.getMessage("lightMessage")
      : chrome.i18n.getMessage("darkMessage");
  });
}

let currentBgColor = "white";

function toggleDarkMode() {
  const ytApp = document.getElementsByTagName("ytd-app")[0];
  if (currentBgColor === "black") {
    changeBgColorAndUpdateStorage(ytApp, "white");
    logCurrentStoreState();
    updateButtonText(currentBgColor === "black");
    return;
  }
  changeBgColorAndUpdateStorage(ytApp, "black");
  logCurrentStoreState();
  updateButtonText(currentBgColor === "black");
}

function logCurrentStoreState() {
  chrome.storage.local.get("isDark", (result) => {
    console.log(result);
  });
}

function changeBgColorAndUpdateStorage(element, color) {
  element.style.backgroundColor = color;
  currentBgColor = color;
  chrome.storage.local.set({ isDark: color === "black" ? true : false });
}

function updateButtonText(isDarkMode) {
  console.log;
  document.getElementById("darkButton").textContent = isDarkMode
    ? "Make it light!"
    : "Make it dark!";
}
