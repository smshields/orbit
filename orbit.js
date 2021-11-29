//Note Enums - separated by half-step:
const NOTES = {
    C: 1,
    Cs: 2,
    Df: 2,
    D: 3,
    Ds: 4,
    Ef: 4,
    E: 5,
    Es: 6,
    Ff: 5,
    F: 6,
    Fs: 7,
    Gf: 7,
    G: 8,
    Gs: 9,
    Af: 9,
    A: 10,
    As: 11,
    Bf: 11,
    B: 12,
    Bs: 1
}

const NOTE_STRINGS = {
    C: "C",
    Cs: "C#",
    Df: "Db",
    D: "D",
    Ds: "D#",
    Ef: "Eb",
    E: "E",
    Es: "E#",
    Ff: "Fb",
    F: "F",
    Fs: "F#",
    Gf: "Gb",
    G: "G",
    Gs: "G#",
    Af: "Ab",
    A: "A",
    As: "A#",
    Bf: "Bb",
    B: "B",
    Bs: "B#"
}

let SynthVisualizerState = new Array(15).fill(false);

let cameraAngle = 0;

function setup() {
    getAudioContext().suspend();
    //Takes up browser screen
    //TODO: Remove scroll bars
    let cnv = createCanvas(window.innerWidth, window.innerHeight, WEBGL);
    //Move around the world with drag

    //Establish 15 voices for all available keys

    //Generate Shapes for Visualizer

    amplitude = new p5.Amplitude();

    monoSynth1 = new p5.MonoSynth();
    monoSynth1.num = 0;
    monoSynth1.sphereX = randomX();
    monoSynth1.sphereY = randomY();
    monoSynth1.sphereZ = randomZ();
    monoSynth1.rotX = randomRotateFactor();
    monoSynth1.rotY = randomRotateFactor();
    monoSynth1.rotZ = randomRotateFactor();
    monoSynth1.sphereSize = randomSize();
    monoSynth1.fillColor = color(random(0, 250), random(0, 250), random(0, 250));
    monoSynth2 = new p5.MonoSynth();
    monoSynth2.num = 1;
    monoSynth2.sphereX = randomX();
    monoSynth2.sphereY = randomY();
    monoSynth2.sphereZ = randomZ();
    monoSynth2.rotX = randomRotateFactor();
    monoSynth2.rotY = randomRotateFactor();
    monoSynth2.rotZ = randomRotateFactor();
    monoSynth2.sphereSize = randomSize();
    monoSynth2.fillColor = color(random(0, 250), random(0, 250), random(0, 250));
    monoSynth3 = new p5.MonoSynth();
    monoSynth3.num = 2;
    monoSynth3.sphereX = randomX();
    monoSynth3.sphereY = randomY();
    monoSynth3.sphereZ = randomZ();
    monoSynth3.rotX = randomRotateFactor();
    monoSynth3.rotY = randomRotateFactor();
    monoSynth3.rotZ = randomRotateFactor();
    monoSynth3.sphereSize = randomSize();
    monoSynth3.fillColor = color(random(0, 250), random(0, 250), random(0, 250));
    monoSynth4 = new p5.MonoSynth();
    monoSynth4.num = 3;
    monoSynth4.sphereX = randomX();
    monoSynth4.sphereY = randomY();
    monoSynth4.sphereZ = randomZ();
    monoSynth4.rotX = randomRotateFactor();
    monoSynth4.rotY = randomRotateFactor();
    monoSynth4.rotZ = randomRotateFactor();
    monoSynth4.sphereSize = randomSize();
    monoSynth4.fillColor = color(random(0, 250), random(0, 250), random(0, 250));
    monoSynth5 = new p5.MonoSynth();
    monoSynth5.num = 4;
    monoSynth5.sphereX = randomX();
    monoSynth5.sphereY = randomY();
    monoSynth5.sphereZ = randomZ();
    monoSynth5.rotX = randomRotateFactor();
    monoSynth5.rotY = randomRotateFactor();
    monoSynth5.rotZ = randomRotateFactor();
    monoSynth5.sphereSize = randomSize();
    monoSynth5.fillColor = color(random(0, 250), random(0, 250), random(0, 250));
    monoSynth6 = new p5.MonoSynth();
    monoSynth6.num = 5;
    monoSynth6.sphereX = randomX();
    monoSynth6.sphereY = randomY();
    monoSynth6.sphereZ = randomZ();
    monoSynth6.rotX = randomRotateFactor();
    monoSynth6.rotY = randomRotateFactor();
    monoSynth6.rotZ = randomRotateFactor();
    monoSynth6.sphereSize = randomSize();
    monoSynth6.fillColor = color(random(0, 250), random(0, 250), random(0, 250));
    monoSynth7 = new p5.MonoSynth();
    monoSynth7.num = 6;
    monoSynth7.sphereX = randomX();
    monoSynth7.sphereY = randomY();
    monoSynth7.sphereZ = randomZ();
    monoSynth7.rotX = randomRotateFactor();
    monoSynth7.rotY = randomRotateFactor();
    monoSynth7.rotZ = randomRotateFactor();
    monoSynth7.sphereSize = randomSize();
    monoSynth7.fillColor = color(random(0, 250), random(0, 250), random(0, 250));
    monoSynth8 = new p5.MonoSynth();
    monoSynth8.num = 7;
    monoSynth8.sphereX = randomX();
    monoSynth8.sphereY = randomY();
    monoSynth8.sphereZ = randomZ();
    monoSynth8.rotX = randomRotateFactor();
    monoSynth8.rotY = randomRotateFactor();
    monoSynth8.rotZ = randomRotateFactor();
    monoSynth8.sphereSize = randomSize();
    monoSynth8.fillColor = color(random(0, 250), random(0, 250), random(0, 250));
    monoSynth9 = new p5.MonoSynth();
    monoSynth9.num = 8;
    monoSynth9.sphereX = randomX();
    monoSynth9.sphereY = randomY();
    monoSynth9.sphereZ = randomZ();
    monoSynth9.rotX = randomRotateFactor();
    monoSynth9.rotY = randomRotateFactor();
    monoSynth9.rotZ = randomRotateFactor();
    monoSynth9.sphereSize = randomSize();
    monoSynth9.fillColor = color(random(0, 250), random(0, 250), random(0, 250));
    monoSynth10 = new p5.MonoSynth();
    monoSynth10.num = 9;
    monoSynth10.sphereX = randomX();
    monoSynth10.sphereY = randomY();
    monoSynth10.sphereZ = randomZ();
    monoSynth10.rotX = randomRotateFactor();
    monoSynth10.rotY = randomRotateFactor();
    monoSynth10.rotZ = randomRotateFactor();
    monoSynth10.sphereSize = randomSize();
    monoSynth10.fillColor = color(random(0, 250), random(0, 250), random(0, 250));
    monoSynth11 = new p5.MonoSynth();
    monoSynth11.num = 10;
    monoSynth11.sphereX = randomX();
    monoSynth11.sphereY = randomY();
    monoSynth11.sphereZ = randomZ();
    monoSynth11.rotX = randomRotateFactor();
    monoSynth11.rotY = randomRotateFactor();
    monoSynth11.rotZ = randomRotateFactor();
    monoSynth11.sphereSize = randomSize();
    monoSynth11.fillColor = color(random(0, 250), random(0, 250), random(0, 250));
    monoSynth12 = new p5.MonoSynth();
    monoSynth12.num = 11;
    monoSynth12.sphereX = randomX();
    monoSynth12.sphereY = randomY();
    monoSynth12.sphereZ = randomZ();
    monoSynth12.rotX = randomRotateFactor();
    monoSynth12.rotY = randomRotateFactor();
    monoSynth12.rotZ = randomRotateFactor();
    monoSynth12.sphereSize = randomSize();
    monoSynth12.fillColor = color(random(0, 250), random(0, 250), random(0, 250));
    monoSynth13 = new p5.MonoSynth();
    monoSynth13.num = 12;
    monoSynth13.sphereX = randomX();
    monoSynth13.sphereY = randomY();
    monoSynth13.sphereZ = randomZ();
    monoSynth13.rotX = randomRotateFactor();
    monoSynth13.rotY = randomRotateFactor();
    monoSynth13.rotZ = randomRotateFactor();
    monoSynth13.sphereSize = randomSize();
    monoSynth13.fillColor = color(random(0, 250), random(0, 250), random(0, 250));
    monoSynth14 = new p5.MonoSynth();
    monoSynth14.num = 13;
    monoSynth14.sphereX = randomX();
    monoSynth14.sphereY = randomY();
    monoSynth14.sphereZ = randomZ();
    monoSynth14.rotX = randomRotateFactor();
    monoSynth14.rotY = randomRotateFactor();
    monoSynth14.rotZ = randomRotateFactor();
    monoSynth14.sphereSize = randomSize();
    monoSynth14.fillColor = color(random(0, 250), random(0, 250), random(0, 250));
    monoSynth15 = new p5.MonoSynth();
    monoSynth15.num = 14;
    monoSynth15.sphereX = randomX();
    monoSynth15.sphereY = randomY();
    monoSynth15.sphereZ = randomZ();
    monoSynth15.rotX = randomRotateFactor();
    monoSynth15.rotY = randomRotateFactor();
    monoSynth15.rotZ = randomRotateFactor();
    monoSynth15.sphereSize = randomSize();
    monoSynth15.fillColor = color(random(0, 250), random(0, 250), random(0, 250));
}

function draw() {
    //Lighting
    ambientLight(60, 60, 60);

    let locX = mouseX - width / 2;
    let locY = mouseY - height / 2;
    directionalLight(150, 150, 150, locX, locY, 500);
    //black background
    background(0);
    //change view if the view desires
    //orbitControl();
    //console.log(SynthVisualizerState);
    if (SynthVisualizerState[0]) {
        renderSphere(monoSynth1);
    }
    if (SynthVisualizerState[1]) {
        renderSphere(monoSynth2);
    }
    if (SynthVisualizerState[2]) {
        renderSphere(monoSynth3);
    }
    if (SynthVisualizerState[3]) {
        renderSphere(monoSynth4);
    }
    if (SynthVisualizerState[4]) {
        renderSphere(monoSynth5);
    }
    if (SynthVisualizerState[5]) {
        renderSphere(monoSynth6);
    }
    if (SynthVisualizerState[6]) {
        renderSphere(monoSynth7);
    }
    if (SynthVisualizerState[7]) {
        renderSphere(monoSynth8);
    }
    if (SynthVisualizerState[8]) {
        renderSphere(monoSynth9);
    }
    if (SynthVisualizerState[9]) {
        renderSphere(monoSynth10);
    }
    if (SynthVisualizerState[10]) {
        renderSphere(monoSynth11);
    }
    if (SynthVisualizerState[11]) {
        renderSphere(monoSynth12);
    }
    if (SynthVisualizerState[12]) {
        renderSphere(monoSynth13);
    }
    if (SynthVisualizerState[13]) {
        renderSphere(monoSynth14);
    }
    if (SynthVisualizerState[14]) {
        renderSphere(monoSynth15);
    }

    //Camera Orbit
    camera((sin(cameraAngle) + 1) * 300, 0, 0, 0, 0, 0, 0, 1, 0);
    
    if(cameraAngle > PI)
    {
        cameraAngle = 0;
    }
    else
    {
        cameraAngle += 0.005;
    }
}

function windowResized() {
    resizeCanvas(window.innerWidth, window.innerHeight, WEBGL);
}

function randomX() {
    return Math.round(random(300));
}
function randomY() {
    return Math.round(random(300));
}
function randomZ() {
    return Math.round(random(300));
}
function randomSize() {
    return Math.round(random(10, 300));
}
function randomRotateFactor() {
    return random() * .01;
}

//Starts a monosynth
function triggerMonoSynthAttack(monoSynth, note, octave) {
    userStartAudio();
    SynthVisualizerState[monoSynth.num] = true;
    let velocity = random();
    // time from now (in seconds)
    let time = 0;
    // note duration (in seconds)
    let dur = 1 / 6;

    monoSynth.triggerAttack(note + octave, velocity, time);

}

//ends a given monosynth.
function triggerMonoSynthRelease(monoSynth) {
    SynthVisualizerState[monoSynth.num] = false;
    monoSynth.triggerRelease();
}

//provide 1, 3, 5, 7, 9 in multiple octaves... maybe a blues?
function keyPressed() {

    //Row 1
    if (key === 'q') {
        triggerMonoSynthAttack(monoSynth1, NOTE_STRINGS.C, 2);
    }
    if (key === 'w') {
        triggerMonoSynthAttack(monoSynth2, NOTE_STRINGS.Ef, 2);
    }
    if (key === 'e') {
        triggerMonoSynthAttack(monoSynth3, NOTE_STRINGS.G, 2);
    }
    if (key === 'r') {
        triggerMonoSynthAttack(monoSynth4, NOTE_STRINGS.Bf, 3);
    }
    if (key === 't') {
        triggerMonoSynthAttack(monoSynth5, NOTE_STRINGS.D, 3);
    }

    //Row 2
    if (key === 'a') {
        triggerMonoSynthAttack(monoSynth6, NOTE_STRINGS.C, 3);
    }
    if (key === 's') {
        triggerMonoSynthAttack(monoSynth7, NOTE_STRINGS.Ef, 3);
    }
    if (key === 'd') {
        triggerMonoSynthAttack(monoSynth8, NOTE_STRINGS.G, 3);
    }
    if (key === 'f') {
        triggerMonoSynthAttack(monoSynth9, NOTE_STRINGS.Bf, 4);
    }
    if (key === 'g') {
        triggerMonoSynthAttack(monoSynth10, NOTE_STRINGS.D, 4);
    }

    //Row 3
    if (key === 'z') {
        triggerMonoSynthAttack(monoSynth11, NOTE_STRINGS.C, 5);
    }
    if (key === 'x') {
        triggerMonoSynthAttack(monoSynth12, NOTE_STRINGS.Ef, 5);
    }
    if (key === 'c') {
        triggerMonoSynthAttack(monoSynth13, NOTE_STRINGS.G, 5);
    }
    if (key === 'v') {
        triggerMonoSynthAttack(monoSynth14, NOTE_STRINGS.Bf, 6);
    }
    if (key === 'b') {
        triggerMonoSynthAttack(monoSynth15, NOTE_STRINGS.D, 6);
    }

    return false;
}

function keyReleased(event) {

    //Row 1
    if (key === 'q') {
        triggerMonoSynthRelease(monoSynth1);
    }
    if (key === 'w') {
        triggerMonoSynthRelease(monoSynth2);
    }
    if (key === 'e') {
        triggerMonoSynthRelease(monoSynth3);
    }
    if (key === 'r') {
        triggerMonoSynthRelease(monoSynth4);
    }
    if (key === 't') {
        triggerMonoSynthRelease(monoSynth5);
    }

    //Row 2
    if (key === 'a') {
        triggerMonoSynthRelease(monoSynth6);
    }
    if (key === 's') {
        triggerMonoSynthRelease(monoSynth7);
    }
    if (key === 'd') {
        triggerMonoSynthRelease(monoSynth8);
    }
    if (key === 'f') {
        triggerMonoSynthRelease(monoSynth9);
    }
    if (key === 'g') {
        triggerMonoSynthRelease(monoSynth10);
    }

    //Row 3
    if (key === 'z') {
        triggerMonoSynthRelease(monoSynth11);
    }
    if (key === 'x') {
        triggerMonoSynthRelease(monoSynth12);
    }
    if (key === 'c') {
        triggerMonoSynthRelease(monoSynth13);
    }
    if (key === 'v') {
        triggerMonoSynthRelease(monoSynth14);
    }
    if (key === 'b') {
        triggerMonoSynthRelease(monoSynth15);
    }

    return false;
}

//Render, in a location, a shape of some kind
function renderSphere(monoSynth) {
    noStroke();
    console.log(monoSynth.fillColor);
    ambientMaterial(monoSynth.fillColor);
    push();
        translate(monoSynth.sphereX, monoSynth.sphereY, monoSynth.sphereZ);
        rotateZ(frameCount * monoSynth.rotZ);
        rotateY(frameCount * monoSynth.rotY);
        rotateX(frameCount * monoSynth.rotX);
    rotateY(frameCount * 0.01);
    torus(monoSynth.sphereX, monoSynth.sphereY, monoSynth.sphereZ, monoSynth.sphereSize);
    pop();
}

