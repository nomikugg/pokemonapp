import { React } from "react";

const PokemonThumnail = ({id, name, image, type})=>{
    const styles = `thumb-container ${type}`
    return(
        <div className={styles}>
            <div className="number">
                <small>#0{id}</small>
            </div>
            <img src={image} alt={name}></img>
            <div className="detail-wrapper">
                <h3>{name}</h3>
                <small>Type: {type}</small>
            </div>
        </div>
    )
}

export default PokemonThumnail