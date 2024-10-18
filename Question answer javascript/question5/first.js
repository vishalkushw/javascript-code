
function maxNum(){
    let num1=Number(prompt("enter number 1"));
    let num2=Number(prompt("enter number 2"));
    let num3=Number(prompt("enter number 3"));
    
    if(num1>num2 && num1>num3){
        alert(`${num1} is greater than ${num2} and ${num3}`)
    }
    else if(num2>num1 && num2>num3){
        alert(`${num2} is greater than ${num1} and ${num3}`)
    }
    else if(num3>num1 && num3>num1){
        alert(`${num3} is greater than ${num1} and ${num2}`)

    }
   
}