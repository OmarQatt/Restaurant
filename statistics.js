'use stricts'
const allFood = [];
localStorage.setItem("foodID",allFood)

function Food(foodID,foodName,type,price){
  
this.foodID = foodID;
this.foodName = foodName;
this.type = type;
this.price = price;

allFood.push(this);
}


function getData() {
    
let retriveMenu =localStorage.getItem('Foods')
let parseMenu = JSON.parse(retriveMenu)

if(parseMenu != null)
{
    for (let i = 0; i < parseMenu.length; i++) {
       new Food(parseMenu[i].foodID,parseMenu[i].foodName,parseMenu[i].type,parseMenu[i].price)
        
    }
}


// var id =document.getElementById('ID').innerHTML =foodID
// var name =document.getElementById('Name').innerHTML = foodName
// var ty = document.getElementById('Type').innerHTML = type
// var pri=document.getElementById('Price').innerHTML = price

var table = document.getElementById('myTable')
for (let j = 0; j < parseMenu.length; j++) {
    
    var row =  `
<tr>
<td id="ID">${parseMenu[j].foodID}</td>
<td id="Name">${parseMenu[j].foodName}</td>
<td id="Type">${parseMenu[j].type}</td>
<td id="Price">${parseMenu[j].price} JD</td>
</tr>
`
table.innerHTML += row
} 
  }

getData()


