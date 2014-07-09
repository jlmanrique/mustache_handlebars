(function($){

	var completar = function(paso){
		$('#plantilla').val($('#plantilla-'+paso).html());
		$('#json').val($('#json-'+paso).html());
	}

	completar(1);

	$('#procesar').click(function(){

		var plantilla=$('#plantilla').val();
		var json=$('#json').val();
		try{
			$('#target').html(Mustache.render(plantilla,JSON.parse(json)));
		} catch(e){
			alert(e);
		}
	});

	$('.paso').click(function(){
		completar($(this).attr('data-paso'));
	});

})(jQuery);