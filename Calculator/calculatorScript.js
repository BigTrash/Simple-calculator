//operand elements 
let pOperand = document.querySelector('.previous-operand')
let cOperand = document.querySelector('.current-operand')

//button elements
const button1 = document.querySelector('#b1')
const button2 = document.querySelector('#b2')
const button3 = document.querySelector('#b3')
const button4 = document.querySelector('#b4')
const button5 = document.querySelector('#b5')
const button6 = document.querySelector('#b6')
const button7 = document.querySelector('#b7')
const button8 = document.querySelector('#b8')
const button9 = document.querySelector('#b9')
const button0 = document.querySelector('#b0')
const clearButton = document.querySelector('#clear')
const deleteButton = document.querySelector('#delete')
const divideButton = document.querySelector('#divide')
const multiplyButton = document.querySelector('#multiply')
const addButton = document.querySelector('#add')
const subtractButton = document.querySelector('#subtract')
const decimalButton = document.querySelector('#decimal')
const equalsButton = document.querySelector('#equals')

//current value of all the calculations and operations
let value =""
//boolean to see if if an operation has occured
let nextOp = false;

button1.addEventListener('click',function(){
    //calling addNum function and passing a number parameter of 1
    addNum(1)
})

button2.addEventListener('click',function(){
    addNum(2)
    
})

button3.addEventListener('click',function(){
    addNum(3)
})

button4.addEventListener('click',function(){
    addNum(4)
})

button5.addEventListener('click',function(){
    addNum(5)
})

button6.addEventListener('click',function(){
    addNum(6)
})

button7.addEventListener('click',function(){
    addNum(7)
})

button8.addEventListener('click',function(){
    addNum(8)
})

button9.addEventListener('click',function(){
    addNum(9)
})

button0.addEventListener('click',function(){
    addNum(0)
})

clearButton.addEventListener('click',function(){
    //clearing all display and operation values
    value = ""
    cOperand.innerHTML = ""
    pOperand.innerHTML = ""
    console.log("cleared")
    nextOp = false
})

addButton.addEventListener('click',function(){
    //checking if an operation has occured by calling nextOperand function
    //passing operand parameter of +
    nextOperand("+")
})

subtractButton.addEventListener('click',function(){

    nextOperand("-")

})

multiplyButton.addEventListener('click',function(){

    nextOperand("*")
})

divideButton.addEventListener('click',function(){

    nextOperand("/")
})

deleteButton.addEventListener('click',function(){
    //the total value and current operand text become their subtrings 
    //without each of theer last index value
    value = value.substring(0,value.length-1)
    cOperand.innerHTML = cOperand.innerHTML.substring(0,cOperand.innerHTML.length-1)
    console.log(value)
})

decimalButton.addEventListener('click',function(){
    addNum(".")
})

equalsButton.addEventListener('click', function(){
    //current operand is added to previous operand
    pOperand.innerHTML += cOperand.innerHTML
    //value becomes the total of all the numbers and operations it has
    value = eval(value)
    //current text becomes the total value
    cOperand.innerHTML = value
    console.log(value)
    //next operation becomes true, to prepare for the next operation
    nextOp = true
    console.log("next operation: " + nextOp)
})

function addNum(numInput){
    //if am operation hasn't occured
    if(!nextOp){
        //the number is added to the total value and the input text
        value += numInput 
        cOperand.innerHTML += numInput
        console.log(value)
    }
}

function nextOperand(operand){
    //parameter is what operand is selected

    //if an operation has occured
    //this conditional exists to make the past operation text become current
    //and current operation text to clear while the total value stays the same
    if(nextOp){
        //past operation text becomes what is operation value(the answer)
        pOperand.innerHTML = value
        //current operation text clears
        cOperand.innerHTML = "" 
        //goes back to no operation, so the next operations can begin
        nextOp = false
        console.log("next operation: " + nextOp)
    }
    
    //operations contiue with the chosen operand
    value += operand 
    cOperand.innerHTML += operand
    console.log(value)
}

