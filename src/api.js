import axios from "axios"

axios.defaults.baseURL='https://pixabay.com/api/?key=39058769-694048bcc655f58ad46bf26e2&q=';

export default async function Fetchimage(url)  {
    const response=await axios.get(url);
    return response.data;
}
// export default async function Fetchimage(url) {
//     const response = await axios.get(url);
//     return response.data;
// }


 