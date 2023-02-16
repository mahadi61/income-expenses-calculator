// calculate total balance
document.getElementById('calculate-balance').addEventListener('click', function(){
    const rent = getElementValueById('rent-input');
    const cloth = getElementValueById('cloth-amount');
    const food = getElementValueById('food-amount');

    // total expenses

    const totalExpenses = rent + cloth + food;
    setValueTextElement('total-expenses', totalExpenses);

    const income = getElementValueById('income-input');
    const balance = income - totalExpenses;
    setValueTextElement('total-balance', balance);
})

// calculate saving and remaining
document.getElementById('save-amount').addEventListener('click', function(){
    const savePercent = getElementValueById('save-percent');
    const income = getElementValueById('income-input');
    const savingAmount = income * (savePercent / 100);
    
    setValueTextElement('saving-amount', savingAmount);

    const balance = getElementValueById('total-balance');
    const remainingBalance = balance - savingAmount;
    console.log(remainingBalance);

}) 