let width = screen.width, height = screen.height;
let video;
function setup() {
    createCanvas(width, height);
    video = createCapture(VIDEO);
}

function draw() {
    image(video, 0, 0, width, width * video.height / video.width);
    filter(INVERT);
}