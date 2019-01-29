import React, { Component} from 'react'
import BookList from "./BookList";

class MyShelves extends Component {
    state = {
        shelves : this.props.shelves
    }

    refreshShelves(shelves){
        this.setState({
            shelves : shelves
        })
        console.log(this.state.shelves);
    }

    render() {
        return (
            <div className='list-books-content'>
                {
                    this.state.shelves.map(
                        (shelf) => (
                            <BookList key = {shelf.name} title = {shelf.name} books = {shelf.books} {...this.props} refreshShelves={ shelves => this.refreshShelves(shelves) }/>
                        )
                    )
                }

            </div>
        )

    }
}

export  default MyShelves