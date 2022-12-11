

function getValue(){
    let enteredValue = document.getElementById('dob').value;//02/12/2001
    let slicedValue = enteredValue.slice(6)//2001
    let typeCastedNum = Number(slicedValue);//2001
    let currentDate =  Date();
    currentDate = (Number(currentDate.slice(11,15)));

    age = 0;
    while (typeCastedNum <= currentDate){
        typeCastedNum++;
        age++;
}

x = 'Your age is :'+' '+age;
document.getElementById('age').innerHTML = x;
}





