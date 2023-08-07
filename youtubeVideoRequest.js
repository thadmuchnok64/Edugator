//fetch("https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UCq6VFHwMzcMXbuKyG7SQYIg&maxResults=25&key=AIzaSyC96D-WOpDJnTuldC_EPbyUiOmEOZvhGqk")
id = "UCkUWttZ1czZS1QnP5HfIaWw"
fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=5&playlistId=PLW7zUERvigZXW2YyMk9sSP_2PI9vFlJmB&key=AIzaSyC96D-WOpDJnTuldC_EPbyUiOmEOZvhGqk`)
.then((result)=>{
    return result.json()
}).then((data)=>{
    console.log(data)
    let videos = data.items
    let videoContainer = document.querySelectorAll(".youtube-container")
    i = 0
    for(vid of videos){
        videoContainer.item(i).innerHTML += `
        <a href="https://www.youtube.com/watch?v=${vid.snippet.resourceId.videoId}"> 
            <img src="${vid.snippet.thumbnails.default.url}">
        </a>
        `
        i++
    }
})