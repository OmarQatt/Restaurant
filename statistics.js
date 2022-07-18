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




getData()
pieChar()
barChart()



function getData() {
    
  let retriveMenu =localStorage.getItem('Foods')
  let parseMenu = JSON.parse(retriveMenu)
  
  if(parseMenu != null)
  {
      for (let i = 0; i < parseMenu.length; i++) {
         new Food(parseMenu[i].foodID,parseMenu[i].foodName,parseMenu[i].type,parseMenu[i].price)
          
      }
  }
  
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


function pieChar() {
  
let map = new Map();
for (let i = 0; i < allFood.length; i++) { 
  if(!map.has(allFood[i].type)){     
   map.set(allFood[i].type, 1)       
  } else {
    map.set(allFood[i].type, (map.get(allFood[i].type) + 1))
  }
}
  var barColors = [
    "#b91d47",
    "#00aba9",
    "#2b5797",
    "#e8c3b9",
    "#1e7145"
  ];
  
  const myChart= new Chart("myChart", {
    type: "pie",
    data: {
      datasets: [{
        backgroundColor: barColors,
        data: Array.from(map.values()),
      }],
      labels:Array.from(map.keys()) 
    },
    options: {
      title: {
        display: true,
        text: "Best Type Food Ever"
      }
    }
  });
}




function barChart(){
const names = [];
const prices = [];
const colors = [];
for (let i = 0; i < allFood.length; i++) {
  names.push(allFood[i].foodName);
  prices.push(allFood[i].price)
 colors[i]= generateRandomColor()
}


function generateRandomColor(){
  let maxVal = 0xFFFFFF; // 16777215
  let randomNumber = Math.random() * maxVal; 
  randomNumber = Math.floor(randomNumber);
  randomNumber = randomNumber.toString(16);
  let randColor = randomNumber.padStart(6, 0);   
  return `#${randColor.toUpperCase()}`
}

const myChart = new Chart("myChartBar", {
  type: "bar",
  data: {
    labels: names,
    datasets: [{
      backgroundColor: colors,
      data: prices
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "The Price For Different Food"
    },
    scales: {
      yAxes: [{
          ticks: {
              beginAtZero: true
          }
      }]
  }
    
  }
});
}



      