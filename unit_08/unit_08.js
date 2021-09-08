//  Task 1
// Кнопка b-1 запускает функцию t1. Функция должна выводить в .out-1 строку вида (... это просто для сокращения здесь. Вы выводите все числа от 1 до 50. Все. Три точки мы не выводим!!!!!):
//     1_2_3_4_5_6_7_8_9_ ... 49_50_
// от 1 до 50 включительно. Разделитель - нижнее подчеркивание. Задача решается с помощью цикла.


function t1() {
    let res = '';
    let num = 1;

    while (num <=50) {
        res += num + '_';
        num ++;
    }
    document.querySelector('.out-1').innerHTML = res;
}

document.querySelector('.b-1').onclick = t1;

//  Task 2
// Кнопка b-2 запускает функцию t2. Функция должна выводить в .out-2 строку вида (вы выводите все числа с шагом 2 без пропуска. Три точки не выводите! Пропуска чисел с 6 по 44 нет. ):
//     2_4_6_ ... 44_46_
// от 2 до 46 c шагом 2. Разделитель - нижнее подчеркивание. Задача решается с помощью цикла  while.

function t2() {
    let res = '';
    let num = 2;

    while (num <=46) {
        res += num + '_';
        num += 2;
    }
    document.querySelector('.out-2').innerHTML = res;
}

document.querySelector('.b-2').onclick = t2;


//  Task 3
// Кнопка .b-3 запускает функцию t3. Функция должна выводить в .out-3 строку вида:
// 25_24_23_22_21_20_19_18_17_16_15_14_13_12_11_10_9_8_7_
// от 25 до 7 c шагом 1. Разделитель - нижнее подчеркивание. Задача решается с помощью цикла  while.

function t3() {
    let res = '';
    let num = 25;

    while (num >=7) {
        res += num + '_';
        num --;
    }
    document.querySelector('.out-3').innerHTML = res;
}

document.querySelector('.b-3').onclick = t3;

//  Task 4
// Кнопка b-4 запускает функцию t4. Функция должна выводить в .out-4 строку вида:
// 77_74_71_68_65_62_59_56_53_50_47_44_41_38_35_
// от 77 до 35 c шагом 3. Разделитель - нижнее подчеркивание. Задача решается с помощью цикла  while.


function t4() {
    let res = '';
    let num = 77;

    while (num >=35) {
        res += num + '_';
        num-=3;
    }
    document.querySelector('.out-4').innerHTML = res;
}

document.querySelector('.b-4').onclick = t4;


//  Task 5
// Кнопка .b-5 запускает функцию t5. Функция должна выводить в .out-5 строку вида:
// 1_*2_**3_*4_**5_*6_**7_*8_**9_*10_**11_*12_**13_*14_**15_*16_**17_*
// от 1 до 17 c шагом 1. Разделитель - знак подчеркивания и одна звездочка если число нечетное, и две звездочки если четное. Задача решается с помощью цикла  while.

function t5() {
    let res = '';
    let num = 1;

    while (num <=17) {
        if (num % 2 == 1) {
            res += num + '_*';
        }
        else if (num %2 ==0) {
            res += num + '_**';
        }
        num++;
    }
    document.querySelector('.out-5').innerHTML = res;
}

document.querySelector('.b-5').onclick = t5;


//  Task 6
// Кнопка .b-6 запускает функцию t6. Функция должна выводить в .out-6 строку вида:
// ******
// ******
// ******
// Задача решается с помощью цикла. В каждой итерации цикл выводит 6 звездочек без пробелов и символ переноса строки br.
// Количество строк (итераций, повторений) цикла  while вводит пользователь в .i-6.

function t6() {
    let res = '';
    let num = 1;
    let rows = +document.querySelector('.i-6').value;

        while (num <= rows) {
            res += '******<br>';
            num ++;
        }
        document.querySelector('.out-6').innerHTML = res;
}

document.querySelector('.b-6').onclick = t6;


//  Task 7
// Есть input .i-7 куда пользователь может ввести число больше нуля (проверок не делаем, принимаем как факт).
// По нажатию кнопки .b-7 должна запускаться функция f7, которая выводит в .out-7 числа от введенного пользователем включительно до нуля включительно.
// Разделитель знак подчеркивания. Если пользователь ввел 4 и нажал кнопку, мы получим:
//     4_3_2_1_0_
// Задача решается с помощью цикла  while.

function t7() {
    let res = '';
    let input = +document.querySelector('.i-7').value;

    while ( input >= 0) {
        res += input +'_';
        input--;
    }
    document.querySelector('.out-7').innerHTML = res;
}

document.querySelector('.b-7').onclick = t7;


//  Task 8
// Есть input .i-81 и .i-82 куда пользователь может ввести числа больше нуля (проверок не делаем, принимаем как факт).
// Считаем, что второе число всегда больше первого.
// По нажатию кнопки .b-8  должна запускаться функция f8, которая выводит в .out-8 числа от первого введенного включительно до второго включительно, с шагом 1.
// Разделитель знак подчеркивания. Если пользователь ввел 4 и 8  и нажал кнопку, мы получим:
//     4_5_6_7_8_
// Задача решается с помощью цикла  while.

function t8() {
    let input1 = +document.querySelector('.i-81').value;
    let input2 = +document.querySelector('.i-82').value;
    let res = '';

    while (input2 >= input1) {
        res += input1 + '_';
        input1++;
    }
    document.querySelector('.out-8').innerHTML = res;
}

document.querySelector('.b-8').onclick = t8;


//  Task 9
// Есть input .i-91 и .i-92 куда пользователь может ввести числа.
// По нажатию кнопки .b-9 должна запускаться функция f9, которая выводит в .out-9 числа от меньшего введенного до большего включительно, с шагом 1.
// Разделитель знак подчеркивания. Если пользователь ввел 4 и 8  и нажал кнопку, мы получим:
//     4_5_6_7_8_
// если ввел 8 и 6, то получим
// 6_7_8_
// Задача решается с помощью цикла. Подсказка - вначале делаем проверку и при необходимости поменять местами значения в переменных местами, а потом запускаем цикл  while.

function t9() {
    let res = '';
    let input1 = +document.querySelector('.i-91').value;
    let input2 = +document.querySelector('.i-92').value;
    let min;
    let max;

    if (input1 > input2) {
        max = input1;
        min = input2;
    }
    else if (input1 <= input2) {
        max = input2;
        min = input1;
    }

    while (min <= max) {
        res += min +'_';
        min++;
    }
    document.querySelector('.out-9').innerHTML = res;
}

document.querySelector('.b-9').onclick = t9;


//  Task 10
// Кнопка .b-10 запускает функцию t10. Функция должна выводить в .out-10 четные годы от 1950 до 1966 включительно.
// Разделитель знак подчеркивания. Задача решается через цикл, а четность - через шаг (равный 2).

function t10() {
    let res = '';
    let start = 1950;
    let stop = 1966;

    while (start <= stop) {
        res += start +'_';
        start +=2;
    }
    document.querySelector('.out-10').innerHTML = res;
}

document.querySelector('.b-10').onclick = t10;

//  Task 11
// Кнопка b-11 запускает функцию t11.  Функция должна:
//     получить все div.div-11
// перебрать их с помощью цикла  while. Обращение к div выглядит так ваша_переменная[i]
// вывести в .out-11 содержимое каждого блока. Разделитель - знак подчеркивания.
//     В результате должно получиться так:
//     one_3_4_two_


function t11() {
    let res = '';
    let input = document.querySelectorAll('div.div-11');
    let i = 0;


    while (i < input.length) {
        res += input[i].innerHTML + '_';
        i++
    }
    document.querySelector('.out-11').innerHTML = res;
}

document.querySelector('.b-11').onclick = t11;

//  Task 12
// Кнопка .b-12 запускает функцию t12.  Функция должна:
//     получить все div.div-12
// перебрать их с помощью цикла  while. Обращение к div выглядит так elem[i]
// применить к каждому elem[i].style.background = 'orange'


function t12() {
    let res = '';
    let elem = document.querySelectorAll('div.div-12');
    let i = 0;

    while (i < elem.length) {
        res = elem[i].style.background = 'orange';
        i++;
    }
}

document.querySelector('.b-12').onclick = t12;

//  Task 13
// Кнопка .b-13 запускает функцию t13.  Функция должна:
//     получить все input.i-13
// перебрать их с помощью цикла  while. Обращение к элементу выглядит так elem[i]
// применить к каждому elem[i].value, причем к value первого должно равняться 1, второго - 2, третьего - 3...

function t13() {
    let res = '';
    let input = document.querySelectorAll('input.i-13');
    let i = 0;

    while (i < input.length) {
        input[i].value = i +1;
        i++;
    }
}

document.querySelector('.b-13').onclick = t13;

//  Task 14
// Кнопка .b-14 запускает функцию t14  Функция должна:
//     получить все input.i-14
// перебрать их с помощью цикла  while. Обращение к элементу выглядит так elem[i]
// вывести в .out-14 value выбранного. Проверить выбран ли элемент можно с помощью elem[i].checked.


function t14() {
    let radio = document.querySelectorAll('input.i-14');
    let i = 0;

    while (i < radio.length) {
        if (radio[i].checked) {
            document.querySelector('.out-14').innerHTML = radio[i].value;
        }
        i++;
    }
}

document.querySelector('.b-14').onclick = t14;

//  Task 15
// Кнопка .b-15 запускает функцию t15  Функция должна выводить следующую последовательность в .out-15:
// 77_88_99_77_88_99_77_88_99_
// Для вывода использовать цикл  while. Разделитель подчеркивание.

function t15() {
    let res = '';
    let out = '';
    let i = 0;
    let start = 77;

    while (i < 3) {
        while (start <= 99) {
            res += start + '_';
            start += 11;
        }
        out += res;
        i++;
    }
    document.querySelector('.out-15').innerHTML = out;
}

document.querySelector('.b-15').onclick = t15;
