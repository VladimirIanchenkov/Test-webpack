const GET_DATA_SERVER_LINK = 'https://jsonplaceholder.typicode.com/users';

// Функция загрузки данных с сервера
const getData = (onSuccess, onFail) => {
  fetch(GET_DATA_SERVER_LINK)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`${response.status} ${response.statusText}`);
    })
    .then((cards) => {
      onSuccess(cards);
    })
    .catch(() => {
      onFail();
    });
};

export {getData};
