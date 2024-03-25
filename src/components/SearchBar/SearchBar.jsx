import React from "react";
// import { render } from "react-dom";

 class SearchBar extends React.Component {
    state={
        query:'',
        page:1
    }
    
   

    
    handleSubmit = (event) => {
        event.preventDefault();
        const {getImages}=this.props;
        console.log('Значення поля введення:', this.state.query);
        getImages(this.state.query)
    }

    handleInputChange=(event)=>{
        this.setState({query:event.target.value})
    }
    
render(){

    return(
        <>
        <form onSubmit={this.handleSubmit} >
            <input type="text" value={this.state.query} onChange={this.handleInputChange}/>
            <button type="submit">Search</button>

        </form>
        </>

)
}    
};
export default SearchBar;