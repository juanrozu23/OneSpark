// SERIAL
let force;
let knob;
let left = 0;
let right = 0;


// VARIABLES  

  // Global
  let homeButton;
  let growHomeButton = 2;
  let instructionsButton;
  let growInstructionsButton = 2;
  let contFill;
  let generalTextSize;
  let selectedSpark;
  let growMusicButton = 0;
  let musicButton;
  let growBackButton = 0;

  // Face Sparks
    let joy;
    let anger;
    let sadness;
    let contempt;
    let disgust;
    let surprise;
    let fear;

    let sparks;
    let sparkWidth;

// Sparks
    let ascoSpark;
    let tristezaSpark;
    let felicidadSpark;
    let miedoSpark;
    let rabiaSpark;
    let sorpresaSpark;
    let desprecioSpark;
    let blackSpark;
    let graySpark;
    let sparkie;

 // Logos
    let joy_logo;
    let fear_logo;
    let contempt_logo;
    let surprise_logo;
    let sadness_logo;
    let disgust_logo;

    let logos;

// Audio
let backgroundSong;
let rightFX;
let wrongFX;
let winFX;
let clickFX;
let music = false;


  // Control Center 
  let mode = 0;

  // Memory Game 
  const totalPairs = 7;
  let matchesFound = 0;

    //Cards
      let cards = [];
      let cardPairs = {
        'F': 'Felicidad', 'T': 'Tristeza', 'A': 'Asco', 'D': 'Desprecio',
        'R': 'Rabia', 'M': 'Miedo', 'S': 'Sorpresa',
        'Felicidad': 'F', 'Tristeza': 'T', 'Asco': 'A', 'Desprecio': 'D',
        'Rabia': 'R', 'Miedo': 'M', 'Sorpresa': 'S'
      };
      let cardValues = Object.keys(cardPairs);
      let selectedCards = [];
      let matchedCards = [];
let cardTextSize;

// Ekmans Visualization Selection

let ascox;
let ascoy;
let tristezax;
let trstezay;
let miedox;
  let miedoy;
  let felicidadx;
  let felicidady;
  let sorpresax;
  let sorpresay;
  let rabiax;
  let rabiay;
  let despreciox;
  let desprecioy;
 let sparkieFill = 244; 

   // Circle Organize
    let centerx;
    let centery;
    let radious;
    let movement;

  // Ekmans Visualization
    let emotionChoice = 0;

    let sensor1;
    let pause;

    let ascoFillr;
    let ascoFillg;
    let ascoFillb;

    let tristezaFillr;  
    let tristezaFillg; 
    let tristezaFillb; 

    let miedoFillr;
    let miedoFillg;
    let miedoFillb;

    let felicidadFillr;
    let felicidadFillg;
    let felicidadFillb;

    let sorpresaFillr;
    let sorpresaFillg;
    let sorpresaFillb;

    let rabiaFillr;
    let rabiaFillg;
    let rabiaFillb;

    let desprecioFillr;
    let desprecioFillg;
    let desprecioFillb;

let backFillr = 255;
let backFillg = 255;
let backFillb = 255;
let backFillo = 0;

let emotionNumber;

let shake;
let instructionsSwitch;

    // Banners
        let emotion;
        let description;
        let bannerOp;

  // Drawing Board
    let currentColor = 'black';
    let brushType = 'circle';
    let brushSize = 10;
    let colors = [[192,159,232], [137,201,240], [255,217,94], [134,219,199], [255,143,117], [152,231,237], [240,171,98], [0], [255]];
    let brushes = ['circle', 'square', 'eraser'];
    let circleFill = 0;
    let hasBackgroundBeenSet = false;
    let squarebFill = 240;
    let circlebFill = 240;
    let downArrowbFill = 240;
    let upArrowbFill = 240;

function preload() {
  homeButton = loadImage("Media/homeBttn.png");
  musicButton = loadImage("Media/note.png");
  joy = loadImage("Media/Joy.png");
  sadness = loadImage("Media/Sadness.png");
  anger = loadImage("Media/Anger.png");
  contempt = loadImage("Media/Contempt.png");
  disgust = loadImage("Media/Disgust.png");
  surprise = loadImage("Media/Surprise.png");
  fear = loadImage("Media/Fear.png");
  sparkie = loadImage('Media/lightning.png');
  
  
  joy_logo = loadImage("Media/logo_Felicidad.png");
  fear_logo = loadImage("Media/logo_Miedo.png");
  contempt_logo = loadImage("Media/logo_Desprecio.png");
  surprise_logo = loadImage("Media/logo_Sorpresa.png");
  sadness_logo = loadImage("Media/logo_Tristeza.png");
  disgust_logo = loadImage("Media/logo_Asco.png");
  
//  ascoSpark = loadImage("Media/AscoSpark.png");
//  tristezaSpark = loadImage("Media/TristezaSpark.png");
//  felicidadSpark = loadImage("Media/FelicidadSpark.png");
//  miedoSpark = loadImage("Media/MiedoSpark.png");
//  rabiaSpark = loadImage("Media/RabiaSpark.png");
//  sorpresaSpark = loadImage("Media/SorpresaSpark.png");
//  desprecioSpark = loadImage("Media/DesprecioSpark.png");
//  blackSpark = loadImage("Media/blackSpark.png");
//   graySpark = loadImage("Media/graySpark.png");
  
  backgroundSong = loadSound("Audio/music1.mp3");
  rightFX = loadSound("Audio/right.mp3");
  wrongFX = loadSound("Audio/wrong.mp3");
  winFX = loadSound("Audio/complete.mp3");
  clickFX = loadSound("Audio/click.mp3");
  
}

function setup() {
  //createCanvas(window.innerWidth, window.innerHeight);
 //createCanvas(800, 450);
  createCanvas(window.innerWidth, window.innerHeight);
  updateCanvasSize();
  
  background(255);

  emotionNumber = 7;
  
// Logos
   logos = [joy_logo,fear_logo,contempt_logo,surprise_logo,sadness_logo,disgust_logo];
   selectedLogo = random(logos);
  
  sparks = [joy,sadness,anger,contempt,disgust, surprise,fear];
  
  
// Matching Cards
  
let shuffledValues = shuffle(cardValues); // Shuffle the card values
  for (let i = 0; i < 14; i++) {
    // Create card objects with shuffled values
    cards.push({
      value: shuffledValues[i],
      x: width/8 * (i % 7) + width/16, // Arrange in 2 rows
      y: i < 7 ? height/5 : height*0.45,
      width: width/9,
      height: width/9,
      isSelected: false
    });
  }

  generalTextSize = width/60;
// Memory 
 contFill = 0;
  
// Ekman's Visualization Selection
  radius = width*0.3;
  centerx = width*0.5;
  centery = height*0.75;
  
  
//Ekman's Visualization
  
  sparkWidth = width*0.1;
  pause = false;

     ascoFillr = 240;
     ascoFillg = 240;
     ascoFillb = 240;
  
     tristezaFillr = 240;  
     tristezaFillg = 240;  
     tristezaFillb = 240; 
  
     miedoFillr = 240;
     miedoFillg = 240;
     miedoFillb = 240;
  
     felicidadFillr = 240;
     felicidadFillg = 240;
     felicidadFillb = 240;
  
     sorpresaFillr = 240;
     sorpresaFillg = 240;
     sorpresaFillb = 240;
  
     rabiaFillr = 240;
     rabiaFillg = 240;
     rabiaFillb = 240;
  
     desprecioFillr = 240;
     desprecioFillg = 240;
     desprecioFillb = 240;
  
   ascoChoice = false;
   tristezaChoice = false;
   miedoChoice = false;
   felicidadChoice = false;
   sorpresaChoice = false;
   rabiaChoice = false;
   desprecioChoice = false;
  
  shake = 0;
  instructionsSwitch = true;
  instructions1 = "Manten la barra de espacio presionada para indicar la intensidad de tu sentimiento!";
  instructions2 = "Usa la tecla Enter para pausar y leer las descripciones.";
  instructionsOp = 70;
  
// Concentric Circles
  grow0 = 0;
  grow1 = 0;
  grow2 = 0;
  grow3 = 0;
  grow4 = 0;
  grow5 = 0;
  grow6 = 0;
  grow7 = 0;
  homegrw = 0;
// Banners
  emotion = " ";
  description = " ";
  sensor1 = 0;
  bannerOp = 0;
  bannerGrow = 0 ;
  
  cardTextSize = width/60;
 
}

// function windowResized() {
//   updateCanvasSize();
// }

function updateCanvasSize() {
  let windowRatio = windowWidth / windowHeight;
  let targetRatio = 1600 / 900;

  if (windowRatio >= targetRatio) {
    // Window is wider than target ratio, so fit height and adjust width
    resizeCanvas(windowHeight * targetRatio, windowHeight);
  } else {
    // Window is narrower than target ratio, so fit width and adjust height
    resizeCanvas(windowWidth, windowWidth / targetRatio);
  }
}

function draw() {
  textFont("Source Sans Pro");
  textSize(generalTextSize);
  if (mode !== 3){
  background(255);
    }
  switch (mode) {
    case 0:
      emotionCards();
      s = "Emotion Cards";
      break;
    case 1:
      if (serialActive) {
        serialEkmanVisualizationSelection();
        goBack();
      }else {
      ekmanVisualizationSelection();
      goBack();}
      s = "Ekman Visualization Selection";
      break;
    case 2:
      ekmanVisualization();
      goBack();
      s = "Ekman Visualization";
      break;
    case 3:
      drawingBoard();
      goBack();
       if (!hasBackgroundBeenSet) {
        background(255); 
        hasBackgroundBeenSet = true; 
      }
      s = "Drawing Board";
      break;
  }

  image(selectedLogo, width*0.73, height*0.9,width*0.25,(width*0.25)/6)

// Home Button (Change when moving to Visual Studio)
  
  image(homeButton, width*0.95, height*0.05, width*0.035+growHomeButton, width*0.035+growHomeButton);
  
  
  if (mouseX > width*0.95 && mouseY <height*0.15) {
    growHomeButton = 5;
  } else {
    growHomeButton = 0;
  }

  toggleMusic();
  
  if(music == true){
   if (!backgroundSong.isPlaying()) {
    backgroundSong.play();
  } } else {
    if (backgroundSong.isPlaying()) {
    backgroundSong.pause();
  }
  }
   // backgroundSong.setVolume(0.6);
    winFX.setVolume(1.8);
    rightFX.setVolume(0.6);
}
  
function emotionCards () {
  
  text("Dale click a las emociones y los sparks que coinciden.", width / 2, height*0.10);
    text("Hazlo lo mas rapido posible para poder continuar.", width / 2, height*0.15);
  
  for (let card of cards) {
    drawCard(card);
  }
  
  if (matchesFound === totalPairs) {
    fill(0);
    textAlign(CENTER);
    text("Felicitaciones! Encontraste a todos las parejas", width / 2, height*0.75);
    text("Presiona el boton para ir a otra actividad", width / 2, height*0.80);
    continueButton(width*0.5, height*0.9,255);
     if (!winFX.isPlaying()) {
    winFX.play();
  }
  }

}

function ekmanVisualizationSelection () {
  noStroke();
  sparkieOn();
  
  ascox = centerx+cos(PI)*radius;
  ascoy = centery+sin(PI)*radius;
  
  tristezax = centerx+cos(PI*(-5/6))*radius;
  tristezay = centery+sin(PI*(-5/6))*radius;
  
  miedox = centerx+cos(PI*(-4/6))*radius;
  miedoy = centery+sin(PI*(-4/6))*radius;
  
  felicidadx = centerx+cos(PI*-(3/6))*radius;
  felicidady = centery+sin(PI*-(3/6))*radius;
  
  sorpresax = centerx+cos(PI*(-2/6))*radius;
  sorpresay = centery+sin(PI*(-2/6))*radius;
  
  rabiax = centerx+cos(PI*(-1/6))*radius;
  rabiay = centery+sin(PI*(-1/6))*radius;
  
  despreciox = centerx+cos(0)*radius;
  desprecioy = centery+sin(0)*radius;
  
  

  textAlign(CENTER);
  push();
  textSize(width/45);
  fill(0);
  text("Dale click a la emoción", width * 0.5, height * 0.5);
  text("que quieres explorar. ", width * 0.5, height * 0.55);
  pop();
push();
   noStroke();
  ellipseMode(CENTER);
  imageMode(CENTER);
  
  
    // Asco
  fill(ascoFillr, ascoFillg, ascoFillb);
  ellipse(ascox, ascoy, width / 8);
  image(disgust,ascox, ascoy, width/10, width/10);
  
    if(mouseX>(ascox-width/20) && mouseX<(ascox+width/20) && mouseY>ascoy-width/20 && mouseY<ascoy+width/20 && ascoChoice == false){
     ascoFillr = 220;
     ascoFillg = 220;
     ascoFillb = 220;
    if (mouseIsPressed && ascoChoice == false) {
      ascoChoice = true;
      tristezaChoice = false;
      miedoChoice = false;
      felicidadChoice = false;
      sorpresaChoice = false;
      rabiaChoice = false;
      desprecioChoice = false;
       if (!clickFX.isPlaying()) {
    clickFX.play();
  }
  }} else {
     ascoFillr = 240;
     ascoFillg = 240;
     ascoFillb = 240;
    }
  
  if(ascoChoice == true){
    if(emotionChoice !== 1){
       emotionChoice = 1;
    }
     ascoFillr = 192;
     ascoFillg = 159;
     ascoFillb = 232;
    push();
  textSize(width/40);
  textStyle(BOLD);
  text("Asco ", width * 0.5, height * 0.65);
  pop();
  } 
  
  
    // TRISTEZA
  
  fill(tristezaFillr, tristezaFillg, tristezaFillb);
  ellipse(tristezax, tristezay, width / 8);
  image(sadness,tristezax,tristezay, width/10, width/10);
  
   if(mouseX>(tristezax - width/20) && mouseX<(tristezax+width/20) && mouseY>tristezay-width/20 && mouseY<tristezay+width/20 && tristezaChoice == false){
      tristezaFillr = 220;  
      tristezaFillg = 220;  
      tristezaFillb = 220; 
     if (mouseIsPressed && tristezaChoice == false) {
      ascoChoice = false;
      tristezaChoice = true;
      miedoChoice = false;
      felicidadChoice = false;
      sorpresaChoice = false;
      rabiaChoice = false;
      desprecioChoice = false;
       if (!clickFX.isPlaying()) {
    clickFX.play();
  }
  }
   } else {
      tristezaFillr = 240;  
      tristezaFillg = 240;  
      tristezaFillb = 240; 
    }
  
  if(tristezaChoice == true){
      if(emotionChoice !== 2){
       emotionChoice = 2;
    }
      tristezaFillr = 137;  
      tristezaFillg = 201;  
      tristezaFillb = 240; 
    push();
  textSize(width/40);
  textStyle(BOLD);
  text("Tristeza ", width * 0.5, height * 0.65);
  pop();
  } 
   
   // MIEDO
  fill(miedoFillr, miedoFillg, miedoFillb);
  ellipse(miedox,miedoy, width / 8);
  image(fear,miedox,miedoy,width/10, width/10);
  
   if(mouseX>(miedox -width/20) && mouseX<(miedox+ width/20) && mouseY>miedoy-width/20 && mouseY<miedoy+width/20 && miedoChoice == false){
     miedoFillr = 220;
     miedoFillg = 220;
     miedoFillb = 220;
     if (mouseIsPressed && miedoChoice == false) {
      ascoChoice = false;
      tristezaChoice = false;
      miedoChoice = true;
      felicidadChoice = false;
      sorpresaChoice = false;
      rabiaChoice = false;
      desprecioChoice = false;
       if (!clickFX.isPlaying()) {
    clickFX.play();
  }
  }
   } else {
     miedoFillr = 240;
     miedoFillg = 240;
     miedoFillb = 240;
    }
  
  if(miedoChoice == true){
    if(emotionChoice !== 3){
       emotionChoice = 3;
    }
     miedoFillr = 134;
     miedoFillg = 219;
     miedoFillb = 199;
    push();
  textSize(width/40);
  textStyle(BOLD);
  text("Miedo ", width * 0.5, height * 0.65);
  pop();
  } 
  
  // Felicidad  

  fill(felicidadFillr, felicidadFillg, felicidadFillb);
  ellipse(felicidadx, felicidady, width / 8);
  image(joy,felicidadx,felicidady,width/10, width/10);
  
  if(mouseX>(felicidadx -width/20) && mouseX<(felicidadx + width/20) && mouseY>felicidady-width/20 && mouseY<felicidady+width/20 && felicidadChoice == false){
     felicidadFillr = 220;
     felicidadFillg = 220;
     felicidadFillb = 220;
    if (mouseIsPressed && felicidadChoice == false) {
      ascoChoice = false;
      tristezaChoice = false;
      miedoChoice = false;
      felicidadChoice = true;
      sorpresaChoice = false;
      rabiaChoice = false;
      desprecioChoice = false;
      if (!clickFX.isPlaying()) {
    clickFX.play();
  }
  }
   } else {
     felicidadFillr = 240;
     felicidadFillg = 240;
     felicidadFillb = 240;
    } 
  
if(felicidadChoice == true){
  if(emotionChoice !== 4){
       emotionChoice = 4;
    }
     felicidadFillr = 255;
     felicidadFillg = 217;
     felicidadFillb = 94;
  push();
  textSize(width/40);
  textStyle(BOLD);
  text("Felicidad ", width * 0.5, height * 0.65);
  pop();
}
  
   // Sorpresa
  fill(sorpresaFillr, sorpresaFillg, sorpresaFillb);
  ellipse(sorpresax,sorpresay, width / 8);
  image(surprise,sorpresax,sorpresay,width/10, width/10);
 
  
  if(mouseX>(sorpresax- width/20) && mouseX<(sorpresax + width/20)&& mouseY>sorpresay-width/20 && mouseY<sorpresay+width/20 && sorpresaChoice == false){
     sorpresaFillr = 220;
     sorpresaFillg = 220;
     sorpresaFillb = 220;
      if (mouseIsPressed && sorpresaChoice == false) {
      ascoChoice = false;
      tristezaChoice = false;
      miedoChoice = false;
      felicidadChoice = false;
      sorpresaChoice = true;
      rabiaChoice = false;
      desprecioChoice = false;
        if (!clickFX.isPlaying()) {
    clickFX.play();
  }
  }
   } else {
     sorpresaFillr = 240;
     sorpresaFillg = 240;
     sorpresaFillb = 240;
    }
  
  if(sorpresaChoice == true){
    if(emotionChoice !== 5){
       emotionChoice = 5;
    }
     sorpresaFillr = 152;
     sorpresaFillg = 231;
     sorpresaFillb = 237;
  push();
  textSize(width/40);
  textStyle(BOLD);
  text("Sorpresa ", width * 0.5, height * 0.65);
  pop();
  } 
  
  // Rabia
  
  fill(rabiaFillr,rabiaFillg,rabiaFillb);
  ellipse(rabiax, rabiay, width / 8);
  image(anger,rabiax,rabiay,width/10, width/10);
  
    
  if(mouseX>(rabiax -width/20) && mouseX<(rabiax + width/20) && mouseY>rabiay-width/20 && mouseY<rabiay+width/20 && rabiaChoice == false){
     rabiaFillr = 220;
     rabiaFillg = 220;
     rabiaFillb = 220;
    if (mouseIsPressed && rabiaChoice == false) {
      ascoChoice = false;
      tristezaChoice = false;
      miedoChoice = false;
      felicidadChoice = false;
      sorpresaChoice = false;
      rabiaChoice = true;
      desprecioChoice = false;
      if (!clickFX.isPlaying()) {
    clickFX.play();
  }
  }
   } else {
     rabiaFillr = 240;
     rabiaFillg = 240;
     rabiaFillb = 240;
    }
  
if(rabiaChoice == true){
  if(emotionChoice !== 6){
       emotionChoice = 6;
    }
     rabiaFillr = 255;
     rabiaFillg = 143;
     rabiaFillb = 117;
  push();
  textSize(width/40);
  textStyle(BOLD);
  text("Rabia", width * 0.5, height * 0.65);
  pop();
}
  
  
  // DESPRECIO
  
  fill(desprecioFillr,desprecioFillg,desprecioFillb);
  ellipse(despreciox,desprecioy, width / 8);
  image(contempt,despreciox,desprecioy,width/10, width/10);
    
  if(mouseX>(despreciox -width/20) && mouseX<(despreciox + width/20) && mouseY>(desprecioy)-width/20 && mouseY<(desprecioy)+width/20 && desprecioChoice == false){
     desprecioFillr = 220;
     desprecioFillg = 220;
     desprecioFillb = 220;
    if (mouseIsPressed && desprecioChoice == false) {
      ascoChoice = false;
      tristezaChoice = false;
      miedoChoice = false;
      felicidadChoice = false;
      sorpresaChoice = false;
      rabiaChoice = false;
      desprecioChoice = true;
      if (!clickFX.isPlaying()) {
    clickFX.play();
  }
  }
   } else {
     desprecioFillr = 240;
     desprecioFillg = 240;
     desprecioFillb = 240;
    }
  
  if(desprecioChoice == true){
    if(emotionChoice !== 7){
       emotionChoice = 7;
    }
     desprecioFillr = 240;
     desprecioFillg = 171;
     desprecioFillb = 98;
    push();
  textSize(width/40);
  textStyle(BOLD);
  text("Desprecio ", width * 0.5, height * 0.65);
  pop();
   
  }
  pop();
  
  if(emotionChoice !== 0){
    continueButton(width*0.5, height*0.78, 255);
  }
  
}

function serialEkmanVisualizationSelection () {
    sparkieOn();
  ascox = centerx+cos(PI)*radius;
  ascoy = centery+sin(PI)*radius;
  
  tristezax = centerx+cos(PI*(-5/6))*radius;
  tristezay = centery+sin(PI*(-5/6))*radius;
  
  miedox = centerx+cos(PI*(-4/6))*radius;
  miedoy = centery+sin(PI*(-4/6))*radius;
  
  felicidadx = centerx+cos(PI*-(3/6))*radius;
  felicidady = centery+sin(PI*-(3/6))*radius;
  
  sorpresax = centerx+cos(PI*(-2/6))*radius;
  sorpresay = centery+sin(PI*(-2/6))*radius;
  
  rabiax = centerx+cos(PI*(-1/6))*radius;
  rabiay = centery+sin(PI*(-1/6))*radius;
  
  despreciox = centerx+cos(0)*radius;
  desprecioy = centery+sin(0)*radius;
  
  

  textAlign(CENTER);
  rectMode(CENTER);
  push();
  textSize(width/45);
  fill(0);
  text("Escoge con la perilla de Sparkie la emoción que quieres explorar.", width * 0.5, height * 0.48, width*0.35);
  rectMode(CORNER);
  pop();
push();
   noStroke();
  ellipseMode(CENTER);
  imageMode(CENTER);
    
    // Asco
  fill(ascoFillr, ascoFillg, ascoFillb);
  ellipse(ascox, ascoy, width / 8);
  image(disgust,ascox, ascoy, width/10, width/10);
  
 // knob = map(knob, 0, 1023, 1, 8);
  
  // if (knob>0 && knob <= 2){
  //   emotionChoice = 1;
  // } else if (knob >2 && knob<=3){
  //   emotionChoice = 2;
  // } else if (knob>3 && knob<=4){
  //   emotionChoice = 3
  // } else if (knob>4 && knob<=5){
  //   emotionChoice = 4 
  // } else if (knob>5 && knob<=6){
  //   emotionChoice = 5
  // } else if (knob>6 && knob<=7){
  //   emotionChoice = 6
  // } else if (knob>7 && knob<=8){
  //   emotionChoice = 7
  // }
    
  
  if (knob>0 && knob <=146){
    emotionChoice = 1;
  } else if (knob >146 && knob<=292){
    emotionChoice = 2;
  } else if (knob>292 && knob<=438){
    emotionChoice = 3
  } else if (knob>438 && knob<=584){
    emotionChoice = 4 
  } else if (knob>584 && knob<=730){
    emotionChoice = 5
  } else if (knob>730 && knob<=876){
    emotionChoice = 6
  } else if (knob>876 && knob<=1023){
    emotionChoice = 7
  }
    
  if(emotionChoice == 1){
    ascoFillr = 192;
    ascoFillg = 159;
    ascoFillb = 232;
    push();
    textSize(width/40);
    textStyle(BOLD);
    text("Asco ", width * 0.5, height * 0.65);
    pop();
  } else {
    ascoFillr = 240;
    ascoFillg = 240;
    ascoFillb = 240;
  }
  
   
    // TRISTEZA
  
  fill(tristezaFillr, tristezaFillg, tristezaFillb);
  ellipse(tristezax, tristezay, width / 8);
  image(sadness,tristezax,tristezay, width/10, width/10);
  
  if(emotionChoice == 2){
      tristezaFillr = 137;  
      tristezaFillg = 201;  
      tristezaFillb = 240; 
      push();
      textSize(width/40);
      textStyle(BOLD);
      text("Tristeza ", width * 0.5, height * 0.65);
      pop();
  } else {
      tristezaFillr = 240;  
      tristezaFillg = 240;  
      tristezaFillb = 240; 
  }

   
   // MIEDO
  fill(miedoFillr, miedoFillg, miedoFillb);
  ellipse(miedox,miedoy, width / 8);
  image(fear,miedox,miedoy,width/10, width/10);
  
   
  if(emotionChoice == 3){
     miedoFillr = 134;
     miedoFillg = 219;
     miedoFillb = 199;
     push();
     textSize(width/40);
     textStyle(BOLD);
     text("Miedo ", width * 0.5, height * 0.65);
     pop();
  } else {
      miedoFillr = 240;  
      miedoFillg = 240;  
      miedoFillb = 240; 
  }

  
  // Felicidad  

  fill(felicidadFillr, felicidadFillg, felicidadFillb);
  ellipse(felicidadx, felicidady, width / 8);
  image(joy,felicidadx,felicidady,width/10, width/10);
  
  if(emotionChoice == 4){
     felicidadFillr = 255;
     felicidadFillg = 217;
     felicidadFillb = 94;
     push();
     textSize(width/40);
     textStyle(BOLD);
     text("Felicidad ", width * 0.5, height * 0.65);
     pop();
  } else {
      felicidadFillr = 240;
     felicidadFillg = 240;
     felicidadFillb = 240;
  }

  
   // Sorpresa
  fill(sorpresaFillr, sorpresaFillg, sorpresaFillb);
  ellipse(sorpresax,sorpresay, width / 8);
  image(surprise,sorpresax,sorpresay,width/10, width/10);
 
  
  if(emotionChoice == 5){
    sorpresaFillr = 152;
     sorpresaFillg = 231;
     sorpresaFillb = 237;
  push();
  textSize(width/40);
  textStyle(BOLD);
  text("Sorpresa ", width * 0.5, height * 0.65);
  pop();
  } else {
    sorpresaFillr = 240;
    sorpresaFillg = 240;
    sorpresaFillb = 240;
  }
  
  // Rabia
  
  fill(rabiaFillr,rabiaFillg,rabiaFillb);
  ellipse(rabiax, rabiay, width / 8);
  image(anger,rabiax,rabiay,width/10, width/10);
  
  if(emotionChoice == 6){
     rabiaFillr = 255;
     rabiaFillg = 143;
     rabiaFillb = 117;
     push();
     textSize(width/40);
     textStyle(BOLD);
     text("Rabia", width * 0.5, height * 0.65);
     pop();
  } else {
     rabiaFillr = 240;
     rabiaFillg = 240;
     rabiaFillb = 240;
  }
    
 
  // DESPRECIO
  
  fill(desprecioFillr,desprecioFillg,desprecioFillb);
  ellipse(despreciox,desprecioy, width / 8);
  image(contempt,despreciox,desprecioy,width/10, width/10);
  
  if(emotionChoice == 7){
     desprecioFillr = 240;
     desprecioFillg = 171;
     desprecioFillb = 98;
     push();
     textSize(width/40);
     textStyle(BOLD);
     text("Desprecio ", width * 0.5, height * 0.65);
     pop();
  } else {
    desprecioFillr = 240;
    desprecioFillg = 240;
    desprecioFillb = 240;
  }
  pop();
  
  if(emotionChoice !== 0){
    continueButton(width*0.5, height*0.78, 255);
  }
  //  force = 0;
}

function ekmanVisualization(){
  backFillo = constrain(backFillo, 0, 255);
  sparkWidth = constrain(sparkWidth, width*0.1, width*0.25);
  fill(backFillr, backFillg, backFillb, backFillo);
  rectMode(CORNER);
  rect(0,0, width, height);
  squeeze = int(map(backFillo, 0, 255, 0, emotionNumber));

if(pause == false && mode == 2){
   if (serialActive) { 
      sparkWidth = map(force, 500, 1023, width*0.1, width*0.25 );
      backFillo = map(force, 500, 1000, 0, 255);
    //sparkWidth += width*0.00001*(force);
      //  backFillo += 0.015*(force/10);
  }  else {
      if(keyIsPressed && keyCode == 32){
    backFillo += 1.5;
    sparkWidth += width*0.001;
    
  } else {
    backFillo -=1;
    sparkWidth -= width*0.0006;
  }}
  }
  

  

     switch (emotionChoice) {
    case 0:
      s = "Blank";
      break;
    case 1:
      backFillr = ascoFillr;
      backFillg = ascoFillg;
      backFillb = ascoFillb;
      selectedSpark = disgust;
      asco();
      s = "Asco";
      break;
    case 2:
      backFillr = tristezaFillr;
      backFillg = tristezaFillg;
      backFillb = tristezaFillb;
      selectedSpark = sadness;
      tristeza();
      s = "Tristeza";
      break;
    case 3:
      backFillr = miedoFillr;
      backFillg = miedoFillg;
      backFillb = miedoFillb;
      selectedSpark = fear;
      miedo();
      s = "Miedo";
      break;
    case 4:
      backFillr = felicidadFillr;
      backFillg = felicidadFillg;
      backFillb = felicidadFillb;
      selectedSpark = joy;
      felicidad();
      s = "Felicidad";
      break;
    case 5:
      backFillr = sorpresaFillr;
      backFillg = sorpresaFillg;
      backFillb = sorpresaFillb;
      selectedSpark = surprise;
      sorpresa();
      s = "Sorpresa";
      break;
    case 6:
      backFillr = rabiaFillr;
      backFillg = rabiaFillg;
      backFillb = rabiaFillb;
      selectedSpark = anger;
      rabia();
      s = "Rabia";
      break;
    case 7:
      backFillr = desprecioFillr;
      backFillg = desprecioFillg;
      backFillb = desprecioFillb;
      selectedSpark = contempt;
      desprecio();
      s = "Desprecio";
      break;
  }
  
  push();
  strokeWeight(20);
  stroke(backFillr,backFillg,backFillb, 190);
  ellipse(width / 2, height / 2, width / 8 + 30);
  pop();
  
  // Second
  push();
  stroke(backFillr,backFillg,backFillb, 170);
  strokeWeight(20);
  ellipse(width / 2, height / 2, width / 8 + 80);
  pop();

  // Third
  push();
  stroke(backFillr,backFillg,backFillb, 130);
  strokeWeight(20);
  ellipse(width / 2, height / 2, width / 8 + 130);
  pop();

  // Fourth
  push();
  stroke(backFillr,backFillg,backFillb, 110);
  strokeWeight(20);
  ellipse(width / 2, height / 2, width / 8 + 180);
  pop();

  // Fifth
  push();
  stroke(backFillr,backFillg,backFillb, 70);
  strokeWeight(20);
  ellipse(width / 2, height / 2, width / 8 + 230);
  pop();

  // Sixth
  push();
  stroke(backFillr,backFillg,backFillb, 50);
  strokeWeight(20);
  ellipse(width / 2, height / 2, width / 8 + 280);
  pop();
  
// Seventh
  push();
  stroke(backFillr,backFillg,backFillb, 40);
  strokeWeight(20);
  ellipse(width / 2, height / 2, width / 8 + 330);
  pop();

// Eight
  push();
  stroke(backFillr,backFillg,backFillb, 30);
  strokeWeight(20);
  ellipse(width / 2, height / 2, width / 8 + 380);
  pop();
  
// Ninght
  push();
  stroke(backFillr,backFillg,backFillb, 20);
  strokeWeight(20);
  ellipse(width / 2, height / 2, width / 8 + 430);
  pop();

// Tength
  push();
  stroke(backFillr,backFillg,backFillb, 10);
  strokeWeight(20);
  ellipse(width / 2, height / 2, width / 8 + 480);
  pop();
  
// Eleventh
  push();
  stroke(backFillr,backFillg,backFillb, 5);
  strokeWeight(20);
  ellipse(width / 2, height / 2, width / 8 + 530);
  pop();
  
// Twelfth
  push();
  stroke(backFillr,backFillg,backFillb, 3);
  strokeWeight(20);
  ellipse(width / 2, height / 2, width / 8 + 580);
  pop();

// Thirteenth
  push();
  stroke(backFillr,backFillg,backFillb, 2);
  strokeWeight(20);
  ellipse(width / 2, height / 2, width / 8 + 630);
  pop();
  
// Fourteenth
  push();
  stroke(backFillr,backFillg,backFillb, 1);
  strokeWeight(20);
  ellipse(width / 2, height / 2, width / 8 + 680);
  pop();
  
  push();
   imageMode(CENTER);
    image(selectedSpark, width*0.5+shake, height*0.5,sparkWidth,sparkWidth);
  pop();
  
// Shake
  if(backFillo >= 255){
    shake += random(-width/500,width/500)
  } else {
    shake = 0;
  }

// Banner
push();
fill(255, bannerOp);
rect(width*0.01, height*0.72, width/2, height*0.15+bannerGrow, width/40 )
pop();
  
push();
textAlign(CENTER, TOP);
rectMode(CORNER);
fill(0);
textSize(width/40);
textStyle(BOLD);
text(emotion, width*0.01, height*0.74, width/2);
textSize(generalTextSize);
textStyle(NORMAL);
text(description, width*0.04 , height*0.8,width/2.3);

  // Instructions 
text(instructions1, width/2, height*0.05);
text(instructions2, width/2, height*0.1);
pop();
  
push();
fill(255, instructionsOp);
rectMode(CENTER);
rect(width*0.5, 0, width*0.7, height*0.35, width/40 )
pop();
  
  if(pause == true && squeeze != 0){
    continueButton(width*0.87, height*0.8, 120);
  }
  
  if(instructionsSwitch == true){
   if(serialActive){
     instructions1 = "Aprieta a sparkie para indicar la intensidad de tu sentimiento.";
   } else {
     instructions1 = "Manten la barra de espacio presionada para indicar la intensidad de tu sentimiento.";
   }
    
  instructions2 = "Usa la tecla Enter para pausar y leer las descripciones.";
  instructionsOp = 70;
  setTimeout(hideInstructions, 7000);
  } else if (instructionsSwitch == false){
    instructions1 = "";
    instructions2 = "";
    instructionsOp -= 1 ;
  }
  

}

function asco(){
  emotionNumber = 7;
  
  if (squeeze == 0) {
    emotion = "";
    description = "";
    bannerGrow = 0;
  } else if (squeeze == 1) {
    emotion = "Fastidio";
    description =
      "Enojo muy leve.";
    bannerGrow = 0;
  } else if (squeeze == 2) {
    emotion = "Descontento";
    description =
      "La forma más benigna de disgusto.";
  } else if (squeeze == 3) {
    emotion = "Aversión";
    description =
      "Deseo de evitar algo que nos disgusta.";
    bannerGrow = 0;
  } else if (squeeze == 4) {
    emotion = "Desagrado";
    description = "Respuesta a un mal sabor u olor; también puede ser metafórico.";
    bannerGrow = width*0.01;
  } else if (squeeze == 5) {
    emotion = "Repugnancia";
    description =
      "Repulsión hacia algo figurativo o literalmente tóxico.";
    bannerGrow = 0;
  } else if (squeeze == 6) {
    emotion = "Aborrecimiento";
    description =
      "Repulsión extrema.";
    bannerGrow = 0;
  } else if (squeeze == 7) {
    emotion = "Asco o Abominación";
    description =
      "Disgusto muy intenso o disgusto intenso enfocado en una persona.";
    bannerGrow = width*0.01;
  }
  
  if(squeeze != 0){
    bannerOp = 70;
  } else {
    bannerOp = 0;
  }
}

function tristeza(){
    emotionNumber = 11;
  
  if (squeeze == 0) {
    emotion = "";
    description = "";
    bannerGrow = 0;
  } else if (squeeze == 1) {
    emotion = "Decepción";
    description = "Sentimiento de que no se están cumpliendo las expectativas.";
    bannerGrow = 0;
  } else if (squeeze == 2) {
    emotion = "Consternación";
    description = "Tristeza con agitación.";
    bannerGrow = 0;
  } else if (squeeze == 3) {
    emotion = "Desánimo";
    description = "Sentimiento de que no hay nada que hacer frente a la situación.";
     bannerGrow = width*0.01;
  } else if (squeeze == 4) {
    emotion = "Resignación";
    description = "Aceptación de que nada se puede hacer.";
     bannerGrow = 0;
  } else if (squeeze == 5) {
    emotion = "Impotencia";
    description = "Reconocimiento de la incapacidad para impedir o hacer frente a una pérdida.";
    bannerGrow = width*0.01;
  } else if (squeeze == 6) {
    emotion = "Desesperanza";
    description = "Sentimiento de que nada bueno está por venir.";
     bannerGrow = 0;
  } else if (squeeze == 7) {
    emotion = "Tribulación";
    description = "Tristeza angustiosa, por lo común prolongada.";
     bannerGrow = 0;
  } else if (squeeze == 8) {
    emotion = "Congoja";
    description = "Tristeza angustiosa por la pérdida de un ser querido.";
     bannerGrow = 0;
  } else if (squeeze == 9) {
    emotion = "Desaliento";
    description = "Angustia con resignación.";
    bannerGrow = 0;
  } else if (squeeze == 10) {
    emotion = "Pesar";
    description = "Tristeza por una pérdida.";
    bannerGrow = 0;
  } else if (squeeze == 11) {
    emotion = "Angustia";
    description = "Tristeza intensa con agitación.";
    bannerGrow = 0;
  }
  

  
  if(squeeze != 0){
    bannerOp = 70;
  } else {
    bannerOp = 0;
  }
}

function miedo(){
   emotionNumber = 8;
  
  if (squeeze == 0) {
    emotion = "";
    description = "";
  }
  if (squeeze == 1) {
    emotion = "Inquietud";
    description = "Previsión de la posibilidad de peligro.";
  }
  if (squeeze == 2) {
    emotion = "Nerviosismo";
    description = "Incertidumbre respecto a si hay un peligro.";
  }
  if (squeeze == 3) {
    emotion = "Ansiedad";
    description = "Incapacidad para hacer frente a una amenaza prevista o real.";
  }
  if (squeeze == 4) {
    emotion = "Temor";
    description = "Previsión de un peligro grave.";
  }
  if (squeeze == 5) {
    emotion = "Desesperación";
    description = "Una respuesta a la incapacidad para aminorar el peligro.";
  }
  if (squeeze == 6) {
    emotion = "Pánico";
    description = "Miedo intenso. A menudo collectivo y contagioso.";
  }
  if (squeeze == 7) {
    emotion = "Horror";
    description = "Mezcla de miedo y repugnancia.";
  }
  if (squeeze == 8) {
    emotion = "Terror";
    description = "Miedo máximo.";
  }
   
  if(squeeze != 0){
    bannerOp = 70;
  } else {
    bannerOp = 0;
  }
}

function felicidad(){
   emotionNumber = 13;
  
   if (squeeze == 0) {
    emotion = "";
    description = "";
     bannerGrow = 0;
  }
  if (squeeze == 1) {
    emotion = "Placer Sensorial";
    description = "Disfrute que se consigue por medio de uno de los cinco sentidos : vista, oído, tacto, gusto y olfato.";
    bannerGrow = width*0.01;
  }
  if (squeeze == 2) {
    emotion = "Regocijo";
    description = "Sentimiento cálido y enaltecedor que las personas experimentan cuando ven actos de bondad, amabilidad y compasión humanas. También se le llama elevación.";
    bannerGrow = width*0.03;
  }
  if (squeeze == 3) {
    emotion = "Compasión";
    description = "Gozo que se experimenta cuando uno actúa para aliviar el sufrimiento de otra persona.";
    bannerGrow = width*0.01;
  }
  if (squeeze == 4) {
    emotion = "Diversión";
    description = "Sentimientos bulliciosos ligeros de gozo y buen humor.";
    bannerGrow = 0;
  }
  if (squeeze == 5) {
    emotion = "Schandenfreude";
    description = "Palabra tomada del alemás que se refiere al gozo por los infortunios de otra persona, por lo común un rival. Es regodearse del mal ajeno.";
    bannerGrow = width*0.03;
  }
  if (squeeze == 6) {
    emotion = "Alivio";
    description = "Cuando se evita o llega a su fin algo que se esperaba fuese desagradable, en especial la amenaza de un daño.";
    bannerGrow = width*0.01;
  }
  if (squeeze == 7) {
    emotion = "Paz";
    description = "Experiencia de tranquilidad y contento.";
    bannerGrow = 0;
  }
  if (squeeze == 8) {
    emotion = "Fiero";
    description = "Palabra italiana que describe el gozo que se experimenta cuando uno ha hecho frente a un desafío que expande sus capacidades.";
    bannerGrow = width*0.03;
  }
    if (squeeze == 9) {
    emotion = "Orgullo";
    description = "Deseo de que los demás conozcan el placer que uno siente por los propios logros, o por los logros de alguien a quien uno educó o con quien uno se identifica.";
      bannerGrow = width*0.03;
  }
  if (squeeze == 10) {
    emotion = "Naches";
    description = "Término yidis que se aplica a los sentimientos de orgullo por ver los logros, o a veces simplemente por la existencia de los hijos, descendientes o alumnos. Es crucial para motivar la crianza de infantes y niños.";
    bannerGrow = width*0.05;
  }
  if (squeeze == 11) {
    emotion = "Asombro";
    description = "Experiencia de algo muy sorprendente, hermoso, prodigioso o difícil de creer.";
    bannerGrow = width*0.01;
  }
  if (squeeze == 12) {
    emotion = "Exitación";
    description = "Energía que, a diferencia de otras emociones agradables, rara vez se experimenta levemente, sino que su intensidad fluctúa entre mediana y elevada. Puede combinarse con cualquiera de las emociones para generar una forma muy activa de esa emoción.";
    bannerGrow = width*0.07;
  }
  if (squeeze == 13) {
    emotion = "Éxtasis";
    description = "Deleite embelesado. Estado de felicidad muy grande, casi abrumador.";
    bannerGrow = width*0.01;
  }
  
  if(squeeze != 0){
    bannerOp = 70;
  } else {
    bannerOp = 0;
  }
}

function sorpresa(){
  emotion = " ";
  description = " ";
  bannerOp = 0;
}

function rabia(){
   emotionNumber = 7;
     if (squeeze == 0) {
    emotion = "";
    description = "";
  }
  if (squeeze == 1) {
    emotion = "Fastidio";
    description = "Enojo muy leve.";
    bannerGrow = 0;
    
  }
  if (squeeze == 2) {
    emotion = "Frustración";
    description = "Respuesta tras no haber podido superar un obstáculo pese a repetidos intentos.";
    bannerGrow = width*0.01;
  }
  if (squeeze == 3) {
    emotion = "Exasperación";
    description = "Pérdida de paciencia ante repetidos fracasos para resolver un problema.";
    bannerGrow = width*0.01;
  }
  if (squeeze == 4) {
    emotion = "Propensión a Discutir";
    description = "Inclinación a prolongar los desacuerdos.";
    bannerGrow = 0;
  }
  if (squeeze == 5) {
    emotion = "Amargura";
    description = "Decepción porque nadie quiso resolver un problema.";
    bannerGrow = 0;
  }
  if (squeeze == 6) {
    emotion = "Vengatividad";
    description = "Deseo de tomar represalias.";
    bannerGrow = 0;
  }
  if (squeeze == 7) {
    emotion = "Furia";
    description = "Enojo intenso";
    bannerGrow = 0;
  }
  
  if(squeeze != 0){
    bannerOp = 70;
  } else {
    bannerOp = 0;
  }
}

function desprecio(){
  emotion = " ";
  description = " ";
  bannerOp = 0;
}

function drawingBoard() {
  drawControls();
  
if(mode == 3){
  if (mouseIsPressed) {
    if (mouseY < height*0.8) { // Adjust for size control UI
      applyBrush(mouseX, mouseY);
    }
  }}
}

function drawCard(card) {
 if (mode == 0){
  if (card.isSelected) {
    fill(220); // Highlight if selected
  } else if (matchedCards.includes(card.value)) {
    if(card.value == "A"||card.value == "Asco"){
      fill(192,159,232);
    }
    else if (card.value == "T"||card.value == "Tristeza") {
      fill(137,201,240);
    }
    else if (card.value == "F"||card.value == "Felicidad") {
      fill(255,217,94);
    }
    else if (card.value == "M"||card.value == "Miedo") {
      fill(134,219,199);
    }
    else if (card.value == "R"||card.value == "Rabia") {
      fill(255,143,117);
    }
    else if (card.value == "S"||card.value == "Sorpresa") {
      fill(152,231,237);
    }
    else if (card.value == "D"||card.value == "Desprecio") {
      fill(240,171,98);
    }
  } else {
    fill(240);
  }
  
  noStroke();
  rect(card.x, card.y, card.width, card.height, 10);
  fill(0);
  textSize(cardTextSize);
  textFont("Source Sans Pro");
  textAlign(CENTER, CENTER);
  text(card.value, card.x + card.width / 2, card.y + card.height / 2);
   if(card.value == "A"){
image(disgust,card.x,card.y,card.width,card.height);
    }
    else if (card.value == "T") {
image(sadness,card.x,card.y,card.width,card.height);
    }
    else if (card.value == "F") { image(joy,card.x,card.y,card.width,card.height);
    }
    else if (card.value == "M") {
      image(fear,card.x,card.y,card.width,card.height);
    }
    else if (card.value == "R") {
image(anger,card.x,card.y,card.width,card.height);
    }
    else if (card.value == "S") {
  image(surprise,card.x,card.y,card.width,card.height);
    }
    else if (card.value == "D") {
  image(contempt,card.x,card.y,card.width,card.height);
    } 
 }
}

function mousePressed() {
  
if(mode == 0){
  for (let card of cards) {
    if (mouseX > card.x && mouseX < card.x + card.width && mouseY > card.y && mouseY < card.y + card.height) {
      if (!card.isSelected && !matchedCards.includes(card.value) && !matchedCards.includes(cardPairs[card.value])) {
        card.isSelected = true;
        selectedCards.push(card);
        
        if (selectedCards.length == 2) {
          checkForMatch();
        }
        break;
      }
    }
  }} else if (mode == 3){
    // Color palette selection
  if (mouseY > height*0.81 && mouseY < height*0.81+width/35) {
    let index = Math.floor(mouseX / (width / colors.length));
    if (index >= 0 && index < colors.length) {
      currentColor = colors[index];
    }
  }
  // Brush type selection
    if(mouseX > width*0.25 - width/18 && mouseX < width*0.25 + width/18 && mouseY > height*0.93-width/30 && mouseY < height*0.93 + width/30){
      brushType = 'square';
    } else if (mouseX > width*0.37 - width/18 && mouseX < width*0.37 + width/18 && mouseY > height*0.93-width/30 && mouseY < height*0.93 + width/30) {
      brushType = 'circle';
    }
 
  // Brush size control
  if (mouseX > width*0.48 - width/30 && mouseX < width*0.48 + width/30 && mouseY > height*0.93 - width/30 && mouseY < height*0.93 + width/30 ) {
    brushSize = max(5, brushSize - 5); // Decrease size, minimum 5
    } else if (mouseX > width*0.65 - width/30 && mouseX < width*0.65 + width/30 && mouseY > height*0.93 - width/30 && mouseY < height*0.93 + width/30){
      brushSize = min(90, brushSize + 5); // Increase size, maximum 100
      }
    }
  
}

function checkForMatch() {
 if (mode == 0){
  let matchFound = cardPairs[selectedCards[0].value] === selectedCards[1].value;

  if (matchFound) {
    matchedCards.push(selectedCards[0].value, selectedCards[1].value);
    matchesFound += 1;
   
      rightFX.play();

  } else {
     if (!wrongFX.isPlaying()) {
      wrongFX.play();
    }
  }
  
  // Reset selected cards after a short delay
  setTimeout(() => {
    selectedCards.forEach(card => card.isSelected = false);
    selectedCards = [];
  }, 1000);
 }
}

function keyPressed() {
   if (keyCode === 13) { // 13 is enter
    if(pause == false){
     pause = true;
    } else if(pause == true)
     {
       pause = false;
     }
  }

    // important to have in order to start the serial connection!!


  
  if (keyCode == 77 && music == false ){
    music = true;
  } else if (keyCode == 77 && music == true){
    music = false;
  }
 
}

function applyBrush(x, y) {
  if (mode == 3) { 
      fill(currentColor);
      noStroke();
      
      switch (brushType) {
        case 'circle':
          ellipse(x, y, brushSize, brushSize);
          break;
        case 'square':
          rect(x - brushSize / 2, y - brushSize / 2, brushSize, brushSize);
          break;
      }
    }
}

function drawControls() {
  
if (mode == 3){
  textAlign(LEFT);
    // Background
  noStroke();
  fill(255);
  rect(0,height*0.8, width, height*0.2);
  rect(width*0.83, 0, width, height*0.15, 20);
  
  push();
  noStroke();
  ellipseMode(CENTER);
  fill(240);
    
  fill(currentColor);
  ellipse(width*0.565, height*0.93, brushSize);
  
  
  // Colors
  for (let i = 0; i < colors.length; i++) {
    fill(colors[i]);
    rect(((width / colors.length)) * i, height*0.81, width / colors.length, width/35);
  }
   pop();
   fill(0);
   text("Borrar", width*0.92, height*0.84);
    text("Dibuja cómo te sientes!", width*0.015, height*0.93);
  
  // Buttons
  push();
  rectMode(CENTER);
  textAlign(CENTER,CENTER);
  
  // Brushes
  fill(squarebFill);
  rect(width*0.25, height*0.93, width/9, width/15, width/60);
  fill(circlebFill);
  rect(width*0.37, height*0.93, width/9, width/15, width/60);
  
  //Size
    // Decrease size button
  fill(downArrowbFill);
  rect(width*0.48, height*0.93, width/15, width/15, width/60);
  fill(0);
  textSize(width/30);
  text("-", width*0.48, height*0.93);
  
  // Increase size button
  fill(upArrowbFill);
  rect(width*0.65, height*0.93, width/15, width/15, width/60);
  fill(0);
  text("+", width*0.65, height*0.93);
pop();
  
  push();
   noFill();
  stroke(0);
  strokeWeight(2);
  rectMode(CENTER);
   rect(width*0.25, height*0.93, width/32);
  ellipse(width*0.37, height*0.93, width/32);
  pop();
  
  // Brush type selection
    if(mouseX > width*0.25 - width/18 && mouseX < width*0.25 + width/18 && mouseY > height*0.93-width/30 && mouseY < height*0.93 + width/30){
      squarebFill = 220;
    } else  {
      squarebFill = 240;
    }
      if (mouseX > width*0.37 - width/18 && mouseX < width*0.37 + width/18 && mouseY > height*0.93-width/30 && mouseY < height*0.93 + width/30) {
      circlebFill = 220;
    } else {
      circlebFill = 240;
    }
 
  // Brush size control
  if (mouseX > width*0.48 - width/30 && mouseX < width*0.48 + width/30 && mouseY > height*0.93 - width/30 && mouseY < height*0.93 + width/30 ) {
    downArrowbFill = 220;
    } else {
      downArrowbFill = 240;
    }
  
  if (mouseX > width*0.65 - width/30 && mouseX < width*0.65 + width/30 && mouseY > height*0.93 - width/30 && mouseY < height*0.93 + width/30){
      upArrowbFill = 220;
      } else {
        upArrowbFill = 240;
      }
}
  
}

function continueButton(x, y, o){

  push();
  rectMode(CENTER);
  fill(240-contFill, o);
  rect(x, y, width*0.2, height*0.10,10);
  pop();
  
  fill(0);
  text("Continuar", x, y)
 
   if (mouseX > (x-width*0.1) && mouseX < (x+width*0.1) && mouseY > (y-height*0.05) && mouseY < (y+height*0.05) ) {
     contFill = 20;
     if (mouseIsPressed) {
      clear();
      mode += 1;
      instructionsSwitch = true;
       if (!winFX.isPlaying()) {
    winFX.play();
  }
   } } else {
     contFill = 0;
     
   }

}

function hideInstructions() {
  if(mode == 2) {instructionsSwitch = false;}
}

function mouseClicked(){
  // Sound Control
  if(mouseX < width*0.95 && mouseX > width*0.9 && mouseY <height*0.15){
     if(music == false){
       music = true;
     } else {
       music = false;
     }
  }
  
  if(mouseX > width*0.85 && mouseX < width*0.9 && mouseY < height*0.15){
   mode -=1;
    pause = false;
    clear();
  }
  
  if(mouseY>height*0.1-height/20 && mouseY<height*0.1+height/20 && mouseX>width*0.05-height/20 && mouseX<width*0.05+height/20){
    setUpSerial();
  }
  
   if (mouseX > width*0.95 && mouseY <height*0.15) {
      // mode = 1;
     //  sparkWidth = width*0.1;
      // backFillo = 0;
       //pause = false;
      // clear();
      // hasBackgroundBeenSet = false;
     window.location.href = 'https://juanrozu23.github.io/OneSpark/';
      // window.open("https://juanrozu23.github.io/OneSpark/", "OneSpark", '_self');
      music = false;
        }
}

function toggleMusic() {
  image(musicButton, width*0.9, height*0.05, width*0.032+growMusicButton, width*0.032+growMusicButton);
  
       if(music == true){
   if (!backgroundSong.isPlaying()) {
    backgroundSong.play();
    }
  } else {
    if (backgroundSong.isPlaying()) {
    backgroundSong.pause();
    }
  } 
  
  if (mouseX < width*0.95 && mouseX > width*0.9 && mouseY <height*0.15) {
    growMusicButton = 5;
  } else {
    growMusicButton = 0;
  }

  if(music==false){
    push();
     stroke(255,0,0);
     strokeWeight(width/260);
     line(width*0.9, height*0.05, width*0.94, height*0.1);
    pop();

  }
}

function goBack() {
  push();
  fill(0);
  textAlign(LEFT);
  textSize(width/30+growBackButton);
  textFont("Source Sans Pro");
  text('←', width*0.85, height*0.1)
  pop();
  
  if(mouseX > width*0.85 && mouseX < width*0.9 && mouseY < height*0.15) {
    growBackButton = 5;
  } else {
    growBackButton = 0;
  }
  
}

function sparkieOn() {
  push();    
    fill(sparkieFill);
 rectMode(CORNER);
   ellipse(width*0.05, height*0.1, height/10);
  fill(0);
  text("Presiona este boton para conectarte con Sparkie!", width*0.07, height*0.065, width*0.2)
    pop();
  
  if(mouseY>height*0.1-height/20 && mouseY<height*0.1+height/20 && mouseX>width*0.05-height/20 && mouseX<width*0.05+height/20){
    sparkieFill = 220;
  } else {
    sparkieFill = 244;
  }
  
  image(sparkie,width*0.026, height*0.051, width*0.05, width*0.05);
  
  if(serialActive){
    sparkieFill = colors[2];
    
  }

}

function readSerial(data) {


  if (data != null) {
    // make sure there is actually a message
    // split the message
    let fromArduino = split(trim(data), ",");
    // if the right length, then proceed
    if (fromArduino.length == 2) {
      // only store values here
      // do everything with those values in the main draw loop
      force = fromArduino[0];
      knob = fromArduino[1];
    }
    
    let sendToArduino = left + "," + right + "\n";
    writeSerial(sendToArduino);
  }
}


