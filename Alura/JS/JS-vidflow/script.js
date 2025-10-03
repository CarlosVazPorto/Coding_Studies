const urlVideos = "http://localhost:3000/videos";

const api = fetch(urlVideos)
.then(res => console.log(res.json()));