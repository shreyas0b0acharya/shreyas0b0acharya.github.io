const circle = document.getElementById("out-circle"); 
const arrow = document.getElementById("arrow");
const inTriangle = document.getElementById("in-triangle");

let degreeAngle = 0;
let sValueContent = 100;
let lValueContent = 50;

const hueTextInput = document.getElementById("hueValue");
hueTextInput.value = degreeAngle;

function angleRangeCorrector() {
    if (degreeAngle < 0) {
        degreeAngle = Math.abs(degreeAngle) + 0;
    } else {
        degreeAngle = (180 - degreeAngle) + 180;
    }
    degreeAngle = parseInt(360 - degreeAngle);
}

function boxColoring() {
    const box1 = document.getElementById("box-1");
    box1.style.backgroundColor = `hsl(${Math.abs(degreeAngle + 0)}, ${sValueContent}%, ${lValueContent}%)`;
    
    const box2 = document.getElementById("box-2");
    box2.style.backgroundColor = `hsl(${Math.abs(degreeAngle + 120)}, ${sValueContent}%, ${lValueContent}%)`;
    
    const box3 = document.getElementById("box-3");
    box3.style.backgroundColor = `hsl(${Math.abs(degreeAngle + 240)}, ${sValueContent}%, ${lValueContent}%)`;


    const colorOut1 = document.getElementById("color-values-1");
    colorOut1.textContent = `hsl(${Math.abs(degreeAngle )}, ${sValueContent}%, ${lValueContent}%)`;
    
    let temp=0;
    temp =  degreeAngle+120;
    if(temp>360){
        temp= temp-360 ;
    }
    
    const colorOut2 = document.getElementById("color-values-2");
    colorOut2.textContent = `hsl(${Math.abs(temp)}, ${sValueContent}%, ${lValueContent}%)`;


    const colorOut3 = document.getElementById("color-values-3");
    
   temp=0;
    temp =  degreeAngle+240;
    if(temp>360){
        temp= temp-360 ;
    }
    
    colorOut3.textContent = `hsl(${Math.abs((temp))}, ${sValueContent}%, ${lValueContent}%)`;
}

circle.addEventListener("click", (event) => {
    const x = event.clientX;
    const y = event.clientY;

    const rect = circle.getBoundingClientRect();
    const circleCenterX = rect.left + rect.width / 2;
    const circleCenterY = rect.top + rect.height / 2;

    const distanceFromOrigin = Math.sqrt((x - circleCenterX) ** 2 + (y - circleCenterY) ** 2);

    if (distanceFromOrigin > 220 / 2) {
        const radianAngle = Math.atan2(y - circleCenterY, x - circleCenterX);
        degreeAngle = ((radianAngle * 180) / Math.PI) + 90;

        arrow.style.transform = `rotate(${degreeAngle - 120}deg)`;
        inTriangle.style.transform = `rotate(${degreeAngle - 120}deg)`;

        angleRangeCorrector();

        hueTextInput.value = degreeAngle;
        boxColoring();
    }
});

// Saturation
const sTextInput = document.getElementById("sdisplay");
sTextInput.value = sValueContent;
const sSliderInput = document.getElementById("sValue");

sSliderInput.addEventListener('click', (event) => {
    sValueContent = sSliderInput.value;
    sTextInput.value = sSliderInput.value;
    boxColoring();
});

sTextInput.addEventListener('input', (event) => {
    if (sTextInput.value > 100) {
        sTextInput.value = 100;
      } else if (sTextInput.value < 0) {
        sTextInput.value = 0; 
      }
    sValueContent = sTextInput.value;
    sSliderInput.value = sTextInput.value;
    boxColoring();
});

// Lightness
const lTextInput = document.getElementById("ldisplay");
lTextInput.value = lValueContent;
const lSliderInput = document.getElementById("lValue");

lSliderInput.addEventListener('click', (event) => {
    lValueContent = lSliderInput.value;
    lTextInput.value = lSliderInput.value;
    boxColoring();
});

lTextInput.addEventListener('input', (event) => {
    if (lTextInput.value > 100) {
        lTextInput.value = 100;
      } else if (lTextInput.value < 0) {
        lTextInput.value = 0; 
      }
    lValueContent = lTextInput.value;
    lSliderInput.value = lTextInput.value;
    angleRangeCorrector();
    boxColoring();
});

hueTextInput.addEventListener('input', (event) => {
    if (hueTextInput.value > 360) {
        hueTextInput.value = 0;
      } else if (hueTextInput.value < 0) {
        hueTextInput.value = 0; 
      }
    degreeAngle = hueTextInput.value;
    
    
    arrow.style.transform = `rotate(${degreeAngle - 120}deg)`;
    inTriangle.style.transform = `rotate(${degreeAngle - 120}deg)`;
    angleRangeCorrector();
    boxColoring(); 
});
