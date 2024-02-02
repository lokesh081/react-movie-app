import React from "react";
import styled from "styled-components";
import SideNav from "./SideNav";
import { useStateProvider } from "../utils/StateProvider";
import TopShows from "./TopShows";
import SearchShows from "./SearchShows";
import ShowInfo from "./ShowInfo";

const Container = styled.div`

::-webkit-scrollbar {
    display: none;
}

    height: 100vh;
    width: 100vw;
    grid-template-rows: 10% 90%;
    display : grid;
    overflow : hidden;

    .body{
        grid-template-columns: 20% 80%;
        display: grid;
        height: 100vh;
        width: 100vw;
        background: black;
        color: white;
}
    }
    .sidebar{
        background : #121212;
        margin : .5em;
        margin-right: 0;
        border-radius: 1em;
    }
    .top-shows{
        overflow : scroll;
        background : #121212;
        margin : .5em;
        border-radius: 1em;
    }
    }
    
    `;

export default function Home(){

    const [{current_location , is_show_selected , selected_show_id}] = useStateProvider();

    return(
        <Container>
          
           <div className="body">

                <div className="sidebar">
                    <SideNav/>
                </div>

                {current_location === 'home' && is_show_selected === false ? <TopShows/> : (is_show_selected ? <ShowInfo/> : <SearchShows/>)}      
               
           </div>
        </Container>
    )

}