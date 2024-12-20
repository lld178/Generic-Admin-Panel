import handleArr from './index'
const defaultState = {
  ...handleArr
}
export default (state = defaultState, actions: { type: string, val: number }) => {
  let newState = JSON.parse(JSON.stringify(state))
  switch (actions.type) {
    case 'add1':
      handleArr.actions.sarrpush(newState,actions)
      break;
    default:
      break;
  }
  return newState
}