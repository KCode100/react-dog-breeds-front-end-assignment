const Select = ({collection, selectedHandler, addRandomHandler, favorites, clearAllHandler}) => {
    return ( 
        <div className="controls">
            <div className="options">
                <select name="breeds" id="breeds" defaultValue="Add to favorites" onChange={selectedHandler}>
                    <option value="add to favorites">Add to favorites</option>
                    {collection.map((item, key) => {
                        return(
                            <option
                                value={item.name}
                                key={key}
                                disabled={item.isFavorite}
                                >
                                {item.name}
                            </option>
                        )})
                    }
                </select>
            </div>
            <button className="btn" onClick={addRandomHandler}>Add a random breed</button>
            {favorites.length > 0 && <button className="btn--red" onClick={clearAllHandler}>Clear All</button>}
        </div>
     );
}
 
export default Select;