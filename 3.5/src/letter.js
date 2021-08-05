export default function ({value, isShown}) {
    let output = ' ';

    if (isShown) {
        output = value;
    }

    return (
        <span className="letter">{output}</span>
    );
}