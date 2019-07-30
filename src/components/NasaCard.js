import react from 'react';

export default function NasaCard({ value }) {

    return (
        <div>
            <img src={value} />
        </div>
    );
}