const Controls = ({collection, updateCollection}) => {
    return ( 
        <div className="controls">
            <div className="options">
                <select name="breeds" id="breeds" defaultValue="Add to favorites" onChange={updateCollection}>
                    <option value="add to favorites">Add to favorites</option>
                    {collection.map(option => {
                        return(
                            <option
                                value={option.name}
                                key={option.id}
                                disabled={option.isFavorite}>
                                {option.name}
                            </option>
                        )})
                    }
                </select>
            </div>
            <button className="btn">Add a random breed</button>
        </div>
     );
}
 
export default Controls;