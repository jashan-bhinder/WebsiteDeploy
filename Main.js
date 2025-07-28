alert("Welcome! Please choose either Rock, Paper or Scissors.");

let num = Math.random()
console.log(num);

let randNum = Math.floor(num * 3);
console.log(randNum);

let oppChoice;

if (randNum == 0){
    oppChoice = "Rock"
}else if (randNum == 1){
    oppChoice = "Paper"
}else{
    oppChoice = "Scissors"
}
console.log(oppChoice);