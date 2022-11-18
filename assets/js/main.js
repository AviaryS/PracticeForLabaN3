// task 1
function js_style() {
    text = document.querySelector('#text');
    text.style.fontSize = '30px';
    text.style.color = 'red';
    text.style.background = 'black';
    text.style.border = '5px solid red';
    text.style.width = '400px';
    text.style.height = '100px';
    alert('Ширина:' + window.screen.width + ' ' + 'Высота:' + window.screen.height);

}




// task 2
function getFormvalue(event)  {
    console.log('12');
    form = document.querySelector('#form1'); 
    fname = form.fname.value;
    lname = form.lname.value;


    makeP = document.createElement('p');
    makeP.innerHTML = fname + ' ' + lname;
    document.body.appendChild(makeP);

    event.preventDefault();
};




// task 3
function getAttributes () {
    let data = document.querySelector('#w3r');
    let href = data.getAttribute('href');
    let hreflang = data.getAttribute('hreflang');
    let rel = data.getAttribute('rel');
    let target = data.getAttribute('target');
    let type = data.getAttribute('type');
    let arr = [];
    arr.push(href,hreflang,rel,target,type);

    for (i = 0; i < arr.length; i++){
        let p = document.createElement('p');
        p.innerHTML = arr[i];
        p.className = 'class' + i;
        document.body.appendChild(p);
    }
};




// task 4
let num = 3;

function insert_Row() {
    table = document.querySelector('#sampleTable');
    makeTr = document.createElement('tr');
    
    makeTd = document.createElement('td');
    makeTr.appendChild(makeTd);
    makeTd.innerHTML = `Row${num} celi1`;
    makeTd.className = 'class0';

    makeTd1 = document.createElement('td');
    makeTr.appendChild(makeTd1);
    makeTd1.innerHTML = `Row${num} celi2`;
    makeTd1.className = 'class4';


    table.appendChild(makeTr);

    num++;
}




// taks 5
function changeContent() {
    table = document.querySelector('#myTable');
    allTr = table.getElementsByTagName('tr');
    numTr = +prompt('Введите номер строки: ');
    numTd = +prompt('Введите номер столбца: ');

    selectTr = allTr[numTr - 1];
    allTd = selectTr.querySelectorAll('td');
    selectTd = allTd[numTd - 1];

    newText = prompt('Введите новый текст: ');
    selectTd.innerHTML = newText;
} 



// task 6
function createTable() {
    table = document.querySelector('#myTable');
    countTr = +prompt('Введите количество строк: ');
    countTd = +prompt('Введите количество столбцов: ');

    for (let num = 0; num < countTr; num++) {
        makeTr = document.createElement('tr');
        table.appendChild(makeTr);
        for (let i = 0; i < countTd; i++) {
            let makeTd = document.createElement('td');
            makeTd.innerHTML = `Row ${num + 1} Celi ${i + 1}`;
            makeTr.appendChild(makeTd);            
        }
    }
}




// task 7
function removecolor() {
    select = document.querySelector('#colorSelect');
    selectElem = select[select.selectedIndex].innerHTML;

    makeP = document.createElement('P');
    document.body.appendChild(makeP);
    makeP.innerHTML = `Элемент ${selectElem} был удален`;

    select.remove(select.selectedIndex);
}




// task 8
function getOptions() {
    select = document.querySelector('#mySelect');
    selectElemIndex = select.selectedIndex + 1;
    selectElem = select[select.selectedIndex].innerHTML;
    alert(`номер: ${selectElemIndex}, Элемент: ${selectElem}`);
}