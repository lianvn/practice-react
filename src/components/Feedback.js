function Feedback(props) {
    // Propiedades
    const {word, goal} = props;
    return(
        <div>
            {word && Array.isArray(word) && word.length ? (
                <span>{word.join('') === goal ? 'valid' : 'invalid'}</span>
            ) : ''}
        </div>
    );
}

export default Feedback;