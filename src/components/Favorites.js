import Description from "./Description";

const Favorites = ({favorites, deleteHandler}) => {
    return ( 
        <section className="collection">
            <ul className="collection__list">
                {favorites && favorites.map((favorite, key) => {
                    return (
                        <li className="collection__item" key={key}>
                            <h2 className="dog-title">{favorite.name}</h2>
                            <button className="btn btn-delete btn--red" onClick={()=>{deleteHandler(favorite.name)}}>X</button>
                            <img className="collection__image" src={favorite.img}/>
                        </li>
                    )
                })}
            </ul>
            {favorites.length < 1 && <Description/>}
        </section>
     );
}
 
export default Favorites;