let btns = document.querySelectorAll(".click-box");
let turn0 = true;
let winMsg = document.querySelector(".winMesage")
let h2 = document.querySelector(".win");
let newGame = document.querySelector("#newGame");
let reset = document.querySelector("#reset");

let winningConditions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];


btns.forEach((box) => {
    box.addEventListener('click', () => {
        if (turn0 === true) {
            box.innerText = "0";
            turn0 = false;
            checkwinner();
        }
        else {
            box.innerText = "X";
            turn0 = true;
            checkwinner();
        }
        box.disabled = true;
    })
}
);

function checkwinner() {
    winningConditions.forEach((key) => {
        if (btns[key[0]].innerText != "" && btns[key[1]].innerText != "" && btns[key[2]].innerText != "") {
            if (btns[key[0]].innerText == btns[key[1]].innerText && btns[key[0]].innerText == btns[key[2]].innerText) {
                winMsg.classList.remove("hide");
                btns.forEach((value) => {
                    value.classList.add("hide");
                });
                h2.innerText = `Winner ${btns[key[0]].innerText}`;
                disableBoxes();
            }
        }
    }
    )
}

newGame.addEventListener("click", renew);
reset.addEventListener("click", renew);

function renew() {
    turn0 = true;
    enableBoxes();
    winMsg.classList.add("hide");
    btns.forEach((value) => {
        value.classList.remove("hide");
    });
}

function disableBoxes() {
    btns.forEach((box) => {
        box.disabled = true;
    })
}
function enableBoxes() {
    btns.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
    })
}

