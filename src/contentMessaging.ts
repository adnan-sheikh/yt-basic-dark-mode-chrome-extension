testMessage();

function testMessage() {
  chrome.runtime.sendMessage({ payload: "Hello from content" }, logResponse);
}

function logResponse() {
  console.log("this is a response callback");
}

chrome.runtime.onMessage.addListener((req, sender, _res) => {
  console.log({ req });
  console.log({ sender });
});
