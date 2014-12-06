$(document).ready(function() {
    $("#cont_prod").load('./productos/main.php');
	
	$("#arena").click(function(event) {
        $("#cont_prod").load('./productos/arido06.php');
	});
	
	$("#garbancillo").click(function(event) {
        $("#cont_prod").load('./productos/garbancillo2040.php');
	});
	
	$("#gravilla511").click(function(event) {
        $("#cont_prod").load('./productos/gravilla511.php');
	});
	
	$("#gravilla1122").click(function(event) {
        $("#cont_prod").load('./productos/gravilla1122.php');
	});
	
    $("#macadan").click(function(event) {
        $("#cont_prod").load('./productos/macadan.php');
	});
	
	$("#arido_sel").click(function(event) {
        $("#cont_prod").load('./productos/arido_sel.php');
	});
	
	$("#zahorra025").click(function(event) {
        $("#cont_prod").load('./productos/zahorra025.php');
	});
	
	$("#zahorra070").click(function(event) {
        $("#cont_prod").load('./productos/zahorra070.php');
	});
	
	$("#jardineria").click(function(event) {
        $("#cont_prod").load('./productos/jardineria.php');
	});
}); 

//menu desplegable