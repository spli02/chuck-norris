import React, { Component } from 'react'
import './App.scss'

import Search from '../Search/Search.jsx'
import Category from '../Category/Category.jsx'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories:[],
            categoryResult:'',
            searchInput: '',
            inputResult:[],
        }
        this.handleCategoryClick = this.handleCategoryClick.bind(this);
        this.handleTyping = this.handleTyping.bind(this);
    }


    //fetch the categories ********************************
    componentDidMount() {
        fetch('https://api.chucknorris.io/jokes/categories')
        .then(response => response.json())
        .then(data => {
            this.setState({
                categories: data
            })
        })
    }

    //search by categories ********************************
    handleCategoryClick = (event) => {
        fetch(`https://api.chucknorris.io/jokes/random?category=${event.currentTarget.getAttribute('value')}`)
        .then(response => response.json())
        .then(data => {
            this.setState({
                categoryResult:data,
            })
        })
    }

    //search by typing ********************************
    handleTyping = (event) => {
        this.setState({
            searchInput: event.target.value,
        })

        if(this.state.searchInput.length >= 3){
            fetch(`https://api.chucknorris.io/jokes/search?query=${this.state.searchInput}`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    inputResult:data.result
                })
            })
        }
    }

    //for display ********************************
    render() {
        return (
            <main>
                <h1>Chunk Norris Jokes Search</h1>
                <div className='app-container'>
                    <Category
                    categories={this.state.categories} 
                    handleCategoryClick={this.handleCategoryClick}
                    categoryResult={this.state.categoryResult}
                    />

                    <Search
                    handleTyping={this.handleTyping}
                    searchInput={this.state.searchInput}
                    inputResult={this.state.inputResult}
                    />
                </div>
            </main>
        )
    }
}

export default App;