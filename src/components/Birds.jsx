import React from 'react';
import BirdListItem from './BirdListItem';

const Birds = ({birds, handleAddToCart}) => {

    return (
        <div className="birds">
            {birds.map((bird)=><BirdListItem 
            bird={bird} 
            handleAddToCart={handleAddToCart}/>

            )}
        </div>
    );
}

export default Birds;
