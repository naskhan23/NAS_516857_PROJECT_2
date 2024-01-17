let currentArtIndex = 0;
let isDrawing = true;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(10);
    frameRate(60);

    // Button 1: Start Drawing
    createButton('Start').position(10, 30).mousePressed(startDrawing);

    // Button 2: Stop Drawing
    createButton('Stop').position(55, 30).mousePressed(stopDrawing);

    // Button 3: Reset Drawing
    createButton('Reset').position(100, 30).mousePressed(resetDrawing);

    // Button 4: Previous Art
    createButton('Previous').position(150, 30).mousePressed(previousArt);

    // Button 5: Next Art
    createButton('Next').position(217, 30).mousePressed(nextArt);

    //Button 6: Save Art
    createButton('Save Art').position(260, 30).mousePressed(saveArt);
}

function draw() {
    if (isDrawing) {
        if (currentArtIndex === 0) {
            drawArt1();
        } else if (currentArtIndex === 1) {
            drawArt2();
        } else if (currentArtIndex === 2) {
            drawArt3();
        } else if (currentArtIndex === 3) {
            drawArt4();
        } 
    }
}

// Art1 - Random Rectangles
function drawArt1() {
    let x = random(width);
    let y = random(height);
    let z = random(20, 255);

    let r = random(255);
    let g = random(255);
    let b = random(255);

    fill(r, g, b, 70);
    rect(x, y, z, z);
}

// Art2 - Random Lines
function drawArt2() {
    strokeWeight(random(1, 15));
    stroke(random(255), random(255), random(255), random(255), 50);
    line(random(width), random(height), random(width), random(height));
}

// Art3 - Random Quads
function drawArt3() {
    stroke(random(255), random(255), random(255), random(40, 100));
    strokeWeight(random(0, 10));
    fill(random(255), random(255), random(255), random(40, 100));
    quad(random(width), random(height), random(width), random(height),
    random(width), random(height), random(width), random(height));
}

//Art4 - Random Points
function drawArt4(){
    stroke(random(255), random(255), random(255), random(80, 100));
    strokeWeight(random(5,60));
    point(random(width), random(height));
}

// function to start the random drawing 
function startDrawing() {
    isDrawing = true;
}

// function to stop the random drawing
function stopDrawing() {
    isDrawing = false;
}

// function to reset the drawing
function resetDrawing() {
    isDrawing = false;
    background(10);
}

// function to go to the previous art
function previousArt() {
    currentArtIndex--;
    if (currentArtIndex < 0) {
        currentArtIndex = 3; // Loop back to the last art
    }
    resetDrawing();
}

// function to go to the next art
function nextArt() {
    currentArtIndex++;
    if (currentArtIndex > 3) {
        currentArtIndex = 0; // Loop back to the first art
    }
    resetDrawing();
}

// function to save the art
function saveArt() {
    save("myArt.png");
}
