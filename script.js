//Game

//Variable

//Score
let player1 = document.getElementById("player1")
let player2 = document.getElementById("player2")
let score1 = 0
let score2 = 0

//Weapons
let rock = document.getElementById("rock")
let paper = document.getElementById("paper")
let scissor = document.getElementById("scissor")
let bossliam = document.getElementById("bossliam")
let chano = document.getElementById("chano")
let soldier = document.getElementById("soldier")
let sal = document.getElementById("sal")
let sigma = document.getElementById("sigma")
let sahur = document.getElementById("sahur")
let btn = document.getElementById("btn")

//Display
let playerpick = document.getElementById("playerpick")
let result = document.getElementById("result")
let enemypick = document.getElementById("enemypick")

//Weapon Value
rock.onclick = function(){playerpick.value = "Rock", enemypick.value = "", result.value = ""}
paper.onclick = function(){playerpick.value = "Paper", enemypick.value = "", result.value = ""}
scissor.onclick = function(){playerpick.value = "Scissor", enemypick.value = "", result.value = ""}
bossliam.onclick = function(){playerpick.value = "BossLiam", enemypick.value = "", result.value = ""}
chano.onclick = function(){playerpick.value = "Chano Taper Fade", enemypick.value = "", result.value = ""}
soldier.onclick = function(){playerpick.value = "Soldier", enemypick.value = "", result.value = ""}
sal.onclick = function(){playerpick.value = "Sal", enemypick.value = "", result.value = ""}
sigma.onclick = function(){playerpick.value = "Sigma", enemypick.value = "", result.value = ""}
sahur.onclick = function(){playerpick.value = "Tung Tung Sahur", enemypick.value = "", result.value = ""}

//BTN
btn.onclick = function(){

    //Array
    let weapon = ["Rock", "Paper", "Scissor",
                "BossLiam", "Chano Taper Fade", "Soldier",
                "Sal", "Sigma", "Tung Tung Sahur"
    ]
    //Random
    let random_i = Math.floor(Math.random() * weapon.length)

    //Show Enemy Pick
    enemypick.value = weapon[random_i]

    //Game
    if(playerpick.value == weapon[random_i]){

        result.value = "It's a Tie"
    }

    else{

        if(

            (playerpick.value == "Rock" && (weapon[random_i] == "Scissor" || weapon[random_i] == "Sigma" || weapon[random_i] == "Tung Tung Sahur")) ||
            (playerpick.value == "Paper" && (weapon[random_i] == "Rock" || weapon[random_i] == "Chano" || weapon[random_i] == "Tung Tung Sahur")) ||
            (playerpick.value == "Scissor" && (weapon[random_i] == "Paper" || weapon[random_i] == "Sigma" || weapon[random_i] == "Chano Taper Fade")) ||
            (playerpick.value == "BossLiam" && (weapon[random_i] == "Rock" || weapon[random_i] == "Scissor" || weapon[random_i] == "Sal")) ||
            (playerpick.value == "Chano Taper Fade" && (weapon[random_i] == "BossLiam" || weapon[random_i] == "Paper" || weapon[random_i] == "Sal")) ||
            (playerpick.value == "Soldier" && (weapon[random_i] == "Paper" || weapon[random_i] == "BossLiam" || weapon[random_i] == "Scissor")) ||
            (playerpick.value == "Sal" && (weapon[random_i] == "Rock" || weapon[random_i] == "Paper" || weapon[random_i] == "Sigma")) ||
            (playerpick.value == "Sigma" && (weapon[random_i] == "Chano Taper Fade" || weapon[random_i] == "Soldier" || weapon[random_i] == "BossLiam")) ||
            (playerpick.value == "Tung Tung Sahur" && (weapon[random_i] == "Chano Taper Fade" || weapon[random_i] == "Soldier" || weapon[random_i] == "Paper"))
        ){

            score1++

            player1.textContent = "Player: " + score1

            result.value = "You Win"
        }

        else{

            score2++

            player2.textContent = "Enemy: " + score2

            result.value = "You Lose"
        }
    }
}