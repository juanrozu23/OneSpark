// SERIAL
let force;
let knob;
let left = 0;
let right = 0;




let input1, input2, input3, input4, input5, submitButton;
let optionButtons = [];
let mode = 0;
let buttonFill;
let growMusicButton = 0;
let musicButton;
let sparkie;
let sparkieFill = 240;

let prompts = ["¡Tu amigo te trajo un regalo que te encanta!" ,"¡Ay no! Olvidaste tu tarea en la casa.", "Perdiste una evaluación.", "¡La comida que te sirven te sabe horrible!", "Jugando afuera te caiste y te aporreaste el pie.", "Te peleas con tu familia.", "¡Saliste a vacaciones! Los días que siguen son libres.", "Hay una tormenta fuerte y se va la luz.", "Estabas jugando y perdiste. Quedaste de último(a) y todos se rieron de ti.", "Debes presentar un discurso al frente de todos tus compañeros.", "Estás tirando un balón adentro y accidentalmente quiebras una lámpara muy costosa de tu familia.", "Te invitan a una fiesta de cumpleaños.", "Tu amigo te dijo mentiras."]

let selectedPrompt;

let pausa1 = false;
let pausa2 = false;

   let joy_logo;
    let fear_logo;
    let contempt_logo;
    let surprise_logo;
    let sadness_logo;
    let disgust_logo;
    let growHomeButton = 2;

    let logos;

  // Sparks
    let joy;
    let anger;
    let sadness;
    let contempt;
    let disgust;
    let surprise;
    let fear;

    let sparks;
    let sparkWidth;
    let selectedSpark;


// Audio
let backgroundSong;
let breathFX;
let winFX;
let clickFX;
let music = false;


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

   // Circle Organize
    let centerx;
    let centery;
    let radius;
    let movement;

  // Ekmans Visualization
    let emotionChoice = 0;

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

let fillClear = 0;
let contFill;
let submitted = false;
let youFeel = "";
let theyFeel = "";
let finalText = "";
let colors = [[192,159,232], [137,201,240], [255,217,94], [134,219,199], [255,143,117], [152,231,237], [240,171,98], [0], [255]];


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
  
  backgroundSong = loadSound("Audio/music2.mp3");
  winFX = loadSound("Audio/complete.mp3");
  clickFX = loadSound("Audio/click.mp3");
  breathFX = loadSound("Audio/breath.mp3");
}

function setup() {
   createCanvas(window.innerWidth, window.innerHeight);
  updateCanvasSize();
  background(255); 
  textFont("Source Sans Pro");
   textAlign(CENTER, CENTER);
  rectMode(CENTER);

  // Create text areas
  input1 = createElement('textarea', '');
  input1.position(width*0.1, height*0.37);
  input1.size(width*0.2, height*0.15);

  input2 = createElement('textarea', '');
  input2.position(width*0.4, height*0.37);
  input2.size(width*0.2, height*0.15);

  input3 = createElement('textarea', '');
  input3.position(width*0.7, height*0.37);
  input3.size(width*0.2, height*0.15);

  
  input4 = createElement('textarea', '');
  input4.position(width*0.3, height*0.45);
  input4.size(width*0.6, height*0.13);

  
  input5 = createElement('textarea', '');
  input5.position(width*0.3, height*0.67);
  input5.size(width*0.6, height*0.13);

  
  
  
  // Create a submit button
  submitButton = createButton('Listo');
  submitButton.position(width/2-width/14, height*0.6);
  submitButton.size(width/7, height/10);

  
  
   // Logos
   logos = [joy_logo,fear_logo,contempt_logo,surprise_logo,sadness_logo,disgust_logo];
   selectedLogo = random(logos);
  
  sparks = [joy,sadness,anger,contempt,disgust, surprise,fear];
  
   selectedPrompt = "";  
  buttonFill = 0;
  
  
  
  // emotion choice

  radius = width*0.3;
  centerx = width*0.5;
  centery = height*0.75;
  
  
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
  
   contFill = 0;
}

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
  background(255);
    image(selectedLogo, width*0.73, height*0.9,width*0.25,(width*0.25)/6);
    toggleMusic();
  
  switch (mode) {
    case 0:
      instructions();
      home();
      break;
    case 1:
      pausa();
      home();
      break;
    case 2:
      piensa();
      home();
      break;
    case 3:
      actua();   
      home();
      break;
    default:
      //  
  }
  
  if(music == true){
  if (!backgroundSong.isPlaying()) {
    backgroundSong.play();
  }
   } else {
     if (backgroundSong.isPlaying()) {
    backgroundSong.pause();
  }
   }
  
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
  
  if(mode == 0){
  if (mouseX>width/2-width/10 && mouseX<width/2+width/10 && mouseY > height*0.62-height/20 && mouseY < height*0.62+height/20){
   triggerPrompt();
     if (!winFX.isPlaying()) {
    winFX.play();
  }
  } 
 } 
  
   if(mouseY>height*0.9-height/20 && mouseY<height*0.9+height/20 && mouseX>width*0.05-height/20 && mouseX<width*0.05+height/20){
    setUpSerial();
  }
  
}

function instructions() {
  input1.hide();
  input2.hide();
  input3.hide();
  input4.hide();
  input5.hide();
  submitButton.hide();
  textSize(width/50);
 
  textStyle(NORMAL);
   text("En SparkEmoción aprendemos a reconocer nuestras emociones, pero ¿qué hacemos con nuestros sentimientos? y ¿cómo compartimos nuestras emociones con los demás?", width*0.5, height*0.2, width*0.6);
   text("A continuación te voy a dar una situación, y quiero que imagines que fuera verdad… ¿Te atreves?", width*0.5, height*0.36, width*0.6);
   text("Presiona el botón para leer tu situación y continuar:", width*0.5, height*0.48, width*0.6);
   
  push();
  textStyle(ITALIC);
  textSize(width/45);
  text(selectedPrompt, width/2, height*0.8, width*0.6);
  pop();
  
  push();
  fill(240+buttonFill);
  noStroke();
  rect(width/2, height*0.62, width/5,height/10,width/60);
  pop();
  
  if (mouseX>width/2-width/10 && mouseX<width/2+width/10 && mouseY > height*0.62-height/20 && mouseY < height*0.62+height/20){
    buttonFill = -20;
  } else {
    buttonFill = 0;
  }
  
     text("Comenzar", width*0.5, height*0.62, width*0.6);
}

function pausa() {
  sparkieOn();
  mode = 1;
  input1.hide();
  input2.hide();
  input3.hide();
  input4.hide();
  input5.hide();
  submitButton.hide();
  
    push();
  textStyle(ITALIC);
  textSize(width/45);
  text(selectedPrompt, width/2, height*0.82, width*0.6);
  pop();
  
  
  textSize(width/50);
  text("Lo primero que debes hacer en cualquier situación es tomarte un minuto.", width*0.58, height*0.15, width*0.8);
  
   push();
  textAlign(LEFT);
  if(pausa1 == true){
  text("1. Respira profundo tres veces y, si puedes, aprieta a Sparky.", width*0.5, height*0.35, width*0.8);
     if (!breathFX.isPlaying()) {
    breathFX.play();
  }
  }
  
  if(pausa2 == true){


       if (serialActive) {
        emotionSelectionSerial(width/10, width/12);
          push();
         textAlign(LEFT);
           text("2.¿Qué emoción o emociones sientes? Utiliza la perilla y presiona a Sparkie para seleccionar una emoción.", width*0.5, height*0.45, width*0.8);
         pop();
      }else {
       emotionSelection(width/10, width/12);
        push();
        textAlign(LEFT);
        text("2.¿Qué emoción o emociones sientes?", width*0.5, height*0.45, width*0.8);
        pop();
      }
   
    breathFX.stop();
    }
  pop();
 setTimeout(pausa1trigger, 1000);
 setTimeout(pausa2trigger, 7000);
  
  noStroke();
  fill(240);
  rect(width/12, height*0.15, width/3, height*0.17, height/30 );
    fill(223,41,53);
  ellipse(width*0.048, height*0.15, width/15);
  fill(0);
  textSize(width/30);
  text("pausa", width/7, height*0.15);
  
  if(ascoChoice == true || tristezaChoice == true || miedoChoice == true || felicidadChoice == true || sorpresaChoice == true || rabiaChoice == true || desprecioChoice == true){
 push();
    rectMode(CENTER);
    fill(240+fillClear);
    rect(width/15, height*0.65, width*0.04, width*0.04, width/60);
    fill(0);
    textSize(width/50);
    text("x",width/15, height*0.65);
  pop();
    
    if(mouseX>width/15-width*0.02 && mouseX<width/15+width*0.02 && mouseY>height*0.65-width*0.02 && mouseY<height*0.65+width*0.02){
      if(mouseIsPressed){
          ascoChoice = false;
          tristezaChoice = false;
          miedoChoice = false;
          felicidadChoice = false;
          sorpresaChoice = false;
          rabiaChoice = false;
          desprecioChoice = false;
         if (!clickFX.isPlaying()) {
    clickFX.play();
  }
      }
      fillClear = -20;
    } else {
      fillClear = 0;
    }
    
    continueButton(width/2, height*0.92, 245, width*0.13, height*0.1);
    
  }
}


function piensa(){
// Show text areas
  input1.show();
  input2.show();
  input3.show();
  input4.hide();
  input5.hide();
  submitButton.show();
    
     submitButton.mousePressed(createAndHideInputs);
    
   noStroke();
  fill(240);
  rect(width/12, height*0.15, width/3, height*0.17, height/30 );
    fill(253,202,64);
  ellipse(width*0.048, height*0.15, width/15);
  fill(0);
  textSize(width/30);
  text("piensa", width/7, height*0.15);
  
  if (submitted == true){
     submitButton.style('opacity', '0');
  continueButton(width/2, height*0.87, 245, width*0.13, height*0.1);
    text("Antes de continuar, asegúrate de que las opciones correspondan con tu cuerpo y tus sentimientos.", width*0.5, height*0.7, width*0.6);
  
  }
  
  push();
  textSize(width/50);
  textAlign(LEFT);
    text("Ya identificamos tu sentimiento, ahora pensemos en qué puedes hacer.", width*0.58, height*0.1, width*0.6);
      text("Escribe en cada una de las cajas de texto una opción diferente. Presiona el botón cuando lo hayas hecho.", width*0.58, height*0.2, width*0.6);
  textSize(width/45);
  textAlign(CENTER);
  text("Opcion 1", width*0.2, height*0.335);
  text("Opcion 2", width*0.5, height*0.335);
  text("Opcion 3", width*0.8, height*0.335);
  pop();

}

function actua() {
  input1.hide();
  input2.hide();
  input3.hide();
  submitButton.hide();
  optionButtons.forEach(btn => {
    btn.show();
  });
    noStroke();
  fill(240);
  rect(width/12, height*0.15, width/3, height*0.17, height/30 );
  fill(103,197,89);
  ellipse(width*0.048, height*0.15, width/15);
  fill(0);
  textSize(width/30);
  text("actua", width/7, height*0.15);
  textSize(width/50);
  push();
  textAlign(LEFT);
    text("El último paso es tomar la acción que creas mejor. ¿Cuál de las opciones que escogiste te gustaría hacer?", width*0.6, height*0.15, width*0.6);
 
      text(youFeel, width*0.17, height*0.53, width*0.25);
  
  text(theyFeel, width*0.17, height*0.72, width*0.25);
  
  text(finalText, width*0.4, height*0.93, width*0.45)
  pop();
  
}

function home() {
  // Home Button (Change when moving to Visual Studio)
  
  image(homeButton, width*0.95, height*0.05, width*0.035+growHomeButton, width*0.035+growHomeButton);
  
  
  if (mouseX > width*0.95 && mouseY <height*0.15) {
    growHomeButton = 5;
  } else {
    growHomeButton = 0;
  }

  
  if (mouseIsPressed) {
    if (mouseX > width*0.95 && mouseY <height*0.15) {
    mode = 0;
      ascoChoice = false;
          tristezaChoice = false;
          miedoChoice = false;
          felicidadChoice = false;
          sorpresaChoice = false;
          rabiaChoice = false;
          desprecioChoice = false;
        optionButtons.forEach(btn => {
    btn.hide();
  });
      window.location.href = 'https://juanrozu23.github.io/OneSpark/';
      music = false;
        }
  }
}

function triggerPrompt(){
  if(selectedPrompt == ""){
  selectedPrompt = random(prompts);
  setTimeout(nextMode,2000);
  } else {
    nextMode();
  }
}

function nextMode(){
  mode += 1
}

function pausa1trigger (){
  pausa1 = true;
}

function pausa2trigger (){
  pausa2 = true;
}

function emotionSelection (sizeCircle, sizePic) {
  textAlign(CENTER);
  ascox = 2*width/9 - sizeCircle/2;
  ascoy = height*0.65;
  
  tristezax = 3*width/9- sizeCircle/2;
  tristezay = height*0.65;
  
  miedox = 4*width/9- sizeCircle/2;
  miedoy = height*0.65;
  
  felicidadx = 5*width/9- sizeCircle/2;
  felicidady = height*0.65;
  
  sorpresax = 6*width/9- sizeCircle/2;
  sorpresay = height*0.65;
  
  rabiax = 7*width/9- sizeCircle/2;
  rabiay = height*0.65;
  
  despreciox = 8*width/9- sizeCircle/2;
  desprecioy = height*0.65;
  
  
push();
   noStroke();
  ellipseMode(CENTER);
  imageMode(CENTER);
  
  
    // Asco
  fill(ascoFillr, ascoFillg, ascoFillb);
  ellipse(ascox, ascoy, sizeCircle);
  image(disgust,ascox, ascoy, sizePic, sizePic);
  
    if(mouseX>(ascox-sizePic/2) && mouseX<(ascox+sizePic/2) && mouseY>ascoy-sizePic/2 && mouseY<ascoy+sizePic/2 && ascoChoice == false){
     ascoFillr = 220;
     ascoFillg = 220;
     ascoFillb = 220;
    if (mouseIsPressed && ascoChoice == false) {
      ascoChoice = true;
      if (!clickFX.isPlaying()) {
    clickFX.play();
  }
  }} else {
     ascoFillr = 240;
     ascoFillg = 240;
     ascoFillb = 240;
    }
  
  if(ascoChoice == true){
     ascoFillr = 192;
     ascoFillg = 159;
     ascoFillb = 232;
    push();
  textSize(width/40);
  textStyle(BOLD);
  text("Asco ", ascox, ascoy-sizeCircle*0.7);
  pop();
  } 
  
  
    // TRISTEZA
  
  fill(tristezaFillr, tristezaFillg, tristezaFillb);
  ellipse(tristezax, tristezay, sizeCircle);
  image(sadness,tristezax,tristezay, sizePic, sizePic);
  
   if(mouseX>(tristezax - sizePic/2) && mouseX<(tristezax+sizePic/2) && mouseY>tristezay-sizePic/2 && mouseY<tristezay+sizePic/2 && tristezaChoice == false){
      tristezaFillr = 220;  
      tristezaFillg = 220;  
      tristezaFillb = 220; 
     if (mouseIsPressed && tristezaChoice == false) {
      tristezaChoice = true;
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
      tristezaFillr = 137;  
      tristezaFillg = 201;  
      tristezaFillb = 240; 
    push();
  textSize(width/40);
  textStyle(BOLD);
  text("Tristeza ", tristezax, tristezay-sizeCircle*0.7);
  pop();
  } 
   
   // MIEDO
  fill(miedoFillr, miedoFillg, miedoFillb);
  ellipse(miedox,miedoy, sizeCircle);
  image(fear,miedox,miedoy,sizePic, sizePic);
  
   if(mouseX>(miedox -sizePic/2) && mouseX<(miedox+ sizePic/2) && mouseY>miedoy-sizePic/2 && mouseY<miedoy+sizePic/2){
     if(miedoChoice == false){
     miedoFillr = 220;
     miedoFillg = 220;
     miedoFillb = 220;
     if (mouseIsPressed && miedoChoice == false) {
      miedoChoice = true;
       if (!clickFX.isPlaying()) {
    clickFX.play();
  }
  }}
   } else {
     miedoFillr = 240;
     miedoFillg = 240;
     miedoFillb = 240;
    }
  
  if(miedoChoice == true){
     miedoFillr = 134;
     miedoFillg = 219;
     miedoFillb = 199;
 
    push();
  textSize(width/40);
  textStyle(BOLD);
  text("Miedo ", miedox, miedoy-sizeCircle*0.7);
  pop();
  } 
  
 
  // Felicidad  

  fill(felicidadFillr, felicidadFillg, felicidadFillb);
  ellipse(felicidadx, felicidady, sizeCircle);
  image(joy,felicidadx,felicidady,sizePic, sizePic);
  
  if(mouseX>(felicidadx -sizePic/2) && mouseX<(felicidadx + sizePic/2) && mouseY>felicidady-sizePic/2 && mouseY<felicidady+sizePic/2 && felicidadChoice == false){
     felicidadFillr = 220;
     felicidadFillg = 220;
     felicidadFillb = 220;
    if (mouseIsPressed && felicidadChoice == false) {
      felicidadChoice = true;
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
     felicidadFillr = 255;
     felicidadFillg = 217;
     felicidadFillb = 94;
  push();
  textSize(width/40);
  textStyle(BOLD);
  text("Felicidad ", felicidadx, felicidady-sizeCircle*0.7);
  pop();
}
  
   // Sorpresa
  fill(sorpresaFillr, sorpresaFillg, sorpresaFillb);
  ellipse(sorpresax,sorpresay, sizeCircle);
  image(surprise,sorpresax,sorpresay,sizePic, sizePic);
    if(mouseX>(sorpresax- sizePic/2) && mouseX<(sorpresax + sizePic/2)&& mouseY>sorpresay-sizePic/2 && mouseY<sorpresay+sizePic/2 && sorpresaChoice == false){
     sorpresaFillr = 220;
     sorpresaFillg = 220;
     sorpresaFillb = 220;
      if (mouseIsPressed && sorpresaChoice == false) {
      sorpresaChoice = true;
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
     sorpresaFillr = 152;
     sorpresaFillg = 231;
     sorpresaFillb = 237;
  push();
  textSize(width/40);
  textStyle(BOLD);
  text("Sorpresa ", sorpresax, sorpresay-sizeCircle*0.7);
  pop();
  } 
  
  // Rabia
  
  fill(rabiaFillr,rabiaFillg,rabiaFillb);
  ellipse(rabiax, rabiay, sizeCircle);
  image(anger,rabiax,rabiay,sizePic, sizePic);
  
    
  if(mouseX>(rabiax -sizePic/2) && mouseX<(rabiax + sizePic/2) && mouseY>rabiay-sizePic/2 && mouseY<rabiay+sizePic/2 && rabiaChoice == false){
     rabiaFillr = 220;
     rabiaFillg = 220;
     rabiaFillb = 220;
    if (mouseIsPressed && rabiaChoice == false) {
      rabiaChoice = true;
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
     rabiaFillr = 255;
     rabiaFillg = 143;
     rabiaFillb = 117;
  push();
  textSize(width/40);
  textStyle(BOLD);
  text("Rabia", rabiax, rabiay-sizeCircle*0.7);
  pop();
}
  
  
  // DESPRECIO
  
  fill(desprecioFillr,desprecioFillg,desprecioFillb);
  ellipse(despreciox,desprecioy, sizeCircle);
  image(contempt,despreciox,desprecioy,sizePic, sizePic);
    
  if(mouseX>(despreciox -sizePic/2) && mouseX<(despreciox + sizePic/2) && mouseY>(desprecioy)-sizePic/2 && mouseY<(desprecioy)+sizePic/2 && desprecioChoice == false){
     desprecioFillr = 220;
     desprecioFillg = 220;
     desprecioFillb = 220;
    if (mouseIsPressed && desprecioChoice == false) {
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
     desprecioFillr = 240;
     desprecioFillg = 171;
     desprecioFillb = 98;
    push();
  textSize(width/40);
  textStyle(BOLD);
  text("Desprecio ", despreciox, desprecioy-sizeCircle*0.7);
  pop();
   
  }
  pop();

  
}


function emotionSelectionSerial (sizeCircle, sizePic) {
  textAlign(CENTER);
  ascox = 2*width/9 - sizeCircle/2;
  ascoy = height*0.65;
  
  tristezax = 3*width/9- sizeCircle/2;
  tristezay = height*0.65;
  
  miedox = 4*width/9- sizeCircle/2;
  miedoy = height*0.65;
  
  felicidadx = 5*width/9- sizeCircle/2;
  felicidady = height*0.65;
  
  sorpresax = 6*width/9- sizeCircle/2;
  sorpresay = height*0.65;
  
  rabiax = 7*width/9- sizeCircle/2;
  rabiay = height*0.65;
  
  despreciox = 8*width/9- sizeCircle/2;
  desprecioy = height*0.65;
  
  
push();
   noStroke();
  ellipseMode(CENTER);
  imageMode(CENTER);
  
     
  if (knob>0 && knob <=146){
   if(force > 600){
    ascoChoice = true;
     if (!clickFX.isPlaying()) {
    clickFX.play();
  }
   } 
    if(ascoChoice == false) {
     ascoFillr = 220;
     ascoFillg = 220;
     ascoFillb = 220;}
  } else {
     if(ascoChoice == false){
     ascoFillr = 240;
     ascoFillg = 240;
     ascoFillb = 240;
     }
  }
    
    
    if (knob >146 && knob<=292){
    if(force > 600){
    tristezaChoice = true;
      if (!clickFX.isPlaying()) {
    clickFX.play();
  }
   } 
      if(tristezaChoice == false){
      tristezaFillr = 220;  
      tristezaFillg = 220;  
      tristezaFillb = 220; }
  } else {
    if(tristezaChoice == false){
    tristezaFillr = 240;  
      tristezaFillg = 240;  
      tristezaFillb = 240; 
    }
  }
    
    if (knob>292 && knob<=438){
    if(force > 600){
    miedoChoice = true;
      if (!clickFX.isPlaying()) {
    clickFX.play();
  }
   }
       if(miedoChoice == false){
      miedoFillr = 220;
     miedoFillg = 220;
     miedoFillb = 220;
       }
  } else {
    if(miedoChoice == false){
    miedoFillr = 240;
     miedoFillg = 240;
     miedoFillb = 240;
    }
  }
    
    if (knob>438 && knob<=584){
    if(force > 600){
    felicidadChoice = true;
      if (!clickFX.isPlaying()) {
    clickFX.play();
  }
   } 
      if(felicidadChoice == false){
      felicidadFillr = 220;
     felicidadFillg = 220;
     felicidadFillb = 220;
      }
  } else {
    if(felicidadChoice == false){
    felicidadFillr = 240;
     felicidadFillg = 240;
     felicidadFillb = 240;
    }
  }
    
    if (knob>584 && knob<=730){
    if(force > 600){
    sorpresaChoice = true;
      if (!clickFX.isPlaying()) {
    clickFX.play();
  }
   } 
    if(sorpresaChoice == false){
      sorpresaFillr = 220;
     sorpresaFillg = 220;
     sorpresaFillb = 220;}
  } else {
    if(sorpresaChoice == false){
     sorpresaFillr = 240;
     sorpresaFillg = 240;
     sorpresaFillb = 240;}
  }
    
    if (knob>730 && knob<=876){
    if(force > 600){
    rabiaChoice = true;
      if (!clickFX.isPlaying()) {
    clickFX.play();
  }
   } 
      if(rabiaChoice == false){
      rabiaFillr = 220;
     rabiaFillg = 220;
     rabiaFillb = 220;}
  } else {
     if(rabiaChoice == false){
     rabiaFillr = 240;
     rabiaFillg = 240;
     rabiaFillb = 240;
  }}
    
    if (knob>876 && knob<=1023){
    if(force > 600){
    desprecioChoice = true;
      if (!clickFX.isPlaying()) {
    clickFX.play();
  }
   }
       if(desprecioChoice == false){
     desprecioFillr = 220;
     desprecioFillg = 220;
     desprecioFillb = 220;}
  } else {
      if(desprecioChoice == false){
     desprecioFillr = 240;
     desprecioFillg = 240;
     desprecioFillb = 240;}
  }
  
    // Asco
  fill(ascoFillr, ascoFillg, ascoFillb);
  ellipse(ascox, ascoy, sizeCircle);
  image(disgust,ascox, ascoy, sizePic, sizePic);
  
  
  
    if(mouseX>(ascox-sizePic/2) && mouseX<(ascox+sizePic/2) && mouseY>ascoy-sizePic/2 && mouseY<ascoy+sizePic/2 && ascoChoice == false){
     ascoFillr = 220;
     ascoFillg = 220;
     ascoFillb = 220;
    if (mouseIsPressed && ascoChoice == false) {
      ascoChoice = true;
      if (!clickFX.isPlaying()) {
    clickFX.play();
  }
  }} else {
     ascoFillr = 240;
     ascoFillg = 240;
     ascoFillb = 240;
    }
  
  if(ascoChoice == true){
     ascoFillr = 192;
     ascoFillg = 159;
     ascoFillb = 232;
    push();
  textSize(width/40);
  textStyle(BOLD);
  text("Asco ", ascox, ascoy-sizeCircle*0.7);
  pop();
  } 
  
  
    // TRISTEZA
  
  fill(tristezaFillr, tristezaFillg, tristezaFillb);
  ellipse(tristezax, tristezay, sizeCircle);
  image(sadness,tristezax,tristezay, sizePic, sizePic);
  
   if(mouseX>(tristezax - sizePic/2) && mouseX<(tristezax+sizePic/2) && mouseY>tristezay-sizePic/2 && mouseY<tristezay+sizePic/2 && tristezaChoice == false){
      tristezaFillr = 220;  
      tristezaFillg = 220;  
      tristezaFillb = 220; 
     if (mouseIsPressed && tristezaChoice == false) {
      tristezaChoice = true;
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
      tristezaFillr = 137;  
      tristezaFillg = 201;  
      tristezaFillb = 240; 
    push();
  textSize(width/40);
  textStyle(BOLD);
  text("Tristeza ", tristezax, tristezay-sizeCircle*0.7);
  pop();
  } 
   
   // MIEDO
  fill(miedoFillr, miedoFillg, miedoFillb);
  ellipse(miedox,miedoy, sizeCircle);
  image(fear,miedox,miedoy,sizePic, sizePic);
  
   if(mouseX>(miedox -sizePic/2) && mouseX<(miedox+ sizePic/2) && mouseY>miedoy-sizePic/2 && mouseY<miedoy+sizePic/2){
     if(miedoChoice == false){
     miedoFillr = 220;
     miedoFillg = 220;
     miedoFillb = 220;
     if (mouseIsPressed && miedoChoice == false) {
      miedoChoice = true;
       if (!clickFX.isPlaying()) {
    clickFX.play();
  }
  }}
   } else {
     miedoFillr = 240;
     miedoFillg = 240;
     miedoFillb = 240;
    }
  
  if(miedoChoice == true){
     miedoFillr = 134;
     miedoFillg = 219;
     miedoFillb = 199;
 
    push();
  textSize(width/40);
  textStyle(BOLD);
  text("Miedo ", miedox, miedoy-sizeCircle*0.7);
  pop();
  } 
  
 
  // Felicidad  

  fill(felicidadFillr, felicidadFillg, felicidadFillb);
  ellipse(felicidadx, felicidady, sizeCircle);
  image(joy,felicidadx,felicidady,sizePic, sizePic);
  
  if(mouseX>(felicidadx -sizePic/2) && mouseX<(felicidadx + sizePic/2) && mouseY>felicidady-sizePic/2 && mouseY<felicidady+sizePic/2 && felicidadChoice == false){
     felicidadFillr = 220;
     felicidadFillg = 220;
     felicidadFillb = 220;
    if (mouseIsPressed && felicidadChoice == false) {
      felicidadChoice = true;
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
     felicidadFillr = 255;
     felicidadFillg = 217;
     felicidadFillb = 94;
  push();
  textSize(width/40);
  textStyle(BOLD);
  text("Felicidad ", felicidadx, felicidady-sizeCircle*0.7);
  pop();
}
  
   // Sorpresa
  fill(sorpresaFillr, sorpresaFillg, sorpresaFillb);
  ellipse(sorpresax,sorpresay, sizeCircle);
  image(surprise,sorpresax,sorpresay,sizePic, sizePic);
    if(mouseX>(sorpresax- sizePic/2) && mouseX<(sorpresax + sizePic/2)&& mouseY>sorpresay-sizePic/2 && mouseY<sorpresay+sizePic/2 && sorpresaChoice == false){
     sorpresaFillr = 220;
     sorpresaFillg = 220;
     sorpresaFillb = 220;
      if (mouseIsPressed && sorpresaChoice == false) {
      sorpresaChoice = true;
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
     sorpresaFillr = 152;
     sorpresaFillg = 231;
     sorpresaFillb = 237;
  push();
  textSize(width/40);
  textStyle(BOLD);
  text("Sorpresa ", sorpresax, sorpresay-sizeCircle*0.7);
  pop();
  } 
  
  // Rabia
  
  fill(rabiaFillr,rabiaFillg,rabiaFillb);
  ellipse(rabiax, rabiay, sizeCircle);
  image(anger,rabiax,rabiay,sizePic, sizePic);
  
    
  if(mouseX>(rabiax -sizePic/2) && mouseX<(rabiax + sizePic/2) && mouseY>rabiay-sizePic/2 && mouseY<rabiay+sizePic/2 && rabiaChoice == false){
     rabiaFillr = 220;
     rabiaFillg = 220;
     rabiaFillb = 220;
    if (mouseIsPressed && rabiaChoice == false) {
      rabiaChoice = true;
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
     rabiaFillr = 255;
     rabiaFillg = 143;
     rabiaFillb = 117;
  push();
  textSize(width/40);
  textStyle(BOLD);
  text("Rabia", rabiax, rabiay-sizeCircle*0.7);
  pop();
}
  
  
  // DESPRECIO
  
  fill(desprecioFillr,desprecioFillg,desprecioFillb);
  ellipse(despreciox,desprecioy, sizeCircle);
  image(contempt,despreciox,desprecioy,sizePic, sizePic);
    
  if(mouseX>(despreciox -sizePic/2) && mouseX<(despreciox + sizePic/2) && mouseY>(desprecioy)-sizePic/2 && mouseY<(desprecioy)+sizePic/2 && desprecioChoice == false){
     desprecioFillr = 220;
     desprecioFillg = 220;
     desprecioFillb = 220;
    if (mouseIsPressed && desprecioChoice == false) {
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
     desprecioFillr = 240;
     desprecioFillg = 171;
     desprecioFillb = 98;
    push();
  textSize(width/40);
  textStyle(BOLD);
  text("Desprecio ", despreciox, desprecioy-sizeCircle*0.7);
  pop();
   
  }
  pop();

  
}

function continueButton(x, y, o, w, h){

  push();
  rectMode(CENTER);
  fill(240-contFill, o);
  rect(x, y, w, h,10);
  pop();
  
  fill(0);
  textSize(width/50);
  text("Continuar", x, y)
 
   if (mouseX > (x-(w/2)) && mouseX < (x+(w/2)) && mouseY > (y-(h/2)) && mouseY < (y+(h/2)) ) {
     contFill = 20;
     if (mouseIsPressed) {
      clear();
      nextMode();
       if (!winFX.isPlaying()) {
    winFX.play();
  }
   } } else {
     contFill = 0;
     
   }

}


function createAndHideInputs() {

  optionButtons.forEach(button => button.remove());
  optionButtons = [];

  // Create a button for each input
  const texts = [input1.value(), input2.value(), input3.value()];
  texts.forEach((text, index) => {
    let btn = createButton(text);
    btn.position(width*0.1+index*(width*0.3), height*0.3);
    btn.size(width/5, height/10)
    btn.mousePressed(() => {closingArgument();}); // Replace alert with any function
    optionButtons.push(btn);
      btn.hide();
  });
 
  submitted = true;
}

function closingArgument() {
  input4.show();
  input5.show();
  
  youFeel = "Ahora, escribe cómo crees que te sientes aquí:";
  theyFeel = "y escribe cómo crees que se sienten las otras personas a tu alrededor aquí:";
  
  setTimeout(finalFeedback, 10000);
}

function finalFeedback() {
  finalText = "¡Lo hiciste! Terminaste las actividades de Spark Acción. Presiona el botón de inicio ir a otra actividad. "
   if (!winFX.isPlaying()) {
    winFX.play();
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

function sparkieOn() {
  push();    
    fill(sparkieFill);
 rectMode(CORNER);
   ellipse(width*0.05, height*0.92, height/10);
  fill(0);
  textSize(width/60);
  text("Presiona este boton para conectarte con Sparkie!", width*0.07, height*0.92, width*0.2)
    pop();
  
  if(mouseY>height*0.9-height/20 && mouseY<height*0.9+height/20 && mouseX>width*0.05-height/20 && mouseX<width*0.05+height/20){
    sparkieFill = 220;
  } else {
    sparkieFill = 244;
  }
  
  image(sparkie,width*0.026, height*0.87, width*0.05, width*0.05);
  
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