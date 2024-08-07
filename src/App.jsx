import useStore from './store/useStore'
import './App.css'

function App() {
  const count = useStore((state) => state.count)
  const increment = useStore((state) => state.increment)

  return (
    <>
      <div>
        <span onClick={increment}>Count: </span><span>{count}</span>
      </div>
    </>
  )
}

export default App
