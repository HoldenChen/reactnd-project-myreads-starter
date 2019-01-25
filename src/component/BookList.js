import React,{ Component } from 'react'
import ShelfTitle from "./ShelfTitle";
import BookDetail from "./BookDetail";

class BookList extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const { title ,books} = this.props
        return(
            <div className='bookshelf'>
                <ShelfTitle title = {title}/>
                <ol className='books-grid'>
                    {
                        books.map((book) => (
                           <li>
                               {
                                   <BookDetail id = {book.id} name = {book.name}
                                               author = {book.author} shelf = {book.shelf}
                                               imgUrl = {book.img}
                                   />
                               }
                           </li>
                        ))
                    }
                </ol>

            </div >
        )
    }
}

export default BookList