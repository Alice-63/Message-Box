

$(document).ready(function(){
    $("#message").click(function(){
        $("#message").animate({
            left: "25vw",
            top:"20vh",
            width:"700px",
            height:"430px",
            fontSize:"36px",
            boxShadow:"-1px 1px 14px 0px #000000;"
        },2000,function(){
            $("#icon").fadeIn(500)
            $("#iconMinus").fadeIn(500)
        })
    })

    $("#icon").click(function(){
        $("#message").slideUp(1000)
    })
})

   
