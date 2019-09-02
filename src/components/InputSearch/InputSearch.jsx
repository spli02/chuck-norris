import React from 'react'
import './InputSearch.scss'

const InputSearch = (props) => {
    return (
        <div className='inputSearch'>
            <h2>2. Search By Input</h2>

            <form>
                <input
                    type='text'
                    onChange={props.handleTyping}
                    value={props.searchInput}
                    placeholder="Type more than 3 letters..."
                />
            </form>

            <div className='inputSearch__result'>
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

export default InputSearch