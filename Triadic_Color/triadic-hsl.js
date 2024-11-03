const circle = document.getElementById("out-circle");
const arrow = document.getElementById("arrow");
const inTriangle = document.getElementById("in-triangle");

let degreeAngle = 0;
let sValueContent =100;
let lValueContent =50;

const hueTextInput = document.getElementById("hueValue");
hueTextInput.value = degreeAngle;

function angleRangeCorrector(){
    if(degreeAngle<0){
        degreeAngle = Math.abs(degreeAngle)+0;
    }else{
        degreeAngle = (180-degreeAngle)+180;
    }
    degreeAngle=(parseInt)(360-degreeAngle);
    console.log("degreeAngle:" + (degreeAngle));

    return degreeAngle;
}

function boxColoring(){
        const box1 = document.getElementById("box-1");
        box1.style.backgroundColor = `hsl(${Math.abs(degreeAngle + 0)},  ${sValueContent}%, ${lValueContent}%)`;
        console.log(`Box 1 Color: hsl(${Math.abs(degreeAngle + 0)},  ${sValueContent}%, ${lValueContent}%))`);
        
        const box2 = document.getElementById("box-2");
        box2.style.backgroundColor = `hsl(${Math.abs(degreeAngle + 120)},  ${sValueContent}%, ${lValueContent}%)`;
        console.log(`Box 2 Color: hsl(${Math.abs(degreeAngle + 120)},  ${sValueContent}%, ${lValueContent}%`);
        
        const box3 = document.getElementById("box-3");
        box3.style.backgroundColor = `hsl(${Math.abs(degreeAngle + 240)}, ${sValueContent}%, ${lValueContent}%)`;
        console.log(`Box 3 Color: hsl(${Math.abs(degreeAngle + 240)}, ${sValueContent}%, ${lValueContent}%)`);

        colorOut1 = document.getElementById("color-values-1");
        colorOut1.textContent = `hsl(${Math.abs(degreeAngle + 0)},  ${sValueContent}%, ${lValueContent}%)`;
        angleRangeCorrector();
        colorOut1 = document.getElementById("color-values-2");
        colorOut1.textContent = `hsl(${Math.abs((degreeAngle + 120)-240)},  ${sValueContent}%, ${lValueContent}%)`;
        angleRangeCorrector();
        colorOut1 = document.getElementById("color-values-3");
        colorOut1.textContent = `hsl(${Math.abs((degreeAngle + 120)-360)}, ${sValueContent}%, ${lValueContent}%)`;
}

circle.addEventListener("click", (event) => {
    const x = event.clientX;
    const y = event.clientY;
    console.log("X:" + x + "\tY:" + y);

    const rect = circle.getBoundingClientRect();
    const circleCenterX = rect.left + rect.width / 2;
    const circleCenterY = rect.top + rect.height / 2;
    console.log("circleCenterX:" + circleCenterX + "\tcircleCenterY:" + circleCenterY); // Fixed typo with a tab

    const distanceFromOrigin = Math.sqrt((x - circleCenterX) ** 2 + (y - circleCenterY) ** 2);
    console.log("distanceFromOrigin:" + distanceFromOrigin);

    if (distanceFromOrigin > 220 / 2) {
        console.log("AAA");

        const radianAngle = Math.atan2(y - circleCenterY, x - circleCenterX); // Corrected for atan2 usage
        console.log("radianAngle:" + (radianAngle));
        degreeAngle = ((radianAngle * 180) / Math.PI)+90;
        console.log("degreeAngle:" + (degreeAngle));

        
        arrow.style.transform = `rotate(${degreeAngle-120}deg)`;

        inTriangle.style.transform = `rotate(${degreeAngle-120}deg)`;

        angleRangeCorrector(degreeAngle);
        boxColoring(); 

        hueTextInput.value =degreeAngle;
    }
});


//saturation
const sTextInput = document.getElementById("sdisplay");
sTextInput.value = sValueContent;
const sSliderInput = document.getElementById("sValue");

sSliderInput.addEventListener('click', (event)=>{
    sValueContent = sSliderInput.value;
    sTextInput.value = sSliderInput.value;
    boxColoring();
});

sTextInput.addEventListener('input', (event)=>{
    sValueContent =  sTextInput.value;
    sSliderInput.value = sTextInput.value;
    boxColoring();
});

// lightness
const lTextInput = document.getElementById("ldisplay");
lTextInput.value = lValueContent;
const lSliderInput = document.getElementById("lValue");

lSliderInput.addEventListener('click', (event)=>{
    lValueContent = lSliderInput.value;
    lTextInput.value = lSliderInput.value;
    boxColoring();
});

lTextInput.addEventListener('input', (event)=>{
    lValueContent =  lTextInput.value;
    lSliderInput.value = lTextInput.value;
    boxColoring();

});

hueTextInput.addEventListener('input', (event)=>{
    degreeAngle =  hueTextInput.value;
    boxColoring();
    arrow.style.transform = `rotate(${degreeAngle-120}deg)`;
    inTriangle.style.transform = `rotate(${degreeAngle-120}deg)`;
    angleRangeCorrector(degreeAngle);
    boxColoring(); 
});
