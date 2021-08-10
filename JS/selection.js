let a = [];
let i=0,
  j=1,
  w = 0,
  minidx=0,u;

function setup() {
  createCanvas(windowWidth, windowHeight);
  if(windowWidth<1000)
    u=5;
  else
    u=20;
  for (k = 0; k <floor(width / u); k++) {
    a[k] = random(0, windowHeight);
  }
 
}

function draw() {
  background(0);
  if(a[j]<a[minidx])
    {
      minidx=j;
    }

  
  
  for (k = 0; k <a.length; k++) {
    if(k==minidx)
      {
          fill(100,200,0);
      }
    else if(k==j)
      fill(200,100,0);
    else if(k==i)
      fill(0,0,200);
    else
      fill(255);
    rect(w, 0, u, a[k]);
    w = w + u;
  }
  w = 0;
  
    if(i<a.length-1)
    {

      j=j+1;
      if(j>=a.length)
        {
          swap(a,minidx,i);
          i=i+1;
          j=i+1;
          minidx=i;
        }
    }
  else
    {
      noLoop();
     
    }
  
}

function swap(arr, a, b) {
  //await sleep(0);
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;

  
}

