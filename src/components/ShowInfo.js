import React from "react";
import styled from "styled-components";
import { ReducerCases } from "../utils/Constants";
import { useStateProvider } from "../utils/StateProvider";


const Container = styled.div`
height: 100vh;
margin: 0.5em;
overflow: scroll;

.show-image{
    display: flex;
    flex-direction: column;
    height: inherit;

    .image-div{
        height: 30%;

        img{
            object-fit: contain;
            height: 100%;
        }
    }
}

`

export default function ShowInfo(){

    const[{selected_show_id , shows , prev_state},dispatch] = useStateProvider();

    function handleclick(){
        dispatch({type : ReducerCases.UPDATE_STATE , state : prev_state });
    }

    const selectedShow = shows.filter((show) => (show.show.id === selected_show_id ))[0];
    console.log(selectedShow);

    return(
        <Container>
            <button onClick={handleclick}>back</button>
            <div className="show-image">
                <div className="image-div"><img alt='demo' src={selectedShow.show.image.original} /></div>    
                <div>text</div>
            </div>
        </Container>
    )

}