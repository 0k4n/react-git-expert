export const getGifs=async(categoria)=>{
    //console.log(categoria+'123');
    const url =`https://api.giphy.com/v1/gifs/search?api_key=z6MHji6Yl1ohF5fst7Ex3L75DNMaE35V&q=${categoria}&limit=10`;
    const resp=await fetch(url);
    const {data}=await resp.json();
    //console.log(data);
    const gifs=data.map(img=>({
        id:img.id,
        title:img.title,
        url:img.images.downsized_medium.url


    }));
    //console.log(gifs);
    return gifs;
  }