import React, { useEffect, useState } from "react";

import styled from "styled-components";

import '../index.css'
// style = {{ maxWidth: "200px" }}


const MainDiv = styled.div`
width: 50%;
border: 1px solid green;
margin: 0 auto;
margin - top 30px;
`;


const H1 = styled.h1`
  font-size: .9rem;
`;

const Img = styled.img`
margin-top: 15px;
width: 50%;
`


export default function NasaCard(props) {

    return (
        <MainDiv className='imgdiv' >
            <Img className='apiImg' src={props.imgUrl} />
            <h1>{props.titleInfo}</h1>
            <H1>{props.textInfo}</H1>
        </MainDiv>
    );
}


