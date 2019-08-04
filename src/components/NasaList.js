import React, { useEffect, useState } from "react";

import styled from 'styled-components';

// import cssStyles from '../../'
import axios from 'axios';

import NasaCard from './NasaCard';



export default function NasaList() {
    const [photos, setPhotos] = useState();
    const [titles, setTitles] = useState();
    const [explanation, setExplanation] = useState();

    useEffect(() => {
        axios
            .get('https://api.nasa.gov/planetary/apod?api_key=J9kmqCDGVQ2AzU68n8Dcl5BJ1pSoAtgFHkTPgNYr')
            .then(data => {
                setPhotos(data.data.url)
                setTitles(data.data.title)
                setExplanation(data.data.explanation);
            })
            .catch(err => {
                console.log(err);
            })
    },[]);
    return (
        <div> <NasaCard imgUrl={photos} titleInfo= {titles} textInfo={explanation}/>
        </div>

    );
}



