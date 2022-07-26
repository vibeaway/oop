var b1, b2

function setup() 
{
  createCanvas(400, 400);
  b1=new Box()
  b2=new Box()
}

function draw() 
{
  background(220);
  b1.display()
  b1.fast(6)
  b2.display()
  b2.fast(2)
}

