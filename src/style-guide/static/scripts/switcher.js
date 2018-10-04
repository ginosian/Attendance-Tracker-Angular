/*-----------------------------------------------------------------------------------
/* Styles Switcher
-----------------------------------------------------------------------------------*/

window.console = window.console || (function(){
	var c = {}; c.log = c.warn = c.debug = c.info = c.error = c.time = c.dir = c.profile = c.clear = c.exception = c.trace = c.assert = function(){};
	return c;
})();


jQuery(document).ready(function($) {
	
		// Color Changer
		$("#button-switcher .green" ).click(function(){
			$("#colors" ).attr("href", "css/colors/green.css" );
			return false;
		});
		
		$("#button-switcher .blue" ).click(function(){
			$("#colors" ).attr("href", "css/colors/blue.css" );
			return false;
		});
		
		$("#button-switcher .orange" ).click(function(){
			$("#colors" ).attr("href", "css/colors/orange.css" );
			return false;
		});
		
		$("#button-switcher .navy" ).click(function(){
			$("#colors" ).attr("href", "css/colors/navy.css" );
			return false;
		});
		
		$("#button-switcher .yellow" ).click(function(){
			$("#colors" ).attr("href", "css/colors/yellow.css" );
			return false;
		});
		
		$("#button-switcher .peach" ).click(function(){
			$("#colors" ).attr("href", "css/colors/peach.css" );
			return false;
		});
		
		$("#button-switcher .beige" ).click(function(){
			$("#colors" ).attr("href", "css/colors/beige.css" );
			return false;
		});

		$("#button-switcher .purple" ).click(function(){
			$("#colors" ).attr("href", "css/colors/purple.css" );
			return false;
		});

		$("#button-switcher .red" ).click(function(){
			$("#colors" ).attr("href", "css/colors/red.css" );
			return false;
		});

		$("#button-switcher .pink" ).click(function(){
			$("#colors" ).attr("href", "css/colors/pink.css" );
			return false;
		});
		
		$("#button-switcher .celadon" ).click(function(){
			$("#colors" ).attr("href", "css/colors/celadon.css" );
			return false;
		});
		
		$("#button-switcher .brown" ).click(function(){
			$("#colors" ).attr("href", "css/colors/brown.css" );
			return false;
		});
		
		$("#button-switcher .cherry" ).click(function(){
			$("#colors" ).attr("href", "css/colors/cherry.css" );
			return false;
		});
		
		$("#button-switcher .gray" ).click(function(){
			$("#colors" ).attr("href", "css/colors/gray.css" );
			return false;
		});
		
		$("#button-switcher .darkcol" ).click(function(){
			$("#colors" ).attr("href", "css/colors/dark.css" );
			return false;
		});
		
		$("#button-switcher .cyan" ).click(function(){
			$("#colors" ).attr("href", "css/colors/cyan.css" );
			return false;
		});
		
		$("#button-switcher .olive" ).click(function(){
			$("#colors" ).attr("href", "css/colors/olive.css" );
			return false;
		});


		$("#button-switcher h2 a").click(function(e){
			e.preventDefault();
			var div = $("#button-switcher");
			console.log(div.css("left"));
			if (div.css("left") === "-205px") {
				$("#button-switcher").animate({
					left: "0px"
				}); 
			} else {
				$("#button-switcher").animate({
					left: "-205px"
				});
			}
		});


		//Layout Switcher
	   $("#layout-button").change(function(e){
			if( $(this).val() == 1){
				$("body").addClass("boxed");
				$("body").removeClass("fullwidth");
				//$(window).resize();
			} else{
				$("body").removeClass("boxed");
				$("body").addClass("fullwidth");
				//$(window).resize();
			}
		});
	   

		//Layout Switcher
	   $("#header-button").change(function(e){
			if( $(this).val() == 1){
				$("header").removeClass("alternative full-width");
			} 
			if( $(this).val() == 2){
				$("header").removeClass("alternative full-width").addClass("alternative");
				$(".sticky-header.cloned.alternative").removeClass("alternative");
			}
			if( $(this).val() == 3){
				$("header").removeClass("alternative full-width").addClass("full-width");
			}
		});


		$("#layout-switcher").on('change', function() {
			$('#layout').attr('href', $(this).val() + '.css');
		});

		$(".colors li a").click(function(e){
			e.preventDefault();
			$(this).parent().parent().find("a").removeClass("active");
			$(this).addClass("active");
		});
		
		$('.bg li a').click(function() {
			var current = $('#button-switcher select[id=layout-button]').find('option:selected').val();
			if(current == '1') {
				var bg = $(this).css("backgroundImage");
				$("body").css("backgroundImage",bg);
			} else {
				alert('Please select boxed layout');
			}
		});

		$('.bgsolid li a').click(function() {
			var current = $('#button-switcher select[id=layout-button]').find('option:selected').val();
			if(current == '1') {
			var bg = $(this).css('backgroundColor');
			$('body').css('backgroundColor',bg).css('backgroundImage','none')
			} else {
				alert('Please select boxed layout');
			}
		});


		$("#reset a").click(function(e){
			e.preventDefault();
			$("body" ).removeClass("boxed");
			$("header" ).removeClass("alternative");
			$("header" ).removeClass("full-width");
			$(".colors li a" ).removeClass("active");
			$("#colors" ).attr("href", "css/colors/green.css" );
			$(window).resize();
		});
			

	});
