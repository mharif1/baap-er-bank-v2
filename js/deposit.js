function getInputValueById(inputFirldId){
    const inputField = document.getElementById(inputFirldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue; 
}

function getTextElementValueById(elementId){
    const elementFiled = document.getElementById(elementId);
    const elementFiledValueString = elementFiled.innerText;
    const elementFiledValue = parseFloat(elementFiledValueString);
    return elementFiledValue;
}

function setTextElementValueById(elementId, newValue){
    const textValue = document.getElementById(elementId);
    textValue.innerText =newValue;
}

document.getElementById('btn-deposit').addEventListener('click', function(){
    const newDepositAmount = getInputValueById('deposit-field');
    const previousDepositTotal =getTextElementValueById('deposit-total')
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    setTextElementValueById('deposit-total', newDepositTotal)
    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElementValueById('balance-total', newBalanceTotal);
})