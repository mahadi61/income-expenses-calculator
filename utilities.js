function getElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementString = element.value;
    const elementValue = parseFloat(elementString);
    return elementValue;
}

function setValueTextElement(elementId, value){
    const element = document.getElementById(elementId);
    // want to add as a number
   element.innerText = value;
}