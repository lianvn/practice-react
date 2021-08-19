function Reset(props) {
    // Propiedades
    const {word, onReset} = props;
    return(
        <div>
            {word && Array.isArray(word) && word.length ? (
                <button style={{width: '120px', height: '40px'}} onClick={() => onReset()}>Reset</button>
            ) : (
                <button style={{width: '120px', height: '40px'}} disabled>Reset</button>
            )}
        </div>
    );
}

export default Reset;