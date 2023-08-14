export default function Cards(props) {
  return (
    <div>
        <label>Card count:</label>
        <select name='cardCount' onChange={(e) => props.handleCardChange(e)}>
        {[...Array(props.maxCards)].map((e, i) => <option value={i + 1} key={i}>{i + 1}</option>)}
        </select>
        <h1>MaxCardCount: {props.maxCards}</h1>
    </div>
  )
}
