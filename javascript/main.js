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
    random: true,
    pager: false,
    nav: true,
    speed: 500,
    timeout: 8000,
    pause: true,
    namespace: "centered-btns"
  });
});
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v2.4";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));