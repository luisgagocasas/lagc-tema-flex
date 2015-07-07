$(document).ready(function(){ //cuando el DOM listo
	$("#navicon").toggle(
        function(e){ //Primer click
            $(".menuprincipal").addClass("efecto1");
        },
        function(e){ //Segundo click
            $(".menuprincipal").removeClass("efecto1");
        }
    );
    $("#acceder").toggle(
        function(e){ //Primer click
            $("#login").addClass("efecto2");
        },
        function(e){ //Segundo click
            $("#login").addClass("efecto3");
            setTimeout(function(){
                $("#login").removeClass("efecto2");
                $("#login").removeClass("efecto3");
            }, 500);
        }
    );
    $("#slider1").responsiveSlides({
        auto: true,
        pager: false,
        nav: true,
        speed: 100,
        namespace: "centered-btns"
    });
});