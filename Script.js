// Get references to the input fields and submit button
const appleInput = document.getElementById('apple');
const orangeInput = document.getElementById('orange');
const submitButton = document.querySelector('button');


function handleSubmit() {
    
    const numApples = parseInt(appleInput.value);
    const numOranges = parseInt(orangeInput.value);

    
    if (isNaN(numApples) || isNaN(numOranges)) {
        document.getElementById("result").innerHTML='Please enter valid numbers for apples and oranges.';
        return;
    }

    
    const totalJuice = numApples + numOranges;

    

    
    document.getElementById("result").innerHTML=`total units ${totalJuice}`;
     
}


submitButton.addEventListener('click', handleSubmit);
