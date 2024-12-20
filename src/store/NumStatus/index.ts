 const store ={
  state: {
    num: 20
  },
  actions: {
    add1(newState: { num: 20 }) {
      newState.num++
    },
    add2(newState: { num: 20 }, action: { type: string, val: number }) {
      newState.num += action.val
    }
  } as { [key: string]: (newState: { num: number }, action?: any) => void }, // 允许任何字符串键,
  actionNames: {} as { [key: string]: string }
}
let actionNames = {} as { [key: string]: string }
for (let key in store.actions) {
  actionNames[key] = key
}
store.actionNames = actionNames
export default store