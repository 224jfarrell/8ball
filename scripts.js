let A = document.getElementsByClassName('letter');
let B = document.getElementById('filler');
let C = document.getElementById('fullpage');
let D = getComputedStyle(C);
let E = (window.outerHeight - (parseFloat(D.height) + "px"))
console.log(parseFloat(D.height))
console.log(E)


function it(){
    random();
}

function random(){
    let num = Math.random() * 6666;
    italicInt = setInterval(num, function(){
        console.log(num);
        A.style.fontStyle = "italic";
        setTimeout(1000, function(){
            A.style.fontStyle = "none";
        });
    });
    console.log(italicInt);
}
