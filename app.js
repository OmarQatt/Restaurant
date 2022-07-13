'use stricts'

const allFood = [];


function Food(foodID,foodName,type,price){
this.foodID = foodID;
this.foodName = foodName;
this.type = type;
this.price = price;

   


allFood.push(this);
}

let button = document.getElementById("foodForm");
button.addEventListener("submit",handleClick);

// Food.prototype.tableFood = function () {
//     var table = document.getElementById('myTable')

   
//     var row =  `
//     <tr>
// <td id="ID">${this.foodID}</td>
// <td id="Name">${this.foodName}</td>
// <td id="Type">${this.type}</td>
// <td id="Price">${this.price} JD</td>
//     </tr>
//   `
//   table.innerHTML += row
// }

function handleClick(event) {
    event.preventDefault();
    let foodID = uniqueNumber();
    let foodName = event.target.foodName.value;
    let type = event.target.type.value;
    let price = event.target.price.value

    console.log(foodID,foodName,type,price)
   const food = new Food(foodID,foodName,type,price)
   var table = document.getElementById('myTable')

    var row =  `
    <tr>
<td id="ID">${foodID}</td>
<td id="Name">${foodName}</td>
<td id="Type">${type}</td>
<td id="Price">${price} JD</td>
    </tr>
  `
  table.innerHTML += row
}

function uniqueNumber() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
}
 