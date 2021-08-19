import Cell from './Cell';

function Board(props) {
    // Propiedades
    const {letters, onAdd} = props;
    // Funcion para renderizar bloques de letras
    function RenderSquare(index) {
        return (
            <Cell key={index}
                   letter={letters[index]}
                   onAdd={onAdd} />
        );
    }
    return (
        <div>
            <div style={{display: 'flex'}}>
                {RenderSquare(0)}
                {RenderSquare(1)}
                {RenderSquare(2)}
                {RenderSquare(3)}
            </div>
            <div style={{display: 'flex'}}>
                {RenderSquare(4)}
                {RenderSquare(5)}
                {RenderSquare(6)}
                {RenderSquare(7)}
            </div>
            <div style={{display: 'flex'}}>
                {RenderSquare(8)}
                {RenderSquare(9)}
                {RenderSquare(10)}
                {RenderSquare(11)}
            </div>
            <div style={{display: 'flex'}}>
                {RenderSquare(12)}
                {RenderSquare(13)}
                {RenderSquare(14)}
                {RenderSquare(15)}
            </div>
        </div>
    );
}

export default Board;