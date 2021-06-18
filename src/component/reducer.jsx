export const reducer = (state, action) => {
    if(action.type === 'REMOVE-ITEM') {
        return { 
            ...state,
            item: state.item.filter((currelem) => {
                return currelem.id !== action.payload;
            }),
    };
}
if(action.type === 'Clear-Cart') {
    return {...state, item:[]}
}
if(action.type === 'INCREMENT') {
    let updatedCart = state.item.map((elem) => {
        if(elem.id === action.payload) {
            return{...elem, quantity: elem.quantity +1 };
        }
        return elem;
    })
   
    return {...state, item: updatedCart};
};
if(action.type === 'DECREMENT') {
    let updatedCart = state.item.map((eleval) => {
        if(eleval.id === action.payload) {
            return{...eleval, quantity: eleval.quantity -1};
        }
        return eleval;
    })
    .filter((elem) => {
        return elem.quantity !== 0
    })
    return {...state, item: updatedCart};
}
if (action.type === "GET_TOTAL") {
    let { totalItem, totalAmount } = state.item.reduce(
      (accum, curVal) => {
        let { price, quantity } = curVal;

        let updatedTotalAmount = price * quantity;
        accum.totalAmount += updatedTotalAmount;

        accum.totalItem += quantity;
        return accum;
      },
      {
        totalItem: 0,
        totalAmount: 0,
      }
    );
    return { ...state, totalItem, totalAmount };
  }
  return state;
};