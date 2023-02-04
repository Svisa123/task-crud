let symbolOperation = "";

function detectOperation(operation) {
  if (operation.includes("+")) {
    symbolOperation = "SUMAR";
    return {
      split: "+",
      operation: (n1, n2) => {
        return n1 + n2;
      },
    };
  }

  if (operation.includes("-")) {
    symbolOperation = "RESTAR";
    return {
      split: "-",
      operation: (n1, n2) => {
        return n1 - n2;
      },
    };
  }

  if (operation.includes("x")) {
    symbolOperation = "MULTIPLICAR";
    return {
      split: "x",
      operation: (n1, n2) => {
        return n1 * n2;
      },
    };
  }

  if (operation.includes("/")) {
    symbolOperation = "DIVIDIR";
    return {
      split: "/",
      operation: (n1, n2) => {
        return n1 / n2;
      },
    };
  }
  if (operation.includes("%")) {
    symbolOperation = "PORCENTAJE";
    return {
      split: "%",
      operation: (n1, n2) => {
        return n1 * (n2 / 100);
      },
    };
  }
}
