export const productsCard = (id, quantity) => async (dispatch, getState) => {
  const data = await fetch(`https://fakestoreapi.com/products/${id}`).then(
    res => res.json()
  )
  dispatch({
    type: 'ADD_CARD',
    payload: {
      id: data.id,
      title: data.title,
      description: data.description,
      image: data.image,
      price: data.price,
      qty: quantity
    }
  })

  const cardItems = getState()
  localStorage.setItem('cardItems', JSON.stringify(cardItems))
}

export const removeCard = productId => async (dispatch, getState) => {
  dispatch({
    type: 'REMOVE_CARD',
    payload: productId
  })

  const {
    card: { cardItems }
  } = getState()
  localStorage.setItem('cardItems', JSON.stringify(cardItems))
}
