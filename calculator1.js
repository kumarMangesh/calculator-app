const historyscreen = document.querySelector('.display_history')
const mainscreen = document.querySelector('.display_main')
const tempscreen = document.querySelector('.display_temp')
const number = document.querySelectorAll('.number')
const operator = document.querySelectorAll('.operator')
const buttonclear = document.querySelectorAll('.clear')
const eqoperator = document.querySelector('.eqoperator')


let history = ''
let buttontext = ''
let tempscr = ''
let haveDot = false;
let result = null;
let lastOperation = ""
let newvalue=""

number.forEach(function (num) {
    num.addEventListener('click', function (e) {
        buttontext = e.target.innerText;

        if (buttontext === "." && !haveDot) {
            haveDot = true
        } else if (buttontext === "." && haveDot) {
            return
        }
        mainscreen.innerText += buttontext;
        console.log("this is main screen value  " + mainscreen.innerText)
        //console.log("this is buttontext= " + buttontext)
    }
    )
})
buttonclear.forEach(num => {
    num.addEventListener('click', (e) => {
        buttontext = e.target.innerText;
        if (buttontext === 'C') {
            console.log("YOU JUST PRESSED C")
            mainscreen.innerText = "";
            history = "";
            historyscreen.innerText = ""
            tempscreen.innerText = ""
            lastOperation=""
            result = ""
        }
            else if(buttontext==="CE"){
                console.log("YOU JUST PRESSSED CE")
                
            }
            
    })
})

operator.forEach(operation => {
    operation.addEventListener("click", (e) => {
        if (mainscreen.innerText === "") {
            return
        }
        const operationSign = e.target.innerText;
        mainscreen.innerText += operationSign;
        console.log("operation sign = " + operationSign)

        haveDot = false
        if (historyscreen && mainscreen && lastOperation) {
            mathOperation()
            //result = parseFloat(buttontext)
        }
        else {
            result = parseFloat(mainscreen.innerText)
            //console.log("this is buttontext= " + buttontext)
            console.log("this is my else result" + result)
        }
        clearvar()
        lastOperation = operationSign;
    })
})
function clearvar() {
    history += mainscreen.innerText;
    //console.log("this is history " + history)
    historyscreen.innerText = history;
    mainscreen.innerText = ""
    tempscreen.innerText = result;
    //newvalue=""
    console.log("this is my result" + result)
}
function mathOperation() {
    console.log("WE ARE IN MATH OPERATION")
    //let newvalue=mainscreen.innerText
    //console.log(newvalue)
    if (lastOperation === "+") {
        result = parseFloat(result) + parseFloat(mainscreen.innerText)
        //console.log("this is my mathopeation result " + result)
    }
    else if (lastOperation === "X") {
        result = parseFloat(result) * parseFloat(mainscreen.innerText)
    }
    else if (lastOperation === "-") {
        result = parseFloat(result) - parseFloat(mainscreen.innerText)
    }
    else if (lastOperation === "/") {
        result = parseFloat(result) / parseFloat(mainscreen.innerText)
    }
    else if (lastOperation === "%") {
        result = parseFloat(result) % parseFloat(mainscreen.innerText)
    }
}
eqoperator.addEventListener('click',(e)=>{
    if(!mainscreen.innerText || !history){
        return
    }
    mathOperation()
    clearvar()
    mainscreen.innerText=result
    historyscreen.innerText=""
    console.log(result)
    tempscreen.innerText=""
})