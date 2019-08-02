// import react from 'react';
import React, { useEffect, useState } from "react";


export default function NasaCard( { imgUrl }) {

    return (
        <div style={{ maxWidth: "200px" }}>
            <img className='apiImg' src={imgUrl} />
        </div>
    );
}