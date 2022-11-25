//Таймер
let kolichestvoMinut = 30; // желаемое время таймера в минутах (5 минут)
let tekuscheyeVremya = new Date(); // получаем сегодняшнюю дату и время
let deadlineTime = tekuscheyeVremya.setMinutes(tekuscheyeVremya.getMinutes() + 30); // устанавливаем таймер на 5 минут
//let deadlineTime = new Date( new Date().getTime() + (kolichestvoMinut * 60 * 1000) ); // можно и так установить таймер на 5 минут
// обновляем скрипт каждую секунду - так мы получаем обратный отсчет
let obratniyOtschet = setInterval(function () {
   let seychas = new Date().getTime(); // текущее время
   let ostatokVremeni = deadlineTime - seychas; // находим различие между текущим моментом и временем дедлайна
   // преобразовываем значение миллисекунд в минуты и секунды
   let minuti = Math.floor((ostatokVremeni % (1000 * 60 * 60)) / (1000 * 60));
   let secundi = Math.floor((ostatokVremeni % (1000 * 60)) / 1000);
   // если значение текущей минуты или секунды меньше 10, добавляем вначале ведущий ноль
   minuti = minuti < 10 ? '0' + minuti : minuti;
   secundi = secundi < 10 ? '0' + secundi : secundi;
   // отображаем результат таймера в элементе с id="deadline-timer"
   document.getElementById('deadline-timer').innerHTML = minuti + ':' + secundi;
   // если в таймере остались только секунды, меняем слово "минуты" на "секунды"
   if (minuti == 0) {
      document.getElementById('min-or-sec').innerHTML = 'секунд';
   }
}, 1000);

//Подсказка инпутов
document.getElementById('phone').onclick = function () {
   document.getElementById('help').classList.add('help-on');
};

document.addEventListener('click', function (event) {
   if (!document.getElementById('phone').contains(event.target))
      document.getElementById('help').classList.remove('help-on');
});

document.getElementById('text').onclick = function () {
   document.getElementById('help-on').classList.add('help-on');
};

document.addEventListener('click', function (event) {
   if (!document.getElementById('text').contains(event.target))
      document.getElementById('help-on').classList.remove('help-on');
});
