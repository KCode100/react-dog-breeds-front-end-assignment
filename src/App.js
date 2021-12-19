import { useEffect, useState } from "react";
import Favorites from "./components/Favorites";
import Controls from "./components/Controls";
import Header from "./Header";

function App() {
    const [collection, setCollection] = useState([]);
    const [favorites, setFavorites] = useState([])

    const allBreeds = () => {
       fetch('https://dog.ceo/api/breeds/list')
        .then(res => res.json())
        .then(data => {
            createCollection(data.message)
        })
    }
    
    const createCollection = (data) => {
        const list = data.map((name, key) => {
            return {
            "name":name,
            "img":`https://dog.ceo/api/breed/${name}/images/random`,
            "isFavorite":false,
            "id":key}
        });
        setCollection(list);
    }
    
    const updateCollection = (e) => {
        setCollection(collection.map(item=> {
            if (item.name === e.target.value) {
                item.isFavorite = true
            }
            return item
        }))
    }
    
    useEffect(()=> {
        allBreeds();
    },[])

    // useEffect(()=> {
    //     createCollection()
    // },[favorites])

    return (
        <div className="App">
            <Header />
            <main className="main">
                <Controls collection={collection} updateCollection={updateCollection}/>
                <Favorites collection={collection}/>
            </main>
        </div>
    );
}

export default App;