let a = [];
let i=0,
  j=0,
  w = 0,u;
var song;
function setup() {
  createCanvas(windowWidth, windowHeight);
  song=loadSound("mymusic.mp3",loaded);
  if(windowWidth>400 && windowWidth<1000)
    u=5;
  else if(windowWidth<=400)
    u=10;
  else
    u=20;

    for (k = 0; k < width / u; k++) {
        a[k] = random(0, windowHeight);
      }

}
function loaded()
{
    song.play();
}
function draw() {
  background(0);
  if(a[j]>a[j+1])
    {
      
      swap(a,j,j+1);
    }

  
  
  for (k = 0; k < width / u; k++) {
    if(k==j)
      fill(100,200,0);
    else if(k==j+1)
      fill(200,100,0);
    else
      fill(255);
    rect(w, 0, u, a[k]);
    w = w + u;
    
  }
  w = 0;
  
    if(i<width/u)
    {

      j=j+1;
      if(j>=width/u-i-1)
        {
          j=0;
          i=i+1;
        }
    }
  else
    {
      noLoop();
    }
  
}

function swap(arr, a, b) {
 // await sleep(1000);
  //song=loadSound("music/beep-01a.mp3",loaded);
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
  //song=loadSound("music/beep-06.mp3",loaded);
  
}

function mousePressed()
{
  song.pause();
}
function sleep(ms)
{
    return new Promise(resolve=>setTimeout(resolve,ms));
}