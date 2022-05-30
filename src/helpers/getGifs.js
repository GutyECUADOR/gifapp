export const getGifs = async ( categoria ) => {
    const response = await fetch (`https://api.giphy.com/v1/gifs/search?api_key=dd9fQ5lgrI5lKzGlhB5w5dV5QIT5yuSO&q=${encodeURI(categoria)}&limit=10`).then(data => data.json())
    const { data } = response;
    const gifs = data.map(item => {
        return {
            id: item.id,
            title: item.title,
            url: item.images?.downsized_medium.url
        }
    })
    console.log(gifs)
    return gifs;
}