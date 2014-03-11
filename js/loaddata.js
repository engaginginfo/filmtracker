 //THIS IS WHERE WE SET THE SPREADSHEET URLS
var films_url = 'https://docs.google.com/spreadsheet/pub?key=0ArGouZB4sgIudG9vYkx2cUVLSHZhaXlaR2EtUWthZ0E&output=html';




//THIS IS THE CALL FOR THE FILM SHEET DATA
$(document).ready( function() {
    Tabletop.init( { key: '0ArGouZB4sgIudG9vYkx2cUVLSHZhaXlaR2EtUWthZ0E', //films_url,
                     proxy: 'https://nuk-tnl-editorial-prod-tabletop.s3.amazonaws.com',
                     callback: showInfo,
                     //parseNumbers: true, 
                     } );
  });
  

      
      
        
//Let's load em up!


var films = [
		
		"1 - 12 Years a Slave",
		
		"2 - The Act of Killing",
		
		"3 - All Is Lost",
		
		"4 - American Hustle",
		
		"5 - August: Osage County",
		
		"6 - Before Midnight",
		
		"7 - Behind the Candelabra",
		
		"8 - Blue is the Warmest Colour",
		
		"9 - Blue Jasmine",
		
		"10 - The Book Thief",
		
		"11 - The Butler",
		
		"12 - Captain Philips",
		
		"13 - The Croods",
		
		"14 - Dallas Buyers Club",
		
		"15 - Despicable Me 2",
		
		"16 - Frozen",
		
		"17 - Gravity",
		
		"18 - The Grandmaster",
		
		"19 - The Great Beauty",
		
		"20 - The Great Gatsby",
		
		"21 - Her",
		
		"22 - The Hobbit: The Desolation of Smaug",
		
		"23 - The Hunger Games: Catching Fire",
		
		"24 - The Hunt",
		
		"25 - Inside Llewyn Davis",
		
		"26 - The Invisible Woman",
		
		"27 - Iron Man 3",
		
		"28 - Labor Day",
		
		"29 - The Lone Ranger",
		
		"30 - Mandela: Long Walk to Freedom",
				
		"31 - Nebraska",
		
		"32 - Philomena",
		
		"33 - Rush",
		
		"34 - Saving Mr Banks",
		
		"35 - Star Trek Into Darkness",
		
		"36 - The Wind Rises",
		
		"37 - The Wolf of Wall Street"
		
		];

		
	



function showInfo(data, tabletop) {
var source   = $("#filmlisting").html();
var template = Handlebars.compile(source);

function loadFilm(filmTitle, number) {

	      $.each( tabletop.sheets(filmTitle).all(), function(i, film) {
          var html = template(film);
          $("#film"+number).append(html);
       
        });	
	
}

loadFilm(films[0], 1);
loadFilm(films[1], 2);
loadFilm(films[2], 3);
loadFilm(films[3], 4);
loadFilm(films[4], 5);
loadFilm(films[5], 6);
loadFilm(films[6], 7);
loadFilm(films[7], 8);
loadFilm(films[8], 9);
loadFilm(films[9], 10);
loadFilm(films[10], 11);
loadFilm(films[11], 12);
loadFilm(films[12], 13);
loadFilm(films[13], 14);
loadFilm(films[14], 15);
loadFilm(films[15], 16);
loadFilm(films[16], 17);
loadFilm(films[17], 18);
loadFilm(films[18], 19);
loadFilm(films[19], 20);
loadFilm(films[20], 21);
loadFilm(films[21], 22);
loadFilm(films[22], 23);
loadFilm(films[23], 24);
loadFilm(films[24], 25);
loadFilm(films[25], 26);
loadFilm(films[26], 27);
loadFilm(films[27], 28);
loadFilm(films[28], 29);
loadFilm(films[29], 30);
loadFilm(films[30], 31);
loadFilm(films[31], 32);
loadFilm(films[32], 33);
loadFilm(films[33], 34);
loadFilm(films[34], 35);
loadFilm(films[35], 36);
loadFilm(films[36], 37);
        
}



      
      
     