const buttons = document.querySelectorAll(".button")
//console.log(buttons);
const body = document.querySelector("body")


buttons.forEach(function (button){
    console.log(button);
    button.addEventListener('click', function(changeColor){
        console.log(changeColor);
        console.log(changeColor.target);
        if (changeColor.target.id === 'grey') {
            body.style.backgroundColor = changeColor.target.id;
        }
        if (changeColor.target.id === 'red') {
            body.style.backgroundColor = changeColor.target.id;
        }
        if (changeColor.target.id === 'blue') {
            body.style.backgroundColor = changeColor.target.id;
        }
        if (changeColor.target.id === 'yellow') {
            body.style.backgroundColor = changeColor.target.id;
        }
        if (changeColor.target.id === 'green') {
            body.style.backgroundColor = changeColor.target.id;
        }
        if (changeColor.target.id === 'purple') {
            body.style.backgroundColor = changeColor.target.id;
        }

    });
});
