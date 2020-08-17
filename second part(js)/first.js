function add_listener(obj)
{
    var op = document.getElementById(obj);
    op.textContent = "X"
    op.addEventListener("click", function (){
        switch (op.textContent){
            case " ":
                op.textContent = "X";
                break;
            case "X":
                op.textContent = "O";
                break;
            case "O":
                op.textContent = " ";
                break;
        }
    })
}


var liste =["one","two","three","four", "five", "six", "seven","eight", "nine"]

for (const listeKey of liste) {
    add_listener(listeKey);
}

var g = document.getElementById("but_res")
g.addEventListener("click",function (){
    for(k of liste)
    {
        var x = document.getElementById(k);
        x.textContent = "X";
    }
})


function colorstuff(){
    var col ="#";
    var posi="0123456789ABCDEF"
    for(var t=0;t<6;t++)
    {
        col+=posi[Math.floor(Math.random()*16)]
    }
    $(this).css("color",col)
    console.log("hello")



}



$("h1").on("click",function (){
    $(".conatiner").fadeOut(1000);
})