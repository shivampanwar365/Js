const spinner = document.querySelector('div');
let rotateCount = 0;
let stateTime = null;
let rAF;

function draw(timestamp){
   // alert('hi');
    if(!stateTime){
        startTime = timestamp;
    }
    rotateCount = (timestamp - startTime) / 3;

    if(rotateCount > 359){
        rotateCount %= 360;
    }

    

    spinner.style.transform =  `rotate(${rotateCount}deg)`;
    rAF = requestAnimationFrame(draw);
    
}

draw();




