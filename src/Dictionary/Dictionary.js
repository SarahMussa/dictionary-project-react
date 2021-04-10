import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css"
import "./Results";
import Results from "./Results";

export default function Dictionary(){

    let [keyword, setKeyword] = useState (null);
    let [results, setResults] = useState (null);

    function handleResponse(response){
        setResults(response.data[0])
    }

    function search(event){
        event.preventDefault();

        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
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
                <Results results={results} />
            </div>
        </div>
    
    )
}