keyword.oninput = function() {
  let data = getData(cate + "/" + keyword.value);
};

function getData(cat) {
  fetch(cat)
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      createDiv(myJson);
    });
}
