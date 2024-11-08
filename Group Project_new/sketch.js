let song;
let amplitude; // Used for storing volume analysis
function preload() {
    // Load music file
    song = loadSound('./music.mp3');
}

function setup() {
    createCanvas(680, 680)
    // Music auto-play
    amplitude = new p5.Amplitude(); // Create an amplitude analyzer
    amplitude.setInput(song); // Set audio input for amplitude analyzer
}

let particles = []; // Array to store particles
function draw() {
    // background(242, 242, 242);
    background(250, 250, 250);
    stroke(231, 206, 52);
    strokeCap(SQUARE)

    drawYellowLines();
    drawRedBoxes();
    drawBlueBoxes();
    drawGrayBoxes();
    otherBox()

    // Iterate over all particles, update and display them
    for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update();
        particles[i].show();

        // Remove particle from array if it goes off-screen
        if (particles[i].isOffScreen()) {
            particles.splice(i, 1);
        }
    }
}

let redRandomText = [];
let blueRandomText = [];
let grayRandomText = [];

function drawYellowLines() {

    // Full Length Horizontal Lines
    let yPositions = [0.034, 0.17, 0.36, 0.445, 0.575, 0.64, 0.866, 0.958, 0.70, 0.798, 0.896, 0.74, 0.813, 0.74, 0.075, 0.298, 0.818, 0.51];
    let horizontalStrokes = [14, 16, 15, 15, 15, 15, 15, 13, 15, 15, 16, 15, 18, 25, 25, 45, 53, 38];
    let xStarts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.07, 0.85, 0.85, 0.13, 0.13, 0.13, 0.85];
    let xLength = [1, 1, 1, 1, 1, 1, 1, 1, 0.07, 0.07, 0.07, 0.55, 0.97, 0.97, 0.233, 0.233, 0.233, 0.97];

    // Add dynamic effects to horizontal lines
    for (let i = 0; i < yPositions.length; i++) {
        let offset = sin(frameCount * 0.05 + i) * 10; // Sinusoidal oscillation for vibration effect
        let dynamicStrokeWeight = horizontalStrokes[i] + sin(frameCount * 0.1 + i) * 4; // Dynamic stroke weight
        let dynamicLength = xLength[i] + sin(frameCount * 0.03 + i) * 0.05; // Dynamic line length

        strokeWeight(dynamicStrokeWeight);
        stroke(231, 206, 52, 255); // Constant yellow stroke color
        line(xStarts[i] * 680 + offset, 680 * yPositions[i], 680 * dynamicLength, 680 * yPositions[i]);
    }

    // Full Length Vertical lines
    let xPositions = [0.032, 0.07, 0.125, 0.233, 0.549, 0.59, 0.85, 0.89, 0.93, 0.97, 0.59, 0.661, 0.93, 0.93, 0.185, 0.445];
    let verticalStrokes = [15, 15, 15, 15, 17, 15, 15, 17, 15, 17, 15, 17, 15, 15, 30, 50];
    let verticalHeight = [0.355, 1, 1, 1, 1, 0.355, 1, 0.36, 0.12, 1, 1, 0.65, 0.45, 0.82, 0.445, 0.575];
    let yStarts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.45, 0.45, 0.178, 0.63, 0.36, 0.36];

    // Add dynamic effects to vertical lines
    for (let i = 0; i < xPositions.length; i++) {
        let offsetY = cos(frameCount * 0.1 + i) * 10; // Sinusoidal oscillation for vertical lines
        let dynamicStrokeWeightVertical = verticalStrokes[i] + cos(frameCount * 0.07 + i) * 4; // Dynamic stroke weight
        let dynamicHeight = verticalHeight[i] + cos(frameCount * 0.05 + i) * 0.05; // Dynamic line height

        strokeWeight(dynamicStrokeWeightVertical);
        stroke(234,213,38); // Constant yellow stroke color
        line(680 * xPositions[i], yStarts[i] * 680 + offsetY, 680 * xPositions[i], 680 * dynamicHeight * 680);
    }
}

function drawRedBoxes() {
    noStroke();

    let RedBoxesColour = [152, 51, 43];
    let horizontalRedBoxesWidth = [
        15, 15, 16, 15, 15,
        15, 15, 15, 17, 17, 17,
        15, 15, 15, 13,
        15, 15, 15, 17, 15, 15, 17,
        15, 15, 15, 17, 19, 17, 17,
        14, 15, 19, 14, 15, 15, 15, 17,
        17, 17, 15, 17, 15, 17,
        15, 15, 17, 15, 15,
        15,
        15, 15, 16, 13,
        15, 14, 14, 15, 16, 16, 15,
        17,
        15, 15, 15, 15, 17,
    ];
    let horizontalRedBoxesHeight = [
        30, 30, 30, 30, 30,
        15, 15, 12, 15, 15, 15,
        17, 17, 17, 17,
        15, 15, 15, 20, 12, 15, 15,
        15, 15, 15, 15, 15, 15, 15,
        15, 15, 15, 15, 15, 15, 15, 15,
        15, 15, 15, 15, 15, 15,
        15, 15, 15, 15, 15,
        13,
        14, 15, 15, 15,
        15, 15, 15, 15, 15, 15, 15,
        15,
        13, 13, 13, 13, 13
    ];
    let xStarts = [
        0.07, 0.233, 0.549, 0.89, 0.97,
        0.07, 0.549, 0.59, 0.89, 0.97, 0.97,
        0.032, 0.21, 0.59, 0.91,
        0.032, 0.125, 0.233, 0.549, 0.59, 0.85, 0.97,
        0.032, 0.146, 0.392, 0.549, 0.659, 0.753, 0.89,
        0.026, 0.125, 0.3, 0.398, 0.639, 0.85, 0.93, 0.97,
        0.355, 0.413, 0.479, 0.661, 0.85, 0.97,
        0.07, 0.233, 0.42, 0.93, 0.99,
        0.07,
        0.07, 0.125, 0.44, 0.57,
        0.187, 0.44, 0.5, 0.59, 0.68, 0.85, 0.97,
        0.04,
        0.07, 0.186, 0.625, 0.9, 0.97,
    ];
    let yStarts = [
        0, 0, 0, 0, 0,
        0.1, 0.117, 0.067, 0.107, 0.055, 0.107,
        0.17, 0.17, 0.17, 0.17,
        0.276, 0.276, 0.276, 0.23, 0.23, 0.23, 0.308,
        0.36, 0.36, 0.36, 0.36, 0.36, 0.36, 0.36,
        0.445, 0.445, 0.445, 0.445, 0.445, 0.445, 0.445, 0.445,
        0.575, 0.575, 0.575, 0.575, 0.575, 0.575,
        0.64, 0.64, 0.64, 0.64, 0.64,
        0.7,
        0.74, 0.74, 0.74, 0.74,
        0.866, 0.866, 0.866, 0.866, 0.866, 0.866, 0.866,
        0.896,
        0.958, 0.958, 0.958, 0.958, 0.958,
    ];
    // Add rotation, transparency changes, color gradient, and bounce effect
    for (let i = 0; i < yStarts.length; i++) {
        let xOffset = sin(frameCount * 0.1 + i) * 5; // Horizontal random offset
        let yOffset = cos(frameCount * 0.1 + i) * 5; // Vertical random offset
        let dynamicWidth = horizontalRedBoxesWidth[i] + sin(frameCount * 0.05 + i) * 2; // Pulsating width
        let dynamicHeight = horizontalRedBoxesHeight[i] + cos(frameCount * 0.05 + i) * 2; // Pulsating height

        // Change color over time
        let r = map(sin(frameCount * 0.05 + i), -1, 1, 100, 255);
        let g = map(cos(frameCount * 0.05 + i), -1, 1, 50, 150);
        let b = map(sin(frameCount * 0.05 + i + 1), -1, 1, 30, 100);
        fill(r, g, b, 255); // Color change with added transparency

        // Rotation effect
        push();
        translate(680 * xStarts[i] + xOffset, 680 * yStarts[i] + yOffset);
        rotate(sin(frameCount * 0.02 + i) * PI / 4); // Rotate over time
        rect(-dynamicWidth / 2, -dynamicHeight / 2, dynamicWidth, dynamicHeight);
        pop();
    }

    // Apply the same effects to vertical boxes
    let verticalRedBoxesWidth = [
        30, 45, 15, 60, 50, 43, 40, 58, 15,
        15, 15,
        15,
        15, 15,
        17, 17, 17, 17, 17,
        15, 15,
        17,
        15,
        17, 17,
    ];
    let verticalRedBoxesHeight = [
        80, 60, 15, 45, 30, 40, 28, 100, 39,
        15, 15,
        13,
        13, 13,
        13, 13, 13, 13, 13,
        13, 13,
        15,
        13,
        13, 15,
    ];
    let xPositions = [
        0.18, 0.29, 0.233, 0.180, 0.486, 0.91, 0.889, 0.743, 0.912,
        0.07, 0.07,
        0.125,
        0.233, 0.233,
        0.549, 0.549, 0.549, 0.549, 0.549,
        0.59, 0.59,
        0.662,
        0.85,
        0.97, 0.97,
    ];
    let yPositions = [
        0.1, 0.088, 0.276, 0.53, 0.971, 0.235, 0.780, 0.529, 0.51,
        0.512, 0.79,
        0.816,
        0.788, 0.897,
        0.5, 0.618, 0.66, 0.846, 0.937,
        0.551, 0.784,
        0.616,
        0.709,
        0.71, 0.82,
    ];
    // Get the volume level
    let level = amplitude.getLevel(); // Get the current volume level

    // Parameters affected by volume level
    let jumpAmount = map(level, 0, 0.3, 0.5, 2); // The higher the volume, the larger the jump
    for (let i = 0; i < xPositions.length; i++) {
        let xOffset = sin(frameCount * 0.1 + i) * 5; // Horizontal random offset
        let yOffset = cos(frameCount * 0.1 + i) * 5; /// Vertical random offset
        let dynamicWidth = verticalRedBoxesWidth[i] + sin(frameCount * 0.05 + i) * 2; // Pulsating width
        let dynamicHeight = verticalRedBoxesHeight[i] + cos(frameCount * 0.05 + i) * 2; // Pulsating height

        // Change color over time
        let r = map(sin(frameCount * 0.05 + i), -1, 1, 100, 255);
        let g = map(cos(frameCount * 0.05 + i), -1, 1, 50, 150);
        let b = map(sin(frameCount * 0.05 + i + 1), -1, 1, 30, 100);
        fill(r, g, b, 180); // Color change with added transparency

        // Rotation effect
        push();
        translate(680 * xPositions[i] + xOffset, 680 * yPositions[i] + yOffset);
        rotate(sin(frameCount * 0.02 + i) * PI / 4); // Rotate over time
        rect(-dynamicWidth / 2, -dynamicHeight / 2, dynamicWidth * jumpAmount, dynamicHeight * jumpAmount);
        pop();
    }
}


function drawBlueBoxes() {
    noStroke();
    let BlueBoxesColour = [67, 104, 186];

    // Get the volume level
    let level = amplitude.getLevel(); // Get the current volume level

    // Parameters affected by volume level
    let jumpAmount = map(level, 0, 0.3, 0.5, 2); // The higher the volume, the larger the jump
    let horizontalBlueBoxesWidth = [
        14, 17, 14, 14,
        14, 16, 17, 15, 17,
        15, 15, 17, 15, 15, 15, 13,
        15, 15, 15, 16,
        15, 15, 15, 15, 15, 15,
        15, 17, 17, 17, 15, 15,
        15,
        15, 16, 15,
        15,
        15, 15, 15, 15, 14, 17, 17, 16, 16,
        15, 15, 15, 12, 15, 15, 15,
    ];
    let horizontalBlueBoxesHeight = [
        14, 14, 14, 14,
        15, 15, 16, 17, 17,
        15, 15, 15, 15, 15, 15, 15,
        15, 15, 15, 15,
        15, 15, 15, 15, 15, 15,
        15, 15, 15, 15, 15, 15,
        15,
        15, 15, 15,
        15,
        15, 15, 15, 15, 15, 15, 15, 15, 15,
        13, 13, 13, 13, 13, 13, 13,
    ];
    let xStarts = [
        0.032, 0.16, 0.85, 0.93,
        0.125, 0.3, 0.549, 0.850, 0.97,
        0.07, 0.233, 0.34, 0.49, 0.59, 0.85, 0.95,
        0.07, 0.233, 0.49, 0.775,
        0.07, 0.125, 0.233, 0.71, 0.78, 0.93,
        0.125, 0.36, 0.49, 0.72, 0.775, 0.85,
        0.034,
        0.233, 0.38, 0.49,
        0.035,
        0.07, 0.125, 0.233, 0.4, 0.47, 0.549, 0.63, 0.73, 0.9,
        0.125, 0.125, 0.4, 0.44, 0.67, 0.72, 0.85,
    ];

    let yStarts = [
        0.034, 0.034, 0.034, 0.034,
        0.17, 0.17, 0.17, 0.17, 0.17,
        0.36, 0.36, 0.36, 0.36, 0.36, 0.36, 0.36,
        0.445, 0.445, 0.445, 0.445,
        0.575, 0.575, 0.575, 0.575, 0.575, 0.575,
        0.64, 0.64, 0.64, 0.64, 0.64, 0.64,
        0.7,
        0.74, 0.74, 0.74,
        0.798,
        0.866, 0.866, 0.866, 0.866, 0.866, 0.866, 0.866, 0.866, 0.866,
        0.958, 0.958, 0.958, 0.958, 0.958, 0.958, 0.958,
    ];
    let shadowOffset = 4; // Offset for the shadow

    // Draw blue boxes horizontally
    for (let i = 0; i < yStarts.length; i++) {
        let xOffset = sin(frameCount * 0.05 + i) * 5; // Horizontal floating effect
        let yOffset = cos(frameCount * 0.05 + i) * 5; // Vertical floating effect

        // Color gradient effect
        let r = map(sin(frameCount * 0.02 + i), -1, 1, 50, 100);
        let g = map(sin(frameCount * 0.03 + i), -1, 1, 100, 150);
        let b = map(cos(frameCount * 0.04 + i), -1, 1, 150, 255);

        fill(r, g, b, 200); // Gradient color and transparency

        // Draw the box
        fill(r, g, b, 200);
        rect(680 * xStarts[i] + xOffset - (horizontalBlueBoxesWidth[i] * jumpAmount) / 2,
            680 * yStarts[i] + yOffset - (horizontalBlueBoxesHeight[i] * jumpAmount) / 2,
            horizontalBlueBoxesWidth[i] * jumpAmount, horizontalBlueBoxesHeight[i] * jumpAmount);
    }

    // Draw vertical blue boxes
    let verticalBlueBoxesWidth = [
        40, 65, 37, 40, 38, 50,
        15, 15,
        15, 15, 15, 15, 15, 15,
        15, 15, 15,
        15, 17, 17, 15,
        15, 15, 15,
        15, 15, 15, 15, 15,
        15, 17,
        15,
        15, 15, 15,
    ];
    let verticalBlueBoxesHeight = [
        35, 113, 40, 35, 22, 58,
        15, 15,
        15, 15, 15, 15, 13, 13,
        15, 13, 14,
        15, 15, 15, 15,
        15, 15, 15,
        15, 15, 15, 15, 15,
        15, 15,
        15,
        15, 15, 15,
    ];
    let xPositions = [
        0.107, 0.701, 0.108, 0.891, 0.931, 0.321,
        0.032, 0.032,
        0.125, 0.125, 0.125, 0.125, 0.125, 0.125,
        0.233, 0.233, 0.233,
        0.549, 0.549, 0.549, 0.549,
        0.59, 0.59, 0.59,
        0.85, 0.85, 0.85, 0.85, 0.85,
        0.89, 0.89,
        0.93,
        0.97, 0.97, 0.97,
    ];
    let yPositions = [
        0.225, 0.265, 0.699, 0.696, 0.126, 0.52,
        0.104, 0.222,
        0.101, 0.34, 0.384, 0.512, 0.784, 0.896,
        0.1, 0.147, 0.224,
        0.099, 0.315, 0.396, 0.785,
        0.5, 0.66, 0.934,
        0.121, 0.309, 0.504, 0.747, 0.81,
        0.052, 0.309,
        0.747,
        0.234, 0.504, 0.747,
    ];

    for (let i = 0; i < xPositions.length; i++) {
        let xOffset = sin(frameCount * 0.1 + i) * 5; // Horizontal floating effect
        let yOffset = cos(frameCount * 0.1 + i) * 5; // Vertical floating effect

        // Gradient color effect
        let r = map(sin(frameCount * 0.02 + i), -1, 1, 50, 100);
        let g = map(sin(frameCount * 0.03 + i), -1, 1, 100, 150);
        let b = map(cos(frameCount * 0.04 + i), -1, 1, 150, 255);

        fill(r, g, b, 200); // Gradient color and transparency

        // Draw shadow
        fill(70,106,190); // Shadow color
        rect(680 * xPositions[i] + xOffset - (verticalBlueBoxesWidth[i]+jumpAmount) / 2,
            680 * yPositions[i] + yOffset - (verticalBlueBoxesHeight[i]+jumpAmount) / 2,
            verticalBlueBoxesWidth[i], verticalBlueBoxesHeight[i]);

        // Draw the vertical box
        fill(r, g, b, 200);
        rect(680 * xPositions[i] + xOffset - (verticalBlueBoxesWidth[i] * jumpAmount) / 2,
            680 * yPositions[i] + yOffset - (verticalBlueBoxesHeight[i] * jumpAmount) / 2,
            verticalBlueBoxesWidth[i] * jumpAmount, verticalBlueBoxesHeight[i] * jumpAmount);
    }
}

function drawGrayBoxes() {
    noStroke();
    let GrayBoxesColour = [223, 224, 218];
    let horizontalGrayBoxesWidth = [
        17, 17, 16, 14, 15, 20, 15, 15, 14, 14,
        28, 13, 16, 17, 15, 15, 12, 12, 12,
        13, 10, 17, 14, 14,
        15, 16, 13, 30, 48, 15, 15, 17, 17, 15,
        13, 17, 30, 15, 15, 30, 13,
        14, 16, 15, 15, 15, 16, 13,
        18, 16, 15, 15,
        17, 15, 17, 15,
        16, 17, 15, 15, 15, 16,
    ]
    let horizontalGrayBoxesHeight = [
        15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
        15, 15, 15, 15, 15, 15, 15, 15, 15,
        15, 15, 15, 15, 15,
        15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
        15, 15, 15, 15, 15, 15, 15,
        15, 15, 15, 15, 15, 15, 15,
        15, 15, 15, 15,
        15, 15, 15, 15,
        15, 15, 15, 15, 15, 15
    ]
    let xStarts = [
        0.21, 0.33, 0.525, 0.57, 0.61, 0.74, 0.83, 0.89, 0.95, 0.99,
        0.18, 0.252, 0.36, 0.522, 0.614, 0.75, 0.83, 0.87, 0.95,
        0.125, 0.213, 0.28, 0.93, 0.97,
        0.044, 0.148, 0.216, 0.33, 0.445, 0.548, 0.589, 0.659, 0.905, 0.991,
        0.05, 0.288, 0.449, 0.55, 0.59, 0.746, 0.951,
        0.05, 0.185, 0.293, 0.548, 0.59, 0.662, 0.946,
        0.19, 0.303, 0.548, 0.59,
        0.037, 0.211, 0.321, 0.785,
        0.049, 0.313, 0.366, 0.548, 0.59, 0.773,
    ]
    let yStarts = [
        0.034, 0.034, 0.034, 0.034, 0.034, 0.034, 0.034, 0.034, 0.034, 0.034,
        0.17, 0.17, 0.17, 0.17, 0.17, 0.17, 0.17, 0.17, 0.17,
        0.36, 0.36, 0.36, 0.36, 0.36,
        0.445, 0.445, 0.445, 0.445, 0.445, 0.445, 0.445, 0.445, 0.445, 0.445,
        0.575, 0.575, 0.575, 0.575, 0.575, 0.575, 0.575,
        0.64, 0.64, 0.64, 0.64, 0.64, 0.64, 0.64,
        0.74, 0.74, 0.74, 0.74,
        0.866, 0.866, 0.866, 0.866,
        0.958, 0.958, 0.958, 0.958, 0.958, 0.958,
    ]
    for (let i = 0; i < yStarts.length; i++) {
        // Place small boxes at the center of each line
        fill(GrayBoxesColour);
        rect(680 * xStarts[i] - horizontalGrayBoxesWidth[i] / 2, 680 * yStarts[i] - horizontalGrayBoxesHeight[i] / 2, horizontalGrayBoxesWidth[i], horizontalGrayBoxesHeight[i]);
    }

    for (let i = 0; i < grayRandomText.length; i++) {
        if (grayRandomText[i] !== null) {
            createPar(xStarts[grayRandomText[i]] * width, yStarts[grayRandomText[i]] * width)
            grayRandomText[i] = null
        }
    }
    let verticalGrayBoxesWidth = [
        32, 20, 16, 50, 35, 28, 20,
        15, 15,
        15, 15, 14, 14, 15, 15, 15, 15, 15, 15,
        15, 15, 15, 15, 15, 15,
        15, 15, 15, 15, 15, 14, 14, 15, 15, 15, 15, 15,
        17, 17, 17, 17, 17,
        15, 15, 15, 15, 15, 15, 15, 15, 15,
        17,
        15, 15, 15, 15, 15, 15, 15, 15,
        15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
    ];
    let verticalGrayBoxesHeight = [
        15, 16, 16, 36, 25, 24, 17,
        14, 14,
        14, 14, 14, 14, 14, 14, 12, 14, 14, 14,
        20, 28, 28, 10, 10, 15,
        12, 12, 12, 15, 13, 12, 13, 15, 13, 13, 10, 13,
        17, 15, 10, 15, 14,
        14, 15, 14, 17, 17, 14, 14, 14, 13,
        15,
        14, 14, 14, 14, 14, 14, 14, 14,
        14, 14, 14, 14, 14, 14, 14, 14, 12, 14,
    ];
    let xPositions = [
        0.180, 0.181, 0.185, 0.445, 0.742, 0.29, 0.185,
        0.032, 0.032,
        0.07, 0.07, 0.07, 0.07, 0.07, 0.07, 0.07, 0.07, 0.07, 0.07,
        0.125, 0.125, 0.125, 0.125, 0.125, 0.125,
        0.233, 0.233, 0.233, 0.233, 0.233, 0.233, 0.233, 0.233, 0.233, 0.233, 0.233, 0.233,
        0.549, 0.549, 0.549, 0.549, 0.549,
        0.59, 0.59, 0.59, 0.59, 0.59, 0.59, 0.59, 0.59, 0.59,
        0.661,
        0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85, 0.85,
        0.97, 0.97, 0.97, 0.97, 0.97, 0.97, 0.97, 0.97, 0.97, 0.97,
    ];
    let yPositions = [
        0.103, 0.3, 0.4, 0.5, 0.507, 0.09, 0.807,
        0.054, 0.34,
        0.054, 0.149, 0.19, 0.257, 0.55, 0.676, 0.719, 0.81, 0.887, 0.937,
        0.076, 0.309, 0.413, 0.801, 0.882, 0.937,
        0.0514, 0.188, 0.31, 0.382, 0.467, 0.501, 0.551, 0.684, 0.807, 0.846, 0.882, 0.935,
        0.054, 0.257, 0.379, 0.676, 0.884,
        0.05, 0.1, 0.147, 0.194, 0.26, 0.315, 0.694, 0.806, 0.886,
        0.506,
        0.053, 0.289, 0.422, 0.617, 0.66, 0.728, 0.899, 0.978,
        0.076, 0.147, 0.196, 0.254, 0.423, 0.524, 0.613, 0.656, 0.728, 0.9,

    ];
    for (let i = 0; i < xPositions.length; i++) {
        // Place small boxes at the center of each line
        fill(GrayBoxesColour);
        rect(680 * xPositions[i] - verticalGrayBoxesWidth[i] / 2, 680 * yPositions[i] - verticalGrayBoxesHeight[i] / 2, verticalGrayBoxesWidth[i], verticalGrayBoxesHeight[i]);
    }
}

function otherBox() {
    noStroke();
    // Get volume level
    let level = amplitude.getLevel(); // Current volume level

    // Parameters affected by volume level
    let jumpAmount1 = map(level, 0, 0.5, 0.5, 1.5); // The higher the volume, the greater the jump
    let jumpAmount2 = map(level, 0, 0.5, 0.3, 2); // The higher the volume, the greater the jump
    let RedBoxesColour = [152, 51, 43];
    let YellowBoxesColour = [231, 206, 52];
    fill(RedBoxesColour);
    rect(680 * 0.701 - (65 * jumpAmount1) / 2,
        680 * 0.276 - (50 * jumpAmount2) / 2,
        (65 * jumpAmount1),
        (50 * jumpAmount2)
    );

    fill(YellowBoxesColour);
    rect(680 * 0.703 - (35 * jumpAmount1) / 2,
        680 * 0.279 - (25 * jumpAmount2) / 2,
        (35 * jumpAmount1),
        (25 * jumpAmount2)
    );

    rect(680 * 0.322 - (30 * jumpAmount1) / 2,
        680 * 0.518 - (25 * jumpAmount2) / 2,
        30 * jumpAmount1,
        25 * jumpAmount2
    );
    rect(680 * 0.321 - (50 * jumpAmount1) / 2,
        680 * 0.465 - (17 * jumpAmount2) / 2,
        50 * jumpAmount1,
        17 * jumpAmount2
    );

}

// Set array length information
let redBoxHorizontal = 66
let redBoxVertical = 25
let blueBoxHorizontal = 53
let blueBoxVertical = 35
let grayBoxHorizontal = 62
let grayBoxVertical = 70

// Music playback status
let songType = false;
function mousePressed() {
    if(!songType){
        song.play();
        songType = true
    }
}

// Create particles
function createPar(x, y) {
    let numParticles = 50; // Adjust particle count as needed
    for (let i = 0; i < numParticles; i++) {
        let p = new Particle(x, y);
        particles.push(p);
    }
}

class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = random(5, 10);
        this.speedX = random(-2, 2);
        this.speedY = random(-2, 2);
        this.alpha = 255;

        // Assign random color to the particle
        this.colorStart = color(36, 57, 255); // Starting color
        this.colorEnd = color(204, 209, 255); // // Ending color
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.alpha -= 5; // Gradual fade

        // Gradually change color
        this.color = lerpColor(this.colorStart, this.colorEnd, 1 - this.alpha / 255);
    }

    show() {
        fill(this.color.levels[0], this.color.levels[1], this.color.levels[2], this.alpha); // Use particle color
        noStroke();
        ellipse(this.x, this.y, this.size);
    }

    isOffScreen() {
        return this.alpha <= 0;
    }
}


setInterval(() => {
    redRandomText = [int(random(redBoxHorizontal)), int(random(redBoxHorizontal)), int(random(redBoxHorizontal)), int(random(redBoxHorizontal))]
}, 2000)
setInterval(() => {
    blueRandomText = [int(random(blueBoxHorizontal)), int(random(blueBoxHorizontal)), int(random(blueBoxHorizontal))]
}, 3000)
setInterval(() => {
    grayRandomText = [int(random(grayBoxHorizontal)), int(random(grayBoxHorizontal)), int(random(grayBoxHorizontal))]
}, 4000)

// Triggered when a key is pressed
function keyPressed() {
    if (keyCode === 32) {
        if(songType){
            song.pause();
            songType = false
        }
    }
}

function windowResized() {
    resizeCanvas(680, 680);
    draw();
}
