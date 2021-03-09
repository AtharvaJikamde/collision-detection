var movingRect, stableRect;
function setup() {
  createCanvas(800,400);
  stableRect = createSprite(400, 200, 150, 50);
  movingRect = createSprite(200, 200, 50, 50);

  stableRect.shapeColor = "yellow";
  movingRect.shapeColor = "yellow";
}

function draw() {
  background(255,255,255);  
  drawSprites();

  console.log(stableRect.x - movingRect.x);
  console.log(
    (movingRect.width + stableRect.width) / 2
  );

  if (
    stableRect.x - movingRect.x <= (movingRect.width + stableRect.width) / 2 &&
    movingRect.x - stableRect.x <= (movingRect.width + stableRect.width) / 2 &&
    stableRect.y - movingRect.y <= (movingRect.height + stableRect.height) / 2 &&
    movingRect.y - stableRect.y <= (movingRect.height + stableRect.height) / 2
  ) {
    movingRect.shapeColor = "blue";
    stableRect.shapeColor = "red";
  } else {
    stableRect.shapeColor = "yellow";
    movingRect.shapeColor = "yellow";  
  }

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
}