function getAmountInput(inputId) {
    const inputText = document.getElementById(inputId);
    const inputValue = inputText.value;
    const inputAmount = parseFloat(inputValue);
    inputText.value = '';
    return inputAmount;
}

function getTotalAmount(amountId, inputAmount) {
    const previousText = document.getElementById(amountId);
    const previousValue = previousText.innerText;
    const previousAmount = parseFloat(previousValue)
    previousText.innerText = previousAmount + inputAmount;   
}

function currentBalance() {
    const balance = document.getElementById('balance');
    const balanceValue = balance.innerText;
    const balanceAmount = parseFloat(balanceValue);
    return balanceAmount;
}

function getTotalBalance(inputAmount, isAdd) {
    const balance = document.getElementById('balance');
    const balanceAmount = currentBalance();
    if(isAdd == true){
        balance.innerText = balanceAmount + inputAmount;
    }
    else{
        balance.innerText = balanceAmount - inputAmount;
    }
}

document.getElementById('deposit-btn').addEventListener('click', function () {
    const inputAmount = getAmountInput('deposit-input');
    if(inputAmount > 0){
        getTotalAmount('deposit', inputAmount);
        getTotalBalance(inputAmount, true); 
    }
    else{
        prompt('We just accept number more than 0 ! Got it?');
    }     
})
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const inputAmount = getAmountInput('withdraw-input');
    const balanceAmount = currentBalance();
    if(inputAmount > 0 && inputAmount <= balanceAmount){
        getTotalAmount('withdraw', inputAmount);
        getTotalBalance(inputAmount, false);  
    } 
    else{
        prompt('We just accept number more than 0 but not more than your current balance ! Got it?');
    }  
})
