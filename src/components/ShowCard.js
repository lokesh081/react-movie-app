import React, { useEffect } from "react";
import axios from "axios";
import { useStateProvider } from "../utils/StateProvider";
import { ReducerCases } from "../utils/Constants";
import './showcard.css';

export default function ShowCard({value}){

    const [{ API_URL , shows},dispatch] = useStateProvider();


    useEffect(()=>{
        const PopularShows = async() => {

            const request = await axios.get(API_URL + "/search/shows?q=" + value );
            console.log(API_URL + "/search/shows?q=" + value);
            dispatch({type : ReducerCases.SET_SHOWS , shows : request.data});
        }
        PopularShows();
    },[dispatch,API_URL,value]);


    function handleClick(id){
        dispatch({type : ReducerCases.SET_IS_SHOW_SELECTED , id : id});
    }


    return(
        <div className="cards-list">
        {shows.map((item) => (
          item.show.image !== null && item.show.id ? (
            <div className="card-c child" key={item.show.id} onClick={() => {handleClick(item.show.id)}}>
              <div>
                <img
                  id = {item.show.id}
                  src={item.show.image.medium !== null ? item.show.image.medium : 'default-image-source'}
                  alt={item.show.name}
                />
              </div>
              <div className="card_title title-white">
                <p ><span style={{color : "yellow"}} >{item.show.rating.average ? item.show.rating.average : '--'}</span>   {item.show.genres[0]}</p>
                <p>{item.show.name}</p>
              </div>
            </div>
          ) : null
        ))}
      </div>
    )

}