import Button from './button';

export default function() {
    let letters = [
        'A','B','C','D','E','F','G','H',
        'I','J','K','L','M','N','O','P',
        'Q','R','S','T','U','V','W','X',
        'Y','Z'
    ];

    let buttons = letters.map((letter,index) => (
        <Button
            value={letter}
            key={index}
        />
    ))

    return (
        <div className="flex flex-wrap mt-10">
            {buttons}
        </div>
    )
}