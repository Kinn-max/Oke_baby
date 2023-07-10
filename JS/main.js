
$(document).ready(function(){
$(window).on("load", function(){
$("body").children().not(".loaDDing").css("display","none");
setTimeout(loadDing,1000)
});
function loadDing(){
    $(".loaDDing").fadeOut(600, function(){
    $(".loaDDing").remove();
    $("body").children().not(".loaDDing").css("display","");
    });
}
});




