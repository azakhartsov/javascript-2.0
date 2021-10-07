// Task 1
// Создайте класс Goods. Класс должен содержать свойства name, amount. Создайте на его основе объект goods. Выведите в консоль созданный объект. Помните, все классы - в отдельных файлах. Имена классов с большой буквы.
let t1 = new Goods(
  "Oranges",
  5,
  "https://img.icons8.com/color/48/000000/orange.png",
  29
);
t1.showGoods();
let goods2 = t1.draw();
document.querySelector(".out-4").append(goods2);

//Task 2.
//  Добавьте в класс Goods свойства image и count - картинка и количество на складе.

//Task 3.
//  Добавьте в класс Goods метод draw, который будет выводить div с изображением, названием товара, ценой - в указанный элемент (дозапись).

// Task 4.
// Создайте на основе класса Goods объект goods2, заполните свойства, примените метод draw для вывода товара на страницу в блок out-4.

//Task 5.
// Создайте класс Goods2, который наследуется от Goods. Добавьте ему свойство sale равное true или false. Перезапишите метод draw так, чтобы он выводил информацию о распродажах.

// Task 6.
// Создайте на основе класса Goods2 объект goods3. Заполните все поля. Выведите товар на страницу с помощью метода draw. Вывод осуществить в out-6.
let t6 = new Goods2(
  "Oranges",
  5,
  "https://img.icons8.com/color/48/000000/orange.png",
  29,
  true
);
let goods3 = t6.draw();
document.querySelector(".out-6").append(goods3);
// Task 7.
// Создайте класс Valid, который содержит свойства email, password, isValid. И метод validate. Метод validate должен проверять длину пароля и писать false в isValid если длина меньше 6 и true если больше. Изначально свойство isValid равно false.

//Task 8.
// Создайте объект на основе класса Valid и задайте ему имя и пароль длиной 5 символов. Запустите метод validate() и выведите в консоль свойство isValid.
let t8 = new Valid("email@domain.com", "pass1");
let validator = t8.validate();
console.log(validator);
//Task 9.
// Создайте объект на основе класса Valid и задайте ему имя и пароль длиной 7 символов. Запустите метод validate() и выведите в консоль свойство isValid.
let t9 = new Valid("email@domain.com", "1234567");
let t9validator = t9.validate();
console.log(t9validator);
//Task 10.
// Унаследуйтесь от класса Valid и создайте класс Valid2. Расширьте его свойствами emaiError, passwordError. По умолчанию, они равны пустой строке. Перезапишите метод validate(), помимо проверки пароля, он должен содержать еще проверку свойства email на пустоту. Если поле email пустое - то isValid - false. Также, в случае ошибки валидации в поле emailError пишется сообщение ‘email empty’, в поле passwordError - ‘min length 6’.

//Task 11.
// Создайте на основе класса Valid2 объект valid2 и задайте пустой емейл и длину пароля больше 7. Запустите метод validate(). Выведите объект в консоль.
let t10 = new Valid2("", "12345678");
let valid2 = t10.validate();
console.log(valid2);
//Task 12.
// Создайте на основе класса Valid2 объект valid3 и задайте не пустой емейл и длину пароля больше 7. Запустите метод validate(). Выведите объект в консоль.
let t11 = new Valid2("email@email.com", "12345678");
let valid3 = t11.validate();
console.log(valid3);
