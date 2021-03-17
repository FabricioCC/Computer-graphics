let arrayNum = [];


for(i = 0; i<10; i++){
    let num = Math.floor(Math.random()*100)
    arrayNum.push(num)
}

let resposta = document.querySelector('.resposta')
resposta.innerHTML = arrayNum

console.log(arrayNum)