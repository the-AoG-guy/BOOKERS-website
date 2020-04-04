var db = firebase.firestore();
// window.alert('Okay');

const catalogue_div = document.querySelector("#catalogue_div");

db.collection("books").get().then(function(querySnapshot) {
  console.log("right");
  querySnapshot.forEach(function(doc) {
    console.log(doc.data().name);
      catalogue_div.innerHTML += "<div class='flip-card'>" +
      "<div class='flip-card-inner'>" +
      "<div class='flip-card-front'>" +
      "<img src=" + doc.data().cover + " alt=" + doc.data().name + ">" +
      "</div>" +
      "<div class='flip-card-back'>" +
      "<h5>" + doc.data().name + "</h5>" +
      "</div>" +
      "</div>" +
      "</div>"
  });
});
