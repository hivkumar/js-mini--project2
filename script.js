let boxes=document.querySelectorAll(".box");
let resetbtn= document.querySelector("#resetbtn");
let newGameBtn =document.querySelector("#new-game");
let msgContainer = document.querySelector(".msg-container");
let msgPara = document.querySelector("#msg");

let turno=true;





const winptrn =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

boxes.forEach((box)=>{

    box.addEventListener("click" , ()=> {
        
        
        if(turno)
        {
            box.innerText ="O";
            turno = false;
        }else{
            box.innerText ="X";
            turno = true;
        }
        box.disabled = true;

        checkWinner();
         
    });

});

const resetGame = () =>{
    turno = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    
    
}

const enableBoxes =() =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";

    }
}


const disabledBoxes =() =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const showWinner = (winner) => {
    msgPara.innerText =` conguratulation , Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
    
};

const checkWinner = () =>{
  for( let ptrn of winptrn) {
    
   let pos1val = boxes[ptrn[0]].innerText;
   let pos2val = boxes[ptrn[1]].innerText;
   let pos3val = boxes[ptrn[2]].innerText;
     

     if (pos1val != "" && pos2val != "" && pos3val !=""){
        if (pos1val === pos2val && pos2val === pos3val){
         
            showWinner(pos1val);
        }
     }
    }
};

newGameBtn.addEventListener( "click" , resetGame);
resetbtn.addEventListener( "click" ,resetGame);