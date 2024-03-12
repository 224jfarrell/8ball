let A = document.getElementById('container');
let num;
function it(){
    setInterval(num, function(){
        console.log(num);
        A.style.fontStyle = "italic";
        setTimeout(100, function(){
            A.style.fontStyle = "none";
        });
    });
}
