import Feedback from './Feedback';

function Score(props) {
    // Propiedades
    const {word, goal} = props;
    return (
        <div>
            <div>{word && word.length ? word.join('') : 'Select...'}</div>
            <Feedback word={word} 
                      goal={goal}/>
        </div>
    );
}

export default Score;