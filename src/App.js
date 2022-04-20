import {useState} from "react"
import Display from "./components/Display"

export default function App() {
    const [count, setCount] = useState(0)  
    function up() {
      setCount(prevCount => prevCount + 1 )
    }
    function donw() {
      setCount(prevCount => prevCount - 1 )
    }

    return (
        <div className="counter">
            <button className="counter--minus" onClick={donw} >–</button>
            <Display count={count} />
            <button className="counter--plus"  onClick={up} >+</button>
        </div>
    )
}
