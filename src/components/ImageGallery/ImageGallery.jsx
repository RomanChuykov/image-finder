import Fetchimage from "../../api"
/*
export default function ImageGallery({ images }) {
    console.log('images :>> ', images);
    return(
        <>
        <ul>
            {images.map(item => (
                <li key={item.id}>
                    <img src={item.userImageURL} alt="pict" />
                </li>
            ))}
        </ul>
        </>
    ) 
};*/


export default function ImageGallery({images}) {
   
    return(
        <>
        <ul>
            {images.map(item => (
            <li key={item.id}>
    <img src={item.userImageURL} alt='pict'></img>
  </li>
))};
        </ul>
         
        </>
    ) 
}; 
 