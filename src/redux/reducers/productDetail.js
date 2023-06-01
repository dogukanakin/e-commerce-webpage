export const productsDetailsReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case 'GET_PRODUCT_DETAILS':
      return {
        ...state,
        product: action.payload
      }
    default:
      return state
  }
}
