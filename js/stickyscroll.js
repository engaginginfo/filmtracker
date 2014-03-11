$(function() {
 
    // grab the initial top offset of the navigation 
    var sticky_navigation_offset_top = $('.nav').offset().top;
     
    // our function that decides weather the navigation bar should have "fixed" css position or not.
    var sticky_navigation = function(){
        var scroll_top = $(window).scrollTop(); // our current vertical position from the top
         
        // if we've scrolled more than the navigation, change its position to fixed to stick to top,
        // otherwise change it back to relative
        if (scroll_top > sticky_navigation_offset_top) { 
            $('.nav').css({
				'display' : 'none',
				});
			
			$('ul.header_socmedia').css({
				'margin-left' : '110px',
				});

				
			$('.stickynav').css({
				'display' : 'block',
				});
				
					
			$('.email_text').css({
				'display' : 'none',
					});
		} 
		
		
		
        
        else {
            $('.nav').css({ 
            	'display': 'block',
            	}); 
            	
            $('ul.header_socmedia').css({
				'margin-left' : '0px',
				});
            	
            $('.stickynav').css({
				'display' : 'none',
				});
				
			$('.email_text').css({
				'display' : 'inline-block',
					});
            	
        }   
    };

     
    // run our function on load
    sticky_navigation();
     
    // and run it again every time you scroll
    $(window).scroll(function() {
         sticky_navigation();
    });
 
});