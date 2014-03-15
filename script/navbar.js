$(document).ready(function () {
	$(".mobile").hide();
});

$(".navbar-mobile-header").click(function() {
	$(".mobile").slideToggle("slow");
});