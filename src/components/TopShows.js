import React from "react";
import ShowCard from "./ShowCard";

export default function TopShows(){

    return(
        <>
                <div className="top-shows">
                    <h2>Top Shows</h2>
                    <div className="shows">
                        <ShowCard value = {'all'}/>
                    </div>
                </div>
        </>
    )

}