var imager = document.getElementsByClassName("display-none");
var contentDiv = document.getElementById("content-container");
var inputField = document.getElementById("search-input");

function hey(value) {
  fetch("search?" + value)
    .then(
      (response) => {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }
        response.json().then((data) => {
          data = JSON.parse(data);
          data = data.data.slice(0, 13)
          for (var i = 1; i < 13; i++) {
            document.getElementById("img" + i).src = data[i].images.downsized.url;
          }
        })
      }
    )
    .catch((err) => {
      console.log('Fetch Error :-S', err);
    });
}

inputField.addEventListener("keyup", function(event) {
  event.preventDefault();

  if (event.keyCode === 13) {
    hey(document.getElementById("search-input").value);
    contentDiv.classList.replace("display-none", "display");

  }
});
