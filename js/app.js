
function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length = 4){
        return pin;
    }
    else{
        return getPin(); 
    }
}


function generatePin(){
    const random = Math.round(Math.random() * 10000);
    return random;
}

document.getElementById('generate-btn').addEventListener('click', function (){
    const pin = getPin();
    const displayPinfield = document.getElementById('display-pin');
    displayPinfield.value = pin;
})


document.getElementById('calculator').addEventListener('click', function (event){
    const caracter = event.target.innerText;
    const typedInputField = document.getElementById('typed-number');
    const prevTypedNumber = typedInputField.value;
    if(isNaN(caracter)){
        if(caracter === 'C'){
            typedInputField.value = '';
        }
        else if(caracter === '<'){
            const digits = prevTypedNumber.split('');
            digits.pop();
            const remainingDigit = digits.join('');
            typedInputField.value = remainingDigit;
        }
    }
    else{
        const newTypedNumber = prevTypedNumber + caracter;
        typedInputField.value = newTypedNumber;
    }
})


document.getElementById('verify-pin').addEventListener('click', function(){
    const displayPinfield = document.getElementById('display-pin');
    const currentPin = displayPinfield.value;

    const typedInputField = document.getElementById('typed-number');
    const typedNumber = typedInputField.value;

    const successPinElement = document.getElementById('pin-matched');
    const misMatchedPinElement = document.getElementById('mis-matched');
    if(typedNumber === currentPin){
        successPinElement.style.display = 'block';
        misMatchedPinElement.style.display = 'none';
    }
    else{
        misMatchedPinElement.style.display = 'block'
        successPinElement.style.display = 'none';
    }
})