let _x, _y;		//координаты клика mainMenu
let sel_element = stage  //выделенный элемент,  в который помещаем создаваемый элемент
let mobile = ( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) ?  true : false  //если смартфон
let kursor = 0 //для запоминания позиции курсора
let window_old //для script

let tooltip = cr(stage, 'div', 'bg-warning', 'подсказка')	//системная подсказка
tooltip.hidden = true
tooltip.style = 'position: fixed; word-break: break-all; min-width: 240px; max-width: 600px; padding: 10px 20px; border-radius: 5px; box-shadow: 3px 3px 3px rgba(0, 0, 0, .3); '

let styleMenu = 'width: 120px; position: absolute; z-index: 3; border: 1px solid black; background: rgba(194, 226, 242, .8);'
let Menu = cri (stage, 'div', 'Menu', 'border text-center') //блок для всех меню, для сокрытия всех при клике по пустому экроану

let mainMenu = cr(Menu, 'div', 'border')
	let divMenu  = cr(Menu, 'div', 'border')
		let divCols = cr(Menu, 'div', 'border')
		let divRow = cr(Menu, 'div', 'border text-start p-1')
		let divCol = cr(Menu, 'div', 'border text-start p-1')
		let divDiv = cr(Menu, 'div', 'border text-start p-1')
		let divCard = cr(Menu, 'div', 'border p-1')
	let divButton = cr(Menu, 'div', 'text-start border p-1')
	let divForms = cr(Menu, 'div', 'text-start border p-1')
		let divInput = cr(Menu, 'div', 'text-start border p-1')
		let divSelect = cr(Menu, 'div', 'text-start border p-1')
		let divTextArea = cr(Menu, 'div', 'text-start border p-1')
		let divCheckbox = cr(Menu, 'div', 'text-start border p-1')
		let divRadio = cr(Menu, 'div', 'text-start border p-1')	
	let divText = cr (Menu, 'div', 'text-start border p-1')
		let divMath = cr (Menu, 'div', 'text-start border p-1')
	let divOther = cr (Menu, 'div', 'text-start border p-2')
		let divImg = cr (Menu, 'div', 'text-start border p-1')
		let divTable = cr (Menu, 'div', 'text-start border p-1')
		let divSelectSearch = cr (Menu, 'div', 'text-start border p-1')
	let divScript = cr (Menu, 'div', 'mx-auto border p-1')

//Для всех Menu.children сделать функцию инициализации, добавить стиль и скрыть в начале
for (let div_menu of Menu.children) {
	div_menu.style = styleMenu
	div_menu.hidden = true;
}

create_mainMenu()
create_divMenu()
create_divCols()
create_divRow()
create_divCol()
create_divDiv()
create_divCard()
create_divButton()
create_divForms()
create_divInput()
create_divSelect()
create_divTextArea()
create_divCheckbox()
create_divRadio()
create_divText()
create_divMath()
create_divOther()
create_divImg()
create_divTable()
create_divSelectSearch()
create_divScript()


//объект, содержащий ссылки от кнопок меню на блоки меню следующих по порядку
let objMenu = {
    'bt_div': divMenu,  //1-й уровень
		'bt_cr_cols': divCols,
		'bt_div_row': divRow,
		'bt_div_col': divCol,
		'bt_div_div': divDiv,
		'bt_cr_card': divCard,
	'bt_button': divButton,
	'bt_forms': divForms,
		'cr_M_input': divInput,
		'cr_M_select': divSelect,
		'cr_M_textarea': divTextArea,
		'cr_M_checkbox': divCheckbox,
		'cr_M_radio': divRadio,	
	'bt_text': divText,
	'bt_math': divMath,
	'bt_other': divOther,
		'cr_img': divImg,
		'cr_table': divTable,
		'cr_select_search': divSelectSearch,
	'bt_script': divScript
}

		//СОЗДАНИЕ МЕНЮ

//создание 1-го меню
function create_mainMenu() {
	//внимание класс objMenu
	bt(mainMenu, 'bt_div', 'btn btn-primary btn-sm m-1 objMenu', 'div')
	bt(mainMenu, 'bt_button', 'btn btn-dark btn-sm m-1 objMenu', 'button')
	bt(mainMenu, 'bt_forms', 'btn btn-success btn-sm m-1 objMenu', 'forms')
	bt(mainMenu, 'bt_text', 'btn btn-secondary btn-sm m-1 objMenu', 'text')
	bt(mainMenu, 'bt_other', 'btn btn-warning btn-sm m-1 objMenu', 'other')
	bt(mainMenu, 'bt_script', 'btn btn-danger btn-sm m-1 ps-1 pe-1 objMenu', 'script')
}

//создание меню DIV
function create_divMenu() {
	divMenu.style.width = '128px'
	//внимание класс .createEl или .objMenu
	bt(divMenu, 'bt_cr_cols', 'btn btn-primary btn-sm m-1 objMenu', 'row+cols')
	bt(divMenu, 'bt_div_row', 'btn btn-primary btn-sm m-1 objMenu', 'row')
	bt(divMenu, 'bt_div_col', 'btn btn-primary btn-sm m-1 objMenu', 'col')
	bt(divMenu, 'bt_div_div', 'btn btn-primary btn-sm m-1 objMenu', 'div')
	bt(divMenu, 'bt_cr_card', 'btn btn-primary btn-sm m-1 objMenu', 'div.card')
	
	bt_cr_cols.addEventListener('click', ()=> {
		setTimeout(() => divCols.querySelector('input').focus(), 200);})
}

//создание меню по созданию КОЛОНОК (12 inputs)
function create_divCols() {
	divCols.innerHTML = `<div class="container text-center"><div class="row row-cols-3" id='rowcols'></div></div>`
	for (let i = 0; i < 12; i++) {
		let div = cr(rowcols, 'div', 'col p-1')
		let inp = cr(div, 'input', 'form-control form-control-sm text-center ps-0 pe-0')
		inp.type = 'text'
	}
	bt(divCols, 'bt_cr_cols_from_input', 'btn btn-primary btn-sm m-1 createEl', 'add cols')
}

//создание меню по созданию ROW
function create_divRow() {
	divRow.style.width = '300px'
	divRow.innerHTML = `
		<input class="form-control form-control-sm mb-1" type="text" placeholder="id div.row (не обязательно)" id='divRow_id'>
	
		<select id="divRow_align" class="form-select form-select-sm mt-1">
			<option value="">вертикальное выравнивание</option>
			<option value="align-items-start">сверху</option>
			<option value="align-items-center">по середине</option>
			<option value="align-items-end">снизу</option>
		</select>

		<select id="divRow_justify" class="form-select form-select-sm mb-1 mt-1">
			<option value="">горизонтальное выравнивание</option>
			<option value="justify-content-start">в начале</option>
			<option value="justify-content-center">в центре</option>
			<option value="justify-content-end">в конце</option>
			<option value="justify-content-around">в центре каждого столбца</option>
			<option value="justify-content-between">максимально удалены</option>
			<option value="justify-content-evenly">равномерно</option>
		</select>

		<select class="form-select form-select-sm mb-1" id='divRow_border'>
			<option value="">цвет рамки</option>
			<option value="primary" class="bg-primary">primary</option>
			<option value="primary-subtle" class="bg-primary-subtle">primary-subtle</option>
			<option value="secondary" class="bg-secondary">secondary</option>
			<option value="secondary-subtle" class="bg-secondary-subtle">secondary-subtle</option>
			<option value="success" class="bg-success">success</option>
			<option value="success-subtle" class="bg-success-subtle">success-subtle</option>
			<option value="danger" class="bg-danger">danger</option>
			<option value="danger-subtle" class="bg-danger-subtle">danger-subtle</option>
			<option value="warning" class="bg-warning">warning</option>
			<option value="warning-subtle" class="bg-warning-subtle">warning-subtle</option>
			<option value="info" class="bg-info">info</option>
			<option value="info-subtle" class="bg-info-subtle">info-subtle</option>
			<option value="light" class="bg-light">light</option>
			<option value="light-subtle" class="bg-light-subtle">light-subtle</option>
			<option value="dark" class="bg-dark">dark</option>
			<option value="dark-subtle" class="bg-dark-subtle">dark-subtle</option>
			<option value="black" class="bg-black">black</option>
			<option value="white" class="bg-white">white</option>
		</select>

		<select class="form-select form-select-sm mb-1" id='divRow_bg'>
			<option value="">цвет фона</option>
			<option value="primary" class="bg-primary text-white">primary</option>
			<option value="primary-subtle" class="bg-primary-subtle text-emphasis-primary">primary-subtle</option>
			<option value="secondary" class="bg-secondary text-white">secondary</option>
			<option value="secondary-subtle" class="bg-secondary-subtle text-emphasis-secondary">secondary-subtle</option>
			<option value="success" class="bg-success text-white">success</option>
			<option value="success-subtle" class="bg-success-subtle text-emphasis-success">success-subtle</option>
			<option value="danger" class="bg-danger text-white">danger</option>
			<option value="danger-subtle" class="bg-danger-subtle text-emphasis-danger">danger-subtle</option>
			<option value="warning" class="bg-warning text-dark">warning</option>
			<option value="warning-subtle" class="bg-warning-subtle text-emphasis-warning">warning-subtle</option>
			<option value="info" class="bg-info text-dark">info</option>
			<option value="info-subtle" class="bg-info-subtle text-emphasis-info">info-subtle</option>
			<option value="light" class="bg-light text-dark">light</option>
			<option value="light-subtle" class="bg-light-subtle text-emphasis-light">light-subtle</option>
			<option value="dark" class="bg-dark text-white">dark</option>
			<option value="dark-subtle" class="bg-dark-subtle text-emphasis-dark">dark-subtle</option>
		</select>

		<input class="form-check-input" type="checkbox" id="divRow_gradient">
		<span class='form-text'>.bg-gradient</span></br>

		<select id="divRow_opacity" class="form-select form-select-sm mt-1 mb-1">
			<option value="">прозрачность фона</option>
			<option value="75">75%</option>
			<option value="50">50%</option>
			<option value="25">25%</option>
			<option value="10">10%</option>
		</select>

		<div class="row gx-1 pt-1 pb-1">
			<div class='col-3'>
				<span class="form-text">row-cols-</span>
			</div>
			<div class='col-9'>
				<input class="form-control form-control-sm mb-1" type="text" title="количество колонок в строке, может быть sm-2" placeholder="1,2,3 ..., auto, sm-2...." id='divRow_row_cols'>
			</div>
		</div>

		<input class="form-control form-control-sm mb-1" type="text" placeholder="отсупы между колонками: g-0 gx-1 gy-2..." id='divRow_g'>

	`
	let area_text = cr(divRow, 'textarea', 'form-control mt-1 mb-1')
	area_text.placeholder = 'textContent (текст)'
	area_text.style = 'font-size: 10pt; height: 1.3rem;'

	let area = cr(divRow, 'textarea', 'form-control')
	area.placeholder = 'кликните на поле для создания (редактирования) класса div'
	area.style = 'font-size: 10pt;'
	
	area.onclick = ()=> {
		let txt = 'row'
		if (divRow_align.value !== '') txt += ' ' + divRow_align.value
		if (divRow_justify.value !== '') txt += ' ' + divRow_justify.value
		if (divRow_row_cols.value !== '') txt += ' row-cols-' + divRow_row_cols.value
		if (divRow_g.value !== '') txt += ' ' + divRow_g.value
		if (divRow_border.value !== '') txt += ' border border-' + divRow_border.value
		if (divRow_bg.value !== '') txt += ' bg-' + divRow_bg.value
		if (divRow_gradient.checked) txt += ' bg-gradient'
		if (divRow_opacity.value !== '') txt += ' bg-opacity-' + divRow_opacity.value
		area.value = txt
	}
	let div_bt = cr(divRow, 'div', 'col-3 mx-auto')
	bt(div_bt, 'bt_cr_row', 'btn btn-primary btn-sm m-1 createEl', 'Создать')
}

//создание меню по созданию COL
function create_divCol() {
	divCol.style.width = '280px'
	divCol.innerHTML = `
		<input class="form-control form-control-sm mb-1" type="text" placeholder="id div.col (не обязазательно)" id='divCol_id'>

		<div class="row gx-1 pt-1 pb-1">
			<div class='col-2'>
				<span class="form-text">cols-</span>
			</div>
			<div class='col-10'>
				<input class="form-control form-control-sm mb-1" type="text" title="ширина колонки (cols-2, cols-sm-6 ...)" placeholder="1,2,3 ..., auto, sm-2...." id='divCol_cols'>
			</div>
		</div>

		<select class="form-select form-select-sm mb-1" id='divCol_border'>
			<option value="">цвет рамки</option>
			<option value="primary" class="bg-primary">primary</option>
			<option value="primary-subtle" class="bg-primary-subtle">primary-subtle</option>
			<option value="secondary" class="bg-secondary">secondary</option>
			<option value="secondary-subtle" class="bg-secondary-subtle">secondary-subtle</option>
			<option value="success" class="bg-success">success</option>
			<option value="success-subtle" class="bg-success-subtle">success-subtle</option>
			<option value="danger" class="bg-danger">danger</option>
			<option value="danger-subtle" class="bg-danger-subtle">danger-subtle</option>
			<option value="warning" class="bg-warning">warning</option>
			<option value="warning-subtle" class="bg-warning-subtle">warning-subtle</option>
			<option value="info" class="bg-info">info</option>
			<option value="info-subtle" class="bg-info-subtle">info-subtle</option>
			<option value="light" class="bg-light">light</option>
			<option value="light-subtle" class="bg-light-subtle">light-subtle</option>
			<option value="dark" class="bg-dark">dark</option>
			<option value="dark-subtle" class="bg-dark-subtle">dark-subtle</option>
			<option value="black" class="bg-black">black</option>
			<option value="white" class="bg-white">white</option>
		</select>

		<select class="form-select form-select-sm mb-1" id='divCol_bg'>
			<option value="">цвет фона</option>
			<option value="primary" class="bg-primary text-white">primary</option>
			<option value="primary-subtle" class="bg-primary-subtle text-emphasis-primary">primary-subtle</option>
			<option value="secondary" class="bg-secondary text-white">secondary</option>
			<option value="secondary-subtle" class="bg-secondary-subtle text-emphasis-secondary">secondary-subtle</option>
			<option value="success" class="bg-success text-white">success</option>
			<option value="success-subtle" class="bg-success-subtle text-emphasis-success">success-subtle</option>
			<option value="danger" class="bg-danger text-white">danger</option>
			<option value="danger-subtle" class="bg-danger-subtle text-emphasis-danger">danger-subtle</option>
			<option value="warning" class="bg-warning text-dark">warning</option>
			<option value="warning-subtle" class="bg-warning-subtle text-emphasis-warning">warning-subtle</option>
			<option value="info" class="bg-info text-dark">info</option>
			<option value="info-subtle" class="bg-info-subtle text-emphasis-info">info-subtle</option>
			<option value="light" class="bg-light text-dark">light</option>
			<option value="light-subtle" class="bg-light-subtle text-emphasis-light">light-subtle</option>
			<option value="dark" class="bg-dark text-white">dark</option>
			<option value="dark-subtle" class="bg-dark-subtle text-emphasis-dark">dark-subtle</option>
		</select>

		<input class="form-check-input" type="checkbox" value="" id="divCol_gradient">
		<span class='form-text'>.bg-gradient</span></br>

		<select id="divCol_opacity" class="form-select form-select-sm mt-1 mb-1">
			<option value="">прозрачность фона</option>
			<option value="75">75%</option>
			<option value="50">50%</option>
			<option value="25">25%</option>
			<option value="10">10%</option>
		</select>

		<select id="divCol_align" class="form-select form-select-sm mt-1">
			<option value="">вертикальное выравнивание</option>
			<option value="align-self-start">сверху</option>
			<option value="align-self-center">по середине</option>
			<option value="align-self-end">снизу</option>
		</select>

		<select id="divCol_text" class="form-select form-select-sm mt-1">
			<option value="">гориз. выравнивание в колонке</option>
			<option value="text-start">по левому краю</option>
			<option value="text-center">по середине</option>
			<option value="text-end">по правому краю</option>
		</select>


		<div class="row gx-1 pt-1 pb-1">
			<div class='col-2'>
				<span class="form-text">offset-</span>
			</div>
			<div class='col-10'>
				<input class="form-control form-control-sm mb-1" type="text" title="перемещаем колонки вправо, offset-md-3, offset-sm-3" placeholder="1,2,3 ..., sm-2...." id='divCol_offset'>
			</div>
		</div>

		<input class="form-check-input" name="m-auto" type="radio" id="divCol_me">
		<input class="form-check-input" name="m-auto" type="radio" id="divCol_ms">
		<input class="form-check-input" name="m-auto" type="radio" id="divCol_mx">
		<span class='form-text' onclick='divCol_me.checked=false; divCol_ms.checked=false; divCol_mx.checked=flase;' title="отодвинуть одноуровневые столбцы друг от друга">me-auto/ms-auto/mx-auto</span></br>
		`
	let area_text = cr(divCol, 'textarea', 'form-control mt-1 mb-1')
	area_text.placeholder = 'textContent (текст)'
	area_text.style = 'font-size: 10pt; height: 1.3rem;'

	let area = cr(divCol, 'textarea', 'form-control')
	area.placeholder = 'кликните на поле для создания (редактирования) класса div'
	area.style = 'font-size: 10pt;'
	area.onclick = ()=> {
		let txt = ''
		if (divCol_cols.value !== '') {
			txt += 'col-' + divCol_cols.value
		} else {
			txt = 'col-auto'
		}
		if (divCol_align.value !== '') txt += ' ' + divCol_align.value
		if (divCol_text.value !== '') txt += ' ' + divCol_text.value
		if (divCol_offset.value !== '') txt += ' offset-' + divCol_offset.value
		if (divCol_me.checked) txt += ' me-auto'
		if (divCol_ms.checked) txt += ' ms-auto'
		if (divCol_mx.checked) txt += ' mx-auto'
		if (divCol_border.value !== '') txt += ' border border-' + divCol_border.value
		if (divCol_bg.value !== '') txt += ' bg-' + divCol_bg.value
		if (divCol_gradient.checked) txt += ' bg-gradient'
		if (divCol_opacity.value !== '') txt += ' bg-opacity-' + divCol_opacity.value
		area.value = txt
	}
	let div_bt = cr(divCol, 'div', 'col-3 mx-auto')
	bt(div_bt, 'bt_cr_col', 'btn btn-primary btn-sm m-1 createEl', 'Создать')
}

//создание меню по созданию DIV
function create_divDiv() {
	divDiv.style.width = '240px'

	divDiv.innerHTML = `
		<input class="form-control form-control-sm mb-1" type="text" placeholder="id div (не обязазательно)" id='divDiv_id'>

		<select class="form-select form-select-sm mb-1" id='divDiv_border'>
			<option value="">цвет рамки</option>
			<option value="primary" class="bg-primary">primary</option>
			<option value="primary-subtle" class="bg-primary-subtle">primary-subtle</option>
			<option value="secondary" class="bg-secondary">secondary</option>
			<option value="secondary-subtle" class="bg-secondary-subtle">secondary-subtle</option>
			<option value="success" class="bg-success">success</option>
			<option value="success-subtle" class="bg-success-subtle">success-subtle</option>
			<option value="danger" class="bg-danger">danger</option>
			<option value="danger-subtle" class="bg-danger-subtle">danger-subtle</option>
			<option value="warning" class="bg-warning">warning</option>
			<option value="warning-subtle" class="bg-warning-subtle">warning-subtle</option>
			<option value="info" class="bg-info">info</option>
			<option value="info-subtle" class="bg-info-subtle">info-subtle</option>
			<option value="light" class="bg-light">light</option>
			<option value="light-subtle" class="bg-light-subtle">light-subtle</option>
			<option value="dark" class="bg-dark">dark</option>
			<option value="dark-subtle" class="bg-dark-subtle">dark-subtle</option>
			<option value="black" class="bg-black">black</option>
			<option value="white" class="bg-white">white</option>
		</select>

		<select class="form-select form-select-sm mb-1" id='divDiv_bg'>
			<option value="">цвет фона</option>
			<option value="primary" class="bg-primary text-white">primary</option>
			<option value="primary-subtle" class="bg-primary-subtle text-emphasis-primary">primary-subtle</option>
			<option value="secondary" class="bg-secondary text-white">secondary</option>
			<option value="secondary-subtle" class="bg-secondary-subtle text-emphasis-secondary">secondary-subtle</option>
			<option value="success" class="bg-success text-white">success</option>
			<option value="success-subtle" class="bg-success-subtle text-emphasis-success">success-subtle</option>
			<option value="danger" class="bg-danger text-white">danger</option>
			<option value="danger-subtle" class="bg-danger-subtle text-emphasis-danger">danger-subtle</option>
			<option value="warning" class="bg-warning text-dark">warning</option>
			<option value="warning-subtle" class="bg-warning-subtle text-emphasis-warning">warning-subtle</option>
			<option value="info" class="bg-info text-dark">info</option>
			<option value="info-subtle" class="bg-info-subtle text-emphasis-info">info-subtle</option>
			<option value="light" class="bg-light text-dark">light</option>
			<option value="light-subtle" class="bg-light-subtle text-emphasis-light">light-subtle</option>
			<option value="dark" class="bg-dark text-white">dark</option>
			<option value="dark-subtle" class="bg-dark-subtle text-emphasis-dark">dark-subtle</option>
		</select>

		<input class="form-check-input" type="checkbox" value="" id="divDiv_gradient">
		<span class='form-text'>.bg-gradient</span></br>

		<select id="divDiv_opacity" class="form-select form-select-sm mt-1 mb-1">
			<option value="">прозрачность фона</option>
			<option value="75">75%</option>
			<option value="50">50%</option>
			<option value="25">25%</option>
			<option value="10">10%</option>
		</select>

		<select id="divDiv_text" class="form-select form-select-sm mt-1 mb-1">
			<option value="">гориз. выравнивание в div</option>
			<option value="text-start">по левому краю</option>
			<option value="text-center">по середине</option>
			<option value="text-end">по правому краю</option>
		</select>

		<select id="divDiv_class" class="form-select form-select-sm mb-1">
			<option value="">свойства display</option>
			<option value="none">none</option>
			<option value="inline">inline</option>
			<option value="inline-block">inline-block</option>
			<option value="block">block</option>
			<option value="grid">grid</option>
			<option value="inline-grid">inline-grid</option>
			<option value="flex">flex</option>
			<option value="inline-flex">inline-flex</option>
		</select>

		<input class="form-check-input" name="m-auto" type="radio" id="divDiv_me">
		<input class="form-check-input" name="m-auto" type="radio" id="divDiv_ms">
		<input class="form-check-input" name="m-auto" type="radio" id="divDiv_mx">
		<span class='form-text' onclick='divDiv_me.checked=false; divDiv_ms.checked=false; divDiv_mx.checked=false;' 
		title="отодвинуть одноуровневые столбцы друг от друга или центрировать по горизонтали">me-auto/ms-auto/mx-auto</span></br>
	`
	let area_text = cr(divDiv, 'textarea', 'form-control mt-1 mb-1')
	area_text.placeholder = 'textContent (текст)'
	area_text.style = 'font-size: 10pt; height: 1.3rem;'

	let area = cr(divDiv, 'textarea', 'form-control')
	area.placeholder = 'кликните на поле для создания (редактирования) класса div'
	area.style = 'font-size: 10pt;'
	area.onclick = ()=> {
		let txt = ''

		if (divDiv_text.value !== '') txt += divDiv_text.value
		if (divDiv_class.value !== '') txt += ' d-' + divDiv_class.value
		if (divDiv_me.checked) txt += ' me-auto'
		if (divDiv_ms.checked) txt += ' ms-auto'
		if (divDiv_mx.checked) txt += ' mx-auto'
		if (divDiv_border.value !== '') txt += ' border border-' + divDiv_border.value
		if (divDiv_bg.value !== '') txt += ' bg-' + divDiv_bg.value
		if (divDiv_gradient.checked) txt += ' bg-gradient'
		if (divDiv_opacity.value !== '') txt += ' bg-opacity-' + divDiv_opacity.value

		area.value = txt
	}

	let div_bt = cr(divDiv, 'div', 'col-3 mx-auto')
	bt(div_bt, 'bt_cr_div', 'btn btn-primary btn-sm m-1 createEl', 'Создать')
}


//меню по созданию карточек (div.card)
function create_divCard() {
	divCard.style = 'width: 210px; position: absolute; z-index: 3; border: 1px solid black; background: rgba(194, 226, 242, .1);'
	divCard.innerHTML = `
	<div class='row p-1'>
		<div class='col-12'>
			<input class="form-control form-control-sm mt-1 mb-1" type="text" placeholder="title" id='card_title'>
			<textarea class='form-control' placeholder='card-body' style='font-size: 11pt;' id='card_body'></textarea>
			<input class="form-control form-control-sm mt-1" type="text" placeholder="имя ссылки" id='card_link_name'>
			<input class="form-control form-control-sm mt-1" type="text" placeholder="путь ссылки" id='card_link_path'>
			<div class="form-check form-check-inline text-start">
				<input id="card_link_btn" class="form-check-input" type="checkbox">
				<label class="form-check-label form-text" for="card_link_btn">ссылка-кнопка</label>
			</div>
			<input class="form-control form-control-sm mt-1" type="text" placeholder="width card (rem или %(⫶25))" id='card_width'>
			<input class="form-control form-control-sm mt-1" type="text" placeholder="image src" id='card_img_src'>
			<input class="form-control form-control-sm mt-1" type="text" placeholder="image alt" id='card_img_alt'>
			
			<select id="card_position_image" class="form-select form-select-sm mt-1">
				<option value="">position image</option>
				<option value="0">top</option>
				<option value="1">bottom</option>
				<option value="2">start</option>
				<option value="3">end</option>			
			</select>

			<select id="card_color" class="form-select form-select-sm mt-1">
				<option value="">color card</option>
				<option value="text-bg-primary" class="bg-primary text-white">color</option>
				<option value="text-bg-secondary" class="bg-secondary text-white">color</option>
				<option value="text-bg-success" class="bg-success text-white">color</option>
				<option value="text-bg-danger" class="bg-danger text-white">color</option>
				<option value="text-bg-warning" class="bg-warning">color</option>
				<option value="text-bg-info" class="bg-info">color</option>
				<option value="text-bg-light" class="bg-light">color</option>
				<option value="text-bg-dark" class="bg-dark text-white">color</option>	
			</select>

			<button type="button" id='btn_cr_card' class="btn btn-primary btn-sm mt-2 createEl">Создать</button>
		</div>
		
	</div>
	`
}

//созданию меню по созданию КНОПОК
function create_divButton() {
	divButton.innerHTML = `
		<input class="form-control form-control-sm mb-1" type="text" placeholder="name" id='inpButVal'>
		<input class="form-control form-control-sm mb-1" type="text" placeholder="id" id='inpButId'>
		<select class="form-select form-select-sm" id='selButClass'>
		  <option selected>class</option>
		  <option value="primary" class='bg-primary text-white'>primary</option>
		  <option value="secondary" class='bg-secondary-subtle'>secondary</option>
		  <option value="success" class='bg-success text-white'>success</option>
		  <option value="danger" class='bg-danger text-white'>danger</option>
		  <option value="warning" class='bg-warning text-white'>warning</option>
		  <option value="info" class='bg-info text-white'>info</option>
		  <option value="light" class='bg-light'>light</option>
		  <option value="dark" class='bg-dark text-white'>dark</option>
		  <option value="link">link</option>
		</select>
		
		<input class="form-check-input" name="sizeBtn" type="radio" id="lgBtn">
		<input class="form-check-input" name="sizeBtn" type="radio" id="smBtn">
		<span class='form-text' onclick='lgBtn.checked=false; smBtn.checked=false;'>size(l/s)</span></br>
		
		<input class="form-check-input" type="checkbox" value="" id="outlineInput">
		<span class='form-text'>outline</span></br>
		
		<input class="form-check-input" type="checkbox" value="" id="blockBtn">
		<span class='form-text'>блочная</span></br>

		<button type="button" id='btn_cr_btn' class="btn btn-primary btn-sm ms-3 createEl">Создать</button>
	`	
}


//создание меню для  FORMS
function create_divForms(){
	divForms.style = 'width: 86px; position: absolute; z-index: 3; border: 1px solid black; background: rgba(194, 226, 242, .1);'
	
	bt(divForms, 'cr_M_input', 'btn btn-success btn-sm objMenu mb-1', 'input')
	bt(divForms, 'cr_M_select', 'btn btn-success btn-sm objMenu mb-1', 'select')
	bt(divForms, 'cr_M_textarea', 'btn btn-success btn-sm objMenu mb-1', 'textarea')
	bt(divForms, 'cr_M_checkbox', 'btn btn-success btn-sm objMenu mb-1', 'checkbox')
	bt(divForms, 'cr_M_radio', 'btn btn-success btn-sm objMenu', 'radio')
}

//создание меню для INPUT
function create_divInput(){
	divInput.innerHTML = `
		<input class="form-control form-control-sm mb-1" type="text" placeholder="placeholder" id='inp_placeholder'>
		<input class="form-control form-control-sm mb-1" type="text" placeholder="_id" id='inp_id'>
		
		<select class="form-select form-select-sm mb-1" id='sel_inp_type'>
		  <option selected value='text'>type (text...)</option>
		  <option value="text">text</option>
		  <option value="number">number</option>
		  <option value="email">email</option>
		  <option value="password">password</option>
		  <option value="file">file</option>
		</select>
		
		<input class="form-control form-control-sm mb-1" type="text" placeholder="label" id='inp_label'>

		<input class="form-check-input" name="size_input" type="radio" id="lg_inp">
		<input class="form-check-input" name="size_input" type="radio" id="sm_inp">
		<span class='form-text' onclick='lg_inp.checked=false; sm_inp.checked=false;'>size (l/s)</span></br>

		<input class="form-check-input" name="div_input" type="radio" id="inp_label_in_div">
		<input class="form-check-input" name="div_input" type="radio" id="inp_label_in_divrow">
		<span class='form-text' onclick='inp_label_in_div.checked=false; inp_label_in_divrow.checked=false;'>div/div.row</span></br>
		
		<button type="button" id='btn_cr_input' class="btn btn-primary btn-sm ms-3 createEl">Создать</button>
	`
}


//создание меню для  SELECT
function create_divSelect(){
	divSelect.innerHTML = `
		<input class="form-control form-control-sm mb-1" type="text" placeholder="id" id='select_id'>
		<input class="form-control form-control-sm mb-1" type="text" placeholder="label" id='select_label'>


		<input class="form-check-input" type="checkbox" value="" id="multiple_select">
		<span class='form-text'>multiple</span></br>

		<input class="form-check-input" name="size_select" type="radio" id="select_radio_large">
		<input class="form-check-input" name="size_select" type="radio" id="select_radio_small">
		<span class='form-text' onclick='select_radio_small.checked=false; select_radio_large.checked=false;'>size (l/s)</span></br>

		<div class='row'>
			<div class='col-8 pe-1'><input class="form-control form-control-sm mb-1" type="text" placeholder="selected"></div>
			<div class='col-4 ps-0'><input class="form-control form-control-sm mb-1" type="text" placeholder="value"></div>
		</div>

		<div class='row'>
			<div class='col-8 pe-1'><input class="form-control form-control-sm mb-1" type="text" placeholder="option" ></div>
			<div class='col-4 ps-0'><input class="form-control form-control-sm mb-1" type="text" placeholder="value"></div>
		</div>

		<button type="button" id='cr_option' class="btn btn-secondary m-1 ms-2 btn-sm">+ option</button>
		<button type="button" id='cr_select' class="btn btn-success m-1 ms-1 btn-sm createEl">Создать</button>
	`

	cr_option.onclick = ()=> {
		let div = cr('div', 'row for_delete')
		div.innerHTML = `
			<div class='col-8 pe-1'><input class="form-control form-control-sm mb-1" type="text" placeholder="option" ></div>
			<div class='col-4 ps-0'><input class="form-control form-control-sm mb-1" type="text" placeholder="value"></div>
		`
		cr_option.before(div)
	};
	divSelect.style.width = '180px'
}


//создание меню для TEXTAREA
function create_divTextArea(){
	divTextArea.innerHTML = `
		<input class="form-control form-control-sm mb-1" type="text" placeholder="id" id='textarea_id'>
		<input class="form-control form-control-sm mb-1" type="number" placeholder="height, px" id='textarea_height'> 
		<input class="form-control form-control-sm" type="text" placeholder="label" id='textarea_label'>
		<span class='ms-3 form-text'>или</span>
		<input class="form-control form-control-sm mb-1" type="text" placeholder="placeholder" id='textarea_placeholder'>
		<button type="button" id='cr_textarea' class="btn btn-success m-1 ms-3 btn-sm createEl">Создать</button>
	`
}


//создание меню для CHECKBOX
function create_divCheckbox(){
	divCheckbox.innerHTML = `
		<input class="form-control form-control-sm mb-1" type="text" placeholder="id" id='checkbox_id'>
		<input class="form-control form-control-sm mb-1" type="text" placeholder="label" id='checkbox_label'>
		
		<input class="form-check-input" type="checkbox" id="ch_formtext">
		<span class='form-text'>form-text</span></br>

		<input class="form-check-input" type="checkbox" id="ch_div">
		<span class='form-text'>в строку</span></br>
		
		<input class="form-check-input" type="checkbox" id="ch_switch">
		<span class='form-text'>switch</span></br>

		<input class="form-check-input" type="checkbox" id="ch_checked">
		<span class='form-text'>checked</span></br>

		<button type="button" id='cr_checkbox' class="btn btn-success m-1 ms-3 btn-sm createEl">Создать</button>
	`
}

//создание меню для RADIO
function create_divRadio(){
	divRadio.innerHTML = `
		<input class="form-control form-control-sm mb-1" type="text" placeholder="name" id='radio_name'>
		<input class="form-control form-control-sm mb-1" type="text" placeholder="id" id='radio_id'>
		<input class="form-control form-control-sm mb-1" type="text" placeholder="label" id='radio_label'>	
				
		<input class="form-check-input" type="checkbox" id="radio_formtext">
		<span class='form-text'>form-text</span></br>
		
		<input class="form-check-input" type="checkbox" id="radio_div">
		<span class='form-text'>в строку</span></br>

		<input class="form-check-input" type="checkbox" id="radio_checked">
		<span class='form-text'>checked</span></br>

		<button type="button" id='cr_radio' class="btn btn-success m-1 ms-3 btn-sm createEl">Создать</button>	
	`
}


//созданиее меню для TEXT
function create_divText(){
	if (document.documentElement.clientWidth < 420) divText.style.width = '350px'; else divText.style.width = '400px'

	divText.innerHTML = `<div class='row'><div class='col-12'><textarea id='area' class='form-control' style='height: 200px;
	font-size: 11pt;'></textarea></div></div>
	<div class='d-flex flex-nowrap'>
		<div id='text_menu_bt' class='p-1'></div>
		<div id='text_menu_class' class='p-1 ps-0 pe-o' style="width: 45%"></div>
		<div id='text_menu_style' class='p-1 ps-0 pe-o'></div>
	</div>
	<div class='text-center'><button type="button" id='cr_text' class="btn btn-primary m-0 btn-sm text-center createEl">Вставить</button></div>
	`
	let bt_p = bt(text_menu_bt, 'bt_p', 'btn btn-outline-primary btn-sm m-1', 'p')								//	p
	bt_p.onclick = ()=> add_teg('p')
				
	let bt_span = bt(text_menu_bt, 'bt_span', 'btn btn-outline-primary btn-sm m-1', 'span')						//	span
	bt_span.onclick = ()=> add_teg('span')

	let bt_a = bt(text_menu_bt, 'bt_a', 'btn btn-outline-primary btn-sm ps-2 m-1', 'a')							//	a
	bt_a.onclick = ()=> add_teg('a')
	
	let bt_img = bt(text_menu_bt, 'bt_img', 'btn btn-outline-primary btn-sm m-1 pe-1', 'img')					//	img
	bt_img.onclick = ()=> add_teg('img')

	let bt_br = bt(text_menu_bt, 'bt_br', 'btn btn-outline-primary btn-sm m-1 ps-1 pe-1', 'br')					//	br
	bt_br.onclick = ()=> area.value += '<br>'

	let bt_list_ul = bt(text_menu_bt, 'bt_list_ul', 'btn btn-outline-primary btn-sm m-1 ps-1 pe-1 pt-0 pb-0')	//	list_ul
	bt_list_ul.innerHTML = '<i class="bi bi-list-ul fs-5"></i>'
	bt_list_ul.onclick = ()=> area.value += '<ul><li>text1</li><li>text2</li><li>text3</li></ul>'

	let bt_list_ol = bt(text_menu_bt, 'bt_list_ol', 'btn btn-outline-primary btn-sm m-1 ps-1 pe-1 pt-0 pb-0')	//	list_ol
	bt_list_ol.innerHTML = '<i class="bi bi-list-ol fs-5"></i>'
	bt_list_ol.onclick = ()=> area.value += '<ol><li>text1</li><li>text2</li><li>text3</li></ol>'

	let bt_math = bt(text_menu_bt, 'bt_math', 'btn btn-outline-primary btn-sm m-1 ps-1 pe-1 objMenu', 'Ω')		//	Math

	let bt_title = bt(text_menu_bt, 'bt_title', 'btn btn-outline-primary btn-sm m-1', '?')						//	tooltip
	bt_title.title = 'Подсказка'
	bt_title.onclick = ()=> add_teg('tooltip')


	let sel_size_text = cri(text_menu_class, 'select', 'sel_size_text', 'form-select form-select-sm m-1 pe-3')		// select_size_text
	sel_size_text.oninput = ()=> paste_class(sel_size_text.value)
	sel_size_text.innerHTML = `
		<option value="h1">h1</option>
		<option value="h2">h2</option>
		<option value="h3">h3</option>
		<option value="h4">h4</option>
		<option value="h5">h5</option>
		<option value="h6">h6</option>
		<option value="fs-1">fs-1</option>
		<option value="fs-2">fs-2</option>
		<option value="fs-3">fs-3</option>
		<option value="fs-4">fs-4</option>
		<option value="fs-5">fs-5</option>
		<option value="fs-6">fs-6</option>
		<option value="lh-base">Абзац</option>
		<option value="lh-1">0.8</option>
		<option value="lh-sm">0.9</option>
		<option value="lh-lg">1.5</option>			
		`
		
	
	let sel_bold_text = cri(text_menu_class, 'select', 'sel_bold_text', 'form-select form-select-sm m-1 pe-3')			//	select_bold_text
	sel_bold_text.oninput = ()=> paste_class(sel_bold_text.value)
	sel_bold_text.innerHTML = `
		<option class='fw-bold' value="fw-bold">bold</option>
		<option class='fw-semibold' value="fw-semibold">Полужирный</option>
		<option class='fw-medium' value="fw-medium">Средний</option>
		<option class='fw-light' value="fw-light">Облегченный</option>
		<option class='fst-italic' value="fst-italic">Курсив</option>
		<option class='font-monospace' value="font-monospace">Моношринный</option>
		<option value="text-decoration-underline">Подчеркн.</option>
		<option value="text-decoration-line-through">Зачеркн.</option>
		<option value="mark"><mark>Выделен</mark></option>		
		`
	let inp_size_text = cri(text_menu_style, 'input', 'inp_size_text', 'form-control form-control-sm m-1')				//	inp_size_text
	inp_size_text.placeholder = '14px'
	inp_size_text.type = 'number'
	inp_size_text.onchange = ()=> area.value += `<span style="font-size: ${inp_size_text.value}pt;"></span>`

	let sel_color_text = cri(text_menu_style, 'select', 'sel_color_text', 'form-select form-select-sm m-1')				//	select_color_text
	sel_color_text.oninput = ()=> paste_class(sel_color_text.value)
	sel_color_text.innerHTML = `
		<option value="">color</option>
		<option value="text-primary" class="text-primary">text</option>
		<option value="bg-primary text-white" class="bg-primary text-white">text</option>
		<option value="text-primary-emphasis" class="text-primary-emphasis">text</option>
		<option value="bg-primary-subtle text-emphasis-primary" class="bg-primary-subtle text-emphasis-primary">text</option>
		<option value="bg-secondary text-white" class="bg-secondary text-white">text</option>
		<option value="bg-body-secondary" class="bg-body-secondary">text</option>
		<option value="text-secondary" class="text-secondary">text</option>
		<option value="text-success" class="text-success">text</option>
		<option value="text-success-emphasis" class="text-success-emphasis">text</option>
		<option value="bg-success text-white" class="bg-success text-white">text</option>
		<option value="bg-success-subtle" class="bg-success-subtle">text</option>
		<option value="text-danger" class="text-danger">text</option>
		<option value="text-danger-emphasis" class="text-danger-emphasis">text</option>
		<option value="bg-danger" class="bg-danger">text</option>
		<option value="bg-danger-subtle" class="bg-danger-subtle">text</option>
		<option value="text-info" class="text-info">text</option>
		<option value="bg-info" class="bg-info">text</option>
		<option value="bg-info-subtle" class="bg-info-subtle">text</option>
		<option value="text-warning" class="text-warning">text</option>
		<option value="text-warning bg-dark" class="text-warning bg-dark">text</option>
		<option value="text-info bg-dark" class="text-info bg-dark">text</option>
		<option value="text-white-50 bg-dark" class="text-white-50 bg-dark">text</option>
	`
}


//созданиее меню для Формул
function create_divMath(){
	if (document.documentElement.clientWidth < 420) divMath.style.width = '350px'; else divMath.style.width = '600px'

	divMath.innerHTML = `
		<div class='row'><div class='col-12'><textarea id='areaMath' class='form-control' style='height: 100px;' oninput='update_result_math(this)' onblur='kursor=this.selectionEnd'></textarea></div></div>
		<div class='row justify-content-center m-1'>
			<div id='result_math' class='col-12 border bg-body-tertiary p-2' style='height: 100px;'>Результат</div>
		</div>
		
		<div class='row p-1 justify-content-center'>
			<div class="btn-group" role="group">
				<button type="button" class="btn btn-outline-primary btn-sm" onclick="add_math('frac{a}{b}')">a/b</button>
				<button type="button" class="btn btn-outline-primary btn-sm" onclick="add_math('dfrac{a}{b}')">A/B</button>
				<button type="button" class="btn btn-outline-primary btn-sm" onclick="add_str('a^x')"><span>a<sup>x</sup></span></button>
				<button type="button" class="btn btn-outline-primary btn-sm" onclick="add_str('a_x')"><span>a<sub>x</sub></span></button>
				<button type="button" class="btn btn-outline-primary btn-sm" onclick="add_str('a_x^y')"><span>a<sup>x</sup><sub>y</sub></span></button>
				<button type="button" class="btn btn-outline-primary btn-sm" onclick="add_math('sqrt{x}')">&radic;</button>
				<button type="button" class="btn btn-outline-primary btn-sm" onclick="add_math('sqrt[n]{x}')">n&radic;</button>
				<button type="button" class="btn btn-outline-primary btn-sm" onclick="add_math('sum')">&sum;</button>
				<button type="button" class="btn btn-outline-primary btn-sm" onclick="add_math2('displaystyle/sum_{i=1}^n')">n&sum;</button>
				<button type="button" class="btn btn-outline-primary btn-sm" onclick="add_math('sin')">sin</button>
				<button type="button" class="btn btn-outline-primary btn-sm" onclick="add_math('cos')">cos</button>
				<button type="button" class="btn btn-outline-primary btn-sm" onclick="add_math('arctan')">arctan</button>
				<button type="button" class="btn btn-outline-primary btn-sm" onclick="add_math('log')">log</button>
				<button type="button" class="btn btn-outline-primary btn-sm" onclick="add_math('infty')">&infin;</button>
				<button type="button" class="btn btn-outline-primary btn-sm" onclick="add_math('not =')">&ne;</button>
				<button type="button" class="btn btn-outline-primary btn-sm" onclick="add_str('^/circ')">&deg;</button>
				<button type="button" class="btn btn-outline-primary btn-sm" onclick="add_math('to')">→</button>
			</div>	
		</div>

		<div class='row p-1 justify-content-center'>
			<div class="btn-group" role="group">
				<button type="button" class="btn btn-outline-primary btn-sm" onclick="add_math('cdot')">⋅</button>
				<button type="button" class="btn btn-outline-primary btn-sm" onclick="add_math('pm')">±</button>
				<button type="button" class="btn btn-outline-primary btn-sm" onclick="add_math('div')">÷</button>
				<button type="button" class="btn btn-outline-primary btn-sm" onclick="add_math('approx')">≈</button>
				<button type="button" class="btn btn-outline-primary btn-sm" onclick="add_math('backsim')">∽</button>
				<button type="button" class="btn btn-outline-primary btn-sm" onclick="add_math('ge')">≥</button>
				<button type="button" class="btn btn-outline-primary btn-sm" onclick="add_math('le')">≤</button>
				<button type="button" class="btn btn-outline-primary btn-sm" onclick="add_math('parallel')">∥</button>
				<button type="button" class="btn btn-outline-primary btn-sm" onclick="add_math('perp')">⊥</button>
				<button type="button" class="btn btn-outline-primary btn-sm" onclick="add_math('Big(')">(.</button>
				<button type="button" class="btn btn-outline-primary btn-sm" onclick="add_math('bigg(')">(..</button>
				<button type="button" class="btn btn-outline-primary btn-sm" onclick="add_math('Bigg(')">(...</button>
				<button type="button" class="btn btn-outline-primary btn-sm" onclick="add_math('Big)')">.)</button>
				<button type="button" class="btn btn-outline-primary btn-sm" onclick="add_math('bigg)')">..)</button>
				<button type="button" class="btn btn-outline-primary btn-sm" onclick="add_math('Bigg)')">...)</button>
				<button type="button" class="btn btn-outline-primary btn-sm" onclick="add_math('Big[')">[.</button>
				<button type="button" class="btn btn-outline-primary btn-sm" onclick="add_math('Bigg[')">[..</button>
				<button type="button" class="btn btn-outline-primary btn-sm" onclick="add_math('Big]')">.]</button>
				<button type="button" class="btn btn-outline-primary btn-sm" onclick="add_math('Bigg]')">..]</button>
				<button type="button" class="btn btn-outline-primary btn-sm" onclick="add_math('lbrace')">{</button>
				<button type="button" class="btn btn-outline-primary btn-sm" onclick="add_math('rbrace')">}</button>
			</div>	
		</div>

		<div class='row p-1 justify-content-center'>
			<div class="btn-group" role="group">
				<button type="button" class="btn btn-outline-primary btn-sm" onclick="add_math('alpha')">α</button>
				<button type="button" class="btn btn-outline-primary btn-sm" onclick="add_math('beta')">β</button>
				<button type="button" class="btn btn-outline-primary btn-sm" onclick="add_math('gamma')">γ</button>
				<button type="button" class="btn btn-outline-primary btn-sm" onclick="add_math('delta')">δ</button>
				<button type="button" class="btn btn-outline-primary btn-sm" onclick="add_math('Delta')">Δ</button>
				<button type="button" class="btn btn-outline-primary btn-sm" onclick="add_math('varepsilon')">ε</button>
				<button type="button" class="btn btn-outline-primary btn-sm" onclick="add_math('theta')">θ</button>
				<button type="button" class="btn btn-outline-primary btn-sm" onclick="add_math('eta')">η</button>
				<button type="button" class="btn btn-outline-primary btn-sm" onclick="add_math('lambda')">λ</button>
				<button type="button" class="btn btn-outline-primary btn-sm" onclick="add_math('mu')">μ</button>
				<button type="button" class="btn btn-outline-primary btn-sm" onclick="add_math('xi')">ξ</button>
				<button type="button" class="btn btn-outline-primary btn-sm" onclick="add_math('pi')">π</button>
				<button type="button" class="btn btn-outline-primary btn-sm" onclick="add_math('rho')">ρ</button>
				<button type="button" class="btn btn-outline-primary btn-sm" onclick="add_math('sigma')">σ</button>
				<button type="button" class="btn btn-outline-primary btn-sm" onclick="add_math('tau')">τ</button>
				<button type="button" class="btn btn-outline-primary btn-sm" onclick="add_math('upsilon')">υ</button>
				<button type="button" class="btn btn-outline-primary btn-sm" onclick="add_math('varphi')">ϕ</button>
				<button type="button" class="btn btn-outline-primary btn-sm" onclick="add_math('chi')">χ</button>
				<button type="button" class="btn btn-outline-primary btn-sm" onclick="add_math('psi')">ψ</button>
				<button type="button" class="btn btn-outline-primary btn-sm" onclick="add_math('omega')">ω</button>
			</div>	
		</div>
			

		<div class='row ms-1'>
			<div class='col-2 px-0'>
				<input class="form-control form-control-sm mb-1" type="number" min='1' max='10' step='1' placeholder="size (1-10)" id='size_math_text' onchange="set_size_math_text(this.value)">
			</div>

			<div class='col-1 px-1'>
				<button type="button" class="btn btn-outline-primary btn-sm px-1" onclick="set_size_math_text('0')">bold</button>
			</div>

			<div class='col-3 text-end px-0 pt-1'>
				<small class="text-primary">color text/fon/border:</small>
			</div>

			<div class='col-1 px-1'>
				<input type="color" class="p-1 form-control form-control-sm form-control-color" id="color_math_text" onchange="set_math_color(this)" value="" title="цвет текста">
			</div>

			<div class='col-1 px-1'>
				<input type="color" class="p-1 form-control form-control-sm form-control-color" id="color_math_fon" onchange="set_math_color(this)" value="#ffffff" title="цвет фона">
			</div>

			<div class='col-1 px-1'>
				<input type="color" class="p-1 form-control form-control-sm form-control-color" id="color_math_border" onchange="set_math_color(this)" value="#ffffff" title="цвет рамки">
			</div>

			<div class='col-2 px-1 ms-4'>
				<button type="button" id='cr_math' class="btn btn-primary btn-sm text-center p-1 createEl">Вставить</button>
				<a href="https://katex.org/docs/supported" target="_blank"><i class="bi bi-patch-question pt-1"></i></a>
			</div>

		</div>
	`
}

//созданиее меню для OTHER
function create_divOther(){
	divOther.style = 'width: 115px; position: absolute; z-index: 3; border: 1px solid black; background: rgba(194, 226, 242, .1);'
	bt(divOther, 'cr_img', 'btn btn-warning btn-sm objMenu mb-1 me-1', 'img')
	bt(divOther, 'cr_table', 'btn btn-warning btn-sm objMenu mb-1', 'table')
	bt(divOther, 'cr_select_search', 'btn btn-warning btn-sm objMenu', 'select_search')
}


//создание меню по созданию Image
function create_divImg(){
	divImg.style.width = '160px'
	divImg.innerHTML = `
		<input class="form-control form-control-sm mb-1" type="text" placeholder="src" id='img_src'>
		<input class="form-control form-control-sm mb-1" type="text" placeholder="alt" id='img_alt'>
		<input class="form-control form-control-sm mb-1" type="number" placeholder="width" id='img_width'>
		<input class="form-control form-control-sm mb-1" type="number" placeholder="height" id='img_height'>
		<input class="form-control form-control-sm mb-1" type="text" placeholder="картинка - ссылка" id='img_href'>
		<button type="button" id='cr_img' class="btn btn-success m-1 ms-3 btn-sm createEl">Создать</button>
	`
}

//создание меню по созданию таблицы
function create_divTable(){
	divTable.style = 'width: 220px; position: absolute; z-index: 3; border: 1px solid black; background: rgba(194, 226, 242, .1);'
	
	divTable.innerHTML = `
		<input class="form-control form-control-sm mb-1" type="text" placeholder="id таблицы" id='table_id'>

		<input class="form-control form-control-sm mb-1" type="number" placeholder="кол-во столбцов" id='table_n_cols'>
		<input class="form-control form-control-sm mb-1" type="number" placeholder="кол-во строк" id='table_n_rows'>

		<input class="form-check-input" type="checkbox" id="table_small">
		<span class='form-text'>маленькая</span></br>

		<input class="form-check-input" type="checkbox" id="table_bold_line">
		<span class='form-text' title='черта под заголовком'>разделитель</span></br>		

		<input class="form-check-input" type="checkbox" id="table_striped">
		<span class='form-text' title='черта под заголовком'>полосатые строки</span></br>		
		
		<input class="form-check-input" type="checkbox" id="table_hover">
		<span class='form-text' title='выделение строки при наведении'>:hover</span></br>

		<select class="form-select form-select-sm mb-1" id='sel_table_border'>
			<option value="">границы</option>
			<option value="table-bordered">обычные</option>
			<option value="table-borderless">без границ</option>
			<option value="table-bordered border-primary">primary</option>
			<option value="table-bordered border-primary-subtle">primary-subtle</option>
			<option value="table-bordered border-secondary">secondary</option>
			<option value="table-bordered border-secondary-subtle">secondary-subtle</option>
			<option value="table-bordered border-success">success</option>
			<option value="table-bordered border-success-subtle">success-subtle</option>
			<option value="table-bordered border-danger">danger</option>
			<option value="table-bordered border-danger-subtle">danger-subtle</option>
			<option value="table-bordered border-warning">warning</option>
			<option value="table-bordered border-warning-subtle">warning-subtle</option>
			<option value="table-bordered border-info">info</option>
			<option value="table-bordered border-info-subtle">info-subtle</option>
			<option value="table-bordered border-light">light</option>
			<option value="table-bordered border-light-subtle">light-subtle</option>
			<option value="table-bordered border-dark">dark</option>
			<option value="table-bordered border-dark-subtle">dark-subtle</option>
			<option value="table-bordered border-black">black</option>
			<option value="table-bordered border-white">white</option>
		</select>

		<select class="form-select form-select-sm mb-1" id='sel_table_color'>
			<option value="">цвет таблицы</option>
			<option value="table-primary">primary</option>
			<option value="table-secondary">secondary</option>
			<option value="table-success">success</option>
			<option value="table-danger">danger</option>
			<option value="table-warning">warning</option>
			<option value="table-info">info</option>
			<option value="table-light">light</option>
			<option value="table-dark">dark</option>
		</select>

		<select class="form-select form-select-sm mb-1" id='sel_table_thead_color'>
			<option value="">цвет заголовка</option>
			<option value="table-primary">primary</option>
			<option value="table-secondary">secondary</option>
			<option value="table-success">success</option>
			<option value="table-danger">danger</option>
			<option value="table-warning">warning</option>
			<option value="table-info">info</option>
			<option value="table-light">light</option>
			<option value="table-dark">dark</option>
		</select>
		
		<label class="form-label form-text">Объединить ячейки:</label>
		<input class="form-control form-control-sm mb-1" id="table_span_num" type="text" title='Например: 1,5,6 - т.е. эти столбцы (сверху объединенные строки, снизу раздробленные строки) будут раздроблены на подстолбцы' placeholder="N-столбцов через ',' ">
		<input class="form-control form-control-sm" type="text" id="table_span_kol" title='кол-во подстолбцов для каждого выше указанного столбца (например: 2, 3, 4)' placeholder="кол-во подстолбцов через ','">

		<button type="button" id='cr_table' class="btn btn-success m-1 ms-5 btn-sm createEl">Создать</button>		
	`
}

//создание меню по созданию поиска по базе данных
function create_divSelectSearch(){
	divSelectSearch.style = 'width: 220px; position: absolute; z-index: 3; border: 1px solid black; background: rgba(194, 226, 242, .1);'
	divSelectSearch.innerHTML = `
		<input class="form-control form-control-sm mb-1" type="text" placeholder="id окна поиска" id='search_id'>
		<input class="form-control form-control-sm mb-1" type="text" placeholder="label над окном ввода" id='search_title'>
		<input class="form-control form-control-sm mb-1" type="text" placeholder="placeholder" id='search_placeholder'>
		<input class="form-control form-control-sm mb-1" type="number" placeholder="высота окна поиска, px" id='search_h'>
		<input class="form-control form-control-sm mb-1" type="text" title="название переменной, содержащей массив объектов" placeholder="имя переменной БД" id='search_bd'>
		
		<input class="form-check-input" type="checkbox" id="search_hide">
		<span class='form-text' title='выделение строки при наведении' onclick='search_hide.checked = true'>выпадающий список поиска</span></br>

		<button type="button" id='cr_select_search' class="btn btn-success m-1 ms-5 btn-sm createEl">Создать</button>
	`
}

//созданиее меню для SCRIPT
function create_divScript(){
	if (document.documentElement.clientWidth < 420) divScript.style.width = '360px'; else divScript.style.width = '720px'

	divScript.innerHTML = `<span>Код, который помещен в тег script. <br>
	Переменные объявлять только через var:</span>`
	
	let area_index = cr(divScript, 'textarea', 'form-control')
	area_index.style = 'height: 600px; font-size: 11pt;'
	if (mobile) area_index.style = 'height: 400px; font-size: 10pt;'
	area_index.value = `var bd_fruits = [
		{name: "апельсин", age: "1", price: "100"},
		{name: "банан", age: "3", price: "100"},
		{name: "ананас", age: "4", price: "100"},
		{name: "яблоко", age: "5", price: "100"},
		{name: "груша", age: "6", price: "100"},
		{name: "киви", age: "7", price: "100"},
		{name: "виноград", age: "11", price: "100"},
		{name: "арбуз", age: "13", price: "100"}]`

	let btn_add_script =  bt(divScript, '', 'btn btn-success m-1 ms-5 btn-sm', 'Сохранить код')

	btn_add_script.onclick = ()=> {
		if (document.getElementById('indexJS')) {
			indexJS.remove()
		}
		let code = area_index.value
		let _script = cri(document.body, 'script', 'indexJS', '')
		_script.innerHTML = code
		divScript.hidden = true
	}
}
