
//СОЗДАНИЕ ЭЛЕМЕНТА HTML по нажатию на конечные кнопки меню c id кнопки *********************************************************************
function create_elem(id) {
	
	if (id == 'bt_cr_row') {															//row											
		let area = bt_cr_row.parentElement.previousSibling	//предыдущий перед кнопкой элемент - textarea
		if (area.value == '') area.click()
		let _class =  area.value 
		if (!area.value.match(/border/)) _class += ' border border-info' //если в создаваемом div уже содержится border, то системную рамку не нужно создавать (УДАЛИТЬ ПРИ ЭКСПОРТЕ)
		let area_text = area.previousSibling
		let div = cri(sel_element, 'div', divRow_id.value, _class, area_text.value)
		div.style = 'min-height: 20px;'
		cleaning_forms(divRow) //обнуление всех элементов divRow
	}

	if (id == 'bt_cr_col') {															//col
		let area = bt_cr_col.parentElement.previousSibling 	
		if (area.value == '') area.click()
		let _class =  area.value 
		if (!area.value.match(/border/)) _class += ' border border-info' //если в создаваемом div уже содержится border, то системную рамку не нужно создавать (УДАЛИТЬ ПРИ ЭКСПОРТЕ)
		let area_text = area.previousSibling
		let div = cri(sel_element, 'div', divCol_id.value, _class, area_text.value)
		div.style = 'min-height: 20px;'
		cleaning_forms(divCol)
	}	


	if (id == 'bt_cr_div') {															//div
		let area = bt_cr_div.parentElement.previousSibling 	//предыдущий перед кнопкой элемент - textarea
		if(area.value == '') area.click() 
		let _class =  area.value 
		if (!area.value.match(/border/)) _class += ' border border-info' //если в создаваемом div уже содержится border, то системную рамку не нужно создавать (УДАЛИТЬ ПРИ ЭКСПОРТЕ)
		let area_text = area.previousSibling
		let div = cri(sel_element, 'div', divDiv_id.value, _class, area_text.value)
		div.style = 'min-height: 20px;'
		cleaning_forms(divDiv)
	}
	
	if (id == 'bt_cr_cols_from_input') {												//row+cols
		
		let sumcols = 12		//сумма колонок
		let arr_input = []

		for (let inp of rowcols.querySelectorAll('input')){			
			if (sumcols >=0) {
				sumcols -= inp.value 	//проверка на сумму колонок
			} else {
				alert ('количество столбцов должно быть не более 12')
				arr_input = []
				//не скрываем форму, чтобы внести изменения
				divCols.hidden = false
				return
			}
			if (inp.value) arr_input.push(inp.value)
		} 
		
		let row = cr(sel_element, 'div', 'row border border-info')

		for (let val of arr_input) {
			let div = cr(row, 'div', `col-${val} border border-info`)
			div.style = 'min-height: 20px;'
			div.title = `col-${val}`  //перенести потом в свойства
		}
		cleaning_forms(rowcols)
		return
	}

	if (id == 'btn_cr_card') {															//div card

		let card = cr(sel_element, 'div', 'card')
		let _body = null
		let _link = null
		let _img = null

		if (card_body.value !== '') {
			_body = cr(card, 'div', 'card-body')
			_body.innerHTML += `<p class="card-text">${card_body.value}</p>`
		} else {
			alert('необходимо заполнить card-body')
			return
		}

		if (card_title.value !== '') {
			let _title = cr('h5', 'card-title', card_title.value)
			_body.prepend(_title)
		}

		if (card_link_name.value !== '' && card_link_path.value !== '') {
			_link = cr(_body, 'a', '', card_link_name.value)
			_link.setAttribute('href', card_link_path.value)

			if (card_link_btn.checked) _link.className = "btn btn-primary"
		}
		

		if (card_width.value !== '') {
			let str = card_width.value
			//елси заканчивается на rem
			if (str.slice(str.length-3) == 'rem') card.style = "width: " + str.replace(/[^0-9\.]/g,"") + "rem"
			//если заканчивается на %
			if (str.slice(str.length-1) == '%')  card.classList.add("w-" + str.slice(0, str.length-1))
		} 

		if (card_img_src.value !== '') {
			_img = cr('img', '')
			_img.src = card_img_src.value
		
			if (card_img_alt.value !== '') {
				_img.setAttribute('alt', card_img_alt.value)
			}	else {
				alert('заполните img src')
			}
			
			if (card_position_image.value !== '') {
				let pos = card_position_image.value
				if (pos == 0) {
					card.prepend(_img)
					_img.className = "card-img-top"
				} else if (pos == 1) {
					card.append(_img)
					_img.className = "card-img-bottom"
				} else if (pos == 2) {
					let _row = cr(card, 'div', 'row g-0')
					let col_1 = cr(_row, 'div', 'col-4')
					let col_2 = cr(_row, 'div', 'col-8')
					col_1.append(_img)
					_img.className = "img-fluid rounded-start"
					col_2.append(_body)
				} else if (pos == 3) {
					let _row = cr(card, 'div', 'row g-0')
					let col_1 = cr(_row, 'div', 'col-8')
					let col_2 = cr(_row, 'div', 'col-4')
					col_2.append(_img)
					_img.className = "img-fluid rounded-end"
					col_1.append(_body)
				} 
			} else {
				alert('заполните img src')
			}
		}

		//цвет карточки
		if (card_color.value !== '') card.classList.add(card_color.value)

		cleaning_forms(divCard)
		
	}
	

	if (id == 'btn_cr_btn') {															//button
		let classBtn = 'btn btn-'
		if (outlineInput.checked) classBtn += 'outline-'
		classBtn += selButClass.value
		
		if (lgBtn.checked)  classBtn += ' btn-lg'
		if (smBtn.checked)	classBtn += ' btn-sm'
		
		let btn = bt(stage, inpButId.value, classBtn, inpButVal.value)
		
		if (blockBtn.checked) {
			let div = cr('div', 'd-grid gap-2')
			div.append(btn)
			sel_element.append(div)
		} else {

			sel_element.append(btn)
		}

		cleaning_forms(divButton)
	}
	
	if (id == 'btn_cr_input') {															//input
		let _classInput = 'form-control'
		let label = cr('label', 'form-label', inp_label.value)

	
		if (lg_inp.checked)  _classInput += ' form-control-lg'
		if (sm_inp.checked)	_classInput += ' form-control-sm'

		if (inp_label.value == '') {
			let input = cri(sel_element, 'input', inp_id.value, _classInput)
				input.placeholder = inp_placeholder.value
				input.type = sel_inp_type.value
				if(label.hasAttribute('for')) label.removeAttribute('for')	//если у label есть аттрибут for, то удалить его !
		} else {
			//если есть label
			label.setAttribute('for', inp_id.value);			

			let input = cri('input', inp_id.value, _classInput)
				input.placeholder = inp_placeholder.value
				input.type = sel_inp_type.value

			if (inp_label_in_div.checked) {
				let parent = cr(sel_element, 'div', '')
				parent.append(label)
				parent.append(input)	
			} else if (inp_label_in_divrow.checked) {
				let parent = cr(sel_element, 'div', 'row')
				let parent1 = cr(parent, 'div', 'col-auto')
				let parent2 = cr(parent, 'div', 'col-auto')

				label.className = 'col-form-label'			
				parent1.append(label)
				parent2.append(input)
			} else {
				sel_element.append(label)
				sel_element.append(input)
			}
		}

		cleaning_forms(divInput)
	}

	if (id == 'cr_select') {														// SELECT
		let _classSelect = 'form-select'

		if (select_radio_large.checked)  _classSelect += ' form-select-lg'
		if (select_radio_small.checked)	_classSelect += ' form-select-sm'

		  			
		if (select_label.value) {
			let _label = cr(sel_element, 'label', 'form-label form-text', select_label.value)
			if(select_id.value) _label.setAttribute('for', select_id.value) 
		}  

		let select = cri (sel_element, 'select', select_id.value, _classSelect)
		
		if (multiple_select.checked) select.setAttribute('multiple', '')
		
		//добавление option
		let arr_option = divSelect.querySelectorAll('div.col-8 input')
		
		for (let inp of arr_option) {
			cr(select, 'option', '', inp.value)								
		}

		let arr_option_val = divSelect.querySelectorAll('div.col-4 input')
		
		arr_option_val.forEach((inp,i,arr) => {
			select.options[i].value = inp.value
		});

		cleaning_forms(divSelect)
		
		//удаляем ранее созданные поля option и value
		for (let div_row of divSelect.querySelectorAll('div.for_delete')) {
			div_row.remove()
		}

	}

	if (id == 'cr_textarea') {																// TEXTAREA
		let textarea = cri ('textarea', textarea_id.value, 'form-control')
		
		if (textarea_label.value !== '') {
			let div = cr(sel_element, 'div', 'form-floating')
			div.append(textarea)
			let label = cr(div, 'label', '', textarea_label.value)
			label.setAttribute('for', textarea_id.value)
		} else {
			sel_element.append(textarea)
			if (textarea_placeholder.value !== '') textarea.placeholder = textarea_placeholder.value
		} 

		if (textarea_height.value !== '') textarea.style = `height: ${textarea_height.value}px`

	cleaning_forms(divTextArea)
	}

	if (id == 'cr_checkbox') {																	// CHECKBOX
		if (checkbox_id.value == '' || checkbox_label.value == '') {
			alert('необходимо заполнить id и label')
			divCheckbox.hidden = false
			return
		}
	
		let div = cr(sel_element, 'div', 'form-check')
		
		let input = cri (div, 'input', checkbox_id.value, 'form-check-input')
			input.type = 'checkbox'
			
		let label = cr (div, 'label', 'form-check-label', checkbox_label.value)
			label.setAttribute('for', checkbox_id.value)

		if (ch_div.checked) div.classList.add('form-check-inline')
		
		if (ch_switch.checked) {
			div.classList.add('form-switch')
			input.setAttribute('role', 'switch')
		}
		
		if (ch_checked.checked) input.checked = true
		
		if (ch_formtext.checked) label.classList.add('form-text')

		cleaning_forms(divCheckbox)
	}

	if (id == 'cr_radio') {																		// RADIO

		if (radio_id.value == '' || radio_label.value == '' || radio_name.value == '') {
			alert('необходимо заполнить id, label, name')
			divRadio.hidden = false
			return
		}

		let div = cr(sel_element, 'div', 'form-check')
		
		let input = cri (div, 'input', radio_id.value, 'form-check-input')
			input.type = 'radio'
			input.setAttribute('name', radio_name.value)
			
		let label = cr (div, 'label', 'form-check-label', radio_label.value)
			label.setAttribute('for', radio_id.value)

		if (radio_div.checked) div.classList.add('form-check-inline')
				
		if (radio_checked.checked) input.checked = true
		
		if (radio_formtext.checked) label.classList.add('form-text')
		
		let old_name = 	radio_name.value //сохраним после очистки name
		cleaning_forms(divRadio)
		radio_name.value = old_name
	}
	
	if (id == 'cr_text') {																			//TEXT
		
		let txt = area.value																
		sel_element.insertAdjacentHTML("beforeend", txt)
		
		//очистка полей
		area.value = ''
	} //text


	if(id == 'cr_img') {
		let img																						//img
		if (img_src.value !== '') {
			img = cr(sel_element, 'img', '')
			img.setAttribute('src', img_src.value)
		} else {
			alert ('укажите путь к изображению src')
			divImg.hidden = false
			return
		}
		if (img_alt.value !== '') img.setAttribute('alt', img_alt.value)
		if (img_width.value !== '') img.setAttribute('width', img_width.value)
		if (img_height.value !== '') img.setAttribute('height', img_height.value)

		if(img_href.value !== '') {
			let _a = cr(sel_element, 'a')
			_a.setAttribute('href', img_href.value)
			_a.append(img)
		}
	}

	if (id == 'cr_table') {																			//table
		let _table 
		let _cols, _rows
		let arr_num_cols = []
		let arr_cols = []

		if (mobile) {
			let _div = cr(sel_element, 'div', 'table-responsive')
			_table = cri(_div, 'table', table_id.value, 'table')
		} else {
			_table = cri(sel_element, 'table', table_id.value, 'table')
		}

		let _thead = cr(_table, 'thead')
		let _tbody = cr(_table, 'tbody')

		if (table_n_cols.value == '' || table_n_rows.value == '') {
			alert("Необходимо заполнить поле с количеством колонок и столбцов!")
			divTable.hidden = false
			return
		} else {
			//если заполнены столбцы и строки, создаем таблицу

			if (table_span_num.value !== '' || table_span_kol.value !== '') {
				//table_span_num
				arr_num_cols = table_span_num.value.match(/\d{1,}/g)		//получаем массив номеров колонок для объединения
				//table_span_kol
				arr_cols = table_span_kol.value.match(/\d{1,}/g)			//из инпута формируем массив чисел (одно и двузначных)

				let arr_cols_sum = 0

				for (let num of arr_cols) {
					arr_cols_sum += +num
				}

				//проверка условий: 1. количество должно совпадать
				if (arr_num_cols.length !== arr_cols.length) {
					alert('Количество столбцов для объединения должно совпадать с количеством подстолбцов для каждого столбца')
					divTable.hidden = false
					return
				}

				//2. количество подстолбцов и обычных столбцов в сумме должно равнятся общему количеству столбцов????
				if (arr_cols_sum > table_n_cols.value) {
					alert('Количество подстолбцов превышает общее количество столбцов, исправьте ошибку')
					divTable.hidden = false
					return
				}
				

			}

			//создание таблицы
			_cols = table_n_cols.value
			_rows = table_n_rows.value

			//строки
			for (let i = 0; i < table_n_rows.value; i++) {
				let _tr
				if (i == 0) {
					_tr = cr(_thead, 'tr')
				 } else {
					_tr = cr(_tbody, 'tr')
				 }

				//столбцы
				for (let j = 0; j < _cols; j++) {
					if(_tr.closest('thead')) {
						let _th = cr(_tr, 'th', 'align-middle text-center', 'Ячейка ' + j)
					} else {
						cr(_tr, 'td', '', 'ячейка ' + j)
					}
					
				}
			}
		}
		
		if (table_small.checked) _table.classList.add('table-sm')
		if (table_bold_line.checked) _tbody.classList.add('table-group-divider')
		if (table_striped.checked) _table.classList.add('table-striped')
		if (table_hover.checked) _table.classList.add('table-hover')

		if (sel_table_border.value !== '') _table.className = _table.className + ' ' + sel_table_border.value
		if (sel_table_color.value !== '') _table.className = _table.className + ' ' + sel_table_color.value
		if (sel_table_thead_color.value !== '') _thead.className = _thead.className + ' ' + sel_table_thead_color.value

		//объединяем строки и столбцы
		if (arr_num_cols.length > 0) {

			//создаем вторую строку со столбцами для объединения
			let tr2 = cr(_thead, 'tr')

			for (let j = 0; j < _cols; j++) {
				let _th = cr(tr2, 'th', 'align-middle text-center', 'Ячейка ' + j)
			}

			//запоминаем первую строку до объединения
			let arr_row_1 = _table.rows[0].cells

			arr_num_cols.forEach((num, i, arr)=>{
				let td_row = ''

				let td = _thead.rows[0].cells[arr_num_cols[i]-1]
				td.setAttribute('colspan', arr_cols[i])

				//удаляем необходимые ячейки справа
				for (let j=1; j<arr_cols[i]; j++){
					_thead.rows[0].cells[arr_num_cols[i]].remove()
				}
			})

			//если ячейка не содержит аттрибут то соединить ее с нижней elem.hasAttribute(name)
			for (let td of _thead.rows[0].cells) {
				if (!td.hasAttribute('colspan')) {
					td.setAttribute('rowspan', '2')
					_thead.rows[1].cells[0].remove() //удаляем последние ячейки второго ряда thead
				}
			}
			


		} //объединение ячеек

		_table.onclick = function (event) {
			let td 
			//console.log(event.target.tagName)
			if (event.target.closest('td')) {
				td = event.target.closest('td')
			} else if (event.target.closest('th')){
				td = event.target.closest('th')
			}
			if (!td) return
			if (!_table.contains(td)) return

			td.innerHTML = ''
			let inp = cr(td, 'input', 'form-control form-control-sm my-0')
			inp.style = "width: 80px"
			inp.type = "text"
			if(td.classList.contains('text-center')) inp.classList.add('mx-auto')
			
			inp.focus()
			inp.onblur = (e)=> {
				td.textContent = inp.value
				inp.remove()
			}
		}

		//очисщаем исходные данные по таблице
		table_id.value = ''
		table_n_cols.value = table_n_rows.value = ''
		table_span_num.value = table_span_kol.value = ''
		table_small.checked = table_bold_line.checked = table_striped.checked = table_hover.checked = false
		sel_table_border.value = sel_table_color.value = sel_table_thead_color.value = false

	} //table


	if (id == 'cr_select_search') {																//select_search
			
		let div_select_search = cr(sel_element, 'div', 'row border border-primary m-0 pt-1')
		if (search_title.value !== '') cr(div_select_search, 'label', 'form-label form-text mb-0 ms-2', search_title.value)

		let div_input = cr(div_select_search, 'div', 'input-group')						//строка поиска с крестиком
			div_input.innerHTML = `
				<span class="input-group-text" id="basic-addon1">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
					<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path></svg>
				</span>
			`
			let _inp = cri(div_input, 'input', search_id.value, 'form-control') //поле ввода
										
			let _btn_inp_clear = cr(div_input, 'i', 'bi bi-x-circle fs-4 input-group-text')	//крестик 
			//регистрируем кнопки свернуть и развернуть  только для выпадающего списка
			_btn_inp_hide = cr(div_input, 'i', 'bi bi-caret-up-square fs-4 input-group-text')	//свернуть
			_btn_inp_show = cr(div_input, 'i', 'bi bi-caret-down-square fs-4 input-group-text')	//развернуть
			_btn_inp_hide.hidden = _btn_inp_show.hidden = true

		if (search_placeholder.value !== '') _inp.placeholder = search_placeholder.value
		
		let div_search = cr(div_select_search, 'div', 'row ms-1 ps-1 pe-5 select')
			let div_search_col = cr(div_search, 'div', 'col-12 ps-0 pe-0 ms-3 mb-2 rounded-1 bg-body border')

			let div_sel = cr(div_search_col, 'div', 'ps-2 pb-1 border-bottom bg-secondary-subtle')			//div с выбранными элементами
				div_sel.hidden = true
				div_sel.style = "max-height: 3.1em" 
				div_sel.style.overflow = 'auto'

			let div_change = cr(div_search_col, 'div', 'ps-2 pb-1 mb-1')									//div с элементами поиска	

			div_change.style = "max-height: 200px"
			div_change.style.overflow = 'auto'


		if(search_hide.checked) {		
			div_search_col.hidden = true
			div_search_col.classList.remove('col-12')
			div_search_col.style = (search_h.value !== '') ? "max-height: " + search_h.value + "px" : "max-height: 300px"
			div_search_col.style.position = 'absolute'
			div_search_col.style.zIndex = 2
			div_search_col.style.width = div_search.clientWidth - 20 + 'px'
		} else {
			div_search_col.style = (search_h.value !== '') ? "height: 120px; max-height: " + search_h.value + "px" : "height: 120px"
		}

		div_search_col.style.overflow = 'hidden' //Переполняющее содержимое не отображается

		let arr_bd = eval(search_bd.value) // массиву присваиваем значение переменной БД
		//создаем чеки согласно ИМЕНАМ! базы данных
		for (let obj of arr_bd) {
			let _div = cr(div_change, 'div', 'form-check')
			let inp = cr(_div, 'input', 'form-check-input')
				inp.type = "checkbox"
				let _label = cr(_div, 'label', 'form-check-label', obj.name)
		}

		//смена кнопок : крестик - свернуть - разернуть
		_btn_inp_clear.onclick = (e) => {
			_inp.value = ''	
			_inp.dispatchEvent(new Event('input', { bubbles: true })); //имитация инпут, чтобы исчезали предложенные варианты

			if(div_sel.children.length) { 			//если есть выбранные элементы - то кнопка свернуть
				if(!div_sel.hidden) {		//если выбранные элементы не скрыты
					_btn_inp_clear.hidden = true
					_btn_inp_hide.hidden = false
				} else {					//если выбранные элементы скрыты
					_btn_inp_clear.hidden = true
					_btn_inp_show.hidden = false
				}
			} 
		}

		_btn_inp_hide.onclick = (e) => {
			div_sel.hidden = true
			_btn_inp_hide.hidden = true
			_btn_inp_show.hidden = false
		}	
		_btn_inp_show.onclick = (e) => {
			div_sel.hidden = false
			_btn_inp_show.hidden = true
			_btn_inp_hide.hidden = false
		}


		//обработка ввода текста в поле поиска
		let search_hide_cheked = search_hide.checked //запоминаем чек до обнуления
		
		//обработчик на выбор элемента (элемент вырезается и вставляется в div и обратно)
		div_change.onclick = (e) => {

			if (e.target.closest('div.form-check')) {
				div_sel.hidden = false
				let _div = e.target.closest('div.form-check').cloneNode(true)	//клонируем div
				div_sel.append(_div)
				e.target.closest('div.form-check').hidden = 'true'
				e.target.closest('div.form-check').firstChild.checked = false
				_div.classList.add('form-check-inline')
				let inp = _div.querySelector('input')
				inp.checked = true
			}
		}

		//при снятии чека возвращаем ранее выбранный элементы в общий список
		div_sel.onclick = (e) => {
			let target_div = e.target.closest('div.form-check')
			let target_name = target_div.querySelector('label').textContent

			if (target_div) {
				//ищем копию в div_change - отображаем - удаляем элемент в div_select
				for(let label of div_change.querySelectorAll('label')){
					if (label.textContent == target_name) {
						label.parentElement.hidden = false
						target_div.remove()

						if (div_sel.children.length == 0) {
							div_sel.hidden = true //скрываем блок, если нет элементов выбранных
							_btn_inp_hide.hidden = true //скрываем при необходимости кнопку для сворачивания выбранных эл-тов
							_btn_inp_clear.hidden = false //отображаем кресик
							if (search_hide_cheked && (_inp.value.length < 2)) {
								div_search_col.hidden = true
							}
						}
						return
					}				
				}
			}


		}

		_inp.oninput = (e)=> {
			let regex = new RegExp(e.target.value, 'i') //регулярка с учетом регистра
			
			if(e.target.value == '') {
				_btn_inp_clear.click() //иммитируем клик по кнопке очистить при удалении всех букв
			} else {
				_btn_inp_clear.hidden = false
				_btn_inp_hide.hidden = _btn_inp_show.hidden = true
			}
			

			//для выпадающего списка
			if (search_hide_cheked) {
				if (e.target.value.length < 2) {		//минимум 2 символа для дальнейшей обработки
					div_change.hidden = true
					div_search_col.hidden = Boolean(!div_sel.children.length)
					return 
				}


				for (let div of div_change.children){
					if (!regex.test(div.lastChild.textContent)){
						div.hidden = true
					} else {
						div.hidden = div_change.hidden = div_search_col.hidden = false	
					}
				}

			} else {
			//не для выпадающего списка

			}
		}
		

		//очистка полей
		search_title.value = ''
		search_id.value = ''
		search_placeholder.value = ''
		search_h.value = ''
		search_bd.value = ''
		search_hide.checked =false
	} // select_search

}