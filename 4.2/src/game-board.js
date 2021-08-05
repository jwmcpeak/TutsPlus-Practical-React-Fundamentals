import {useState} from 'react';
import LetterGrid from './letter-grid';
import ButtonGrid from './button-grid';


export default function({secretWord}) {
    const [guessedLetters, setGuessedLetters] = useState([]);

    const letterGuessedHandler = function(letter) {
        let val = letter.toLowerCase();

        setGuessedLetters(prev => [...prev, val]);
    }

    return (
        <div>
            <LetterGrid 
                secretWord={secretWord}
                guessedLetters={guessedLetters}
            />
            <ButtonGrid letterGuessed={letterGuessedHandler} />
        </div>
    )
}