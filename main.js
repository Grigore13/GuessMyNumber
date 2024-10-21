let randomNumber = Math.floor(Math.random() * 20) + 1;
let score = 1;
console.log(randomNumber);

document.querySelector(".check").addEventListener("click", function () {
  const number = Number(document.querySelector(".guess").value);

  if (!number) {
    document.querySelector(".message").textContent = " ❌ Not a number";
  } else if (number === randomNumber) {
    document.querySelector(".message").textContent = " ✅ Perfect, You Win! ";
    document.querySelector(".number").textContent = randomNumber;
    document.querySelector(".yourScore").textContent = score++;
  } else if (number > randomNumber) {
    document.querySelector(".message").textContent = "📈Too High!";
  } else if (number < randomNumber) {
    document.querySelector(".message").textContent = " 📉Too Low!";
  }
});

document.querySelector(".again").addEventListener("click", function () {
  randomNumber = Math.floor(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "💥 Start Guessing...";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
});
