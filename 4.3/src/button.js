import {useState} from 'react';

export default function ({value, onClick}) {
    const [isClicked, setIsClicked] = useState(false);
    let className = 'button';

    if (isClicked) {
        className += ' guessed';
    }

    const clickHandler = function() {
        setIsClicked(true);
        onClick(value);
    }

    return (
        <button 
            className={className}
            onClick={clickHandler}
        >
            {value}
        </button>
    );
}