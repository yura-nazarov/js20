// Task 1
// Напишите функцию t1, которая возвращает сумму переданных ей аргументов a и b.

function t1(a, b) {
   return a + b;
}

document.querySelector('.b-1').addEventListener('click', function () {
   document.querySelector('.out-1').textContent = t1(120, 140);
})


// Task 2.

//Напишите функцию t2, которая принимает 2 аргумента и возвращает больший из них. 

function t2(a, b) {
   return (a > b) ? a : b;
   // or
   // if (a > b) {
   //    return a;
   // }
   // return b;
}

document.querySelector('.b-2').addEventListener('click', function () {
   document.querySelector('.out-2').textContent = t2(120, 140);
})



// Task 3.
// На странице есть checkbox .ch-3. Напишите функцию, которая возвращает его value если он выбран и false если не выбран. 

function t3() {
   // const ch3 = document.querySelector('.ch-3').checked;
   // return ch3;
   // or
   return document.querySelector('.ch-3').checked;
}

document.querySelector('.b-3').addEventListener('click', function () {
   document.querySelector('.out-3').textContent = t3();
})

// Task 4
// На странице есть radiobutton .r-4. Напишите функцию, которая возвращет value выбранного radiobutton. 

function t4() {
   const r4 = document.querySelectorAll('.r-4');
   let check;
   r4.forEach(elem => {
      if (elem.checked) check = elem.value;
   })
   return check;
}

document.querySelector('.b-4').addEventListener('click', function () {
   document.querySelector('.out-4').innerHTML = t4();
})


// Task 5
// Напишите функцию t5, которая получает из s51 число, из s52 знак и из s53 число и возвращает результат математической операции над этими числами с этим знаком. Т.е. возвращает или сумму чисел, или произведение, или разность или деление.

function t5() {
   const num1 = document.querySelector('.s51').value;
   const num2 = document.querySelector('.s53').value;
   const operator = document.querySelector('.s52').value;

   let res = 0;

   switch (operator) {
      case '-': res = num1 - num2; break;
      case '+': res = num1 + num2; break;
      case '/': res = num1 / num2; break;
      case '*': res = num1 * num2; break;
   }

   return res;
}

document.querySelector('.b-5').addEventListener('click', function () {
   document.querySelector('.out-5').textContent = t5();
})



// Task 6
// Напишите функцию, которая принимает три аргумента: num1, num2 - числа и sign - строку знак операции. sign может быть равен '+', '-', '/', '*'. В зависимости от знака функция должна возвращать результат выбранной операции над числами. Например передали числа 10 и 5 и знак '/'. Функция должна возвратить 2.

function t6(num1, num2, sign) {
   // return eval(num1 + sign + num2);
   // or
   let res = 0;

   switch (sign) {
      case '-': res = num1 - num2; break;
      case '+': res = num1 + num2; break;
      case '/': res = num1 / num2; break;
      case '*': res = num1 * num2; break;
   }

   return res;
}

document.querySelector('.b-6').addEventListener('click', function () {
   document.querySelector('.out-6').textContent = t6(100, 2, '*');
})

// Task 7
// Напишите функцию, которая принимает аргумент и возвращает true если аргумент число и false во всех остальных случаях

function t7(arg) {
   // return !(isNaN(arg));
   //or 
   return (typeof +arg !== 'number') ? false : true;
}

document.querySelector('.b-7').addEventListener('click', function () {
   document.querySelector('.out-7').textContent = t7('12');
})



// Task 8
// Напишите функцию, которая принимает число дробь (например 23.34) и параметр 'floor' или 'ceil' и возвращает число с соответствующим округлением ( либо floor либо ceil).


function t8(num, method) {
   // return eval(`Math.${method}(${num})`);
   // or
   if (method === 'floor') return Math.floor(num);
   return Math.ceil(num);
}

document.querySelector('.b-8').addEventListener('click', function () {
   document.querySelector('.out-8').textContent = 10 + t8(102.11, 'floor');
})




// Task 9
// Напишите функцию, которая принимает число и степень в которую нужно возвести число. Возвращает true если число возведенное в степень четное и false если не четное.

function t9(n, p) {
   return ((n ** p) % 2) ? true : false;
   // or
   // return (Math.pow(n, p) % 2) ? true : false;
}

document.querySelector('.b-9').addEventListener('click', function () {
   document.querySelector('.out-9').textContent = t9(2, 3);
})




// Task 10
// Напишите функцию, t10, которая возвращает количество переданных ей аргументов (число).


function t10(...arg) {
   return arg.length;
}

document.querySelector('.b-10').addEventListener('click', function () {
   document.querySelector('.out-10').textContent = t10(33, 22, 44, 11, 55, 66, 11, 66);
})


// Task 11
// Напишите функцию, t11, которая возвращает cумму переданных ей аргументов (число). Используем arguments.

function t11() {
   let sum = 0;
   // Array.from(arguments).forEach(elem => {
   //    sum += elem;
   // });
   // return sum;
   // or
   return Array.from(arguments).reduce((prev, curr) => prev + curr);
}

document.querySelector('.b-11').addEventListener('click', function () {
   document.querySelector('.out-11').textContent = t11(33, 22, 44, 11, 55, 66, 11, 66);
})

// Task 12
// Напишите функцию, t12, которая возвращает cумму переданных ей аргументов (число). Используем rest.

function t12(...rest) {
   let sum = 0;
   // rest.forEach(elem => {
   //    sum += elem;
   // })
   // or
   // sum = rest.reduce((prev, curr) => {
   //    return prev + curr;
   // })
   // return sum;
   // or
   return rest.reduce((prev, curr) => prev + curr);
}

document.querySelector('.b-12').addEventListener('click', function () {
   document.querySelector('.out-12').textContent = t12(33, 22, 44, 11, 55, 66, 11, 66);
})


// Task 13
// Напишите функцию, t13, которая возвращает случайное целое число в заданном диапазоне min, max.

function t13(min = 0, max = 255) {
   return Math.floor(Math.random() * (max - min + 1) + min);
}

document.querySelector('.b-13').addEventListener('click', function () {
   document.querySelector('.out-13').textContent = t13(0, 255);
})


// Task 14
// Напишите функцию, которая возвращает строку в виде rgb(xxx,yyy,zzz) где xxx, yyy, zzz случайные целые числа в диапазонах от 0 до 255. В строке не должно быть пробелов. Для генерации случайных чисел используйте функцию t13.

function t14() {
   return `rgb(${t13()},${t13()},${t13()})`;
}

document.querySelector('.b-14').addEventListener('click', function () {
   document.querySelector('.out-14').style.background = t14();
})


// Task 15
// Напишите функцию, которая получает строку как аргумент и возвращает строку очищенную от пробелов ( с начала и конца) или false если строка содержит только пробелы. 


function t15(str) {
   return (str.trim()) ? str.trim() : false;
}

document.querySelector('.b-15').addEventListener('click', function () {
   console.log(t15('            hi             '));
})

// Task 16
// Напишите функцию, которая получает строку как аргумент и возвращает строку приведенную к нижнему регистру. 

function t16(str) {
   return str.trim().toLowerCase();

}

document.querySelector('.b-16').addEventListener('click', function () {
   document.querySelector('.out-16').textContent = t16('HelLO wORLd');
})

// Task 17
// Напишите функцию, которая получает value выбранного option select.s-171 и возвращает его.

function t17() {
   return document.querySelector('.s-171').value;
}

document.querySelector('.s-171').addEventListener('change', function () {
   document.querySelector('.s-172').value = t17();
})

// Task 18
// Напишите функцию, которая получает value из input.i-18 и возвращает его. 

function t18() {
   return document.querySelector('.i-18').value;
}

document.querySelector('.i-18').addEventListener('input', function () {
   document.querySelector('.out-18').textContent = t18();
})

// Task 19
// Напишите функцию, которая получает value из input.i-19 и возвращает его. 

function t19() {
   return document.querySelector('.i-19').value;
}

document.querySelector('.i-19').addEventListener('input', function () {
   document.querySelector('.out-19').style.borderRadius = t19() + 'px';
   document.querySelector('.out-19').textContent = t19();
})

// Task 20
// Напишите функцию, которая получает строку и возвращает "развернутую" строку. 

function t20(s) {
   // make array
   console.log(s.split(''));
   // make in chart
   Array.from(s).forEach(elem => {
      console.log(elem);
   })
   // make in chart
   for (let char of s) console.log(char);
   return s.split('');
}

document.querySelector('.b-20').addEventListener('click', function () {
   document.querySelector('.out-20').textContent = t20('hello');
})

// Task 21
// Напишите функцию, которая в зависимости от параметра even или odd возвращает случайное целое четное (even) или не четное (odd) число от 10 до 20.
// Для генерации случайного числа используйте t13.

function t21(s) {
   let res = t13(10, 20);
   console.log('res', res);
   if (s == 'even' && !(res % 2)) {
      console.log('in if', res);
      return res;
   }
   if (s == 'odd' && (res % 2)) {
      console.log('in if', res);
      return res;
   }
   console.log('before pereat', s);
   // повторный вызов этой же функции, до тех пор пока не удовлетворит условию
   return t21(s);
   // or
   // console.log(res);
   // switch (s) {
   //    case 'even': return !(res % 2) ? res : ++res;
   //       break;
   //    case 'odd': return (res % 2) ? res : ++res;
   //       break;
   // }
}

document.querySelector('.b-21').addEventListener('click', function () {
   // document.querySelector('.out-21').textContent = 10 + t21('odd') + 20;
   document.querySelector('.out-21').textContent = t21('odd');
})


// Task 22
// Напишите функцию callback22, которая принимает параметр item и если он четный то возвращает true. Если все выполнено верно, то на выходе вы получите только массив четных элементов из массива ar22.

const ar22 = [3, 4, 5, 6, 7, 8, 1, 3, 53, 2];

function t22() {
   return ar22.filter(callback22);
}

function callback22(item) {
   return (!(item % 2)) ? true : false;
   // or
   // return item % 2 === 0;
}

document.querySelector('.b-22').addEventListener('click', function () {
   document.querySelector('.out-22').textContent = t22();
})

// Task 23
// Напишите функцию callback23, которая принимает параметр item и возвращает его возведенным во вторую степень.

const ar23 = [3, 4, 5, 6, 7, 8];

function t23() {
   return ar23.map(callback23);
}

function callback23(item) {
   return item ** 2;
}

document.querySelector('.b-23').addEventListener('click', function () {
   document.querySelector('.out-23').textContent = t23();
})


// Task 24
// Напишите функцию callback24, которая принимает параметр item и возвращает его возведенным во вторую степень.

const ar24 = [3, 4, 5, 6, 7, 8];

function t24() {
   // let t = [];
   // ar24.forEach(item => {
   //    let newItem = callback24(item);
   //    t.push(newItem);
   // });
   // return t;
   return ar24.map(callback23);

}

function callback24(item) {
   return Math.pow(item, 2);
}

document.querySelector('.b-24').addEventListener('click', function () {
   document.querySelector('.out-24').textContent = t24();
})


// Task 25
// Напишите функцию которая принимает массив как аргумент и проверяет что в нем одни числа. Возвращает true если это так и false в противном.


function t25(arr) {
   for (let element of arr) {
      if (typeof element !== 'number') return false;
   }
   // пример ниже НЕ РАБОТАЕТ. return не прерывает цикл!!!!!!!!!!!!
   // arr.forEach(element => {
   //    if (typeof element !== 'number') return false;
   // })
   return true;
}

document.querySelector('.b-25').addEventListener('click', function () {
   document.querySelector('.out-25').textContent = t25([4, 'asdfasf', 5, 6]);
})

// Task 26
// Напишите функцию которая получает из input.i-26 имя пользователя и если это не пустая строка - то выводит его в out-26 в нижнем регистре. Если строка пустая - то выходит из функции.


function t26() {
   const i26 = document.querySelector('.i-26').value;
   return (i26.trim()) ? i26.trim().toLowerCase() : '';
}

document.querySelector('.b-26').addEventListener('click', function () {
   document.querySelector('.out-26').textContent = t26();
});

// Task 27
// Напишите функцию которая получает из input.i-27 значение как аргумент и проверяет его наличие в объекте obj27. Если находит совпадение - возвращает ключ. Если не находит - false.

const obj27 = {
   h: 'a',
   j: 'b',
   k: 'z',
   m: 'w'
}

function t27(v) {
   // for (let key in obj27) {
   //    if (obj27[key] === v) {
   //       return key;
   //    }
   // }
   // same as above
   for (let key in obj27) if (obj27[key] === v) return key;
   return false;
}

document.querySelector('.b-27').addEventListener('click', function () {
   let v = document.querySelector('.i-27').value;
   document.querySelector('.out-27').textContent = t27(v);
})


// Task 28
// Напишите функцию которая принимает два аргумента - строку и подстроку и если подстрока есть в строке - возвращает true, если нет false.

function t28(str, substr) {
   console.log(str.indexOf(substr));
   return (str.indexOf(substr) >= 0) ? true : false;

}

document.querySelector('.b-28').addEventListener('click', function () {
   document.querySelector('.out-28').textContent = t28('hello my world', 'hel');
})

// Task 29
// Напишите функцию, которая получает в качестве аргументов строки и возвращает большую строку (прямым сравнением).

function t29(str1, str2) {
   return (str1 > str2) ? str1 : str2;
}

document.querySelector('.b-29').addEventListener('click', function () {
   document.querySelector('.out-29').textContent = t29('zhello', 'or');
})



// Task 30
// Напишите функцию t30, которая возвращает функцию t31

function t31() {
   return true;
}

function t30() {
   return t31();
}


document.querySelector('.b-30').addEventListener('click', function () {
   document.querySelector('.out-30').textContent = t30();
})

