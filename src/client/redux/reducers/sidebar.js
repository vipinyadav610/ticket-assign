import { ON_COLLAPSE } from 'constants/sidebar'
const intitialState = { collapse: false }

export default (state = intitialState, action) => {
  switch (action.type) {
    case ON_COLLAPSE:
      return { ...state, collapse: action.collapse }
    default:
      return state
  }
}
