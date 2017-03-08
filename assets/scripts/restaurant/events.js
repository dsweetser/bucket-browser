'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);

const api = require('./api');
const ui = require('./ui');

const store = require('../store');


const onCreateRest = (event) =>{
  event.preventDefault();
  let data = getFormFields(event.target);

  api.createRestaurant(data)
    .then((response) => {
      console.log('create response is', response);
      // store.restaurant = response.restaurant; // restaurant is created is now saved
    })
    .then(ui.success)
    .catch(ui.failure);
};

const onListRest = (event) =>{
  event.preventDefault();

  api.listRestaurant()
    .then((response) => {
      console.log('list response is', response);
    })
    .then(ui.success)
    .catch(ui.failure);
};


const addHandlers = () => {
  $('#create-restaurant').on('submit', onCreateRest);
  $('#restaurant-lister').on('click', onListRest);
};

module.exports = {
  addHandlers,
};
