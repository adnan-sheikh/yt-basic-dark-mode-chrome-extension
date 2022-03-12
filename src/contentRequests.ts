const requestSender = new XMLHttpRequest();

requestSender.onreadystatechange = apiHandler;

function apiHandler(res) {
  if (requestSender.readyState === 4 && requestSender.status === 200) {
    console.log(JSON.parse(res.target.response));
  }
}

requestSender.open("GET", "https://api.github.com/users/adnan-sheikh", true);
requestSender.send();
