import { useState } from "react";
function DestinationCard(props){
    const [isFavorite, setIsFavorite] = useState(false);
    function handleFavoriteClick(){
        if(isFavorite){
            props.onUnFavorite();
            setIsFavorite(false);
        }else{
            props.onFavorite();
            setIsFavorite(true);
        }
    }
    return(
        <div>
            <h2> {props.name} </h2>
            <p> {props.category} </p>
            <p> {props.price} </p>
            <button
                onClick={handleFavoriteClick}
            >
                {isFavorite? "💔 Unfavorite" : "❤️ Favorite"}
            </button>
        </div>
    );
}
export default DestinationCard;