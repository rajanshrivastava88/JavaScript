
const para = document.getElementById("p");
const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", () => {
  let input = document.getElementById("input").value;

  if (input !== "") { 
    let regExp = new RegExp(input, "gi"); // g: Global search (find all matches, not just the first) i: Case-insensitive search
    para.innerHTML = para.textContent.replace(regExp, "<mark>$&</mark>");
  }
});


// The $& is a special replacement pattern that represents the matched substring.