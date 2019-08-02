import React, { useEffect, useState } from "react";

// import cssStyles from '../../'
import axios from 'axios';

import NasaCard from './NasaCard';


export default function NasaList() {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        axios
            .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
            .then(data => {
                console.log(data);
                setPhotos(data.data.url)
            })
            .catch(err => {
                console.log(err);
            })
    },[]);
    return (
        <div> <NasaCard imgUrl={photos} />
        </div>

    );
}



