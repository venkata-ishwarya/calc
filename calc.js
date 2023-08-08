let operator="";
let firstNumber="";
let secondNumber="";
function append(number){
       if(operator==""){
        firstNumber+=number;
        document.getElementById('result').value=firstNumber;

    }
    else{
        secondNumber+=number;
        document.getElementById('result').value=secondNumber;
  
    }
}
function operation(op){
     
            operator=op;
        document.getElementById('result').value=operator;
        
        

}
function calculate(){
    let result;
    switch(operator){
        case '+':
            result=parseInt(firstNumber)+parseInt(secondNumber);
            break;
            case '-':
            result=parseInt(firstNumber)-parseInt(secondNumber);
            break;
            case '*':
            result=parseInt(firstNumber)*parseInt(secondNumber);
            break;
            case '/':
            result=parseInt(firstNumber)/parseInt(secondNumber);
            break;
    }
    document.getElementById('result').value=result;
}
function clearresult(){
    operator="";
    firstNumber="";
    secondNumber="";
    document.getElementById('result').value="";
}