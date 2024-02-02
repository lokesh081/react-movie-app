import React from "react";
import styled from "styled-components";
import SearchNav from "./SearchNav";
import HomeNav from "./HomeNav";

const Conatiner = styled.div`
        margin : 2em 0em;
`

export default function SideNav(){

    return(
        <Conatiner>
            <HomeNav/>
            <SearchNav/>
        </Conatiner>
    )

}