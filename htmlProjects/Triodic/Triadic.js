
let degreeAngle = 0;
let svalueContent = 100;
let lvalueContent = 50;

// funtion to correct the angle between the 0 and 360 degree.
function anglerRangecorrector(){
    if(degreeAngle < 0){
        degreeAngle = Math.abs(degreeAngle)+ 0;
    }else{
        degreeAngle = (180 - degreeAngle) + 180;
    }
    degreeAngle = parseInt(360 - degreeAngle);
}

//function to add colors to the boxes
function boxColoring(){
    const box1 = document.getElementById("box-1");
    box1.style.backgroundColor = `hsl(${Math.abs(degreeAngle)},${svalueContent}%,${lvalueContent}%)`;

    const box2 = document.getElementById("box-2");
    box2.style.backgroundColor = `hsl(${Math.abs(degreeAngle+120)},${svalueContent}%,${lvalueContent}%)`;

    const box3 = document.getElementById("box-3");
    box3.style.backgroundColor = `hsl(${Math.abs(degreeAngle+240)},${svalueContent}%,${lvalueContent}%)`;

    const colorOut1 = document.getElementById("color-values-1");
    colorOut1.textContent = `hsl(${Math.abs(degreeAngle)},${svalueContent}%,${lvalueContent}%)`;

    let temp = 0;
    temp = degreeAngle + 120;
    if(temp > 360){
        temp = temp - 360;
    }

    const colorOut2 = document.getElementById("color-values-2");
    colorOut2.textContent =`hsl(${temp},${svalueContent}%,${lvalueContent}%)`;

    temp = 0;
    temp = degreeAngle + 240;
    if(temp > 360){
        temp = temp - 360;
    }

    const colorOut3 = document.getElementById("color-values-3");
    colorOut3.textContent =`hsl(${temp},${svalueContent}%,${lvalueContent}%)`;
}


//Hue
const circle = document.getElementById("out-circle");
const arrow = document.getElementById("arrow");
const inTriangle = document.getElementById("in-triangle");
const hueTextInput = document.getElementById("hueValue");

circle.addEventListener("click", (event) =>{
    const x = event.clientX;
    const y = event.clientY;

    const rect = circle.getBoundingClientRect();
    const circleCenterX = rect.left +rect.width/2;
    const circleCenterY = rect.top +rect.height/2;

    const distanceFromOrigin = Math.sqrt((x - circleCenterX) ** 2 + (y- circleCenterY) ** 2);

    if(distanceFromOrigin > 220/2){
        const radianAngle = Math.atan2(y - circleCenterY, x - circleCenterX);
        degreeAngle = ((radianAngle *180)/Math.PI) + 90;

        arrow.style.transform = `rotate(${degreeAngle -120}deg)`;
        inTriangle.style.transform = `rotate(${degreeAngle -120}deg)`;

        anglerRangecorrector();
        hueTextInput.value = degreeAngle;
        boxColoring();
    }

})

hueTextInput.addEventListener("input", (event)=>{
    if(hueTextInput.value > 360){
        hueTextInput.value = 0;
    }else if (hueTextInput.value < 0){
        hueTextInput.value =0;
    }

    degreeAngle = hueTextInput.value;

    arrow.style.transform = `rotate(${degreeAngle -120}deg)`;
    inTriangle.style.transform = `rotate(${degreeAngle -120}deg)`;

    anglerRangecorrector();
    boxColoring();





});

//Saturation

const sTextInput = document.getElementById("sdisplay");
sTextInput.value = svalueContent;
const sSliderInput = document.getElementById("sValue");

sSliderInput.addEventListener("click", (event) =>{
    svalueContent = sSliderInput.value;
    sTextInput.value = sSliderInput.value;
    boxColoring();
});

sTextInput.addEventListener("input", (event)=>{
    if(sTextInput.value > 100){
        sTextInput.value = 100;
    }else if (sTextInput.value < 0){
        sTextInput.value =0;
    }

    svalueContent = sTextInput.value;
    sSliderInput.value = sTextInput.value;
    boxColoring();
});

//Lightness

const lTextInput = document.getElementById("ldisplay");
lTextInput.value = lvalueContent;
const lSliderInput = document.getElementById("lValue");

lSliderInput.addEventListener("click", (event) =>{
    lvalueContent = lSliderInput.value;
    lTextInput.value = lSliderInput.value;
    boxColoring();
});

lTextInput.addEventListener("input", (event)=>{
    if(lTextInput.value > 100){
        lTextInput.value = 100;
    }else if (lTextInput.value < 0){
        lTextInput.value =0;
    }

    lvalueContent = lTextInput.value;
    lSliderInput.value = lTextInput.value;
    boxColoring();
});


