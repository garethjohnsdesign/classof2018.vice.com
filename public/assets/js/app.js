$(document).foundation();

$('body').removeClass('fade-out');

// 2. Animate on Scroll
// --------------------

$(function() {
  AOS.init({ 
   easing: 'ease-in-out-quart', 
   duration: 600,
   });   
});

$(function() {
window.addEventListener('load', AOS.refresh);
});


$("a.link").hover(function() {
	$this = $(this);
  $("body").css("background-image", "url(" + $(this).data("bg") + ")");
/*
	$("body").css('background-color', function() {
		return $this.data('bgcolor');
	});
*/
	}, function() {
//   $('body').css('background-color', '');
	$("body").css("background-image", '');
  });
	


/*
$("h1").on('mousein', function(){
   $('body').css('background-image', 'url("other.jpg")');
});
$("h1").on('mouseout', function(){, function(){
  $('body').css('background-image', 'url("woman.jpg")');
});
*/