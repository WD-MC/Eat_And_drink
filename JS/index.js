let Menu = new Array(["PopularFood"],["Hootpizza"],["Drink"]);
let nbreburger = 0;
let nbrepizza = 0;
let total = 0;
const comande = document.getElementById("comande");

function Get_Id(name) {
    
    total = total+1;
    comande.innerText=total;
    
    if (name=="burger") {
        nbreburger = nbreburger+1;
        Menu[0][1]="Chicken Burger";
        Menu[0][2]=nbreburger;
        //Menu[0][nbreburger+1]="3000f";
    }
    console.log(Menu);
}