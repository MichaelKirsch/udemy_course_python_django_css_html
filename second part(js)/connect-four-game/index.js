var cells = $("td")
//clear everything in the beginning
function clear(){
    cells.css("background","white")
    cells.val("none")
}
clear();

cells.on("mousedown",function (event){
    switch (event.which){
        case 1:
            if($(this).val()!=="red" && $(this).val()!=="blue")
            {
                $(this).css("background","blue")
                $(this).val("blue")
            }
            break;
        case 3:
            if($(this).val()!=="red" && $(this).val()!=="blue")
            {
                $(this).css("background","red")
                $(this).val("red")
            }
            break;
    }
})


cells.on("mouseover",function (){
    if($(this).val()!=="blue"&&$(this).val()!=="red") {
        $(this).css("background", "grey")
        var ind = cells.index($(this))%7
        cells.each(function (){
            if(cells.index($(this))%7===ind)
            {
                $(this).css("background", "green")
            }
        })
    }

})

cells.on("mouseleave",function (){
    if($(this).val()==="none")
    {
        $(this).css("background","white")
        var ind = cells.index($(this))%7
        cells.each(function (){
            if(cells.index($(this))%7===ind)
            {
                $(this).css("background", "white")
            }
        })
    }
})

$("#startbutton").on("click",function (){
        cells.css("background","white")
        cells.val("none")
})

function main() {
    const canvas = document.querySelector("#glCanvas");
    // Initialisierung des GL Kontexts
    const gl = canvas.getContext("webgl");

    // Nur fortfahren, wenn WebGL verfügbar ist und funktioniert
    if (!gl) {
        alert("Unable to initialize WebGL. Your browser or machine may not support it.");
        return;
    }

    // Setze clear color auf schwarz, vollständig sichtbar
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    // Lösche den color buffer mit definierter clear color
    gl.clear(gl.COLOR_BUFFER_BIT);
}


main();
