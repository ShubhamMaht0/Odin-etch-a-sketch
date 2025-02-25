const gridContainer = document.getElementById("gridContainer");
const newGridButton = document.getElementById("newGrid");
const resetButton = document.getElementById("reset");
let userInput =0;

function input(){
    userInput = prompt("Enter size grid: ");
    if(userInput > 100){
        alert("It should be less than 100.");
        userInput = 0;
    }
}

const randomRgbColor = () => {
    let r = Math.floor(Math.random() * 256); // Random between 0-255
    let g = Math.floor(Math.random() * 256); // Random between 0-255
    let b = Math.floor(Math.random() * 256); // Random between 0-255
    return 'rgb(' + r + ',' + g + ',' + b + ',';
  };

function createGrid(userInput){
    for(let i=1; i<=userInput; i++){
        const row = document.createElement('div');
        row.className = 'row';
        for(let j=1; j<=userInput; j++){
            const column = document.createElement("div");
            column.className = "column";
            //column.textContent = j;
            row.appendChild(column);
        }
        gridContainer.appendChild(row);
    }
    const column = document.getElementsByClassName("column");
    const rgb = document.getElementById("rgb");
    const black = document.getElementById("black");
    let op=0;

    rgb.addEventListener('click',(event)=>{
        Array.from(column).forEach(column =>{
            column.addEventListener('mouseover',function(){
                //this.style.backgroundColor = randomRgbColor();
                op = (op + 0.1)%1;
                this.style.backgroundColor = randomRgbColor() + op +')';
            })
        })
    })

    black.addEventListener('click',(event)=>{
        Array.from(column).forEach(column =>{
            column.addEventListener('mouseover',function(){
                op = (op + 0.1)%1;
                this.style.backgroundColor = "rgba(0, 0, 0, "+op+")";
            })
        })
    })

    resetButton.addEventListener("click",(event)=>{
        Array.from(column).forEach(column =>{
            column.style.backgroundColor = '#f0f0f0';
        })
    });
}

newGridButton.addEventListener("click",(event)=>{
    input();
    gridContainer.innerHTML = "";
    createGrid(userInput);

});




