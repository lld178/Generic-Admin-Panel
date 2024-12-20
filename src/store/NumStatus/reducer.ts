import handleNum from './index'
const defaultState = {
  ...handleNum.state
}
export default (state = defaultState, actions: { type: string, val: number }) => {
  let newState = JSON.parse(JSON.stringify(state))
  for (let key in handleNum.actionNames) {
    if (actions.type == handleNum.actionNames[key]) {
      handleNum.actions[handleNum.actionNames[key]](newState, actions)
      break;
    }

  }
  return newState
}