import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import MyShelves from './component/MyShelves'
import SearchPage from './component/SearchPage'
import { Route } from 'react-router-dom'
import  { Link } from 'react-router-dom'


let readingBooks = []
const willReadBooks = []
const readBooks = []

const shelves = [
    {name:"currentlyReading",books:readingBooks},
    {name:"wantToRead",books:willReadBooks},
    {name:"read" ,books:readBooks}
]

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
     showSearchPage: false ,
      //static bookshelf data
     shelves : shelves
  }

  componentWillMount(){
      BooksAPI.getAll().then(
            books => (
              books.map(
                  function (book) {
                      if (book.shelf === 'currentlyReading') {
                          readingBooks.push(book)
                      }
                      if (book.shelf === 'read') {
                          readBooks.push(book)
                      }
                      if (book.shelf === 'wantToRead') {
                          willReadBooks.push(book)
                      }
                  }
              )
          )

          ).then(
          () => {
              this.setState({
                  shelves:[
                      {name:"currentlyReading",books:readingBooks},
                      {name:"wantToRead",books:willReadBooks},
                      {name:"read" ,books:readBooks}
                  ]
              })
          }
      )
  }


  render() {
    return (

      <div className="app">

          <Route exact path='/'
           render = {() => (
               <div className="list-books">
                   <div className="list-books-title">
                       <h1>MyReads</h1>
                   </div>
                   <MyShelves  shelves = {shelves} />
                   <div className="open-search">
                       <Link
                           className='open-search-link'
                           to='/search'>

                       </Link>
                   </div>
               </div>
           )}
          />

          <Route exact path ='/search'
           render = {()=>(
               <SearchPage/>
           )}
          />
      </div>
    )
  }
}

export default BooksApp
