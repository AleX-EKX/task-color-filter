// Алгоритм решения задачи

// 1. Найти на странице "действующие" элементы (с которыми будет происходить взаимодействие)
const img = document.querySelector('#img');
const buttons = document.querySelectorAll('.colorItem');
//const qwe=document.querySelector('#img img');//пример: находим элемент в диве img
//img.src = 'https://webcademy.ru/files/js2020/solaris/red.png';//меняем ссылку
//img.setAttribute('src', 'https://webcademy.ru/files/js2020/solaris/blue.png');//меняем атрибут src на голубую машину


// 2. Отслеживаем пользовательские события
buttons.forEach(function (button) {
    button.addEventListener('click', function (event) {

        // 3. Пишем "действия" которые сработают на действия пользователя
        img.src = 'https://webcademy.ru/files/js2020/solaris/' + event.target.dataset.file;// event.target понимаем на какой кнопке был клик
		console.log(img);
		// Убираем активный класс у "прошлой активной кнопки"
		const prevActiveButton = document.querySelector('.colorItem--active');
		prevActiveButton.classList.remove('colorItem--active');

		// Кнопка по которой произошел клик → Делаем её активной, добавляем класс colorItem--active
		event.target.classList.add('colorItem--active');
	})
})
