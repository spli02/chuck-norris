import React from 'react'
import './CategorySearch.scss'

const CategorySearch = (props) => {
    return (
        <div className="categorySearch">
            <h2>1. Search By Category</h2>
            
            <div className="categorySearch__categories">
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

            <div className="categorySearch__result">
                {props.categoryResult.value ? <ul><li>{props.categoryResult.value}</li></ul> : ''}
            </div>
        </div>
    )
}

export default CategorySearch;