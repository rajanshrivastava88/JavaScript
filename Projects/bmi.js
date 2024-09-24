const bmiText = document.getElementById("bmi");
const descText = document.getElementById("desc");
const form = document.querySelector("form");

form.addEventListener("submit", onFormSubmit);
form.addEventListener("reset", onFormReset);

