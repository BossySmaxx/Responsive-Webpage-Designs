let width = 800, height = 600;
let video;
function setup() {
    createCanvas(width, height);
    video = createCapture(VIDEO);
}

function draw() {
    image(video, 0, 0, width, width * video.height / video.width);
}