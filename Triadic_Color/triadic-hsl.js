const circle = document.getElementById("out-circle");

let degreeAngle = 0;
let sValueContent =0;

circle.addEventListener("mousemove", (event) => {
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

        const arrow = document.getElementById("arrow");
        arrow.style.transform = `rotate(${degreeAngle-120}deg)`;

        const inTriangle = document.getElementById("in-triangle");
        inTriangle.style.transform = `rotate(${degreeAngle-120}deg)`;

        if(degreeAngle<0){
            degreeAngle = Math.abs(degreeAngle)+0;
        }else{
            degreeAngle = (180-degreeAngle)+180;
        }
        degreeAngle=(parseInt)(360-degreeAngle);
        console.log("degreeAngle:" + (degreeAngle));

        
        const box1 = document.getElementById("box-1");
        box1.style.backgroundColor = `hsl(${Math.abs(degreeAngle + 0)},  ${sValueContent}%, 50%)`;
        console.log(`Box 1 Color: hsl(${Math.abs(degreeAngle + 0)},  ${sValueContent}%, 50%)`);
        
        const box2 = document.getElementById("box-2");
        box2.style.backgroundColor = `hsl(${Math.abs(degreeAngle + 120)},  ${sValueContent}%, 50%)`;
        console.log(`Box 2 Color: hsl(${Math.abs(degreeAngle + 120)},  ${sValueContent}%, 50%)`);
        
        const box3 = document.getElementById("box-3");
        box3.style.backgroundColor = `hsl(${Math.abs(degreeAngle + 240)}, ${sValueContent}%, 50%)`;
        console.log(`Box 3 Color: hsl(${Math.abs(degreeAngle + 240)}, ${sValueContent}%, 50%)`);
        
        
    }




});



const sInput = document.getElementById("sValue");
sInput.addEventListener('click', (event)=>{

        sValueContent = sValue.value;
        console.log("sValueContent"+sValueContent);

        const box1 = document.getElementById("box-1");
        box1.style.backgroundColor = `hsl(${Math.abs(degreeAngle + 0)},  ${sValueContent}%, 50%)`;
        console.log(`Box 1 Color: hsl(${Math.abs(degreeAngle + 0)},  ${sValueContent}%, 50%)`);
        
        const box2 = document.getElementById("box-2");
        box2.style.backgroundColor = `hsl(${Math.abs(degreeAngle + 120)},  ${sValueContent}%, 50%)`;
        console.log(`Box 2 Color: hsl(${Math.abs(degreeAngle + 120)},  ${sValueContent}%, 50%)`);
        
        const box3 = document.getElementById("box-3");
        box3.style.backgroundColor = `hsl(${Math.abs(degreeAngle + 240)}, ${sValueContent}%, 50%)`;
        console.log(`Box 3 Color: hsl(${Math.abs(degreeAngle + 240)}, ${sValueContent}%, 50%)`);
});
