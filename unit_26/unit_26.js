
// Task 1 ============================================
/* Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. Выведите в out-1 результат. Запускаться функция должна по нажатию b-1. */
const url = 'http://getpost.itgid.info/index2.php?';

const a1 = {
    auth: 'DdC33D7d2C2a7',
    action: 1,
    }

function t1() {
    const query = new URLSearchParams(a1).toString();
    fetch (`${url}${query}`)
    .then(data => data.text())
    .then(data => {
        document.querySelector('.out-1').innerHTML = data;
    });
}
document.querySelector('.b-1').onclick = t1;
// ваше событие здесь!!!

// Task 2 ============================================
/* Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. Добавьте параметр name с вашим именем на латинице. Если все сделано верно, сервер пришлет строку hello ваше имя. Выведите в out-2 результат. Запускаться функция должна по нажатию b-2. */
const a2 = {
    auth: 'DdC33D7d2C2a7',
    action: 2,
    name: 'Andrew',
    }

function t2() {
    const query = new URLSearchParams(a2).toString();
    fetch (`${url}${query}`)
    .then(data => data.text())
    .then(data => {
        document.querySelector('.out-2').innerHTML = data;
    });
}
document.querySelector('.b-2').onclick = t2;

// ваше событие здесь!!!


// Task 3 ============================================
/*  Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел.  Выведите в out-3 результат. Запускаться функция должна по нажатию b-3. */
const a3 = {
    auth: 'DdC33D7d2C2a7',
    action: 3,
    num1: 7,
    num2: 42,
    }

function t3() {
    const query = new URLSearchParams(a3).toString();
    fetch (`${url}${query}`)
    .then(data => data.text())
    .then(data => {
        document.querySelector('.out-3').innerHTML = data;
    });
}
document.querySelector('.b-3').onclick = t3;

// ваше событие здесь!!!


// Task 4 ============================================
/*  Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в заданном диапазоне. Не забывайте указывать параметр auth (ключ в чате).  Выведите в out-4 результат. Запускаться функция должна по нажатию b-4. */
const a4 = {
    auth: 'DdC33D7d2C2a7',
    action: 4,
    num1: 7,
    num2: 42,
    }

function t4() {
    const query = new URLSearchParams(a4).toString();
    fetch (`${url}${query}`)
    .then(data => data.text())
    .then(data => {
        document.querySelector('.out-4').innerHTML = data;
    });
}
document.querySelector('.b-4').onclick = t4;

// ваше событие здесь!!!

// Task 5 ============================================
/*  Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5. Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-5 результат. Запускаться функция должна по нажатию b-5. */
const a5 = {
    auth: 'DdC33D7d2C2a7',
    action: 5,
    }

function t5() {
    const query = new URLSearchParams(a5).toString();
    fetch (`${url}${query}`)
    .then(data => data.text())
    .then(data => {
        document.querySelector('.out-5').innerHTML = data;
    });
}
document.querySelector('.b-5').onclick = t5;

// ваше событие здесь!!!

// Task 6 ============================================
/*  Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-6 результат. Запускаться функция должна по нажатию b-6. */
const a6 = {
    auth: 'DdC33D7d2C2a7',
    action: 6,
    num1: 42,
    num2: 13,
    }

function t6() {
    const query = new URLSearchParams(a6).toString();
    fetch (`${url}${query}`)
    .then(data => data.text())
    .then(data => {
        document.querySelector('.out-6').innerHTML = data;
    });
}
document.querySelector('.b-6').onclick = t6;

// ваше событие здесь!!!


// Task 7 ============================================
/*  Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7. Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-7 результат. Запускаться функция должна по нажатию b-7. */
const a7 = {
    auth: 'DdC33D7d2C2a7',
    action: 7,
    }
const img = document.createElement('img');

function t7() {
    const query = new URLSearchParams(a7).toString();
    fetch (`${url}${query}`)
    .then(data => data.text())
    .then(data => {
        img.src = data;
        document.querySelector('.out-7').after(img);
    });
}
document.querySelector('.b-7').onclick = t7;

// ваше событие здесь!!!

// Task 8 ============================================
/* Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет ваш возраст. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-8 результат. Запускаться функция должна по нажатию b-8.*/
const a8 = {
    auth: 'DdC33D7d2C2a7',
    action: 8,
    year: 2000,
    }

function t8() {
    const query = new URLSearchParams(a8).toString();
    fetch (`${url}${query}`)
    .then(data => data.text())
    .then(data => {
        document.querySelector('.out-8').innerHTML = data;
    });
}
document.querySelector('.b-8').onclick = t8;

// ваше событие здесь!!!


// Task 9 ============================================
/* Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 9. В качестве параметра по очереди укажите m = 1, d=1, y=1. Если все сделано верно, сервер возвратит дату или месяц или год. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-9 результат. Запускаться функция должна по нажатию b-9. */
const a9 = {
    auth: 'DdC33D7d2C2a7',
    action: 9,
    m: 1,
    d: 1,
    y: 1,
    }

function t9() {
    const query = new URLSearchParams(a9).toString();
    fetch (`${url}${query}`)
    .then(data => data.text())
    .then(data => {
        document.querySelector('.out-9').innerHTML = data;
    });
}
document.querySelector('.b-9').onclick = t9;

// ваше событие здесь!!!


// Task 10 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. Если все сделано верно, сервер пришлет строку hello. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-10 результат. Запускаться функция должна по нажатию b-10.

*/
const a10 = {
    auth: 'DdC33D7d2C2a7',
    action: 1,
    }

function t10() {
    const query = new URLSearchParams(a10).toString();
    fetch (url, {
    method: 'POST',
    headers: {
        'Content-Type' : 'application/x-www-form-urlencoded',
    },
    body: query,
    })
    .then(response => response.text())
    .then(response => {
        document.querySelector('.out-10').innerHTML = response;
    })
}
document.querySelector('.b-10').onclick = t10;

// Task 11 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. Добавьте параметр name с вашим именем на латинице. Если все сделано верно, сервер пришлет строку hello ваше имя. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-11 результат. Запускаться функция должна по нажатию b-11. */
const a11 = {
    auth: 'DdC33D7d2C2a7',
    action: 2,
    name: 'Andrew',
    }

function t11() {
    const query = new URLSearchParams(a11).toString();
    fetch (url, {
    method: 'POST',
    headers: {
        'Content-Type' : 'application/x-www-form-urlencoded',
    },
    body: query,
    })
    .then(response => response.text())
    .then(response => {
        document.querySelector('.out-11').innerHTML = response;
    })
}
document.querySelector('.b-11').onclick = t11;

// ваше событие здесь!!!

// Task 12 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-12 результат. Запускаться функция должна по нажатию b-12.*/
const a12 = {
    auth: 'DdC33D7d2C2a7',
    action: 3,
    num1: 42,
    num2: 13,
    }

function t12() {
    const query = new URLSearchParams(a12).toString();
    fetch (url, {
    method: 'POST',
    headers: {
        'Content-Type' : 'application/x-www-form-urlencoded',
    },
    body: query,
    })
    .then(response => response.text())
    .then(response => {
        document.querySelector('.out-12').innerHTML = response;
    })
}
document.querySelector('.b-12').onclick = t12;

// ваше событие здесь!!!

// Task 13 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в заданном диапазоне. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-13 результат. Запускаться функция должна по нажатию b-13.*/
const a13 = {
    auth: 'DdC33D7d2C2a7',
    action: 4,
    num1: 42,
    num2: 13,
    }

function t13() {
    const query = new URLSearchParams(a13).toString();
    fetch (url, {
    method: 'POST',
    headers: {
        'Content-Type' : 'application/x-www-form-urlencoded',
    },
    body: query,
    })
    .then(response => response.text())
    .then(response => {
        document.querySelector('.out-13').innerHTML = response;
    })
}
document.querySelector('.b-13').onclick = t13;

// ваше событие здесь!!!

// Task 14 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5. Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-14 результат. Запускаться функция должна по нажатию b-14.*/
const a14 = {
    auth: 'DdC33D7d2C2a7',
    action: 5,
    }

function t14() {
    const query = new URLSearchParams(a14).toString();
    fetch (url, {
    method: 'POST',
    headers: {
        'Content-Type' : 'application/x-www-form-urlencoded',
    },
    body: query,
    })
    .then(response => response.text())
    .then(response => {
        document.querySelector('.out-14').innerHTML = response;
    })
}
document.querySelector('.b-14').onclick = t14;

// ваше событие здесь!!!

// Task 15============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-15 результат. Запускаться функция должна по нажатию b-15. */
const a15 = {
    auth: 'DdC33D7d2C2a7',
    action: 6,
    num1: 42,
    num2: 13,
    }

function t15() {
    const query = new URLSearchParams(a15).toString();
    fetch (url, {
    method: 'POST',
    headers: {
        'Content-Type' : 'application/x-www-form-urlencoded',
    },
    body: query,
    })
    .then(response => response.text())
    .then(response => {
        document.querySelector('.out-15').innerHTML = response;
    })
}
document.querySelector('.b-15').onclick = t15;

// ваше событие здесь!!!

// Task 16 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7. Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-16 результат. Запускаться функция должна по нажатию b-16. */
const a16 = {
    auth: 'DdC33D7d2C2a7',
    action: 7,
    }

function t16() {
    const query = new URLSearchParams(a16).toString();
    fetch (url, {
    method: 'POST',
    headers: {
        'Content-Type' : 'application/x-www-form-urlencoded',
    },
    body: query,
    })
    .then(response => response.text())
    .then(response => {
        img.src = response;
        document.querySelector('.out-16').after(img);
    })
}
document.querySelector('.b-16').onclick = t16;

// ваше событие здесь!!!

// Task 17 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет ваш возраст. Не забывайте указывать параметр auth (ключ в чате).Выведите в out-17 результат. Запускаться функция должна по нажатию b-17. */
const a17 = {
    auth: 'DdC33D7d2C2a7',
    action: 8,
    year: 2000,
    }

function t17() {
    const query = new URLSearchParams(a17).toString();
    fetch (url, {
    method: 'POST',
    headers: {
        'Content-Type' : 'application/x-www-form-urlencoded',
    },
    body: query,
    })
    .then(response => response.text())
    .then(response => {
        document.querySelector('.out-17').innerHTML = response;
    })
}
document.querySelector('.b-17').onclick = t17;

// ваше событие здесь!!!

// Task 18 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 9. В качестве параметра по очереди укажите m = 1, d=1, y=1. Если все сделано верно, сервер возвратит дату или месяц или год. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-18 результат. Запускаться функция должна по нажатию b-18. */
const a18 = {
    auth: 'DdC33D7d2C2a7',
    action: 9,
    m: 1,
    d: 1,
    y: 1,
    }

function t18() {
    const query = new URLSearchParams(a18).toString();
    fetch (url, {
    method: 'POST',
    headers: {
        'Content-Type' : 'application/x-www-form-urlencoded',
    },
    body: query,
    })
    .then(response => response.text())
    .then(response => {
        document.querySelector('.out-18').innerHTML = response;
    })
}
document.querySelector('.b-18').onclick = t18;

// ваше событие здесь!!!

