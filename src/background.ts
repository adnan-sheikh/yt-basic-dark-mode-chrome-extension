chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension is now installed!");
});

chrome.bookmarks.onCreated.addListener(() => {
  alert("Congratulations! Your bookmark is saved.");
});

chrome.action.onClicked.addListener((tab) => {
  console.log(tab);
});

chrome.runtime.onMessage.addListener((req, sender, res) => {
  console.log({ req });
  console.log({ sender });
  console.log("res:");
  res();
});

chrome.bookmarks.onMoved.addListener(() => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { name: "Adnan" });
  });
});
