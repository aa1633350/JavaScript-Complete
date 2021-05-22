function getOutput(){
    return document.getElementById('output-value').innerText;
}
// alert(getOutput());

function printOutput(num){
    // console.log(typeof(num[num.length-1]));
    if(num=="" || num[num.length-1] == '+' || num[num.length-1] == '-' || num[num.length-1] == 'x'){
        document.getElementById('output-value').innerText = num;
    }
    else{
        document.getElementById('output-value').innerText = getFormattedNumber(num);
    }
}

function getFormattedNumber(num){
    var n = Number(num);
    var value = n.toLocaleString("en");
    // console.log(value)
    return value;
}

// printOutput("9876547");

function reverseNumberFormat(num){
    return Number(num.replace(/,/g,''));
}
// alert(reverseNumberFormat(getOutput()));

var operator = document.getElementsByClassName('operator');
for(var i=0;i<operator.length;i++){
    operator[i].addEventListener('click',function(){
        if(this.innerText=='CE'){
            printOutput("");
        }
        else if(this.innerText=='='){


        }
        else{
            // console.log(getOutput());
            var output = getOutput() + this.innerText;
            // console.log(output);
            printOutput(output);
        }
        // alert("the operator clicked is: "+ this.id);
    })
}

var number = document.getElementsByClassName('number');
for(var i=0;i<number.length;i++){

    number[i].addEventListener('click',function(){
        // alert("the number clicked is: "+ this.id);
        // console.log(getOutput());
        var output = reverseNumberFormat(getOutput());
        // console.log(output);
        if(output!=NaN){
            output = output + this.innerText;
            printOutput(output);
            // console.log(output);
        }
    });
}