const Favorites = ({collection}) => {
    const favorites = collection.filter(item=> item.isFavorite)
    const isEmpty = favorites.length < 1 ? true : false;

    return ( 
        <section className="collection">
            <ul className="collection__list">
                {favorites.map(item => {
                    return (
                        <li className="collection__item" key={item.id}>
                            <h2 className="dog-title">{item.name}</h2>
                            <button className="btn--warning">X</button>
                            {/* <img className="collection__image"/> */}
                        </li>
                    )
                })}
            </ul>
            {isEmpty && <p className="notification">Nothing here!</p>}
        </section>
     );
}
 
export default Favorites;