let game = document.querySelector("#game");
let shiba = document.querySelector("#shiba");
let block = document.querySelector("#block");
let score = document.querySelector("#score");
let gameOver = document.querySelector("#gameOver");
var audio = new Audio('8bit.mp3');
audio.play();

//declaring variable for score
let interval = null;
let playerScore = 0;


//function for score
let scoreCounter = () => {
    playerScore++;
    score.innerHTML = `Score <b>${playerScore}</b>`;
}


//start Game
window.addEventListener("keydown", (start) => {
    //    console.log(start);
    if (start.code == "ArrowUp") {
        gameOver.style.display = "none";
        block.classList.add("blockActive");


        //score
        let playerScore = 0;
        interval = setInterval(scoreCounter, 200);
    }
});


window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp") {
        jump();
    }
});

window.addEventListener("touchstart", () => {
    jump();
});

function jump() {
    if (shiba.classList != "shibaActive") {
        shiba.classList.add("shibaActive");

        // Supprimer la classe après 0,5 seconde
        setTimeout(() => {
            shiba.classList.remove("shibaActive");
        }, 500);
    }
}

//'Game Over' if 'Character' hit The 'Block' 
let result = setInterval(() => {
    let shibaBottom = parseInt(getComputedStyle(shiba).getPropertyValue("bottom"));
    //    console.log("shsibaBottom" + shibaBottom);

    let blockLeft = parseInt(getComputedStyle(block).getPropertyValue("left"));
    //    console.log("BlockLeft" + blockLeft);

    if (shibaBottom <= 40 && blockLeft >= 0 && blockLeft <= 25) {
            //    console.log("Game Over");

        gameOver.style.display = "block";
        block.classList.remove("blockActive");
        clearInterval(interval);
        playerScore = 0;
    }
}, 10);
