import React from 'react';

const TalksCard = ({ title, venue, content, speaker, date }) => {
 return(
    <div>
        <div className="bg-gray-800 text-white p-5 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-2 underline">{title}</h2>
            <h5 className="text-xl mb-2">{venue}</h5>
            <p className="mb-4 text-base">{content}</p>
            <h className="text-xl mb-2">{speaker}</h>
            <p className="mb-4 text-base">{date}</p>
        </div>
    </div>
 );
};

export default TalksCard;