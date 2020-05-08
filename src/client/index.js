import { isUrlValid } from "./js/inputChecker";
import { handleSubmitBtn } from "./js/formHandler";

//import "./styles/style.scss";

const form = document.querySelector("#main-form");
const urlInput = document.querySelector("#url");
const submitBtn = document.querySelector("#main-form input[type=submit]");
const errorContainer = document.querySelector("#main-form .error");

urlInput.addEventListener("keyup", e => {
  if (isUrlValid(e.target.value)) errorContainer.classList.add("hidden");
  else errorContainer.classList.remove("hidden");
});

form.addEventListener("submit", e => {
  e.preventDefault();
  const url = urlInput.value;

  if (isUrlValid(url)) {
    submitBtn.value = "Loading.......";
    handleSubmitBtn(url, submitBtn);
  }
});