var song;

function setup()
{
    
    song=loadSound("mymusic.mp3",loaded);
}
function loaded()
{
    song.play();
}
function draw()
{
    
}