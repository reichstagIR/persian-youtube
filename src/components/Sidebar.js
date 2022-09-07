import React from 'react';
import {categories} from "./utils/constants";

const Sidebar = ({selectedCategory , setSelectedCategory}) => {

    console.log(selectedCategory)

    return (
        <>
            {categories.map((category =>
                    <button key={category.name} onClick={() => setSelectedCategory(category.name)} className="category-btn" style={{display : "flex" , alignItems : "center" , backgroundColor : category.name === selectedCategory ? "#ff0000" : "#000"}}>
                        <span style={{marginLeft : "0.7rem", color : category.name === selectedCategory ? "#fff" : "#ff0000" , display : "flex" , alignItems : "center" , justifyContent : "center"}}>{category.icon}</span>
                        <span style={{color : "#fff"}}>{category.name}</span>
                    </button>
            ))}
        </>
    );
};

export default Sidebar;
