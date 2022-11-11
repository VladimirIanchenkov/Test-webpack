// Функция, создающая карточку клиента
const createCustomCard = (card) => {
  const cardItemTemplate = document.querySelector('#card').content.querySelector('.table__row');
  const cardItem = cardItemTemplate.cloneNode(true);
  cardItem.querySelector('.table__name').textContent = card.name;
  cardItem.querySelector('.table__link').textContent = card.email;
  cardItem.querySelector('.table__address').textContent = `${card.address.city}, ${card.address.street}, ${card.address.suite}, ${card.address.zipcode}`;
  cardItem.querySelector('.table__tel').textContent = card.phone;
  cardItem.querySelector('.table__company').textContent = card.company.name;
  return cardItem;
}

export {createCustomCard};
