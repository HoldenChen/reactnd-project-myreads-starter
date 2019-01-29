import React ,{ Component } from 'react'

class SelectShelf extends Component{


    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.shelves = props.shelves
        this.selectedVaule = props.defaultvalue
        this.bookid = props.bookid
    }

    handleChange(event){
        this.setState({value: event.target.value})

        //get target shelf from shelves passed from MyShelves Component
        const targetShelf = this.shelves.filter((shelf) =>{
            return shelf.name === event.target.value}
        )


        //origin shelf
        const originShlef = this.shelves.filter((shelf) => (
            shelf.name === this.selectedVaule
        ))

        //get this bind book obj
        const bookobj = originShlef[0].books.filter((book)=>
            {
                return book.id === this.bookid
            }
        )
        //remove from orignShelf
        const modifiedOriginShlefBooks = originShlef[0].books.filter((book)=>(
            book.id !== this.bookid
        ))
        const newOriginShelf = {
            name : originShlef[0].name,
            books : modifiedOriginShlefBooks
        }

        //add to targetShelf
        const modifiedTargetShelfBooks = targetShelf[0].books.concat(bookobj)
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
        console.log(newShelves);

        this.props.refreshShelves(newShelves)


    }
    componentWillMount(){
        this.setState({value: this.props.defaultvalue})
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