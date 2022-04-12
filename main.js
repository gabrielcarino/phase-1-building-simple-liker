// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", () => {

  const articleHearts = document.querySelectorAll(".like-glyph");

  function likeCallback(e) {
    const heart = e.target
    mimicServerCall()
      .then( () => {
        if (heart.innerText === EMPTY_HEART) {
          heart.classList.add('activated-heart');
          heart.innerText = FULL_HEART;
        }
        else {
          heart.classList.remove('activated-heart');
          heart.innerText = EMPTY_HEART;
        }
      })
      .catch( () => {
        const errorMessage = document.getElementById("modal");
        errorMessage.classList.remove("hidden");
        setTimeout( () => {
          errorMessage.className = "hidden"}, 3000
        )
      });
  }
  for (const glyph of articleHearts) {
    glyph.addEventListener("click", likeCallback);
  }
});
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
