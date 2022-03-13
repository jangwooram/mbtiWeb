import React, {useState} from 'react';

const Pratice2 = (props) => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count+1);
    }
    const clickString = props.subClick || "click"
    return (
        <div>
            <button onClick={increment}>{clickString} {count}</button>
        </div>
    );
};

export default Pratice2;
