const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
  const prices = document.querySelectorAll(".price")
  let totalPrice = 0;

  prices.forEach(cell => {
    totalPrice += parseFloat(cell.textContent) || 0
  })

  const oldTotal = document.getElementById("totalRow");
  if (oldTotal) oldTotal.remove();

  const table = document.querySelector("table")
  const totalRow = document.createElement("tr")
  totalRow.id = "totalRow"

  const totalCell = document.createElement("td")
  totalCell.textContent = `Total Price: Rs. ${totalPrice}`

  totalRow.appendChild(totalCell)
  table.appendChild(totalRow)
};

getSumBtn.addEventListener("click", getSum);

