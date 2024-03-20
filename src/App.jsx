import { Component } from "react"



import SearchBar from "./components/SearchBar/SearchBar"
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn"
import ImageGallery from "./components/ImageGallery/ImageGallery"




export default class App extends Component {
  
render(){

  <>
    <SearchBar/>
    <ImageGallery/>
    <LoadMoreBtn/>
  </>

}

};




