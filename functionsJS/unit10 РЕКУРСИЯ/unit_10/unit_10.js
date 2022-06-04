// Task 1
// Функция принимает число n. Напишите рекурсивную функцию r1, которая выводит числа от n до нуля в out-1. Разделитель - пробел.

function t1(n) {
   let out = '';

   function r1(z) {
      out += z + ' ';
      if (z == 0) return out;// можно без out
      r1(--z);
   }

   r1(n);
   console.log(out);
   return out;
}

document.querySelector('.b-1').addEventListener('click', () => {
   document.querySelector('.out-1').textContent = t1(5);
})


// Task 2
// Функция принимает число. Напишите рекурсивную функцию r2, которая выводит числа от 0 до введенного числа в out-2 с шагом 2. Разделитель - пробел.

function t2(n) {
   let out = '';

   function r2(z) {
      if (z > n) return out; // можно без out
      out += z + ' ';
      r2(z + 2);
   }

   r2(0);
   return out;
}

document.querySelector('.b-2').addEventListener('click', () => {
   document.querySelector('.out-2').textContent = t2(5);
})

// Task 3.
// Функция t3 принимает аргумент 'odd' или 'even' и должна возвратить четное или не четное число в диапазоне от 0 до 100. Решите задачу рекурсивно. Для генерации случайных чисел используйте функцию randomInteger.

function randomInteger(min, max) {
   let rand = min + Math.random() * (max + 1 - min);
   return Math.floor(rand);
}

function t3(arr) {
   let rand = randomInteger(0, 100);
   console.log('rand at the start', rand); // вывод рандом числа, для подсчёта итераций
   if (rand % 2 === 0 && arr === 'even') {
      return rand;
   } else if (rand % 2 !== 0 && arr === 'odd') {
      return rand;
   } else {
      return t3(arr);
   }
   // or
   // if (rand % 2 === 0 && arr === 'even') return rand;
   // if (rand % 2 !== 0 && arr === 'odd') return rand;
   // return t3(arr);
   // or
   // return (rand % 2 === 0 && arr === 'even') || (rand % 2 !== 0 && arr === 'odd') ? rand : t3(arr);
}

document.querySelector('.b-3').addEventListener('click', () => {
   document.querySelector('.out-3').innerHTML = t3('even');
});

// Task 4.
// Функция t4 с помощью randomInteger генерирует случайное число от 0 до 10 и проверяет его наличие в массиве ar4. Если число уже есть - выполняет генерацию заново. Если нет - возвращает это число.

let ar4 = [3, 4, 6, 7, 8];

function t4() {
   let rand = randomInteger(0, 10);
   if (ar4.includes(rand)) {
      return t4();
   }
   return rand;

   // or
   // return ar4.includes(rand) ? t4() : rand;
}

document.querySelector('.b-4').addEventListener('click', () => {
   document.querySelector('.out-4').textContent = t4();
});

// Task 5.
// Напишите рекурсивную функцию t5, которая генерирует целое число от 0 до 10 ( с помощью randomInteger) и добавляем его в массив ar5. Проверяет, если сумма элементов массива больше 30 - то прекращает свою работу, если меньше - запускается заново. Возвращает массив ar5 по результату работы.

let ar5 = [];

function t5() {
   let rand = randomInteger(0, 10);
   ar5.push(rand);
   console.log(ar5);
   if (ar5.reduce((prev, current) => prev + current) <= 30) {
      t5();
   } else {
      return ar5;
   }
   ar5 = [];
}

document.querySelector('.b-5').addEventListener('click', () => {
   document.querySelector('.out-5').textContent = t5();
});

// Task 6.
// Напишите рекурсивную функцию t6, которая вытаскивает из массива ar6 числа в массив ar6_res. 

let ar6 = [
   5,
   [3, 4, 'h'],
   [[5, 6, 'b'], ['c', 7, [8]]],
   9,
   [[[[[10, 'i', 11, [12]]]]]]
];
let ar6_res = [];

function t6(arr) {
   arr.forEach(element => {
      if (typeof element === 'number') {
         ar6_res.push(element);
      } else if (Array.isArray(element)) {
         t6(element);
      }
   });
   return ar6_res;
}

document.querySelector('.b-6').addEventListener('click', () => {
   document.querySelector('.out-6').textContent = t6(ar6);
});


// Task 7.
// Напишите рекурсивную функцию t7, которая вытаскивает из массива ar7 все строки в ar7_res. 

let ar7 = [
   'hi',
   ['hii'],
   [['hiii']],
   [[['hiiii']]],
   ['i', [[[[[['hi']]]]]]]
];
let ar7_res = [];

function t7(arr) {
   // for (let key in arr) {
   //    console.log(arr[key]);
   //    if (arr[key] === 'string') ar7_res.push(arr[key]);
   //    else if (Array.isArray(arr[key])) t7(arr[key]);
   // }
   arr.forEach(element => {
      if (typeof element !== 'string') {
         ar7_res.push(element);
      } else if (Array.isArray(element)) {
         t7(element);
      }
   });
   console.log('ar7_res', ar7_res);
   return ar7_res;
}

document.querySelector('.b-7').addEventListener('click', () => {
   document.querySelector('.out-7').textContent = t7(ar7);
});


// Task 8.
// Напишите рекурсивную функцию t8, которая получает с помощью randomInt целое число от 1000 до 9000 и проверяет если сумма первых двух цифр числа равна сумме 3 и 4 числа то возвращает это число. Если нет - повторяет операцию. Например число 1235 не удовлетворяет этому условию, потому что 1+2 не равно 3+5. А вот число 7180  - удовлетворяет.

function t8() {
   let random = randomInteger(1000, 9000) + '';
   console.log(random);
   let leftPart = 0;
   let rightPart = 0;
   for (let i = 0; i < (random.length / 2); i++) {
      leftPart += +random[i];
      rightPart += +random[random.length - i - 1];
   }
   if (leftPart !== rightPart) return t8();
   return random;
}

document.querySelector('.b-8').addEventListener('click', () => {
   document.querySelector('.out-8').textContent = t8();
});


// Task 9.
// Напишите рекурсивную функцию t9, которая создает массив ar9_res состоящий из возраста (age) пользователей прописанных в ar9. 

let ar9 = {
   "ivanov": {
      age: 25,
      parent: {
         "ivanov-a": {
            age: 45
         },
         "ivanov-b": {
            age: 43,
            parent: {
               "sergeev-a": {
                  age: 88,
                  parent: {
                     "lionenko": {}
                  }
               },
            }
         }
      }
   },
   "kostenko": {
      age: 56,
      parent: {
         "ignatenko": {

         },
         "sniezko": {
            age: 45
         }
      }
   }
}

let ar9_res = [];

function t9(obj) {
   for (key in obj) {
      if (typeof obj[key] === 'object') t9(obj[key]);
      else if (obj[key].age !== 'undefined') ar9_res.push(obj[key]);
   }
   return ar9_res;

}

document.querySelector('.b-9').addEventListener('click', () => {
   // for (let key in ar9) {
   //    t9(ar9[key]);
   // }
   document.querySelector('.out-9').innerHTML = t9(ar9);
});

// Task 10.
// Напишите рекурсивную функцию t10, которая создает массив ar10_res фамилии людей у которых нет информации о возрасте.

let ar10 = {
   "ivanov": {
      age: 25,
      parent: {
         "ivanov-a": {
            age: 45,
            parent: {}
         },
         "ivanov-b": {
            age: 43,
            parent: {
               "sergeev-a": {
                  age: 88,
                  parent: {
                     "lionenko": {}
                  }
               },
            }
         }
      }
   },
   "kostenko": {
      age: 56,
      parent: {
         "ignatenko": {
            parent: {
               "sidorenko": {}
            }
         },
         "sniezko": {
            age: 45
         }
      }
   }
}

let ar10_res = [];
console.log(ar10.ivanov.age);
console.log(!!('age' in ar10.ivanov));
function t10(k, obj) {
   // if (!!('age' in obj.k)) console.log('undefinedundefinedundefined', k);
   console.log('before for', 'k:', k, 'obj[k]:', obj[k], 'obj:', obj);
   for (key in obj) {
      console.log('after for', 'key:', key, 'obj[key]:', obj[key], 'obj:', obj);
      if (key === 'age') { ar10_res.push(k); console.log('in if', k); }
      // if (!!('age' in obj.key)) { ar10_res.push(k); console.log('in if', k); }
      else if (typeof obj[key] === 'object') t10(key, obj[key]);
   }

   return ar10_res;
}

document.querySelector('.b-10').addEventListener('click', () => {
   for (let key in ar10) {
      t10(key, ar10[key]);
   }

   document.querySelector('.out-10').innerHTML = ar10_res;
});

