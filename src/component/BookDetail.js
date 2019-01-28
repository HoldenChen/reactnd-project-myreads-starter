import React ,{ Component } from 'react'
import SelectShelf from './SelectShelf'

class BookDetail extends Component{

    render(){
        const {id,name,author,shelf,imgUrl} = this.props;
        const divStyle = {
            width: '128px',
            height: '193px',
            backgroundImage: `url(${imgUrl})`
        };
        return(
            <div className='book'>
                <div className='book-top'>
                    <div className ='book-cover' style={divStyle}>
                        <div className='book-shelf-changer'>
                           <SelectShelf defaultvalue ={shelf} bookid = {id}/>
                        </div>
                    </div>
                </div>
                <div className='book-title'>
                    {name}
                </div>
                <div className='book-authors'>
                    {author}
                </div>
            </div>
        )
    }
}

export default BookDetail