'use stricts'

const allFood = [];
localStorage.setItem("foodID",allFood)
// let foodID = 1000;
function Food(foodID,foodName,type,price){
  // this.foodID = foodID++;
this.foodID = foodID;
this.foodName = foodName;
this.type = type;
this.price = price;

allFood.push(this);
}

let button = document.getElementById("foodForm");
button.addEventListener("submit",handleClick);

const foodName = document.getElementById('foodName')
const type = document.getElementById('type')
const price = document.getElementById('price')

localStorage.setItem("handleClick",handleClick)

var allMenu=[]
function handleClick(event) {
    event.preventDefault();

   let newItem = new Food(uniqueNumber(),event.target.foodName.value,event.target.type.value,event.target.price.value)
   

   allMenu.push(newItem)
console.log(allMenu)






    // localStorage.setItem("foodID",foodID)
    // localStorage.setItem("foodName",foodName)
    // localStorage.setItem("type",type)
    // localStorage.setItem("price",price)


  

    
//    const food = new Food(foodID,foodName,type,price)
  //  var table = document.getElementById('myTable')

//     var row =  `
//     <tr>
// <td id="ID">${foodID}</td>
// <td id="Name">${foodName}</td>
// <td id="Type">${type}</td>
// <td id="Price">${price} JD</td>
//     </tr>
//   `
  // table.innerHTML += row
//   localStorage.setItem("myTable",table)
  saveData()

  // window.location.href = "statistics.html";

}

function uniqueNumber() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
}
function saveData(){
  let strifyedData = JSON.stringify(allMenu);
  localStorage.setItem("Foods",strifyedData)
}

// function getData() {
  // let retrivedData = localStorage.getItem("Foods");
  // console.log(retrivedData);
  // console.log(typeof retrivedData)

  // let parseData = JSON.parse(retrivedData)
  // console.log(parseData)
  // console.log(typeof parseData)

  // for (let i = 0; i < parseData.length; i++) {
     
  //     new this.Food(parseData[i].foodID,parseData[i].foodName,
  //         parseData[i].type,parseData[i].price)
  // }
  
// }
