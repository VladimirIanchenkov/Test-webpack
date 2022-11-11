import _ from 'lodash';
import './styles/main.scss';
import {showServerAlert} from './modules/util.js';
import {getData} from './modules/api.js';
import {createDefaultList, createSortedList} from './modules/form.js';

function component() {
  const sorters = document.querySelector('.table__heading').querySelectorAll('input');
  const nameFilter = document.querySelector('.users__form-filter');

  getData(
    (cards) => {
      createDefaultList(cards);
      sorters.forEach((el) => el.addEventListener('click', () => {
        createSortedList(cards, el.id);
      }));
      nameFilter.addEventListener('keyup', () => {
        createSortedList(cards);
      });
    },
    () => {
      showServerAlert('Не удалось загрузить данные о пользователях с сервера. Попробуйте обновить страницу');
    },
  )
}

component();
