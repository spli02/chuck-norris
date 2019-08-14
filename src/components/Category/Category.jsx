import React from 'react'
import './Category.scss'

const Category = (props) => {
    return (
        <div className="box">
            <h2>1. Search By Category</h2>
            
            <div className="category-search-container">
                <ul>
                {props.categories.map((category,i) =>{
                    return (
                    <li key={`category-${i}`} onClick={props.handleCategoryClick} value={category}>
                        {category}
                    </li>
                    )
                })}
                </ul>
            </div>

            <div className="category-result-container">
                {props.categoryResult.value ? <ul><li>{props.categoryResult.value}</li></ul> : ''}
            </div>
        </div>
    )
}

export default Category;