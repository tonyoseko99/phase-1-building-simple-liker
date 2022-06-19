// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const modal = document.getElementById('modal');
const modalMessage = document.getElementById('modal-message');
const likeBtns = document.getElementsByClassName('like-glyph');

const likeFunc = (event) => {
  mimicServerCall()
  .then(() => {
    const { target } = event;
    
    if (target.classList.contains('activated-heart')) {
      target.innerHTML = EMPTY_HEART;
      target.classList.remove('activated-heart');
    } else {
      target.innerHTML = FULL_HEART;
      target.classList.add('activated-heart');
    }
  })
  .catch(e => {
    modal.classList.remove('hidden');
    modalMessage.innerHTML = e;

    setTimeout(() => modal.classList.add('hidden'), 3000);
  })
};

Array.from(likeBtns).forEach((el) => {
  el.addEventListener('click', (event) => likeFunc(event));
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
