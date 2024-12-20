import { useSelector, useDispatch } from 'react-redux'

export default function page1() {
  const { num } = useSelector((state: RootState) => ({
    num: state.handleNum.num
  }))
  const dispatch = useDispatch()
  const changeNum = () => {
    dispatch({ type: 'add2' ,val:3})
  }
  return (
    <div>
      <p>page{num}</p>
      <button onClick={changeNum}>onClick</button>
    </div>
  )
}
