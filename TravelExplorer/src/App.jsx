import DestinationCard from "./components/DestinationCard";
import { useState } from "react";
function App(){
    const destinations = [
        {
            id:1,
            name: "Goa",
            category: "Beach",
            price: "5000 Rs"
        },
        {   
            id:2,
            name: "Paris",
            category: "City",
            price: "10000 Rs"
        },
        {   
            id:3,
            name: "Darjeeling",
            category: "Mountain",
            price: "3000 Rs"
        }
    ]
    const [favorites, setFavorites] = useState(0);
    
    function increaseFavorites(){
        setFavorites(prev => prev+1);
    }
    function decreaseFavorites(){
        setFavorites(prev => prev-1);
    }
    return (
        <div>
            <h1> Travel Explorer </h1>
            <p> Welcome to React Js </p>
            <h2> Favorites : {favorites} </h2>
            {destinations.map((place) => (
                <DestinationCard
                    key={place.id}
                    name={place.name}
                    category={place.category}
                    price={place.price}
                    onFavorite={increaseFavorites}
                    onUnFavorite={decreaseFavorites}
                />
            ))}
        </div>
    );
}
export default App;