
import { contentLoader } from "nav_html_files/exercise-creator.js";

let imageList = ["images/jump-rope.gif",
    "images/jumping-jacks.gif",
    "images/arm-circles.gif",
    "images/shoulder-rotations.gif",
    "images/pull-ups.gif",
    "images/single-arm-inverted-rows.webp",
    "images/bar-dips.gif",
    "images/pushup.gif",
    "images/front-lever-progression.gif",
    "images/v-ups.gif"];

let nameList = ["Jump Rope",
    "Jumping Jacks"];

contentLoader(imageList,nameList);

var total_slides=document.getElementsByClassName("exercise").length;
console.log(total_slides);
var present_slide = 0;
function next_btn() {
    console.log("Next button clicked");
    present_slide+=1;
    if (present_slide > total_slides-1){
        present_slide =0;
    }
    
    let exercise_div = document.getElementsByClassName("exercise");
    for (let i = 0; i < exercise_div.length; i++) {
        exercise_div[i].style.transform = `translateX(-${present_slide * 100}%)`;
    }
    
}

function prev_btn() {
    console.log("Next button clicked");
    present_slide-=1;
    if (present_slide < 0){
        present_slide =total_slides-1;
    }
    
    let exercise_div = document.getElementsByClassName("exercise");
    for (let i = 0; i < exercise_div.length; i++) {
        exercise_div[i].style.transform = `translateX(-${present_slide * 100}%)`;
    }
    
}