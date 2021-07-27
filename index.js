const input1 = document.getElementById('num1');
const input1 = document.getElementById('num1');
const button = document.getElementById('button');

function sum(a, b) {
    return a + b;
}

button.addEventListener("click", function(){
    console.log(sum(input1.nodeValue, input2.value));
});