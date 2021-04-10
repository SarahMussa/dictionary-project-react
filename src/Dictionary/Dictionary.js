import React, { useState } from "react";
import "./Dictionary.css"

export default function Dictionary(){

    let [keyword, setKeyword] = useState (null);

    function search(event){
        event.preventDefault();
        alert(`Searching for ${keyword} definition`);
    }

    function handleSubmit(event){
        setKeyword(event.target.value);
    }

    return(
    
        <div className="dictionary">
            <div className="form">
                <p>
                    <strong>
                        What word do you want to look up?
                    </strong>
                </p>
                <form onSubmit={search}>
                    <input type="search" onChange={handleSubmit} />
                </form>
            </div>
        </div>
    
    )
}