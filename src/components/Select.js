const Select = ({collection, selectedHandler, addRandomHandler}) => {
    return ( 
        <div className="controls">
            <div className="options">
                <select name="breeds" id="breeds" defaultValue="Add to favorites" onChange={selectedHandler}>
                    <option value="add to favorites">Add to favorites</option>
                    {collection.map(item => {
                        return(
                            <option
                                value={item.name}
                                key={item.id}
                                disabled={item.isFavorite}
                                >
                                {item.name}
                            </option>
                        )})
                    }
                </select>
            </div>
            <button className="btn" onClick={addRandomHandler}>Add a random breed</button>
        </div>
     );
}
 
export default Select;