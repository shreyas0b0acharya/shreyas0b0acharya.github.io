async function play() {
    const main_div = document.getElementById("main_id");
    const child_divs = main_div.children;

    const my_list = [[0, 2], [1, 2], [0, 1]]; 

    for (let i = 0; i < my_list.length; i++) {
        let box1 = child_divs[my_list[i][0]];
        let box2 = child_divs[my_list[i][1]];

        let box1_rect = box1.getBoundingClientRect();
        let box2_rect = box2.getBoundingClientRect();

        let move_dist1 = box2_rect.left - box1_rect.left;
        let move_dist2 = box1_rect.left - box2_rect.left;

        console.log(`Moving box ${my_list[i][0]} by ${move_dist1}px`, box1_rect);
        console.log(`Moving box ${my_list[i][1]} by ${move_dist2}px`, box2_rect);

        const keyframes1 = [
            { transform: 'translateX(0px)' },
            { transform: `translateX(${move_dist1}px)` }
        ];

        const keyframes2 = [
            { transform: 'translateX(0px)' },
            { transform: `translateX(${move_dist2}px)` }
        ];

        const options = {
            duration: 1000, 
            iterations: 1,
            easing: 'ease-in-out',
            fill: 'forwards' 
        };

        const animation1 = box1.animate(keyframes1, options);
        const animation2 = box2.animate(keyframes2, options);

        await Promise.all([animation1.finished, animation2.finished]);

        main_div.insertBefore(box2, box1);
    }
}

document.getElementById('play_btn').addEventListener('click', play);
