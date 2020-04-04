var db = firebase.firestore();
// window.alert('Okay');

const catalogue_div = document.querySelector("#catalogue_div");

db.collection("books").get().then(function(querySnapshot) {
  console.log("right");
  querySnapshot.forEach(function(doc) {
      catalogue_div.innerHTML = "<div class='flip-card'>" +
      "<div class='flip-card-inner'>" +
      "<div class='flip-card-front'>" +
      "<img src=" + doc.data().cover + " alt=" + doc.data().name + ">" +
      "</div>" +
      "<div class='flip-card-back'>" +
      "<h5>" + doc.data().name + "</h5>" +
      // "<p>" + doc.data().description + "</p>" +
      "</div>" +
      "</div>" +
      "</div>"
  });
});

// db.collection("books").get().then(function(querySnapshot) {
//     console.log("right");
//     querySnapshot.forEach(function(doc) {
//         catalogue_div.innerHTML += "<article>" +
//         "<img src=" + doc.data().cover + " alt=" + doc.data().name + ">" + 
//         "<div class='text'>" +
//           "<h6>" + doc.data().name + "</h6>" +
//         "</div>" +
//       "</article>"
//     });
// });


// db.collection("cities").where("state", "==", "CA")
//   .onSnapshot({ includeMetadataChanges: true }, function(snapshot) {
//       snapshot.docChanges().forEach(function(change) {
//           if (change.type === "added") {
//               console.log("New city: ", change.doc.data());
//           }

//           var source = snapshot.metadata.fromCache ? "local cache" : "server";
//           console.log("Data came from " + source);
//       });
//   });
