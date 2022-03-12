fetch("https://api.github.com/users/adnan-sheikh")
  .then((res) => {
    if (res.status === 200) {
      return res.json();
    }
  })
  .then((jsonRes) => console.log(jsonRes))
  .catch((err) => console.error(err));
