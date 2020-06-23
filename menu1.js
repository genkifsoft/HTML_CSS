	
$(document).ready(function() {
    if( 'ontouchstart' in window ){ var click = 'touchstart'; }
	else { var click = 'click'; }

	$('.menu').on(click, function(){
        if( !$(this).hasClass('open') ){ 
            openMenu();
         } 
        else {
            closeMenu(); }
	});
	
	$('div.menu ul li a').on(click, function(e){
		e.preventDefault();
		closeMenu();
	});

	function openMenu(){
        $('div.circle').addClass('expand');
            
		$('div.menu').addClass('open');	
        $('.menu li').addClass('animate');
        
        $("div.menu").animate({
            width: "100%"
            }, {
                duration: 200,
                specialEasing: {
                    width: 'linear'
                }
            });

		// setTimeout(function(){ 
		// 	$('div.y').hide(); 
		// 	$('div.x').addClass('rotate30'); 
		// 	$('div.z').addClass('rotate150'); 
		// }, 70);
		// setTimeout(function(){
		// 	$('div.x').addClass('rotate45'); 
		// 	$('div.z').addClass('rotate135');  
		// }, 120);
	}
	
	function closeMenu(){
		$('div.menu').removeClass('open');	
		$('div.circle').removeClass('expand');
		$('.menu li').removeClass('animate');
		
		// setTimeout(function(){ 			
		// 	$('div.x').removeClass('rotate30'); 
		// 	$('div.z').removeClass('rotate150'); 			
		// }, 50);
		// setTimeout(function(){
		// 	$('div.y').show(); 
		// 	$('div.x, div.y, div.z').removeClass('collapse');
		// }, 70);													
	}
})