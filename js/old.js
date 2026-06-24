const TEST = "The quick fox jumped over the lazy dog";

window.onload = function(){

    let out = document.querySelector("#out");

    let next = document.querySelector("#next");
    
    let follow = document.querySelector("#follow");

    let result = document.querySelector("#result");

    follow.innerHTML = TEST;
    result.innerHTML = "";
    next.innerHTML = follow.innerHTML[result.innerHTML.length];


    window.addEventListener("keydown", (event)=>{

        if(follow.innerHTML.length == result.innerHTML.length){
            return console.log('end');
        }

        out.innerHTML = event.key;
        //result.innerHTML += event.key;

        console.log(follow.innerHTML[result.innerHTML.length], event.key);

        if(follow.innerHTML[result.innerHTML.length] == event.key){
            result.innerHTML += event.key;
            next.innerHTML = follow.innerHTML[result.innerHTML.length];
        }

    });
}