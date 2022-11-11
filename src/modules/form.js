import {createCustomCard} from './user-card.js';

const table = document.querySelector('.table');
const nameFilter = document.querySelector('.users__form-filter');
const total = document.querySelector('.users__form-overall-number');

//Функция сравнения по имени, e-mail, адресу, телефону, компании
function compareByField (sorter) {
  let field;

  if (sorter === 'name' || sorter === 'email' || sorter === 'phone') {
    switch (sorter) {
      case 'name':
        field = 'name';
        break;
      case 'email':
        field = 'email';
        break;
      case 'phone':
        field = 'phone';
        break;
    }
    return (a, b) => a[field] > b[field] ? 1 : -1;

  } else if (sorter === 'address') {
    field = 'address';
    return (a, b) => a[field].city + a[field].street + a[field].suite + a[field].zipcode > b[field].city + b[field].street + b[field].suite + b[field].zipcode ? 1 : -1;

  } else if (sorter === 'company') {
    field = 'company';
    return (a, b) => a[field].name > b[field].name ? 1 : -1;

  }
}

// Функция сравнения значения инпута и значения имени из массива
const filterCards = (value) => {
  const nameValue = value.name.toLowerCase();
  const filterValue = nameFilter.value.toLowerCase();
  return nameValue.includes(filterValue);
}

// Функция удаления устаревших данных из таблицы
const formReset = () => {document.querySelectorAll('.table__row').forEach((elem) => elem.parentNode.removeChild(elem))};

// Функция отрисовки карточек клиентов по умолчанию
const createDefaultList = (cards) => {
  cards.forEach((card) => table.appendChild(createCustomCard(card)));
  total.textContent = cards.length;
}

// Функция сортировки, фильтрации и отрисовки сортированных карточек
const createSortedList = (cards, sorter) => {
  formReset();
  const array = cards.slice().filter(filterCards).sort(compareByField(sorter));
  array.forEach((card) => table.appendChild(createCustomCard(card)));
  total.textContent = array.length;
}

export {createDefaultList, createSortedList};
