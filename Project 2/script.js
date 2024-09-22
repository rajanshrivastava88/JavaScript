
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

// The resulting HTML will have the matched text wrapped within <mark> tags, 
// which can be styled using CSS to highlight the matches.


// replace(regExp, "<mark>$&</mark>"): Replaces all occurrences of the regular expression 
// regExp within the paragraph's text with the string <mark>$&</mark>. 