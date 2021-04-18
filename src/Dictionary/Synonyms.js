import React from "react";
import "./CSS/Synonyms.css";

export default function Synonyms (props){
    if(props.synonyms){
        return(
            <div className="Synonyms"> 
            <p>Synonyms</p>
            <ul className="SynonymsWords">
            {props.synonyms.map(function(synonym, index) {
                return <li key={index}>{synonym}</li>;
            })}
            </ul>
            </div>
        );
    }else{
        return null;
    }
    
}