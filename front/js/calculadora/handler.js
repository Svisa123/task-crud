let counter = 0;
const container = document.getElementById("container");
const display = document.getElementById("display");
container.addEventListener("click", (e) => {
  if (e.target.id === "button0") {
    insertNumber(0);
  }
  if (e.target.id === "button1") {
    insertNumber(1);
  }
  if (e.target.id === "button2") {
    insertNumber(2);
  }
  if (e.target.id === "button3") {
    insertNumber(3);
  }
  if (e.target.id === "button4") {
    insertNumber(4);
  }
  if (e.target.id === "button5") {
    insertNumber(5);
  }
  if (e.target.id === "button6") {
    insertNumber(6);
  }
  if (e.target.id === "button7") {
    insertNumber(7);
  }
  if (e.target.id === "button8") {
    insertNumber(8);
  }
  if (e.target.id === "button9") {
    insertNumber(9);
  }
  if (e.target.id === "buttonSuma") {
    operationSymbol();
    insertNumber("+");
  }
  if (e.target.id === "buttonResta") {
    operationSymbol();
    insertNumber("-");
  }
  if (e.target.id === "buttonMultiplicacion") {
    operationSymbol();
    insertNumber("x");
  }
  if (e.target.id === "buttonDividir") {
    operationSymbol();
    insertNumber("/");
  }
  if (e.target.id === "buttonPorcentaje") {
    operationSymbol();
    insertNumber("%");
  }
  if (e.target.id === "buttonDecimal") {
    insertNumber(".");
  }
  if (e.target.id === "buttonDelete") {
    display.textContent = "";
  }
  if (e.target.id === "buttonIgual") {
    operationResolve();
  }
});

function operationSymbol() {
  counter++;
  if (counter > 1) {
    operationResolve();
    counter = 1;
  }
}

function operationResolve() {
  const operation = String(display.innerHTML).trim();
  let dataOperation = detectOperation(operation);
  let numbers = operation.split(dataOperation.split);
  display.innerHTML = dataOperation.operation(
    Number(numbers[0]),
    Number(numbers[1])
  );
}
