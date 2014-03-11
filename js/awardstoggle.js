

  $( document ).ready(function() {

  
  				$( "ul.toggles li.shownominations" ).click(function( event ) {
 
				event.preventDefault(); 				
				$("ul.rightcol li.no").toggle();
 
				});
				
				$( "ul.toggles li.showawards" ).click(function( event ) {
 
				event.preventDefault(); 
				$( "ul.rightcol li div.yes" ).toggleClass( "win" );
 
				});
				
	
				



				});    
  
  
  
  
