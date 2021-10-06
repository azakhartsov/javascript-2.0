
// Task 1 ============================================
/* 
 <p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. </p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. </p>
<p>Два запроса объедините с помощью promiseAll. Результат выведите в out-1 результат. Запускаться функция
    должна по нажатию b-1.</p>
*/
const url = 'http://getpost.itgid.info/index2.php?';
const key = 'DdC33D7d2C2a7';

const a1 = {
    auth: key,
    action: 1,
    }
const a2 = {
    auth: key,
    action: 2,
    name: 'Andrew',
}

function t1() {
    const query1 = new URLSearchParams(a1).toString();
    const query2 = new URLSearchParams(a2).toString();
    let out = '';

    let t11 = new Promise((resolve, reject) => {
        fetch(`${url}${query1}`)
        .then(data => {
            resolve(data.text());
        })
    })

    let t12 = new Promise((resolve, reject) => {
        fetch(`${url}${query2}`)
        .then(data => {
            resolve(data.text());
        })
    })

    Promise.all([t11, t12]).then(value => {
        for (let i in value){
            out += value[i] + ' ';
        }
        document.querySelector('.out-1').innerHTML = out;
        })
}
document.querySelector('.b-1').onclick = t1;
// ваше событие здесь!!!

// Task 2 ============================================
/* 
 <p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте
параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел.</p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4.
Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в
заданном
диапазоне.</p>
<p>Два запроса объедините с помощью promiseAll.
Выведите в out-2 результат. Запускаться функция должна по нажатию b-2. </p>

*/
const a3 = {
    auth: key,
    action: 3,
    num1: 7,
    num2: 42,
    }
const a4 = {
    auth: key,
    action: 4,
    num1: 42,
    num2: 13,
    }

function t2() {
    const query1 = new URLSearchParams(a3).toString();
    const query2 = new URLSearchParams(a4).toString();
    let out = '';

    let t21 = new Promise((resolve, reject) => {
        fetch(`${url}${query1}`)
        .then(data => {
            resolve(data.text());
        })
    })

    let t22 = new Promise((resolve, reject) => {
        fetch(`${url}${query2}`)
        .then(data => {
            resolve(data.text());
        })
    })

    Promise.all([t21, t22]).then(value => {
        for (let i in value){
            out += value[i] + ' ';
        }
        document.querySelector('.out-2').innerHTML = out;
    })
}
document.querySelector('.b-2').onclick = t2;

// ваше событие здесь!!!


// Task 3 ============================================
/*  
<p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5.
Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в
чате). </p>
<p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6.
Добавьте
параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число.</p>
<p>Два
запроса объедините с помощью promiseAll.
Выведите в out-3 результат. Запускаться функция должна по нажатию b-3. </p>
                 */
const a5 = {
    auth: key,
    action: 5,
    }
const a6 = {
    auth: key,
    action: 6,
    num1: 42,
    num2: 13,
    }

function t3() {
    const query1 = new URLSearchParams(a5).toString();
    const query2 = new URLSearchParams(a6).toString();
    let out = '';

    let t31 = new Promise((resolve, reject) => {
        fetch(`${url}${query1}`)
        .then(data => {
            resolve(data.text());
        })
    })

    let t32 = new Promise((resolve, reject) => {
        fetch(`${url}${query2}`)
        .then(data => {
            resolve(data.text());
        })
    })

    Promise.all([t31, t32]).then(value => {
        for (let i in value){
            out += value[i] + ' ';
        }
        document.querySelector('.out-3').innerHTML = out;
    })
}

document.querySelector('.b-3').onclick = t3;

// ваше событие здесь!!!


// Task 4 ============================================
/*  
 <p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7.
Если все
сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в
чате). </p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В
качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет
ваш возраст.</p>
<p>Выведите в out-4 результат. Запускаться функция должна по нажатию b-4.</p>

*/
const a7 = {
    auth: key,
    action: 7,
    }
const a8 = {
    auth: key,
    action: 8,
    year: 2000,
    }

function t4() {
    const query1 = new URLSearchParams(a7).toString();
    const query2 = new URLSearchParams(a8).toString();
    let out = '';
    const img = document.createElement('img');

    let t41 = new Promise((resolve, reject) => {
        fetch(`${url}${query1}`)
        .then(data => {
            resolve(data.text());
        })
    })

    let t42 = new Promise((resolve, reject) => {
        fetch(`${url}${query2}`)
        .then(data => {
            resolve(data.text());
        })
    })

    Promise.all([t41, t42]).then(value => {
        img.src = value[0];
        document.querySelector('.out-4').after(img);
        document.querySelector('.out-4').innerHTML = value[1];
    })
}
document.querySelector('.b-4').onclick = t4;


// ваше событие здесь!!!

// Task 5 ============================================
/*  
 <p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1.</p>
<p>Отправьте
POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. </p>
<p>Два
запроса объедините с помощью promiseAll. Результат выведите в out-5 результат. Запускаться функция
должна по нажатию b-5.</p>
*/

function t5() {
    const query1 = new URLSearchParams(a1).toString();
    const query2 = new URLSearchParams(a2).toString();
    let out = '';

    let t51 = new Promise((resolve, reject) => {
        fetch (url, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/x-www-form-urlencoded',
        },
        body: query1,
        })
        .then(data => {
            resolve(data.text());
         })
    })

    let t52 = new Promise((resolve, reject) => {
        fetch (url, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded',
            },
            body: query2,
            })
        .then(data => {
            resolve(data.text());
        })
    })

    Promise.all([t51, t52]).then(value => {
        for (let i in value){
            out += value[i] + ' ';
        }
        document.querySelector('.out-5').innerHTML = out;
    })
}
document.querySelector('.b-5').onclick = t5;

// ваше событие здесь!!!

// Task 6 ============================================
/* 
 <p> Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3.
    Добавьте
    параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел. </p>
<p>Отправьте POST
    запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4.
    Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в
    заданном
    диапазоне.</p>
<p> Два запроса объедините с помощью promiseAll.
    Выведите в
    out-6 результат. Запускаться функция должна по нажатию b-6. </p>
*/

function t6() {
    const query1 = new URLSearchParams(a3).toString();
    const query2 = new URLSearchParams(a4).toString();
    let out = '';

    let t61 = new Promise((resolve, reject) => {
        fetch (url, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/x-www-form-urlencoded',
        },
        body: query1,
        })
        .then(data => {
            resolve(data.text());
         })
    })

    let t62 = new Promise((resolve, reject) => {
        fetch (url, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded',
            },
            body: query2,
            })
        .then(data => {
            resolve(data.text());
        })
    })

    Promise.all([t61, t62]).then(value => {
        for (let i in value){
            out += value[i] + ' ';
        }
        document.querySelector('.out-6').innerHTML = out;
    })
}
document.querySelector('.b-6').onclick = t6;

// ваше событие здесь!!!


// Task 7 ============================================
/*  
 <p> Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5.
Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в
чате).</p>
<p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6.
Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число.</p>
<p>Два запроса объедините с помощью promiseAll.
Выведите в out-7 результат. Запускаться функция должна по нажатию b-7. </p>

*/

function t7() {
    const query1 = new URLSearchParams(a5).toString();
    const query2 = new URLSearchParams(a6).toString();
    let out = '';

    let t71 = new Promise((resolve, reject) => {
        fetch (url, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/x-www-form-urlencoded',
        },
        body: query1,
        })
        .then(data => {
            resolve(data.text());
         })
    })

    let t72 = new Promise((resolve, reject) => {
        fetch (url, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded',
            },
            body: query2,
            })
        .then(data => {
            resolve(data.text());
        })
    })

    Promise.all([t71, t72]).then(value => {
        for (let i in value){
            out += value[i] + ' ';
        }
        document.querySelector('.out-7').innerHTML = out;
    })
}
document.querySelector('.b-7').onclick = t7;

// ваше событие здесь!!!

// Task 8 ============================================
/* 
<p> Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7.
Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth
(ключ в
чате).</p>
<p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В
качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет
ваш возраст.</p>
<p>Два запроса объедините с помощью promiseAll. Выведите в out-8 результат. Запускаться функция должна по
нажатию b-8.</p>
*/

function t8() {
    const query1 = new URLSearchParams(a7).toString();
    const query2 = new URLSearchParams(a8).toString();
    let out = '';
    const img = document.createElement('img');


    let t81 = new Promise((resolve, reject) => {
        fetch (url, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/x-www-form-urlencoded',
        },
        body: query1,
        })
        .then(data => {
            resolve(data.text());
         })
    })

    let t82 = new Promise((resolve, reject) => {
        fetch (url, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded',
            },
            body: query2,
            })
        .then(data => {
            resolve(data.text());
        })
    })

    Promise.all([t81, t82]).then(value => {
        img.src = value[0];
        document.querySelector('.out-8').after(img);
        document.querySelector('.out-8').innerHTML = value[1];
    })
}
document.querySelector('.b-8').onclick = t8;

// ваше событие здесь!!!