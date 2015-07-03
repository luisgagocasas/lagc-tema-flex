$(document).ready(function(){ //cuando el DOM listo
	$("#navicon").toggle(
        function(e){ //Primer click
            //$(".menuprincipal").show();
            $(".menuprincipal").addClass("efectomenu1");
            //$(".menuprincipal").removeClass("efectomenu2");
        },
        function(e){ //Segundo click
            $(".menuprincipal").removeClass("efectomenu1");
            /*$(".menuprincipal").addClass("efectomenu2");
            setTimeout(function(){
                $(".menuprincipal").hide();
            }, 400);*/
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