
export default function Players(props) {

    const { handleChangeName, handleSubmitName } = props;

    return (
        <div>
            <label htmlFor='player-name'>Add Player:</label>
            <input type='text' name='player-name' value={props.name} onChange={handleChangeName} />
            <button onClick={handleSubmitName}>Add player</button>            
        </div>
    )
}
