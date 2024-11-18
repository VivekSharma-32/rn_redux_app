import {ADD_TO_CART, REMOVE_FROM_CART, SET_ERROR, USER_LIST} from './constants';

export function addToCart(item) {
  return {
    type: ADD_TO_CART,
    data: item,
  };
}

export function removeFromCart(item) {
  return {
    type: REMOVE_FROM_CART,
    data: item,
  };
}

export function getUserList(item) {
  return {
    type: USER_LIST,
  };
}
