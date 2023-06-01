import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { drawerReducer } from './reducers/drawer'
import { productsReducers } from './reducers/products'
import { productsDetailsReducer } from './reducers/productDetail'
let initialState = {}

const reducers = combineReducers({
  drawer: drawerReducer,
  products: productsReducers,
  product: productsDetailsReducer
})

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
