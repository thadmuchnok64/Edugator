//fetch("https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UCq6VFHwMzcMXbuKyG7SQYIg&maxResults=25&key=AIzaSyC96D-WOpDJnTuldC_EPbyUiOmEOZvhGqk")
id = "UCkUWttZ1czZS1QnP5HfIaWw"
fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=5&order=date&playlistId=PLW7zUERvigZXW2YyMk9sSP_2PI9vFlJmB&q=MAC 2313&key=AIzaSyC96D-WOpDJnTuldC_EPbyUiOmEOZvhGqk`)
.then((result)=>{
    return result.json()
}).then((data)=>{
    console.log(data)
    let videos = data.items
    let videoContainer = document.querySelectorAll(".youtube-container")
    i = 0
    for(vid of videos.reverse()){
        videoContainer.item(i).innerHTML += `
        <a href="${vid.snippet.resourceId.videoId}.html"> 
            <img src="${vid.snippet.thumbnails.default.url}">
        </a>
        `
        i++
    }
})