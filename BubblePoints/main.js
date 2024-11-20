
// create Token/Hit functionality
let token;

function hitToken(){
    token = Math.floor(Math.random()*10)
    return document.querySelector(".token").textContent = token
}
hitToken() 
// ---------------------XXXXXX-------------------
// for scoring function

let score = 0;
let clickeNum;

function scoring(){
    score += 10;
    document.querySelector(".score-val").textContent = score   
}

// ---------enabel click event and paly mode-----------------

document.querySelector(".canvas").addEventListener("click", function(details){

    clickeNum = Number(details.target.textContent)

    if(token === clickeNum & timer>0){
        scoring()
        makeBubble()
        hitToken()
    }   
})



// --------------------------XXXXX------------------

let timer = 30;
function runtime(){
    
   let timeInterval = setInterval(function (){
    if(timer>0){
        timer--;
        document.querySelector(".timer-val").textContent  = timer  
    } else{
        clearInterval(timeInterval)
    }       
},1000)    
}
runtime()


// ---------------Making bubble---------------
function makeBubble (){
    let bubble = "";
    for(i=1; i<244; i++){
        let digit = Math.floor(Math.random()*10)
        bubble += `<div class="bubble">${digit}</div>`;
    }
document.querySelector(".canvas").innerHTML= bubble;
}
makeBubble()
// ------------------xxxxx-----------------

// --------------------------xxxxx---------------------




