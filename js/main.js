//контекстное меню
document.addEventListener('contextmenu', (e)=>{
	if(e.target.id == "info" || e.target.classList.contains("menu")) return			//на блоке info или элементе menu ПКМ работает по умолчанию
	e.preventDefault() 							//отключаем поведение по умолчанию
	hiddenMenu()								//скрываем меню и все элементы
	show_menu (e, mainMenu) 					//показываем главный раздел меню
});

//клик по экрану (или по элементу)?
document.addEventListener('click', (e)=>{
	if(e.target.closest('#Menu')) {	//если клик по блоку меню или инпуту (игнор)
		console.log('клик в меню (input, div)')
		//показываем привязанные меню 2-го уровня и не только (ссылки в объекте objMenu от кнопок к div)
		if(e.target.classList.contains("objMenu")) {
			console.log('клик по элементу меню')
			hiddenMenu()
			//показываем привязанные меню 2-го уровня и не только (ссылки в объекте objMenu от кнопок к div)
			if (e.target.id in objMenu) show_menu (e, objMenu[e.target.id])
		} else if (e.target.classList.contains("createEl")) {
			console.log('клик по конечной кнопке меню для создания элемента')
			hiddenMenu() //скрываем все подразделы меню
			create_elem(e.target.id);
		} 
		return
	}
	
	hiddenMenu()

	if(e.target !== document.documentElement && e.target.id !== 'info'){
		console.log('клик по созданным элементам')
		if (e.target.tagName == "DIV") reg_sel_div(e.target)			//sel_element только DIV
	} else {
		console.log('клик пусому экрану')
		reset() 			//сброс выделения
	}

});

//наведение и подсветка нужного элемента
stage.addEventListener('pointerover', (e)=>{
	//если элемент не является потомком Menu, то выделим его. Метод closest ищет по цепочке родителя
	if(!e.target.closest('#Menu') && e.target.tagName == "DIV" ){		
		reg_over_element(e.target) //подсвечиваем элемент
	}
})


/*

0.доработать select:
 
 б) логика значков если не скрывать список


1. таблица и данные: - делаем шапку таблицы, довавить в Меню по созданию таблицы переменную bd_table = [[n1,a1,v1],[]] //JSON из Эксель???

2. двойной клик и меню свойств и действий:
	свойства:
	div - цвет фона, тень, wrap ...
	div, img - rounded, border(цвет, толщ, положение), прозрачность,
	all element - содержимое + атрибуты, удаление, копировать -вставить

	меню свойств появляется так же как и меню общее!
	
3. кнопка отменить действие
4. мобильные устройства и двойной клик?
5. экспорт htmlЖ: рамка info (конфликт)
6. импорт html
7. удобство работы с id элементами
8. ко всем меню привяязать слушатеь ввода интера для нажатия на кнопку (дублирования)
9. код в script не сразу срабатывает с слектсич, нужно обновить или внести изменения ... программно
10. удалить класс select в select search
11. span чеков повесить onclick на выделение чеков
12. button в поле цветов прописать цвет как название, добавить выравнять по цетру (вставить в div или mx-ato), просмотр кода кнопки ?
13. обновление script js для обращения к нему сразу???
14. при указании числа колонок row-cols разрешить диапазоны вввода
*/





