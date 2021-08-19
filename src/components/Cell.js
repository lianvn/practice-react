function Cell(props) {
    // Propiedades
    const {letter, onAdd} = props;
    // Capturar evento clic
    function handleClick(letter) {
        onAdd(letter);
    }
    return (
        <div>
            <button style={{width: '40px',height: '40px',background: letter.status === true ? 'green' : letter.status === false ? 'red' : ''}} 
                    onClick={() => handleClick(letter)}>
                {letter.id}
            </button>
        </div>
    );
}

export default Cell;