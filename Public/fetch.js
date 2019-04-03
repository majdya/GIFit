var image = document.getElementById("image");
var inputField = document.getElementById("search-input");

var apiKey = "QCbAV0VnE0UWZdureq8keOFGr1xBi0qy";
var searchinput = document.getElementById("search-input").value;
var url =
  "https://api.giphy.com/v1/gifs/search?q=" +
  searchinput +
  "&api_key=" +
  apiKey;

inputField.addEventListener("keyup", function(event) {
  event.preventDefault();

  if (event.keyCode === 13) {
    console.log("it works");
    //  image.classList.toggle("display-none");
  }
});

fetch(url)
  .then(resp => resp.json())
  .then(function(data) {
    for (var i = 0; i < 9; i++) {
      document.getElementById("img" + (i + 1)).src =
        json.data[i].images.original.url;
    }
    response.writeHead(200, { "content-type": "text/html" });
    response.end("it works");
  })
  .catch(function() {});
