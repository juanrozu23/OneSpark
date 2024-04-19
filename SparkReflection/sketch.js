  
// SERIAL
let force;
let knob;
let left = 0;
let right = 0;



    let joy_logo;
    let fear_logo;
    let contempt_logo;
    let surprise_logo;
    let sadness_logo;
    let disgust_logo;
    let growHomeButton = 0;
    let homeButton;
    let growMusicButton = 0;
    let musicButton;
    let growBackButton = 0;
    let sparkieFill = 240;
    let sparkie;

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


// Selection

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
let contFill;

let backFillr = 255;
let backFillg = 255;
let backFillb = 255;
let backFillo = 0;

let emotionNumber;


let mode = 0;

//Audio
let backgroundSong;
let winFX;
let clickFX;
let music = false;

// Define global variables
let days = [];
let columns = 7; // Number of columns
let colors = [[240],[192,159,232], [137,201,240], [134,219,199],[255,217,94], [255,143,117], [152,231,237], [240,171,98]];
let selectedDayIndex = -1; // Index of the selected day
let input; // For the textbox
let growthAmount = 10;

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
  sparkie = loadImage('Media/lightning.png')
  
  
  joy_logo = loadImage("Media/logo_Felicidad.png");
  fear_logo = loadImage("Media/logo_Miedo.png");
  contempt_logo = loadImage("Media/logo_Desprecio.png");
  surprise_logo = loadImage("Media/logo_Sorpresa.png");
  sadness_logo = loadImage("Media/logo_Tristeza.png");
  disgust_logo = loadImage("Media/logo_Asco.png");
  
    backgroundSong = loadSound("Audio/music3.mp3");
    winFX = loadSound("Audio/complete.mp3");
    clickFX = loadSound("Audio/click.mp3");
  
}


function setup() {
 createCanvas(window.innerWidth, window.innerHeight);
  updateCanvasSize();
  background(255); 
  input = createElement('textarea', '');
  input.position(width*0.68, height*0.35);
  input.size(width/4, height*0.4)
  input.input(inputUpdated); // Call inputUpdated() whenever text is typed

  // Calculate rows needed based on total days and columns
  let totalDays = 35; // You can adjust this number as needed

  // Initialize days with positions for a grid layout
  for (let i = 0; i < totalDays; i++) {
    let rowt = floor(i / columns);
    let columnt = i % columns;
    days.push({
      x: width/14+ columnt * (width * 0.57 / columns), // Centering the squares a bit
      y: height/5 + rowt * width/13.5, // Adjust spacing for rows
      w: width/15, // Width
      h: width/15, // Height
      color: [240, 240, 240], // Default color (light gray)
      colorIndex: 0, // Add this line to keep track of the current color
      note: '' // Placeholder for notes
    });
  }

  loadNotes();
  
  // Logos
   logos = [joy_logo,fear_logo,contempt_logo,surprise_logo,sadness_logo,disgust_logo];
   selectedLogo = random(logos);
  
  sparks = [joy,sadness,anger,contempt,disgust, surprise,fear];
  
  radius = width*0.12;
  centerx = width*0.82;
  centery = height*0.6;
  

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
  textFont("Source Sans Pro");
  background(255);
  drawDays();
  sparkieOn();
 // print(selectedDayIndex);
     
  switch (mode) {
    case 0:
      instructions();
      home();
      break;
    case 1:
       if (serialActive) {
        serialEkmanVisualizationSelection();
        goBack();
      }else {
      ekmanVisualizationSelection();
      goBack();}
      home();
      drawSelectedDay();
      break;
    case 2:
      piensa();
      goBack();
      home();
      drawSelectedDay();
      break;
  }
  image(selectedLogo, width*0.73, height*0.9,width*0.25,(width*0.25)/6);
  
  home();
  
  textSize(width/55);

  toggleMusic();
  
}

function drawDays() {
  textAlign(CENTER, CENTER);
  for (let i = 0; i < days.length; i++) {
    fill(days[i].color);
    noStroke(); 
    days[i].w = constrain(days[i].w, 0, width/14);
    days[i].h = constrain(days[i].h, 0, width/14);
    rect(days[i].x, days[i].y, days[i].w, days[i].h, width/40);
    fill(0);
    text(i+1, days[i].x+(days[i].w/2), days[i].y+(days[i].h/2));
    

    if (mouseX >= days[i].x && mouseX <= days[i].x + days[i].w &&
        mouseY >= days[i].y && mouseY <= days[i].y + days[i].h) {
      days[i].w = days[i].w + 1;
      days[i].h = days[i].h + 1;
    } else {
      days[i].w = width/15;
      days[i].h = width/15;
    }
  }
}

function mouseClicked() {
  for (let i = 0; i < days.length; i++) {
    if (mouseX > days[i].x && mouseX < days[i].x + days[i].w && mouseY > days[i].y && mouseY < days[i].y + days[i].h) {
      selectedDayIndex = i;
      mode = 1;
       if (!clickFX.isPlaying()) {
    clickFX.play();
  }
      input.value(days[i].note);
   //   days[i].colorIndex = (days[i].colorIndex + 1) % colors.length;
  //    days[i].color = colors[days[i].colorIndex];
      saveNotes(); // Save changes immediately when color is changed
      
      if(days[selectedDayIndex].color != 240){
        mode = 2;
      } else {
        mode = 1;
      }
      
      break;
    }
  }
  
// Sound Control
  if(mouseX < width*0.95 && mouseX > width*0.9 && mouseY <height*0.15){
     if(music == false){
       music = true;
      // localStorage.clear()
     } else {
       music = false;
     }
  }
  
  if (mouseX > width*0.95 && mouseY <height*0.15) {
   //   localStorage.clear();
        window.location.href = 'https://juanrozu23.github.io/OneSpark/';
      music = false;
        }
    
     if(mouseY>height*0.1-height/20 && mouseY<height*0.1+height/20 && mouseX>width*0.05-height/20 && mouseX<width*0.05+height/20){
    setUpSerial();
  }
  
  if(mouseX > width*0.85 && mouseX < width*0.9 && mouseY < height*0.20){
    
    if(mode ==1 ){
      mode = 0;
    } else if (mode == 2) {
      mode = 1;
    }
  }
}

// Function called when input text changes

function inputUpdated() {
  if (selectedDayIndex >= 0) {
    days[selectedDayIndex].note = input.value();
    saveNotes();
  }
}

// Function to load notes from localStorage
function loadNotes() {
  for (let i = 0; i < days.length; i++) {
    let storedDayData = localStorage.getItem('day_' + i);
    if (storedDayData) {
      let dayData = JSON.parse(storedDayData);
      days[i].note = dayData.note;
      days[i].colorIndex = dayData.colorIndex;
      days[i].color = colors[days[i].colorIndex];
    }
  }
}

// Function to save notes to localStorage
function saveNotes() {
  for (let i = 0; i < days.length; i++) {
    let dayData = {
      note: days[i].note,
      colorIndex: days[i].colorIndex
    };
    localStorage.setItem('day_' + i, JSON.stringify(dayData));
  }
}

function home() {
  // Home Button (Change when moving to Visual Studio)
  
  image(homeButton, width*0.95, height*0.05, width*0.035+growHomeButton, width*0.035+growHomeButton);
  
  
  if (mouseX > width*0.95 && mouseY <height*0.15) {
    growHomeButton = 5;
  } else {
    growHomeButton = 0;
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
  textSize(width/30+growBackButton);
  textFont("Source Sans Pro");
  text('←', width*0.88, height*0.1)
  pop();
  
  if(mouseX > width*0.86 && mouseX < width*0.9 && mouseY < height*0.15) {
    growBackButton = 5;
  } else {
    growBackButton = 0;
  }
}

function instructions(){
  input.hide();
  
  fill(0);
  text("Guarda tus sentimientos! Escoge un espacio, y dale click para comenzar!", width*0.67, height*0.5, width*0.3);
 
}

function choose(){
   input.hide();
  ekmanVisualizationSelection();
}

function piensa(){
   input.show();
    push();
 // textSize(width/45);
  fill(0);
  text("Describe tus emociones.", width * 0.82, height * 0.21);
  text("¡Utiliza este espacio para anotar por qué te sientes así! ", width * 0.67, height * 0.28, width*0.3);
  pop();
}

function sparkieOn() {
  push();    
    fill(sparkieFill);
 rectMode(CORNER);
   ellipse(width*0.05, height*0.1, height/10);
  fill(0);
  text("Presiona este boton para conectarte con Sparkie!", width*0.09, height*0.1, width*0.2)
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

function ekmanVisualizationSelection () {
  input.hide();
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
 // textSize(width/45);
  fill(0);
  text("¿Cómo te sientes en este momento?", width * 0.82, height * 0.21);
  text("Dale click a la emoción que coincida con tus sentimientos. ", width * 0.67, height * 0.28, width*0.3);
  pop();
push();
   noStroke();
  ellipseMode(CENTER);
  imageMode(CENTER);
  
  
    // Asco
  fill(ascoFillr, ascoFillg, ascoFillb);
  ellipse(ascox, ascoy, width / 18);
  image(disgust,ascox, ascoy, width/20, width/20);
  
    if(mouseX>(ascox-width/40) && mouseX<(ascox+width/40) && mouseY>ascoy-width/40 && mouseY<ascoy+width/40 && ascoChoice == false){
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
      days[selectedDayIndex].color = colors[1];
        saveNotes();
      
    }
     ascoFillr = 192;
     ascoFillg = 159;
     ascoFillb = 232;
    push();
  textSize(width/40);
  textStyle(BOLD);
  text("Asco ", width*0.82, height * 0.6);
  pop();
  } 
  
  
    // TRISTEZA
  
  fill(tristezaFillr, tristezaFillg, tristezaFillb);
  ellipse(tristezax, tristezay, width / 18);
  image(sadness,tristezax,tristezay, width/20, width/20);
  
   if(mouseX>(tristezax - width/40) && mouseX<(tristezax+width/40) && mouseY>tristezay-width/20 && mouseY<tristezay+width/40 && tristezaChoice == false){
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
          days[selectedDayIndex].color = colors[2];
        saveNotes();
    }
      tristezaFillr = 137;  
      tristezaFillg = 201;  
      tristezaFillb = 240; 
    push();
  textSize(width/40);
  textStyle(BOLD);
  text("Tristeza ", width*0.82, height * 0.6);
  pop();
  } 
   
   // MIEDO
  fill(miedoFillr, miedoFillg, miedoFillb);
  ellipse(miedox,miedoy, width / 18);
  image(fear,miedox,miedoy,width/20, width/20);
  
   if(mouseX>(miedox -width/40) && mouseX<(miedox+ width/40) && mouseY>miedoy-width/40 && mouseY<miedoy+width/40 && miedoChoice == false){
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
        days[selectedDayIndex].color = colors[3];
        saveNotes();
    }
     miedoFillr = 134;
     miedoFillg = 219;
     miedoFillb = 199;
    push();
  textSize(width/40);
  textStyle(BOLD);
  text("Miedo ", width*0.82, height * 0.6);
  pop();
  } 
  
  // Felicidad  

  fill(felicidadFillr, felicidadFillg, felicidadFillb);
  ellipse(felicidadx, felicidady, width / 18);
  image(joy,felicidadx,felicidady,width/20, width/20);
  
  if(mouseX>(felicidadx -width/40) && mouseX<(felicidadx + width/40) && mouseY>felicidady-width/40 && mouseY<felicidady+width/40 && felicidadChoice == false){
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
      days[selectedDayIndex].color = colors[4];
        saveNotes();
    }
     felicidadFillr = 255;
     felicidadFillg = 217;
     felicidadFillb = 94;
  push();
  textSize(width/40);
  textStyle(BOLD);
  text("Felicidad ", width*0.82, height * 0.6);
  pop();
}
  
   // Sorpresa
  fill(sorpresaFillr, sorpresaFillg, sorpresaFillb);
  ellipse(sorpresax,sorpresay, width / 18);
  image(surprise,sorpresax,sorpresay,width/20, width/20);
 
  
  if(mouseX>(sorpresax- width/40) && mouseX<(sorpresax + width/40)&& mouseY>sorpresay-width/40 && mouseY<sorpresay+width/40 && sorpresaChoice == false){
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
        days[selectedDayIndex].color = colors[5];
        saveNotes();
    }
     sorpresaFillr = 152;
     sorpresaFillg = 231;
     sorpresaFillb = 237;
  push();
  textSize(width/40);
  textStyle(BOLD);
  text("Sorpresa ", width*0.82, height * 0.6);
  pop();
  } 
  
  // Rabia
  
  fill(rabiaFillr,rabiaFillg,rabiaFillb);
  ellipse(rabiax, rabiay, width / 18);
  image(anger,rabiax,rabiay,width/20, width/20);
  
    
  if(mouseX>(rabiax -width/40) && mouseX<(rabiax + width/40) && mouseY>rabiay-width/40 && mouseY<rabiay+width/40 && rabiaChoice == false){
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
      days[selectedDayIndex].color = colors[6];
        saveNotes();
    }
     rabiaFillr = 255;
     rabiaFillg = 143;
     rabiaFillb = 117;
  push();
  textSize(width/40);
  textStyle(BOLD);
  text("Rabia", width*0.82, height * 0.6);
  pop();
}
  
  
  // DESPRECIO
  
  fill(desprecioFillr,desprecioFillg,desprecioFillb);
  ellipse(despreciox,desprecioy, width / 18);
  image(contempt,despreciox,desprecioy,width/20, width/20);
    
  if(mouseX>(despreciox -width/40) && mouseX<(despreciox + width/40) && mouseY>(desprecioy)-width/40 && mouseY<(desprecioy)+width/40 && desprecioChoice == false){
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
        days[selectedDayIndex].color = colors[7];
        saveNotes();
    }
     desprecioFillr = 240;
     desprecioFillg = 171;
     desprecioFillb = 98;
    push();
  textSize(width/40);
  textStyle(BOLD);
  text("Desprecio ", width*0.82, height * 0.6);
  pop();
   
  }
  pop();
  
  if(emotionChoice !== 0){
    continueButton(width*0.83, height*0.75, 255);
  }
  
//    if (selectedDayIndex >= 0) {
//     days[selectedDayIndex].colorIndex = index;
//     days[selectedDayIndex].color = colors[index];
//     saveNotes(); // Save the updated color
//     redrawCalendar(); // Update the display
//   }
  
}

function serialEkmanVisualizationSelection () {
    sparkieOn();
  input.hide();
  print(knob);
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
  
  

  // textAlign(CENTER);
  // rectMode(CENTER);
   push();
 // textSize(width/45);
  fill(0);
  text("¿Cómo te sientes en este momento?", width * 0.82, height * 0.21);
  text("Usa la perilla de Sparkie para seleccionar una emoción. ", width * 0.67, height * 0.28, width*0.3);
  pop();
push();
   noStroke();
  ellipseMode(CENTER);
  imageMode(CENTER);
    
    // Asco
  fill(ascoFillr, ascoFillg, ascoFillb);
  ellipse(ascox, ascoy, width / 18);
  image(disgust,ascox, ascoy, width/20, width/20);
  
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
    days[selectedDayIndex].color = colors[1];
        saveNotes();
  } else if (knob >146 && knob<=292){
    emotionChoice = 2;
    days[selectedDayIndex].color = colors[2];
        saveNotes();
  } else if (knob>292 && knob<=438){
    emotionChoice = 3;
    days[selectedDayIndex].color = colors[3];
        saveNotes();
  } else if (knob>438 && knob<=584){
    emotionChoice = 4;
    days[selectedDayIndex].color = colors[4];
        saveNotes();
  } else if (knob>584 && knob<=730){
    emotionChoice = 5;
    days[selectedDayIndex].color = colors[5];
        saveNotes();
  } else if (knob>730 && knob<=876){
    emotionChoice = 6;
    days[selectedDayIndex].color = colors[6];
        saveNotes();
  } else if (knob>876 && knob<=1023){
    emotionChoice = 7;
    days[selectedDayIndex].color = colors[7];
        saveNotes();
  }
    
  if(emotionChoice == 1){
    ascoFillr = 192;
    ascoFillg = 159;
    ascoFillb = 232;
    push();
    textSize(width/40);
    textStyle(BOLD);
    text("Asco ", width*0.82, height * 0.6);
    pop();
  } else {
    ascoFillr = 240;
    ascoFillg = 240;
    ascoFillb = 240;
  }
  
   
    // TRISTEZA
  
  fill(tristezaFillr, tristezaFillg, tristezaFillb);
  ellipse(tristezax, tristezay, width / 18);
  image(sadness,tristezax,tristezay, width/20, width/20);
  
  if(emotionChoice == 2){
      tristezaFillr = 137;  
      tristezaFillg = 201;  
      tristezaFillb = 240; 
      push();
      textSize(width/40);
      textStyle(BOLD);
      text("Tristeza ", width*0.82, height * 0.6);
      pop();
  } else {
      tristezaFillr = 240;  
      tristezaFillg = 240;  
      tristezaFillb = 240; 
  }

   
   // MIEDO
  fill(miedoFillr, miedoFillg, miedoFillb);
  ellipse(miedox,miedoy, width / 18);
  image(fear,miedox,miedoy,width/20, width/20);
  
   
  if(emotionChoice == 3){
     miedoFillr = 134;
     miedoFillg = 219;
     miedoFillb = 199;
     push();
     textSize(width/40);
     textStyle(BOLD);
     text("Miedo ", width*0.82, height * 0.6);
     pop();
  } else {
      miedoFillr = 240;  
      miedoFillg = 240;  
      miedoFillb = 240; 
  }

  
  // Felicidad  

  fill(felicidadFillr, felicidadFillg, felicidadFillb);
  ellipse(felicidadx, felicidady, width / 18);
  image(joy,felicidadx,felicidady,width/20, width/20);
  
  if(emotionChoice == 4){
     felicidadFillr = 255;
     felicidadFillg = 217;
     felicidadFillb = 94;
     push();
     textSize(width/40);
     textStyle(BOLD);
     text("Felicidad ", width*0.82, height * 0.6);
     pop();
  } else {
      felicidadFillr = 240;
     felicidadFillg = 240;
     felicidadFillb = 240;
  }

  
   // Sorpresa
  fill(sorpresaFillr, sorpresaFillg, sorpresaFillb);
  ellipse(sorpresax,sorpresay, width / 18);
  image(surprise,sorpresax,sorpresay,width/20, width/20);
 
  
  if(emotionChoice == 5){
    sorpresaFillr = 152;
     sorpresaFillg = 231;
     sorpresaFillb = 237;
  push();
  textSize(width/40);
  textStyle(BOLD);
  text("Sorpresa ", width*0.82, height * 0.6);
  pop();
  } else {
    sorpresaFillr = 240;
    sorpresaFillg = 240;
    sorpresaFillb = 240;
  }
  
  // Rabia
  
  fill(rabiaFillr,rabiaFillg,rabiaFillb);
  ellipse(rabiax, rabiay, width / 18);
  image(anger,rabiax,rabiay,width/20, width/20);
  
  if(emotionChoice == 6){
     rabiaFillr = 255;
     rabiaFillg = 143;
     rabiaFillb = 117;
     push();
     textSize(width/40);
     textStyle(BOLD);
     text("Rabia", width*0.82, height * 0.6);
     pop();
  } else {
     rabiaFillr = 240;
     rabiaFillg = 240;
     rabiaFillb = 240;
  }
    
 
  // DESPRECIO
  
  fill(desprecioFillr,desprecioFillg,desprecioFillb);
  ellipse(despreciox,desprecioy, width / 18);
  image(contempt,despreciox,desprecioy,width/20, width/20);
  
  if(emotionChoice == 7){
     desprecioFillr = 240;
     desprecioFillg = 171;
     desprecioFillb = 98;
     push();
     textSize(width/40);
     textStyle(BOLD);
     text("Desprecio ", width*0.82, height * 0.6);
     pop();
  } else {
    desprecioFillr = 240;
    desprecioFillg = 240;
    desprecioFillb = 240;
  }
  pop();
  
  if(emotionChoice !== 0){
    continueButton(width*0.83, height*0.75, 255);
  }
  //  force = 0;
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

function drawSelectedDay() {
  push();  
   fill(240);
rect(width*0.08, height*0.88, width/5, height*0.15, width/60);
  fill(0);
  textStyle(BOLD);
  text("Espacio Escogido:", width*0.07, height*0.94, width*0.2);
    text(selectedDayIndex+1, width*0.15, height*0.94, width*0.2)
 
    pop();
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

