import React ,{ Component } from 'react'
import * as BooksAPI from '../BooksAPI'

class SelectShelf extends Component{


    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.shelves = props.shelves
        this.selectedVaule = typeof props.defaultvalue === 'undefined' ? 'none' :props.defaultvalue
        this.book = props.book
    }

    handleChange(event){
        this.setState({value: event.target.value})


        if( typeof this.props.defaultvalue !== 'undefined'){
            //get target shelf from shelves passed from MyShelves Component
            const targetShelf = this.shelves.filter((shelf) =>{
                return shelf.name === event.target.value}
            )


            //origin shelf
            const originShelf = this.shelves.filter((shelf) => (
                shelf.name === this.selectedVaule
            ))

            //get this bind book obj

            //remove from orignShelf
            const modifiedOriginShelfBooks = originShelf[0].books.filter((book)=>(
                book.id !== this.book.id
            ))
            const newOriginShelf = {
                name : originShelf[0].name,
                books : modifiedOriginShelfBooks
            }

            //add to targetShelf
            const modifiedTargetShelfBooks = targetShelf[0].books.concat(this.book)
            const newTargetShlef = {
                name : targetShelf[0].name,
                books : modifiedTargetShelfBooks
            }


            const newShelves = this.shelves.map((shelf) => {
                if (shelf.name === newOriginShelf.name) {
                    return newOriginShelf
                }
                if (shelf.name === newTargetShlef.name){
                    return newTargetShlef
                }
                return shelf
            })

            this.props.refreshShelves(newShelves)

        }

        BooksAPI.update(this.book,event.target.value).then(
            res => (console.log(res))
        )


        //update the server data

    }
    componentWillMount(){

        if(typeof this.props.defaultvalue !== 'undefined'){
             //首页的书籍选择控件
            this.setState({
                value: this.props.defaultvalue
            })
        }else if(typeof  this.props.default === 'undefined'){
            //搜索页的书籍选择控件
            let selectValue = 'none'
            this.setState({
                value : 'none'
            })
            //
            BooksAPI.getAll().then(
                res => res.map(
                    book => {
                        if(book.id === this.book.id){
                            this.setState({
                                value : book.shelf
                            })
                        }
                    }
                )
            )

        }

        // this.setState({value: typeof this.props.defaultvalue === 'undefined' ? 'none' :this.props.defaultvalue    })
    }

    render(){
        return (
            <select value={this.state.value} onChange={this.handleChange}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        )
    }
}

export default SelectShelf