import React from 'react';
import style from './recipe.module.css'

const Recipe =({key ,Title , image , Calories, ingredients}) =>{
    return (
    <div className ={style.recipe}>
        <h1 >{Title}</h1>
        <ol className={style.list}>
            {ingredients.map(ingredient => (
                <li>{ingredient.text}</li>
            ))}
        </ol>
        <img className={style.image} src={image} alt="" />
        <p className="">Calories: {Calories}</p>

    </div>
    );
}

export default Recipe;