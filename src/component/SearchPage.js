import  React, { Component } from 'react'
import * as BooksAPI from '../BooksAPI'
import BookDetail from "./BookDetail";
import  { Link } from 'react-router-dom'

class SearchPage extends  Component {

    state = {
        query : "",
        search_result :[]
    }


    updateQuery = (query) => {
        this.setState({
            query:query.trim()
        })

        const fixedQuery = query.trim()
        if(fixedQuery!==null && fixedQuery !=='')
        this.queryFromServer(fixedQuery)
    }

    queryFromServer = (query)=>{
        BooksAPI.search(query).then(res => {
            console.log(res)
            this.setState({
                search_result : res
            })
        })
    }


    render(){
        const { query ,search_result } = this.state
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/' className='close-search' onClick={()=> window.location.href = '/'}>
                        Close
                    </Link>
                    {/*<button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>*/}
                    <div className="search-books-input-wrapper">
                        {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                        <input
                            type="text"
                            value = {query}
                            placeholder="Search by title or author"
                            onChange={(event) => this.updateQuery(event.target.value)}/>

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {console.log(search_result)}
                        {
                            search_result.length>0?(search_result.map(book =>
                            <li key = {book.id}>
                                <BookDetail book = {book}/>
                            </li>
                            )):(<div></div>)
                        }
                    </ol>
                </div>
            </div>
        )
    }
}

export  default  SearchPage