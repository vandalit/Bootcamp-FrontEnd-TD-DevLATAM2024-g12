$(document).ready(function(){
    // al hacer doble click a etiqueta p, desaparecerá
    $("p").dblclick(function(){
        $(this).hide("slow");
    });
    $("#MiParrafo").click(function(){
        $(this).css({
            "color":"coral",
            "font-size":"2em"
        });
    });
});