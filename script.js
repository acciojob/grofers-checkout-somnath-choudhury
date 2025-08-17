const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  // get all price cells
  const prices = document.querySelectorAll(".price");
  let total = 0;

  prices.forEach((p) => {
    total += Number(p.textContent) || 0; // in case it's editable text
  });

  // check if already added, remove old row
  const oldAns = document.getElementById("ans");
  if (oldAns) oldAns.parentElement.remove();

  // create new row
  const row = document.createElement("tr");
  const cell = document.createElement("td");

  cell.setAttribute("id", "ans");
  cell.setAttribute("colspan", "2"); // span both columns
  cell.textContent = total;

  row.appendChild(cell);
  document.querySelector("table").appendChild(row);
};

getSumBtn.addEventListener("click", getSum);
