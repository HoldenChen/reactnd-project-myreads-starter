import React, { Component} from 'react'
import BookList from "./BookList";

class MyShelves extends Component {

    render() {
        const { shelves } = this.props
        return (
            <div className='list-books-content'>
                {
                    shelves.map(
                        (shelf) => (
                            <BookList title = {shelf.name} books = {shelf.books}/>
                        )
                    )
                }

            </div>
        )

    }
}

export  default MyShelves