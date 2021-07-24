function setup()
{
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(video);
    video.hide();
    classifier=ml5.imageClassifier("")
}
function draw()
{
    image(video,300,300,0,0);
}