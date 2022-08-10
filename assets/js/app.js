





let n = 1000;

for (let i = 2; i <= n; i++) {
    let flag = 1;
    if (i > 2 && i % 2 != 0)
    {
        for (let j = 3; j*j <= i ; j=j+2)
        {
            if (i%j==0)
            {
                flag=0;
                break;
            }
        }
    }
    else if (i != 2) flag = 0;
    if (flag==1) {
        console.log(i);
    }
}













// let number = +prompt("Введите простое число");

// var isPrime = new Boolean (true);

// let i;

// for (i=2; i<=(Math.sqrt(Math.abs(number))); i++){
//     if (number % i === 0){
//     isPrime = false;
//     break;
//     }
// }
// if(isPrime){
//     alert(`Число ${number} простое`);
// }
    
// else{
//     alert(`Число ${number} не простое`);
// }
    

