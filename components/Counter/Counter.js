import {useState} from 'react';
import Button from '../Button/Button';

const Counter = props => {
    const [counter, setCounter] = useState(0);
    const increment = () => setCounter( counter +1 );
    const decrement = () => {
        counter > 0 ? setCounter( counter -1 ) : setCounter(0)
    }
    return (
        <div className="container">
            <Button 
                placeholder="-"
                onClick={decrement}
            />
            <div>{`Count: ${counter}`}</div>
            <Button 
                placeholder="+" 
                onClick={increment}
            />
        </div>
    )
}

export default Counter;