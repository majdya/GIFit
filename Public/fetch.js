// var imager = document.getElementsByClassName("display-none");
// var inputField = document.getElementById("search-input");
//
// var apiKey = "QCbAV0VnE0UWZdureq8keOFGr1xBi0qy";
// var searchinput = document.getElementById("search-input").value;
// var url =
//   "https://api.giphy.com/v1/gifs/search?q=" +
//   searchinput +
//   "&api_key=" +
//   apiKey;
//
// fetch(url)
//   .then(resp => resp.json())
//   .then(function(data) {
//     console.log("first" + imager);
//
//     for (var i = 0; i < 8; i++) {
//       document.getElementById("img" + i).src = json.data[i].images.original.url;
//       //  console.log(json.data[i].images.original.url);
//     }
//     response.writeHead(200, { "content-type": "text/html" });
//     response.end("it works");
//   })
//   .catch(function() {
//
//
//
//   });
// inputField.addEventListener("keyup", function(event) {
//   event.preventDefault();
//   console.log("where");
//   if (event.keyCode === 13) {
//     console.log("it works");
//     console.log(imager);
//     for (let image of imager) {
//       console.log("inside for each: ", image);
//       image.classList.toggle("display-none");
//     }
//   }
// });
