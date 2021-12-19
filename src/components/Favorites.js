const Favorites = ({favorites, deleteHandler}) => {
    return ( 
        <section className="collection">
            <ul className="collection__list">
                {favorites && favorites.map((favorite, key) => {
                    return (
                        <li className="collection__item" key={key}>
                            <h2 className="dog-title">{favorite.name}</h2>
                            <button className="btn--warning" onClick={()=>{deleteHandler(favorite.name)}}>X</button>
                            {/* <img className="collection__image"/> */}
                        </li>
                    )
                })}
            </ul>
            {favorites.length < 1 && <p className="notification">Please select your favorite breeds from the available options!</p>}
        </section>
     );
}
 
export default Favorites;