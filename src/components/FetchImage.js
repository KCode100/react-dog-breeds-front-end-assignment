const FetchImage = async (url) => {
    let response = await fetch(url);
    let data = await response.json()
    return data
}
 
export default FetchImage;