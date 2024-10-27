
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
 

const form = document.querySelector(".form")

form.addEventListener("submit", OnSubmitClick);
  
function delayPromise(delay, radioChecked) {
  const data = { delay, radioChecked };

  return new Promise((res, rej) => {
      setTimeout(() => {
          if (radioChecked === 'fulfilled') {
              res(data);
          } else {
              rej(data);
          }
      }, delay);
  });
}

function OnSubmitClick(event) {
  event.preventDefault();

  const form = event.target;
  const delay = +(form.elements.delay.value);
  const radioChecked = form.elements.state.value;

  delayPromise(delay, radioChecked)
      .then(({ delay }) => {
          iziToast.success({
              title: 'OK',
              message: `✅ Fulfilled promise in ${delay} ms`,
              backgroundColor: "#4caf50",
          });
      })
      .catch(({ delay }) => {
          iziToast.success({
              title: `Error`,
              message: `❌ Rejected promise in ${delay} ms`,
              backgroundColor: "#ef4040",
          });
      });
form.reset();
} 
  
  
  
  