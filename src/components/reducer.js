export const initialState = {
  basket: [],
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      let newBasket = [...state.basket];
      console.log("basketItem", action.id);
      let index = newBasket.findIndex((basketItem) => {
        return basketItem.id === action.id;
      });
      console.log("Remove Basket", index);
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn("Nothing to delete");
      }
      return {
        ...state,
        basket: newBasket,
      };
    default:
      return state;
  }
};
