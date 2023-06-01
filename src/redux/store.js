import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { drawerReducer } from './reducers/drawer'
import { productsReducers } from './reducers/products'
import { productsDetailsReducer } from './reducers/productDetail'
import { cardReducer } from './reducers/card'

const cardItems = JSON.parse(localStorage.getItem('cardItems')) || []
let initialState = {
  card: { cardItems }
}

const reducers = combineReducers({
  drawer: drawerReducer,
  products: productsReducers,
  product: productsDetailsReducer,
  card: cardReducer
})

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
