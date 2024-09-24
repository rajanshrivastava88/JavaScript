const bmiText = document.getElementById("bmi");
const descText = document.getElementById("desc");
const form = document.querySelector("form");

form.addEventListener("submit", onFormSubmit);
form.addEventListener("reset", onFormReset);

function onFormReset() {
    bmiText.textContent = 0;
    bmiText.className = "";
    descText.textContent = "N/A";
  }
  
  function onFormSubmit(e) {
    e.preventDefault();
  
    const weight = parseFloat(form.weight.value);
    const height = parseFloat(form.height.value);
  
  