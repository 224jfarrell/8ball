let A = document.getElementsByClassName('letter');
let B = document.getElementById('filler');
let C = document.getElementById('fullpage');
let D = getComputedStyle(C);
let E = (window.outerHeight - parseFloat(D.height) + "px");
B.style.height = E;
console.log(A);
const letterIds = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'k', 'l'];


function it(){
    random();
}

function random(){
    for(i = 0; i < letterIds.length; i++){
        let num = Math.random() * 6666;
        italicInt = setInterval(num, function(){
            console.log(num);
            document.getElementById(letterIds[i + 1]).style.fontStyle = "italic";
            setTimeout(1000, function(){
                document.getElementById(letterIds[i + 1]).style.fontStyle = "none";
            });
        });
        console.log(italicInt);
        console.log(num);
    }
}

function ask(){
    let answers = [
        "Yes",
        "Yes, absolutely",
        "Yes, definitely",
        "Absolutely",
        "Definitely",
        "Affirmative",
        "Positive",
        "Indeed",
        "Yuh huh",
        "Yep",
        "Yeah",
        "Yea",
        "Likely",
        "Certainly",
        "Probably",

        "No",
        "No, absolutely not",
        "No, definitely not",
        "Absolutely not",
        "Definitely not",
        "Negative",
        "No, thank you",
        "Unfavorable answer",
        "Nuh uh",
        "Nope",
        "Nah",
        "Ah ah ah! /neg",
        "Unlikely",
        "Certainly not",
        "Improbable",

        "I don't know",
        "Ask again later",
        "Sorry",
        "Uncertain",
        "Reshake this ball",
        "Outlook not so good",
        "Cannot predict now",
        "Possibly",
        "Maybe",
        "Unknown answer",
        "IDK",
        "Neutral",
        "Simultaneously yes and no",
        "It's hard to say",
        "Inconclusive results",

        "what kinda question is this vro",
        "Syntax Error: missing ] after element list",
        "💀",
        "try again later im busy",
        "dont know. dont care",
        "what are you doing man",
        "frowny face",
        "wdym nuh uh?",
        "i hate you and i hate your question. you are hereby banned from using this 8 ball again.",
        "AINTNOWAY",
        "whar?",
        "go ask a real person",
        "go touch grass",
        "point and laugh at this user",
        "thats vile",
        "thats crazy. dont care tho"
    ]
    let ind = Math.floor(Math.random() * answers.length);
    document.getElementById('result').innerText = answers[ind];
    document.getElementById('result').style.fontSize = "10px";
    document.getElementById("ball").classList.remove('shake');
}

function submit(event){
    if(event.which === 13){
        if(!event.repeat){
            test();
        }
        event.preventDefault();
    }
}
document.getElementById("textarea").addEventListener("keydown", submit);

function click(){
    test();
}

function test(){
    document.getElementById("ball").classList.add('shake');
    setTimeout(ask, 750);
    document.getElementById("textarea").value = "";
}
document.getElementById("clickbutton").addEventListener("click", click);