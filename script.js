const bookTitle = document.querySelector("#bookTitle");
const author = document.querySelector("#author");
const priority = document.querySelector("#priority");
const category = document.querySelector("#category");
const sendBtn = document.querySelector(".send");
const popup = document.querySelector(".popup");

const showError = (input, msg) => {
  //input argument store our inputs
  //msg argument store our placeholders
  const formBox = input.parentElement;
  const errorMsg = formBox.querySelector(".error-text");
  //every error will add new class "error"
  formBox.classList.add("error");
  errorMsg.textContent = msg;
};

const clearError = (input) => {
  const formBox = input.parentElement;
  formBox.classList.remove("error");
};

const checkForm = (input) => {
  input.forEach((el) => {
    // input argument from checkForm function stores our array with our inputs
    // el argument in every element in the array
    if (el.value === "") {
      showError(el, el.placeholder);
    } else {
      clearError(el, el.placeholder);
    }
  });
};

const checkLength = (input, min) => {
  if (input.value.length < min) {
    showError(
      input,
      //previusElementSibling.innerText + slice()  - taking name of the input and removing ":"
      `${input.previousElementSibling.innerText.slice(
        0,
        -1
      )} need to have ${min} characters.`
    );
  }
};

//this function is counting error from our forms, thx to "error" class which every error is creating
const checkErrors = () => {
  const allInputs = document.querySelectorAll(".form-box");
  let errorCount = 0;
  //check if el has "error" class
  allInputs.forEach((el) => {
    if (el.classList.contains("error")) {
      errorCount++;
    }
  });
  //if no error show info that submit success
  if (errorCount === 0) {
    popup.classList.add("show-popup");
  }
};

const checkNumber = (input, min, max) => {
  input.forEach((el) => {
    if (input.value < min) {
      showError(el, el.placeholder);
    } else if (input.value > max) {
      showError(el, el.placeholder);
    } else {
      clearError(el, el.placeholder);
    }
  });
};

sendBtn.addEventListener("click", (e) => {
  e.preventDefault();
  checkForm([bookTitle, author, priority, category]);
  checkLength(bookTitle, 1);
  checkLength(author, 3);
  checkNumber(priority, 1, 5);
  checkErrors();
});
