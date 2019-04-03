var imager = document.getElementsByClassName("display-none");
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
          data = data.data.slice(0, 10)
          console.log(data);
          for (var i = 1; i < 10; i++) {
            console.log(data[i].images.downsized.url);
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
  //console.log("where");
  if (event.keyCode === 13) {
    //  console.log("it works");
    //  console.log(imager);
    hey(document.getElementById("search-input").value)
    for (let image of imager) {
      //    console.log("inside for each: ", image);
      image.classList.toggle("display-none");
    }
  }
});
