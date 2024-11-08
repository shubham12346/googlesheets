let rows = 100;
let col = 26;

let addressColCont = document.querySelector(".address-col-cont");
let addressRowCont = document.querySelector(".address-row-cont");
let cellsCont = document.querySelector(".cell-cont");
let addressBar = document.querySelector(".address-bar");

for (let i = 0; i < rows; i++) {
  let addressCol = document.createElement("div");
  addressCol.innerText = i + 1;
  addressCol.setAttribute("class", "address-col");
  addressColCont.appendChild(addressCol);
}

for (let i = 0; i < col; i++) {
  let addressRow = document.createElement("div");
  addressRow.innerText = String.fromCharCode(65 + i);
  addressRow.setAttribute("class", "address-row");
  addressRowCont.appendChild(addressRow);
}

for (let i = 0; i < rows; i++) {
  let rowCont = document.createElement("div");
  rowCont.setAttribute("class", "row-cont");
  for (let j = 0; j < col; j++) {
    let cell = document.createElement("div");
    cell.setAttribute("class", "cell");
    cell.setAttribute("contentEditable", "true");
    rowCont.appendChild(cell);
    addClickEventListerForCellAddress(cell, i, j);
  }
  cellsCont.appendChild(rowCont);
}

function addClickEventListerForCellAddress(cell, row, col) {
  cell.addEventListener("click", (e) => {
    addressBar.value = `${String.fromCharCode(65 + col)}${row}`;
  });
}
