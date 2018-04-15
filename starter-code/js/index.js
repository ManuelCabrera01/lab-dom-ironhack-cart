//declaration area
const getId = id => document.getElementById(id);

const getClass = classes => document.getElementsByClassName(classes);

const getByTN = tagName => document.getElementsByTagName(tagName);

// end of declaration area

// getting the price and turning it into a num
let getItemPrice = getByTN("span")[1].innerHTML;
//my price
const itemPrice = parseInt(getItemPrice.replace(/[^0-9\.-]+/g, ""));

//calculate button
let calculateButton = getClass("btn")[1];

calculateButton.onclick = () => {
  // getting the value of the QTY
  let getInput = getByTN("input")[0];
  let getInputValue = getInput.value;
  //calculating the price
  let calculatePrice = itemPrice * getInputValue;
  price = "$" + calculatePrice;

  //Updates the total price in the DOM
  let TotalPrice = (getByTN("span")[2].innerText = price);

  console.log(TotalPrice);
};
let addItemName, addItemPrice, AddItemQty, addItemTPrice, addDeleteBottun;
// TotalPrice = text;

// function deleteItem(e){

// }
// function getPriceByProduct(itemNode){

// }

// function updatePriceByProduct(productPrice, index){

// }

// function getTotalPrice() {

// }

// function createQuantityInput(){

// }

// function createDeleteButton(){

// }

// function createQuantityNode(){

// }

// function createItemNode(dataType, itemData){

// }

// function createNewItemRow(itemName, itemUnitPrice){

// }

// function createNewItem(){

// }

// window.onload = function(){
//   var calculatePriceButton = document.getElementById('calc-prices-button');
//   var createItemButton = document.getElementById('new-item-create');
//   var deleteButtons = document.getElementsByClassName('btn-delete');

//   calculatePriceButton.onclick = getTotalPrice;
//   createItemButton.onclick = createNewItem;

//   for(var i = 0; i<deleteButtons.length ; i++){
//     deleteButtons[i].onclick = deleteItem;
//   }
// };
