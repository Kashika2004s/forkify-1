// function isLoggedIn() {
//   return false;}
function rate(star) {
  // Get the parent div of the rating stars
  var ratingDiv = star.parentNode;
  // Get all the rating stars in this div
  var stars = ratingDiv.querySelectorAll('i');
  // Get the index of the clicked star
  var index = Array.prototype.indexOf.call(stars, star);
  
  for (var i = 0; i < stars.length; i++) {
    if (i <= index) {
      stars[i].classList.remove('far');
      stars[i].classList.add('fas');
    } else {
      stars[i].classList.remove('fas');
      stars[i].classList.add('far');
    }
  }
}

function likeBtn(btn){
  if(btn.classList.contains("far")){
    btn.classList.remove("far");
    btn.classList.add("fas");
  } else {
    btn.classList.remove("fas");
    btn.classList.add("far");
  }
}
// Function to handle rating
// function rate(star) {
//   if (isLoggedIn()) {
//     // If user is logged in, allow rating
//     var ratingDiv = star.parentNode;
//     var stars = ratingDiv.querySelectorAll('i');
//     var index = Array.prototype.indexOf.call(stars, star);

//     for (var i = 0; i < stars.length; i++) {
//       if (i <= index) {
//         stars[i].classList.remove('far');
//         stars[i].classList.add('fas');
//       } else {
//         stars[i].classList.remove('fas');
//         stars[i].classList.add('far');
//       }
//     }
//     console.log("User is logged in. Performing rating.");
//   } else {
//     // If user is not logged in, redirect to login page
//     console.log("User is not logged in. Redirecting to login page.");
//     window.location.href = "login.html";
//   }
// }

// Function to handle like button
// function likeBtn(btn) {
//   if (isLoggedIn()) {
//     // If user is logged in, allow liking
//     if (btn.classList.contains("far")) {
//       btn.classList.remove("far");
//       btn.classList.add("fas");
//     } else {
//       btn.classList.remove("fas");
//       btn.classList.add("far");
//     }
//     console.log("User is logged in. Performing like action.");
//   } else {
//     // If user is not logged in, redirect to login page
//     console.log("User is not logged in. Redirecting to login page.");
//     window.location.href = "login.html";
//   }
// }
