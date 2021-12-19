import { useEffect, useState } from "react";
import Favorites from "./components/Favorites";
import Select from "./components/Select";
import Header from "./components/Header";

function App() {
    const [collection, setCollection] = useState([]);
    const [favorites, setFavorites] = useState([])
    // const []

    async function fetchBreeds() {
        const response = await fetch('https://dog.ceo/api/breeds/list')
        const breeds = await response.json();
        setCollection(breeds.message.map((breed, key)=>{
            return {
                "name":breed,
                "isFavorite":false,
                "id":key
            }
        }))
    }

    const selectedHandler = (e) => {
        setFavorites((prevState)=>[...prevState, {"name":e.target.value, "img":`https://dog.ceo/api/breed/${e.target.value}/images/random`}])
    }

    const deleteHandler = (name) => {
        const updatedFavorites = favorites.filter(favorite => {
            return favorite.name !== name
        })
        setFavorites(updatedFavorites)
    }

    const addRandomHandler = () => {
        const availableBreeds = collection.filter(breed=>!breed.isFavorite)
        const randomNumber = Math.floor(Math.random() * availableBreeds.length)
        const randomBreed = availableBreeds[randomNumber];
        console.log(randomBreed)
        setFavorites((prevState)=>[...prevState, randomBreed])
    }
    
    useEffect(() => {
        fetchBreeds();
    },[])

    useEffect(() => {
        const favoritesList = favorites.map(favorite => favorite.name)
        const updatedCollection = collection.map(breed => {
            if (favoritesList.includes(breed.name)) {
                breed.isFavorite = true;
            } else {
                breed.isFavorite = false;
            }
            return breed;
        })
        setCollection(updatedCollection)
    },[favorites])

    return (
        <div className="App">
            <Header />
            <main className="main">
                <Select collection={collection} selectedHandler={selectedHandler} addRandomHandler={addRandomHandler}/>
                <Favorites favorites={favorites} deleteHandler={deleteHandler}/>
            </main>
        </div>
    );
}

export default App;