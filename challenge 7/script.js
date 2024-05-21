// script.js
/*
const 1-root = document(order1),
const 1-biscuits: document(biscuits),
const 1-donuts: document(donuts),
const 1-pancakes: document(pancakes),
const 1-status: document(status)

const 2-root = document(order2),
const 2-biscuits: document(biscuits),
const 2-donuts: document(donuts),
const 2-pancakes: document(pancakes),
const 2-status: document(status)

const 3-root = document(order3),
const 3-biscuits: document(biscuits),
const 3-donuts: document(donuts),
const 3-pancakes: document(pancakes),
const 3-status: document(status)

1-biscuits= 1-root.biscuits,
1-donuts = 1-root.donuts,
1-pancakes = 1-root.pancakes,
1-status = 1-root.status ? Delivered : Pending

2-biscuits= 2-root.biscuits,
2-donuts = 2-root.donuts,
2-pancakes = 2-root.pancakes,
2-status = 2-root.status ? Delivered : Pending

3-biscuits= 3-root.biscuits,
3-donuts = 3-root.donuts,
3-pancakes = 3-root.pancakes,
3-status = 3-root.status ? Delivered : Pending */

document.addEventListener("DOMContentLoaded", function () {
  // Handle Order 1
  const order1 = document.querySelector("[data-key='order1']"); // Select the first order element using data attribute
  const biscuits1 = order1.querySelector(".biscuits .count"); // Select the biscuits count element
  const donuts1 = order1.querySelector(".donuts .count"); // Select the donuts count element
  const pancakes1 = order1.querySelector(".pancakes .count"); // Select the pancakes count element
  const status1 = order1.querySelector(".status dd"); // Select the status element

  // Update the text content of the elements with data from the dataset
  biscuits1.textContent = order1.dataset.biscuits;
  donuts1.textContent = order1.dataset.donuts;
  pancakes1.textContent = order1.dataset.pancakes;
  status1.textContent =
    order1.dataset.delivered === "true" ? "Delivered" : "Pending";

  // Handle Order 2
  const order2 = document.querySelector("[data-key='order2']"); // Select the second order element using data attribute
  const biscuits2 = order2.querySelector(".biscuits .count"); // Select the biscuits count element
  const donuts2 = order2.querySelector(".donuts .count"); // Select the donuts count element
  const pancakes2 = order2.querySelector(".pancakes .count"); // Select the pancakes count element
  const status2 = order2.querySelector(".status dd"); // Select the status element

  // Update the text content of the elements with data from the dataset
  biscuits2.textContent = order2.dataset.biscuits;
  donuts2.textContent = order2.dataset.donuts;
  pancakes2.textContent = order2.dataset.pancakes;
  status2.textContent =
    order2.dataset.delivered === "true" ? "Delivered" : "Pending";

  // Handle Order 3
  const order3 = document.querySelector("[data-key='order3']"); // Select the third order element using data attribute
  const biscuits3 = order3.querySelector(".biscuits .count"); // Select the biscuits count element
  const donuts3 = order3.querySelector(".donuts .count"); // Select the donuts count element
  const pancakes3 = order3.querySelector(".pancakes .count"); // Select the pancakes count element
  const status3 = order3.querySelector(".status dd"); // Select the status element

  // Update the text content of the elements with data from the dataset
  biscuits3.textContent = order3.dataset.biscuits;
  donuts3.textContent = order3.dataset.donuts;
  pancakes3.textContent = order3.dataset.pancakes;
  status3.textContent =
    order3.dataset.delivered === "true" ? "Delivered" : "Pending";
});
