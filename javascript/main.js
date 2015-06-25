$(document).ready(function(){ //cuando el DOM listo
	$("#entrar").click(function(){
		$("#login").show();
	});
	$("#entrar").toggle(
        function(e){ //Primer click
            $("#login").show();
        },
        function(e){ //Segundo click
            $("#login").hide();
        }
    );
});