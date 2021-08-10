let a = [],states=[],indices=[];
let u,w=0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  //song=loadSound("mymusic.mp3",loaded);
  if(windowWidth<1000)
    u=5;
  else
    u=20;
  for (k = 0; k < floor(width / u); k++) {
    a[k] = random(0, windowHeight);
    states[k]=-1;
  
  }
  quickSort(a,0,a.length-1);
}

/*function loaded()
{
    song.play();
    song.setVolume(0.5);
    //song1.play();
}*/

async function quickSort(arr,start,end)
{
    if(start>=end)
    return;

    let index=await partition(arr,start,end);
    states[index]=-1;
    indices[index]=0;
    await quickSort(arr,start,index-1);
    await quickSort(arr,index+1,end);
    indices[index]=-1;
}

async function partition(arr,start,end)
{
    let pivotIndex=start;
    let pivotValue=arr[end];
    states[pivotIndex]=0;
    for(let i=start;i<end;i++)
    {
        if(arr[i]<pivotValue)
        {
            await swap(arr,i,pivotIndex);
            states[pivotIndex]=-1;
            pivotIndex++;
            states[pivotIndex]=0;

        }
    }
    await swap(arr,pivotIndex,end);
    return pivotIndex;
}

function draw() {
    background(0);
   
    for (k = 0; k <a.length; k++) {
      stroke(0);
      if(states[k]==0)
      fill(255,0,0);
      else if(indices[k]==0)
      fill(0,255,0)
      else
      fill(255);
      rect(w, 0, u, a[k]);
      w = w + u;
    }
    w = 0;
  
}

async function swap(arr, a, b) {
  await sleep(400);
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
  //song=loadSound("music/beep-06.mp3",loaded);
  
}

/*function mousePressed()
{
  song.pause();
}*/

function sleep(ms)
{
    return new Promise(resolve=>setTimeout(resolve,ms));
}