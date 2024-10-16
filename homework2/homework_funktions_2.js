/*Задача 1*/
console.log('Задача 1: Вывести сумму чисел от 1 до N')

let letsum = (n, sum = 0) => {for(let i = 0; i <= n; i++){sum += i}{console.log('Сумма чисел от 1 до 5 будет равна ', sum)}}
letsum(5)

/*Задача 2*/
console.log('----------------------------------')
console.log('Задача 2: Вывести факториал числа N')

let letfact = (i1, fact = 1) => {for(; i1>=1; i1--){fact *= i1}{console.log('Факториал числа 5 будет равен ', fact)}};
letfact(5)

/*Задача 3*/
console.log('----------------------------------')
console.log('Задача 3: Вывести четные и нечетные числа от 1 до 100')

function even_odd_numbers(n){
    for(let i = 1; i <= 100; i++)
        if(i % 2 == 0){
            console.log('Четное число:', i);
        }
        else{console.log('Нечетное число:', i);}
}
even_odd_numbers(100)

/*Задача 4*/
console.log('----------------------------------')
console.log('Задача 4: Вывести проверку на простое число')

function isPrime_n(n, isPrime = true) {
    if (n === 1){
        isPrime = false}
    else {
        for (let i = 2; i < n; i++){
            if (n % i == 0){
                isPrime = false
                break}
        }
    }

    if (isPrime){console.log(n, '- простое число')}
    else {console.log(n, '- составное число')}
}
isPrime_n(5)

/*Задача 5*/
console.log('----------------------------------')
console.log('Задача 5: Вывести таблицу умножения для числа N')


let multiplication = (n1) => {for(let i = 1; i <= 10; i++){console.log(n1, 'умножить на ', i, ' равно ', n1*i)}}
multiplication(10)

/*Задача 6*/
console.log('----------------------------------')
console.log('Задача 6: Вывести сумму цифр числа N')

function sum(N, sum1 = 0) {
    let digits = N.toString();
    for (let i = 0; i < digits.length; i++) {
    sum1 += parseInt(digits[i]);}
    
    return "Сумма цифр числа " + N + " равна " + sum1
}
console.log(sum(555));

/*Задача 7*/
console.log('----------------------------------')
console.log('Задача 7:Обратное число')

function reversedNumb(numb, rev_Numb = 0) {
    while (numb > 0) {
        rev_Numb = rev_Numb * 10 + numb % 10
        numb -= numb % 10
        numb /= 10
    }
    return rev_Numb
}

console.log(reversedNumb(322))

/*Задача 8*/
console.log('----------------------------------')
console.log('Задача 8:Количество цифр в числе N')

let toStr1 = (num1) => {{str1 = String(num1)}{return 'Количество цифр в числе '+ num1 + ' равна ' + str1.length}}
console.log(toStr1(55555))
console.log('Еще вариант:')
let toStr2 = (numbb, count = 0) => {do {numbb /= 10; count ++} while (numbb >= 1){return count}}
console.log(toStr2(322))

/*Задача 9*/
console.log('----------------------------------')
console.log('Задача 9: Проверка палиндрома для числа N')

function pallindrome(num2) {
    let strnum = num2.toString();
    let result = strnum.split('').reverse().join('');
    return strnum === result;
}
console.log(pallindrome(232));


/*Задача 10*/
console.log('----------------------------------')
console.log('Задача 10: Сумма квадратов чисел от 1 до N')


let sqrt_numb = (numbbb, sqrt = 0) => {for(let count1 = 1; count1 <= numbbb; count1 ++){sqrt += count1**2}{return 'Сумма квадратов чисел от 1 до ' + numbbb + ' равна ' + sqrt}}
console.log(sqrt_numb(3))