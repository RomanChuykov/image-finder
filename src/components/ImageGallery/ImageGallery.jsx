import Fetchimage from "../../api"

export default function ImageGallery(params) {
    // const images=await Fetchimage('cat');
    const images =  Fetchimage('cat'); 
    console.log('images :>> ', images);
    return(
        <>
        <p>image Gallery111</p>
         
        </>
    )
}; 
 