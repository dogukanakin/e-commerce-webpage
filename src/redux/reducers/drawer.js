export const drawerReducer = (state = { drawe: false }, action) => {
  switch (action.type) {
    case 'TOGGLE_DRAWER':
      return {
        drawer: action.payload
      }
    default:
      return state
  }
}
