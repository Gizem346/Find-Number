//1) Arka planda random bir sayı tutulacak
//2) Kullanıcıdan sayı alınacak 
//3) Alınan sayı kontrol edilecek
//   3.1 Sayı tahmini sayıdan büyükse "sayı büyük"
//   3.2 Sayı tahmini sayıdan küçükse "sayı küçük" 
//   3.3 Sayı eşitse oyunu bitir

let guess_count = 0;

const random_number = Math.floor(Math.random() * 100 + 1);
console.log(random_number);

document.querySelector("#check_it").addEventListener("click", checkNumber);
document.querySelector("#nr_game").addEventListener("keyup", function (event) {
    if (event.keyCode === 13)
        checkNumber()
});
function checkNumber() {
    // Input elementine tekrar tekrar daha rahat erişim sağlamak için
    let userInputElement = document.querySelector("#nr_game");
    let answerLabelElement = document.querySelector("#answer");
    if (userInputElement.value == random_number) {
        alert("You are the winner!" + ++guess_count);
        guess_count = 0;

        const choice = confirm("Game agin?")

    } else if (userInputElement.value == "") {
        answerLabelElement.innerText = "Enter a number!";
    } else if (userInputElement.value > random_number) {
        guess_count++;
        document.querySelector("#count_it").innerText = `Guess count is: ${guess_count}`;
        answerLabelElement.innerText = "Try a smaller number!";
    } else if (userInputElement.value < random_number) {
        guess_count++;
        document.querySelector("#count_it").innerText = `Guess count is: ${guess_count}`;
        answerLabelElement.innerText = "Try a higher number!";
    } else if (isNaN(userInputElement.value)) {
        answerLabelElement.innerText = "It's not a number!";
    }
    userInputElement.focus();
    userInputElement.value = "";
}