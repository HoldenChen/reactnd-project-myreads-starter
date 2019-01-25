import React ,{ Component } from 'react'

class SelectShelf extends Component{

    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        this.setState({value: event.target.value})
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