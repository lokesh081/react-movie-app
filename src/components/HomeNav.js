import React from "react";
import styled from "styled-components";
import { useStateProvider } from "../utils/StateProvider";
import { ReducerCases } from "../utils/Constants";
import { RiHome2Line } from "react-icons/ri";


const Container = styled.div`
    
    .search-show{
        button{
            background: none;
            color: white;
            border: none;
            display: flex;
            align-items: center;
            gap: 1em;
            margin: 0em 2em;
            font-size: 1.1em ;

           
                svg{
                    font-size:1.44em;
                }
    
            }
        }          

    

`

export default function HomeNav(){

    const [state,dispatch] = useStateProvider();

    function handleClick(e){

        e.preventDefault();
        dispatch({type : ReducerCases.SET_LOCATION , location : 'home' , selected_show_id : null , is_show_selected : false});

    }

    return(
        <Container>
            <div className="search-show">
                <button onClick={handleClick}><span className="icon"><RiHome2Line /></span><p>Home</p></button>
            </div>
        </Container>
        
    )

}