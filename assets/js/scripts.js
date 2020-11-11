$('document').ready(function(){
	$('.click-pro').click(function(){
		$('.user-prifile').slideToggle(500);
	})

	// mixitup
	var mixer = mixitup('.filtering',{
		   animation: {
        effects: 'fade translateZ(-100px)'
    }
	});

	$('.nav-icon').click(function(){
		$(this).toggleClass('click');
		$('.side-bar').slideToggle("show");
	});
})
function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}