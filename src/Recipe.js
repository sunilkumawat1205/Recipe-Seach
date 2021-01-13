import React from 'react';

const Recipe =({key ,Title , image , Calories}) =>{
    return (
    <div>
        <p className ="">{Title}</p>
        <img src={image} alt="" />
        <p className="">{Calories}</p>
    </div>
    );
}

export default Recipe;