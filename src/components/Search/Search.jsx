import React from 'react'
import './Search.scss'

const Search = (props) => {
    return (
        <div className='box'>
            <h2>2. Search By Input</h2>

            <form>
                <input
                    type='text'
                    onChange={props.handleTyping}
                    value={props.searchInput}
                    placeholder="Type more than 3 letters..."
                />
            </form>

            <div className='search-result-container'>
                {props.inputResult[0] ? 
                <ul>
                {props.inputResult.slice(0,25).map((item) =>
                <li key={item.value}>{item.value}</li>)} 
                </ul> 
                : "Not found"}
            </div>
        </div>
    )
}

export default Search