const circle = document.getElementById("out-circle");

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
        let degreeAngle = ((radianAngle * 180) / Math.PI)+90;
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
        degreeAngle=360-degreeAngle;
        degreeAngle *=4.25;
        degreeAngle=(parseInt)(degreeAngle);
        console.log("degreeAngle:f" + (degreeAngle));
        const constDeg= degreeAngle;

        let rgb =``;
        const addOnValueList = [0, 510, 1020];
        const rgbList = [];
        
        for (var i = 0; i < 3; i++) {
            console.log("enet" + (degreeAngle));
            degreeAngle=constDeg+addOnValueList[i];
            console.log("enet" + (degreeAngle));
            if(degreeAngle>1530){degreeAngle-=1530;}

            if(degreeAngle>0){rgb=`rgb(255,${degreeAngle-0},0)`;}
            if(degreeAngle>255){rgb=`rgb(${510-degreeAngle},255, 0)`;}
            if(degreeAngle>510){rgb=`rgb(0,255,${degreeAngle-510})`;}
            if(degreeAngle>765){rgb=`rgb(0,${1020-degreeAngle},255)`;}
            if(degreeAngle>1020){rgb=`rgb(${degreeAngle-1020},0,255)`;}
            if(degreeAngle>1275){rgb=`rgb(255,0,${1530-degreeAngle})`;}

            console.log("enet" + (degreeAngle));

            rgbList.push(rgb);
            console.log("i:f" + (i));
            console.log("rgb:f" + (rgb));

        }

    

        const box1 = document.getElementById("box-1");
        box1.style.backgroundColor = rgbList[0];
        const box2 = document.getElementById("box-2");
        box2.style.backgroundColor = rgbList[1];
        const box3 = document.getElementById("box-3");
        box3.style.backgroundColor = rgbList[2];
    }




});
