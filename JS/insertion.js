let a = [];
let i=1,
  j=0,
  w = 0,
  key,u;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //song=loadSound("mymusic.mp3",loaded);
  if(windowWidth<1000)
    u=5;
  else
    u=20;
  for (k = 0; k < width / u; k++) {
    a[k] = random(0, windowHeight);
  }
  
}
/*function loaded()
{
    song.play();
}*/
function draw() {
  background(0);
  if(i==1)
    key=a[i];
 
  
  
  for (k = 0; k < width / u; k++) {
    if(k==j)
      fill(200,0,0);
    else if(k==i)
      fill(0,0,200);
    else
      fill(255);
    rect(w, 0, u, a[k]);
    w = w + u;
  }
  w = 0;
  
    if(i<width/u)
    {
      if(a[j]>key)
      a[j+1]=a[j];
      if(j<0 || a[j]<=key)
        {
         a[j+1]=key;
         i=i+1;
         j=i;
         key=a[i];
         //song=loadSound("music/beep-06.mp3",loaded);
         //Delaytime(0.01);
        }
      j=j-1;
    }
  else
    {
      noLoop();
    }
  
}

/*function mousePressed()
{
  song.pause();
}*/
