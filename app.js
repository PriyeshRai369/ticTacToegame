let buttons = document.querySelectorAll('.btn')
let resetButton = document.getElementById('reset-button')
let msgText = document.querySelector('.win-msg')

let turn = true
const winPattern =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

resetButton.addEventListener('click',()=>{
    turn = true
    for(btn of buttons){
        btn.disabled = false;
        btn.innerText="";
    }
    msgText.classList.add('hidden')

})

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (!button.disabled) {
            if (turn) {
                button.classList.remove('hov');
                button.innerText = "O";
                turn = false;
            } else {
                button.classList.remove('hov');
                button.innerText = "X";
                turn = true;
            }
            button.disabled = true;
            checkWinner();
        }
    });
    button.addEventListener('mouseover', () => {
        if (!button.disabled) {
            if (turn) {
                button.classList.add('hov');
                button.innerText = "O";
            } else {
                button.classList.add('hov');
                button.innerText = "X";
            }
        }
    });
    button.addEventListener('mouseout', () => {
        if (!button.disabled) {
            button.innerText = "";
        }
    });
});


const disableButtons = ()=>{
    for(btn of buttons){
        btn.disabled = true;
    }
}

const showMessage = (winner)=>{
    msgText.innerText=`👏Congratulation, winner is ${winner}`
    msgText.classList.remove('hidden')
    disableButtons()
}

const checkWinner = ()=>{
    for (let pattern of winPattern){
        let valueOne = buttons[pattern[0]].innerText
        let valueTwo = buttons[pattern[1]].innerText
        let valueThree = buttons[pattern[2]].innerText
        if(valueOne !== "" && valueTwo !== "" && valueThree !== ""){
            if(valueOne ===  valueTwo && valueTwo === valueThree){
                showMessage(valueOne);
            }
            
        }
    }
}