(function($){

	$('#plantilla').val($('#plantilla-script').html());
	$('#json').val($('#json-script').html());

	$('#procesar').click(function(){

		var plantilla=$('#plantilla').val();
		var json=$('#json').val();
		try{
			$('#target').html(Mustache.render(plantilla,JSON.parse(json)));
		} catch(e){
			alert(e);
		}
	});

})(jQuery);