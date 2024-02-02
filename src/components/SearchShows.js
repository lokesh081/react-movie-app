import React from "react";
import ShowCard from "./ShowCard";
import { useStateProvider } from "../utils/StateProvider";
import { ReducerCases } from "../utils/Constants";

export default function SearchShows(){

    const[{user_search} , dispatch] = useStateProvider();

    function handleChange(e){
        const value = e.target.value;
        dispatch({type : ReducerCases.USER_SEARCH , user_search : value});
    }

    return(
        <>
                <div className="top-shows">
                    <h2>Search Shows</h2> 
                    <input value={user_search} placeholder="search" onChange={handleChange}/>
                    <div className="shows">
                        <ShowCard value={user_search}/>
                    </div>
                </div>
        </>
    )

}