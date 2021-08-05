export default function({secretWord}) {
    let letters = secretWord
                    .split('') //['R', 'e', 'a', 'c', 't']
                    .map((letter) => (
                        <span>{letter}</span>
                    ));

    return (
        <div>
            {letters}
        </div>
    )
}