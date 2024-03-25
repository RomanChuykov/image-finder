import { Component } from "react"
import SearchBar   from "./components/SearchBar/SearchBar"
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn"
import ImageGallery from "./components/ImageGallery/ImageGallery"
import Fetchimage from "./api"
const a=[
      {
          "id": 22634,
                 "userImageURL": "https://cdn.pixabay.com/user/2022/04/26/15-17-47-992_250x250.jpg"
      },
      {
          "id": 2719,
          
          "userImageURL": "https://cdn.pixabay.com/user/2016/05/06/18-47-35-699_250x250.png"
      }];
const b="https://pixabay.com/api/videos/?key=39058769-694048bcc655f58ad46bf26e2&q=yellow+flowers";

 class App extends Component {
  state={
    query:'',
    page:5
  }
 getimages=(newQuery)=>{
  this.setState({query:newQuery})
  console.log('app.state.query :>> ', newQuery);

}

render(){
return( 
  <>
 
    <SearchBar getImages={this.getimages}/>
    <ImageGallery images={a}/> 
    <LoadMoreBtn/>
  </>

)

}

};
export default App;



