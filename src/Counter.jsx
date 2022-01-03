import { useSelector } from "react-redux";

const Counter = () => {
    const count = useSelector(state => state.count.count);
    return <div className="counter">
        <h1>Count {count}</h1>
    </div>
}

export default Counter;