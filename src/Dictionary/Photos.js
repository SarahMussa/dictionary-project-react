import React from "react";
import "./CSS/Photos.css"

export default function Photos (props){
    //console.log(props.photos);
    if(props.photos){
        return(
            <section className="Photos">
                <div className="row">
                {props.photos.map(function(photo, index){
                    return(
                        <div className="col-4" key={index}>
                        <a href={photo.src.original} target="_blank" rel="noreferrer">
                        <img src={photo.src.tiny} className="img-fluid" alt={photo} />
                        </a>
                        </div>
                    )
                })}
                </div>
            </section>
        );
    }else{
        return null;
    }
    
}