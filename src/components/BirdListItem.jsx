import React from 'react';

const BirdListItem = ({bird, handleAddToCart}) => {
    
    return (
        <div className='birdCard'>
            <h5>{bird.name}</h5>
            <p>{`Price: ${bird.amount}`}</p>
            <img src={bird.img} alt="bird" />
            <button onClick={()=>handleAddToCart(bird)}>Adopt</button>
        </div>
    );
}

export default BirdListItem;
