$(document).ready(function(){ //cuando el DOM listo
	$(".icon-search").click(function() { //Activo form de busqueda
		$(".buscador").css("display", "inline-table");
		$("input[name=buscar]").focus();
	});
	$("#cerrar").click(function() { //cierro la busqueda
		$(".buscador").css("display", "none");
	});
	/*$.urlParam = function(name){ //leer GET
	    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
	    if (results==null){ return null; }
	    else{ return results[1] || 0; }
	}*/
	$(".mostrarresumen").on('click',function(e){
	    e.preventDefault();
	    var mostrar = $(this).attr('href');
	    $('#resumen'+mostrar).css("display", "flex");
	    $('#lista'+mostrar).css("display", "none");
	});
	$(".cerrarresumen").on('click',function(e){
	    e.preventDefault();
	    var ocultar=$(this).attr('href');
	    $('#resumen'+ocultar).css("display", "none");
	    $('#lista'+ocultar).css("display", "block");
	    $('#caballo'+ocultar).removeClass("resaltarcaballo");
	});
	$('#expand').toggle(
        //Primer click
        function(e){
            $('.resumen').css("display", "flex");
            $('.lista').css("display", "none");
		    $(".icon-expand").removeClass("icon-expand").addClass("icon-compress");
		    e.preventDefault();
        },
        //Segundo click
        function(e){
            $('.resumen').css("display", "none");
            $('.lista').css("display", "flex");
		    $(".icon-compress").removeClass("icon-compress").addClass("icon-expand");
            e.preventDefault();
        }
    );
});