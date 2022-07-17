const fase1 = document.querySelector("#fase1");
const fase2 = document.querySelector("#fase2");
const button = document.querySelector("#submit");
const resultado = document.querySelector("#resultado");
const avaliaçãoButton = Array.from(document.querySelectorAll(".avaliação"));
avaliaçãoButton.forEach(button => {
  button.addEventListener("click", selecionar);
});
let numero = 1;
function selecionar(e) {
  avaliaçãoButton.forEach(button => {
    button.style.color = "hsl(216, 12%, 54%)";
    button.style.backgroundColor = " hsl(213, 19%, 18%)";
  });
  const button = e.target;
  button.style.backgroundColor = "hsl(25, 97%, 53%)";
  button.style.color = "hsl(0, 0%, 100%)";
  numero = button.innerText;
}
button.addEventListener("click", submit);
function submit() {
  fase1.style.display = "none";
  fase2.style.display = "flex";
  resultado.innerText = `You selected ${numero} out of 5`;
}
