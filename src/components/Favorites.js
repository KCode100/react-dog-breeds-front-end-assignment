const Favorites = ({favorites, deleteHandler}) => {
    return ( 
        <section className="collection">
            <ul className="collection__list">
                {favorites && favorites.map(favorite => {
                    return (
                        <li className="collection__item">
                            <h2 className="dog-title">{favorite.name}</h2>
                            <button className="btn--warning" onClick={()=>{deleteHandler(favorite.name)}}>X</button>
                            {/* <img className="collection__image"/> */}
                        </li>
                    )
                })}
            </ul>
            {favorites.length < 1 && <p className="notification">Nothing here!</p>}
        </section>
     );
}
 
export default Favorites;