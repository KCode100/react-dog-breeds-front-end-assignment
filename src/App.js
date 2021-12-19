import { useEffect, useState } from "react";
import Favorites from "./components/Favorites";
import Select from "./components/Select";
import Header from "./components/Header";

function App() {
    const [collection, setCollection] = useState([])
    const [favorites, setFavorites] = useState([])
    const [imageUrl, setImageUrl] = useState('')

    //Fetch list of breeds 
    async function fetchBreeds() {
        const response = await fetch('https://dog.ceo/api/breeds/list')
        const breeds = await response.json();
        setCollection(breeds.message.map((breed, key)=>{
            return {"name":breed}
        }))
    }

    // Fetch individual image
    const fetchImage = (breed) => {
        fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then(res=>res.json())
        .then((data)=> {
            setImageUrl({"name":breed, "url":data.message})
        })
    }

    // Add selected option to favorites
    const selectedHandler = (e) => {
        const selectedBreed = e.target.value;
        setFavorites((prevState)=>[...prevState, {"name":selectedBreed, "img":fetchImage(selectedBreed)}])
    }

    // Remove a favorite from list
    const deleteHandler = (name) => {
        const updatedFavorites = favorites.filter(favorite => {
            return favorite.name !== name
        })
        setFavorites(updatedFavorites)
    }

    // Add a random breed to favorites
    const addRandomHandler = () => {
        const availableBreeds = collection.filter(breed=>!breed.isFavorite)
        const randomNumber = Math.floor(Math.random() * availableBreeds.length)
        const randomBreed = availableBreeds[randomNumber];
        setFavorites((prevState)=>[...prevState, {...randomBreed, "img":fetchImage(randomBreed.name)}])
    }

    // Clear all favorites
    const clearAllHandler = () => {
        setFavorites([])
    }
    
    // Call API on page load
    useEffect(() => {
        fetchBreeds();
    },[])

    // Update isFavorite value from favorites to collection
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

    // Assign image URL to selected breed
    useEffect(()=> {
        favorites.map(favorite=> {
            if (favorite.name === imageUrl.name) {
                favorite.img = imageUrl.url
            }
        })
        setImageUrl('')
    },[imageUrl])

    return (
        <div className="App">
            <Header />
            <main className="main">
                <Select collection={collection} selectedHandler={selectedHandler} addRandomHandler={addRandomHandler} favorites={favorites} clearAllHandler={clearAllHandler}/>
                <Favorites favorites={favorites} deleteHandler={deleteHandler}/>
            </main>
        </div>
    );
}

export default App;