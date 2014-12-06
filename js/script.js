$(document).ready(function() {
    $("#maincont").load('./inicio.php');
	
    $("#inicio").click(function(event) {
        $("#maincont").load('./index.php');
	});
    $("#productos").click(function(event) {
        $("#maincont").load('./productos.php');
    });
	$("#contacto").click(function(event) {
        $("#maincont").load('./contacto.php');
    });	

	$('nav ul a').on('click', function(){
        $('nav ul a li.hovered').removeClass('hovered');
        $(this).children('li').addClass('hovered');
    });

});