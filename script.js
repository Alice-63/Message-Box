

$(document).ready(function(){
    $("#message").click(function(){
        $("#message").animate({
            left: "25vw",
            top:"20vh",
            width:"700px",
            height:"430px",
            fontSize:"36px",
           
        },2000,function(){
            $("#icon").fadeIn(500)
            $("#iconMinus").fadeIn(500)
        })
    })

    $("#icon").click(function(){
        $("#message").slideUp(1000)
    })
    
    
})
$("#iconMinus").click(function(){
    $("#message").animate({
        left: "68vw",
        top:"73vh",
        width:"400px",
        height:"130px",
        fontSize:"20px",
        padding:"25px"
       
    },1000,function(){
        $("#message").stop(true,true)
        $("#iconMinus").hide()
        $("#icon").hide()

    })
})

   
