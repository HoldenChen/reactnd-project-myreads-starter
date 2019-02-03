import React ,{ Component } from 'react'
import SelectShelf from './SelectShelf'

class BookDetail extends Component{

    render(){
        const {book} = this.props;

        const bookUrl = typeof book.imageLinks === 'undefined' ? 'no-image' : book.imageLinks.thumbnail

        {
            console.log(bookUrl)
        }
        const divStyle = {
            width: '128px',
            height: '193px',
            backgroundImage: `url(${bookUrl})`
        };
        return(
            <div className='book'>
                <div className='book-top'>
                    <div className ='book-cover' style={divStyle}>
                        <div className='book-shelf-changer'>
                           <SelectShelf defaultvalue ={book.shelf} bookid = {book.id} {...this.props}/>
                        </div>
                    </div>
                </div>
                <div className='book-title'>
                    {book.title}
                </div>
                <div className='book-authors'>
                    {book.authors}
                </div>
            </div>
        )
    }
}

export default BookDetail