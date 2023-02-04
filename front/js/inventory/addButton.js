const bodyTable = document.getElementById("body-table");
const btnAdd = document.getElementById("btn-add");

btnAdd.addEventListener("click", () => {
  let element = document.createElement("tr");
  element.innerHTML = `<td> <input type="text" name="articles">  </input> </td> 
<td> <input  type="text" name="amounts">  </input> </td> 
<td> <input  type="text" name="pricesDollar">  </input> </td> 
<td> <input  type="text" name="pricesBs">  </input> </td> 
<td> <input  type="text" name="totals">  </input> </td> 
<td> <button class="btn-delete">BORRAR</button> </td> `;

  bodyTable.appendChild(element);
});

bodyTable.addEventListener("click", (e) => {
  if (e.target.textContent === "BORRAR" && e.target.nodeName === "BUTTON") {
    const td = e.target.parentNode;
    td.parentElement.remove();
  }
});
