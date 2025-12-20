
import { contentLoader ,exerciseListLoader} from "./nav_html_files/exercise-creator.mjs";

import { imageList as day2 } from "./nav_html_files/day2.mjs";
import { imageList as day1 } from "./nav_html_files/day1.mjs";


window.loadContent = function (content) {
    let mainDiv = document.getElementById("main-content");
    mainDiv.innerHTML ='';


    let nameList =['Hi'];
    if (content == "day1"){
        contentLoader(day1,nameList);
    }else if (content == "day2"){
        contentLoader(day2,nameList);
    }

    if (content == "exercise_list") {
        exerciseListLoader(day1,nameList);
    }

    
}


window.toggleMenu = function() {
    const menuList = document.getElementById('menu-container');
    if (menuList.style.display === 'block') {
        menuList.style.display = 'none';
        menuList.style.opacity = 0;
    } else {
        menuList.style.display = 'block';
        menuList.style.opacity =1;
    }
}



let present_slide = 0;

window.next_btn = function () {
    console.log("Next button clicked");

    present_slide += 1;

    const total_slides = document.querySelectorAll(".exercise");
    console.log("Current slide:", present_slide);
    console.log("Total slides:", total_slides.length);

    if (present_slide > total_slides.length -1) {
        present_slide = 0;
    }

    const exercise_divs = document.getElementsByClassName("exercise");
    for (let i = 0; i < exercise_divs.length; i++) {
        exercise_divs[i].style.transform = `translateX(-${present_slide * 100}%)`;
    }
};

window.prev_btn = function () {
    console.log("Previous button clicked");

    present_slide -= 1;

    const total_slides = document.querySelectorAll(".exercise");
    console.log("Current slide:", present_slide);
    console.log("Total slides:", total_slides.length);

    if (present_slide < 0) {
        present_slide = total_slides.length - 1;
    }

    const exercise_divs = document.getElementsByClassName("exercise");
    for (let i = 0; i < exercise_divs.length; i++) {
        exercise_divs[i].style.transform = `translateX(-${present_slide * 100}%)`;
    }
};
