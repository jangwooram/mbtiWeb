import React, {useState} from "react";

function ParticeComponent() {
    const [text, setText] = useState('hello');
    const updateText = () => {
        setText('안녕');
    }
    return (
        <div>
            <span>{text}</span>
            <button onClick={updateText}>updeate</button>
        </div>
    );

}

export default ParticeComponent;
