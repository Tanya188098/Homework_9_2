let arr = [
"Винница", "Днепр", "Донецк",
"Житомир", "Запорожье", "Ивано-Франковск",
"Киев", "Кропивницкий", "Луганск",
"Луцк", "Львов", "Николаев",
"Одесса", "Полтава", "Ровно",
"Сумы", "Тернополь", "Ужгород",
"Харьков", "Херсон", "Хмельницкий",
"Черкассы", "Чернигов", "Черновцы"
];

let li, inputValue, capitalLetter;
let input = document.getElementById('search');
let div = document.getElementById('list');
let ul = document.createElement('ul');

div.appendChild(ul);

for (let i = 0; i < arr.length; i++) {
    li = document.createElement('li');
    li.innerHTML = arr[i];
    ul.appendChild(li);
}

let collection = document.querySelectorAll('li');

function selectCity() {

    inputValue = input.value;

    capitalLetter = inputValue.charAt(0).toUpperCase() + inputValue.slice(1);

    for (let i = 0; i < collection.length; i++) {
        
        if ((collection.item(i).textContent.includes(capitalLetter)) && (capitalLetter !== '')) {
            collection.item(i).style.fontWeight = 'bold';
        } else {
            collection.item(i).style.fontWeight = 'normal';
        }
    }
}

setInterval(function () {
    selectCity();
}, 1000)