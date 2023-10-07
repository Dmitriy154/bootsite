//быстрая отладка. не показывает место вызова
function lg(elem) {return console.log(elem)};


/*Только div
свойства элемента: 
p - parent (строка или node, если p нет, то общий родитель с предыдущим div, p=1 - движение вправо, p=-2 - движение влево
i - id (если 0, то как и свойство), c - class, t - textContent, h - innerHTML, a - attribute (name value), 
s - style 
*/

function builderKadr(obj) {
    // obj - общая структура, _obj - данные div 
    let prevDiv; //предыдущий элемент stage, stage1, r1 ...

    for (let key in obj) {
        let _obj = obj[key]; //{p:1, c: 'col-sm-3', t: '...'}

        let div = document.createElement('div');
        
        if ("p" in _obj) {
            if (typeof _obj.p == "string")  _obj.p =  document.getElementById(_obj.p); 
            if (_obj.p == 1) _obj.p = prevDiv;
            if (_obj.p < 0) {
                let num = -_obj.p;               
                _obj.p = prevDiv.parentElement;
                for (let i=1; i <= num; i++){
                    _obj.p = _obj.p.parentElement;
                }
            }
            _obj.p.append(div);  
        } else {
           prevDiv.parentElement.append(div);
        }
        builderFor(_obj, div); // проходим по свойствам 

        prevDiv = div; 
    }  //  for
} //function builder


//создание колонок и строк
function builderDiv (parentRow, obj) {
    let div = document.createElement('div');

    builderFor(obj, div);
    parentRow.append(div);

    //эти row создаются только в колонках
    if("row1" in obj) builderDiv(div, obj.row1);  //если больше, получить массив имен свойств и определить макс. количество
    if("row2" in obj) builderDiv(div, obj.row2);
    if("row3" in obj) builderDiv(div, obj.row3);
    if("row4" in obj) builderDiv(div, obj.row4);
    if("row5" in obj) builderDiv(div, obj.row5);
    if("row6" in obj) builderDiv(div, obj.row6);
    if("row7" in obj) builderDiv(div, obj.row7);
    if("row8" in obj) builderDiv(div, obj.row8);
    if("row9" in obj) builderDiv(div, obj.row9);
    if("row10" in obj) builderDiv(div, obj.row10);
    if("row11" in obj) builderDiv(div, obj.row11);
    if("row12" in obj) builderDiv(div, obj.row12);
    if("row13" in obj) builderDiv(div, obj.row13);
    if("row14" in obj) builderDiv(div, obj.row14);
    if("row15" in obj) builderDiv(div, obj.row15);
    if("row16" in obj) builderDiv(div, obj.row16);
    if("row17" in obj) builderDiv(div, obj.row17);
    if("row18" in obj) builderDiv(div, obj.row18);
    if("row19" in obj) builderDiv(div, obj.row19);
    if("row20" in obj) builderDiv(div, obj.row20);
}

function builderFor(obj, div) {
    if ("i" in obj) div.id = obj.i;  
    if ("t" in obj) div.textContent = obj.t;
    if ("h" in obj) div.innerHTML = obj.h;
    if ("a" in obj) {
        let str = obj.a;
        let pos = str.indexOf(' '); //позиция пробела для разделения на name и value
        let name = str.slice(0, pos);
        let value = str.slice(pos+1);
        div.setAttribute(name, value);
    }
    if ("s" in obj) div.style = obj.s; 

    if ("c" in obj) {
        obj.c = obj.c.replace('jcc', 'justify-content-center');     //мои сокращения
        obj.c = obj.c.replace('tc', 'text-center');
        div.className = obj.c;
    }
    
    if ("c1" in obj) builderDiv(div, obj.c1);
    if ("c2" in obj) builderDiv(div, obj.c2);
    if ("c3" in obj) builderDiv(div, obj.c3);
    if ("c4" in obj) builderDiv(div, obj.c4);
    if ("c5" in obj) builderDiv(div, obj.c5);
    if ("c6" in obj) builderDiv(div, obj.c6);
    if ("c7" in obj) builderDiv(div, obj.c7);
    if ("c8" in obj) builderDiv(div, obj.c8);
    if ("c9" in obj) builderDiv(div, obj.c9);
    if ("c10" in obj) builderDiv(div, obj.c10);
    if ("c11" in obj) builderDiv(div, obj.c11);
    if ("c12" in obj) builderDiv(div, obj.c12);


    
    obj.div = div; //ссылка на создаваемый div
}

//Создание строки и столбцов внутри. ...args - -пример row('id1', 'mt-2', 'col-1 col-2 col-9')
function row(id, _class, ...args) {
    let row = document.createElement('div');
        row.className = 'row ' + _class;
        row.id = id;
        row.c = [0]; //добавим нулевой элемент, чтобы колонки называть как есть - первая, вторая
    
    for (let arg of args) {
        let c = document.createElement('div');
            c.className = arg;

        //массив ссылки на col
        row.c.push(c);
        row.append(c);
    }
    
   return row;
}

//создание кнопки 
function bt(parent, id, _class, title) {
    let bt = document.createElement('button');
    if(id !== '') bt.id = id;
    bt.className = _class;
    bt.textContent = title;
    bt.type = 'button';
    parent.append(bt)
    return bt;
}

/*создание элемента без родителя или с родителем 
1. cr(selectGM, 'option', '', obj.name); - создание option в select (родитель)
2. cr('div', 'col-1', 'Привет');*/

function cr (...args) {
    //проверка, если первый параметр node то он является роидтелем, если строка - то тег. 
    //Затем класс и тексконтент, например создам select cr('select', '', '') с родителем cr(stage, 'select', 'class', 'textContent')
    if (typeof args[0] === 'string') {
        let elem = document.createElement(args[0]);
        if (args[1]) elem.className = args[1];
        if (args[2]) elem.textContent = args[2];
        return elem;
    } else {
        let elem = document.createElement(args[1]);
        if (args[2]) elem.className = args[2];   
        if (args[3]) elem.textContent = args[3];
        args[0].append(elem);
        return elem;       
    }
    
}

/*создание элемента без родителя или с родителем  c ID, затем класс и текстконтент
1. cri('div', 'id1' 'col-1', 'Привет');
2. cri(stage1, 'div', 'id1', 'col-1', 'Привет');*/

function cri (...args) {
    //проверка, если первый параметр node то он является роидтелем, если строка - то создаваемый тег . Затем класс и тексконтент
    if (typeof args[0] === 'string') {
        let elem = document.createElement(args[0]);
        if (args[1]) elem.id = args[1];
        if (args[2]) elem.className = args[2];
        if (args[3]) elem.textContent = args[3];
        return elem;
    } else {
        let elem = document.createElement(args[1]);
        if (args[2]) elem.id = args[2];
        if (args[3]) elem.className = args[3];
        if (args[4]) elem.textContent = args[4];
        args[0].append(elem);
        return elem;       
    }
}

/*создание модульного окна
id - id модульного окна, необходима для вызывающего элемента
title и body - строка или тег мод. окна */
function createModal (id, title, body) {
    let module = document.createElement('div');
    module.innerHTML = `
        <div class="modal fade" id=${id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">${title}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">${body}</div>
                </div>
            </div>
        </div>
    `;
    if (title == '') module.querySelector('.modal-title').remove(); //если параметр title пустой, то удаляем этот элемент
    document.body.append(module);
}


//создание уведомления 
function createNote(parent, text) {
    let cardHelp = cr(parent, 'div', 'alert alert-success alert-dismissible fade show mx-1 mb-0 py-2');                    
    cardHelp.setAttribute('role', 'alert');      
    cardHelp.innerHTML = ` 
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-info-circle-fill" viewBox="0 0 20 20">
        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
        </svg>` +  `${text}` + `<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> `;   
}


/////////////////   ФУНКЦИИ КОНСТРУКТОРА

//показать меню в точке клика
function show_menu (e, div) {
    div.hidden = false //размещен тут, чтобы была доступна 
    let dx = document.documentElement.clientWidth - div.clientWidth - 5
    let dy = document.documentElement.clientHeight - div.clientHeight - 5

    if (div == mainMenu){
        _x = `${e.pageX}px`
        _y = `${e.pageY}px`
	}
    
    //условие, чтобы меню не уходило за пределы документа
    if (e.pageX > dx) _x = `${dx}px`
    if (e.pageY > dy) _y = `${dy}px`
    
    div.style.left = _x
    div.style.top = _y
}

//регистрируем и обозначаем выделенный элемент
function reg_sel_div(_div) {
	reset()
	if (_div.classList.contains('border-light')) _div.classList.remove('border-light')
	_div.classList.add('border-danger')
	sel_element = _div
}

//выделяем созданный элемент при наведении
function reg_over_element(elem) {
    if (!elem.classList.contains("bg-danger-subtle")) {
        elem.classList.add("bg-danger-subtle")
        //убираем подсветку после отведения курсора мыши
        elem.onpointerout = ()=> {
            elem.classList.remove("bg-danger-subtle")
        }
    }
}

//скрываем все разделы меню
function 	hiddenMenu() {
	for (let elem of Menu.children){
		if (!elem.hidden) elem.hidden = true 
	}
}							

//сброс выделения
function reset(){
	sel_element.classList.remove('border-danger')
	sel_element = stage
}

function add_teg(teg) {
    let val = ''
    
    if (teg == 'p') val = '<p></p>'
    if (teg == 'span') val = '<span></span>' 
    if (teg == 'a') val = '<a href="#"></a>'
    if (teg == 'img') val = '<img src="#" alt="#"></img>'
    if (teg == 'tooltip') val = `<i class="bi bi-question-diamond fs-5 text-warning" onpointerout = "tooltip.hidden = true".0 onpointerover = "show_tooltip(this, 'ПОДСКАЗКА')"></i>`


    //проверка на выделенный фрагмент
    if (area.selectionStart == area.selectionEnd) {
        area.setRangeText(val, area.selectionStart, area.selectionEnd, "end");
        return; // ничего не выделено
    }

    let selected = area.value.slice(area.selectionStart, area.selectionEnd);
    let text = val.replace("><", `>${selected}<`)
    area.setRangeText(`${text}`);
}

//ИМПОРТ ФУНКЦИИ
function show_tooltip(elem, text){ 
    
    //позиционирование tooltip
    let coords = elem.getBoundingClientRect()
    tooltip.hidden = false
    tooltip.textContent = text

    let left, top
    tooltip.style.left = '0px' //размещаем, чтобы обновилось tooltip.offsetWidth

    if((coords.left-10) < (document.documentElement.clientWidth - tooltip.offsetWidth)){
       left = coords.left
    } else {
       left = document.documentElement.clientWidth - tooltip.offsetWidth - 10
    }
    
    if(coords.top < (tooltip.offsetHeight + 10)) {
        top = coords.bottom + 10
    } else {
        top = coords.top - tooltip.offsetHeight - 10
    } 
    if (left < 0) left = 0
    if (top < 0) top = 0
    
    tooltip.style.left = left + 'px'
    tooltip.style.top = coords.bottom + 10 + 'px'

}

//вставка <p> или <span> с классом
function paste_class (_class) {
    if (!_class) return
    //если класс применяется к абзацу
    if (_class.includes("lh-")) {
        area.value += `<p class="${_class}"></p>`
        return
    }
    area.value += `<span class="${_class}"></span>`
}

function update_result_math(area){
    //result_math.innerHTML = area.value
    katex.render(area.value, result_math, {
		throwOnError: false
	});
}


//добавляем код Katex в areaMath начиная с \
function add_math(str) {
    areaMath.setRangeText("\\"+str, kursor, kursor, "select");
    update_result_math(areaMath)
}

//добавляем код Katex в areaMath начиная с \ и может быть несколько \. Вместо второй(и следующих) \ пишем параметр с /
function add_math2(str) {
    str = str.replace(/\//g, '\\') //поиск всех / и замена их на \
    areaMath.setRangeText("\\"+str, kursor, kursor, "select")
    update_result_math(areaMath)
}

//добавляем код Katex в areaMath без \
function add_str(str) {
    str = str.replace(/\//g, '\\') //поиск всех / и замена их на \
    areaMath.setRangeText(str, kursor, kursor, "select");
    update_result_math(areaMath)
}

//устанавливваем размер формулы
function set_size_math_text(num) {
    let arr = ['\\bold{Ab0}', '\\tiny AB', '\\scriptsize AB', '\\footnotesize AB', '\\small AB', '\\normalsize AB', '\\large AB', '\\Large AB', '\\LARGE AB', '\\huge AB', '\\Huge AB']
    if(num !== '' && num <11) areaMath.setRangeText(arr[num], kursor, kursor, "select")
    update_result_math(areaMath)
}

//устанавливаем цвет формулы, фона и рамки 
function set_math_color(inp) {
    let str = ''
    if (inp.id == 'color_math_text') str = `\\textcolor{${inp.value}}{F=ma}`
    if (inp.id == 'color_math_fon') str = `\\colorbox{${inp.value}}{$F=ma$}`
    if (inp.id == 'color_math_border') str = `\\fcolorbox{${inp.value}}{${color_math_fon.value}}{$F=ma$}`
    areaMath.setRangeText(str, kursor, kursor, "select");
    update_result_math(areaMath)
}

//очистка всех форма, передаем div
function cleaning_forms (_div) {
    for (let node of _div.querySelectorAll('input, select, textarea')) {
        if(node.value) node.value = ''
        if(node.checked) node.checked = false
    }
}