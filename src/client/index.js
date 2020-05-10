import { isUrlValid } from "./js/inputChecker";
import { handleSubmitBtn } from "./js/formHandler";

//import "./styles/style.scss";

const form = document.querySelector("#main-form");
const urlInput = document.querySelector("#url");
const errorContainer = document.querySelector("#main-form .error");

urlInput.addEventListener("keyup", e => {
  if (isUrlValid(e.target.value)) errorContainer.classList.add("hidden");
  else errorContainer.classList.remove("hidden");
});

form.addEventListener("submit", e => {
  e.preventDefault();
  const url = urlInput.value;

  if (isUrlValid(url)) {
    handleSubmitBtn(url);
  }
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}