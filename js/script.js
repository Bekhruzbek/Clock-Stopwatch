//DOM - document object model
// document - это весь наш документ html
// console.log(document);
// document.querySelector('selector') - подключается к элементу html через селектор и возвращает его в виде объекта

// console.log(document.querySelector('.s'));
let s = document.querySelector('.s'),//подключаемся к секундной стрелке
   m = document.querySelector('.m'),//подключаемся к минутной стрелке
   h = document.querySelector('.h'),//подключаемся к часовой стрелке
   hoursBox = document.querySelector('.hours'),
   minBox = document.querySelector('.minutes');

function clock() {
   //new Date() - возвращает объект к текущей датой на устройстве
   let time = new Date();
   // console.log(time);
   //.getSeconds() - получает секунды
   //.getMinutes() - получает минуты
   //.getHours() - получает часы
   let secDeg = time.getSeconds() * 6,
       minDeg = time.getMinutes() * 6,
       hourDeg = time.getHours() * 30;
   //htmlEl.style - добавляет css стили к этому элементу в html
   // console.log(s.style);
   s.style = `transform: rotate(${secDeg}deg)`;
   m.style = `transform: rotate(${minDeg}deg)`;
   h.style = `transform: rotate(${hourDeg}deg)`;

   //htmlEl.innerHTML = заменяет все html содержимое этого элемента
   hoursBox.innerHTML = time.getHours() < 10 ? `0${time.getHours()}` : time.getHours();
   minBox.innerHTML = time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes();
   setTimeout(clock, 1000); //вызовет функцию clock через 1000миллисекунд
}
clock();

//рекурсия - это когда функция вызывает саму себя внутри своего тела функции
// let i = 1;
// function time() {
//    console.log(i);
//    if(i < 100){
//       i++;
//       time();
//    }
// }
// time();
// document.querySelectorAll('selector'); - выбирает все элементы по селектору и возвращает массив из них
let links = document.querySelectorAll('.tabsItem'),
   tabs = document.querySelectorAll('.tabsContentItem');

for (let i = 0; i < links.length; i++) {
   //elem.addEventListener('событие', функция которая сработает при событии)
   //click - событие нажатия на левую кноаку мыши
   links[i].addEventListener('click', function (e) {
      // console.log('click');
      //event
      //e - отдает нам все информацию о событии
      // console.log(e);
      // e.preventDefault(); - отменяет событие по умолчанию в html
      e.preventDefault();
      //пробегаюсь по всем ссылкам и у всех удаляю класс active
      for (let j = 0; j < links.length; j++) {
         //elem.classList - возвращает список классов эл.
         //elem.classList.add('class') - добавляет класс к элементу
         //elem.classList.remove('class') - удаляет класс у элемента
         links[j].classList.remove('active');
         tabs[j].classList.remove('active');
      }
      this.classList.add('active');
      tabs[i].classList.add('active');
   })
}
// console.log(links);
let itr = 0,
   sec = document.querySelector('.stopwatch__seconds'),
   min = document.querySelector('.minutes'),
   hour = document.querySelector('.stopwatch__hours');
function stopwatch() {
   itr++;
   console.log(itr);
   setTimeout(() =>stopwatch(), 1000);
}

stopwatch();