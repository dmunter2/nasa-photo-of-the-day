import React, { useEffect, useState } from "react";

import axios from 'axios';

import NasaCard from './NasaCard';


export default function NasaList() {
    const [photos, setPhotos] = useState([]);
    const [galaxy, setGalaxy] = useState('milkyWay')
    const [isLoading, setIsLoading] = useState(false);
    


    useEffect(() => {
        setIsLoading(true);
        setPhotos([]);
        axios
            .get('https://api.nasa.gov/planetary/apod?api_key=J9kmqCDGVQ2AzU68n8Dcl5BJ1pSoAtgFHkTPgNYr')
            .then(dataObject => {
                console.log(dataObject);
                setPhotos(dataObject.url)
                setIsLoading(false);
            })
            .catch(err => {
                console.log(err);
                setIsLoading(false);
            })
    }, []);

    return (
        <div>
            {photos.map(photo => {
                return <NasaCard imgUrl={imgUrl} />
            })}
        </div>
    );
}