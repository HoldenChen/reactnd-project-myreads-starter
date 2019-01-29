import React,{ Component } from 'react'
import ShelfTitle from "./ShelfTitle";
import BookDetail from "./BookDetail";

class BookList extends Component{

    render(){
        const { title ,books} = this.props
        return(
            <div className='bookshelf'>
                <ShelfTitle key={title} title = {title}/>
                <ol className='books-grid'>
                    {
                        books.map((book) => (
                           <li key={book.id}>
                                   <BookDetail   id = {book.id} name = {book.name}
                                               author = {book.author} shelf = {book.shelf}
                                               imgUrl = {book.img}
                                               {...this.props}
                                   />
                           </li>
                        ))
                    }
                </ol>

            </div >
        )
    }
}

export default BookList