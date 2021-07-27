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
    //if an operation hasn't occured, then 1 is added to the value
    //1 is displayed as apart of the current operand
    if(!nextOp){
        value += 1 
        cOperand.innerHTML += 1
        console.log(value)
    }
})

button2.addEventListener('click',function(){
    if(!nextOp){
        value += 2 
        cOperand.innerHTML += 2
        console.log(value)
    }
    
})

button3.addEventListener('click',function(){
    if(!nextOp){
        value += 3
        cOperand.innerHTML += 3
        console.log(value)
    }
})

button4.addEventListener('click',function(){
    if(!nextOp){
        value += 4 
        cOperand.innerHTML += 4
        console.log(value)
    }
})

button5.addEventListener('click',function(){
    if(!nextOp){
        value += 5 
        cOperand.innerHTML += 5 
        console.log(value)
    }
})

button6.addEventListener('click',function(){
    if(!nextOp){
        value += 6 
        cOperand.innerHTML += 6
        console.log(value)
    }
})

button7.addEventListener('click',function(){
    if(!nextOp){
        value += 7 
        cOperand.innerHTML += 7 
        console.log(value)
    }
})

button8.addEventListener('click',function(){
    if(!nextOp){
        value += 8 
        cOperand.innerHTML += 8 
        console.log(value)
    }
})

button9.addEventListener('click',function(){
    if(!nextOp){
        value += 9 
        cOperand.innerHTML += 9 
        console.log(value)
    }
})

button0.addEventListener('click',function(){
    if(!nextOp){
        value += 0 
        cOperand.innerHTML += 0 
        console.log(value)
    }
})

clearButton.addEventListener('click',function(){
    //clearing all display and operation values
    value = ""
    cOperand.innerHTML = ""
    pOperand.innerHTML = ""
})

addButton.addEventListener('click',function(){
    //if an operation has occured
    //this conditional exists to make the past operation text become current
    //and current operation text to clearm while the total value stays the same
    if(nextOp){
        //past operation text becomes what is operation value(the answer)
        pOperand.innerHTML = value
        //current operation text clears
        cOperand.innerHTML = "" 
        //goes back to no operation, so the next operations can begin
        nextOp = false
        console.log("next operation: " + nextOp)
    }

    //operations contiue
    value += "+" 
    cOperand.innerHTML += "+" 
    console.log(value)
})

subtractButton.addEventListener('click',function(){

    if(nextOp){
        pOperand.innerHTML = value
        cOperand.innerHTML = "" 
        nextOp = false
        console.log("next operation: " + nextOp)
    }

    value += "-" 
    cOperand.innerHTML += "-" 
    console.log(value)
})

multiplyButton.addEventListener('click',function(){

    if(nextOp){
        pOperand.innerHTML = value
        cOperand.innerHTML = "" 
        nextOp = false
        console.log("next operation: " + nextOp)
    }

    value += "*" 
    cOperand.innerHTML += "*" 
    console.log(value)
})

divideButton.addEventListener('click',function(){

    if(nextOp){
        pOperand.innerHTML = value
        cOperand.innerHTML = "" 
        nextOp = false
        console.log("next operation: " + nextOp)
    }

    value += "/" 
    cOperand.innerHTML += "÷"
    console.log(value)
})

deleteButton.addEventListener('click',function(){
    //the total value and current operand text become their subtrings 
    //without each of theer last index value
    value = value.substring(0,value.length-1)
    cOperand.innerHTML = cOperand.innerHTML.substring(0,cOperand.innerHTML.length-1)
    console.log(value)
})

decimalButton.addEventListener('click',function(){
    if(!nextOp){
        value += "." 
        cOperand.innerHTML += "." 
        console.log(value)
    }
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
