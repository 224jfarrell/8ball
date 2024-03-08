let A = document.getElementById('container');
setInterval(Math.random()*6666, function(){
    A.style.fontStyle = "italic";
    setTimeout(100, function(){
        A.style.fontStyle = "none";
    });
});

