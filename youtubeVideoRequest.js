//fetch("https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UCq6VFHwMzcMXbuKyG7SQYIg&maxResults=25&key=AIzaSyC96D-WOpDJnTuldC_EPbyUiOmEOZvhGqk")
id = "UCkUWttZ1czZS1QnP5HfIaWw"
fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${id}&maxResults=2&type=video&key=AIzaSyC96D-WOpDJnTuldC_EPbyUiOmEOZvhGqk`)
.then((result)=>{
    return result.json()
}).then((data)=>{
    console.log(data)
    let videos = data.items
    let videoContainer = document.querySelectorAll(".youtube-container")
    i = 0
    for(vid of videos){
        videoContainer.item(i).innerHTML += `
        <a href ="https://www.youtube.com/watch?v=${vid.id.videoId}"> 
            <img src="${vid.snippet.thumbnails.default.url}">
        </a>
        `
        i++
    }
})