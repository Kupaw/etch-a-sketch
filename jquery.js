

$(document).ready(function(){
	//Funciones
	//Crear caja
	var createBoard = function(size){
		for(var i = 0; i < size; i++){
			for(var j = 0; j < size; j++){
			$('.sketchboard').append('<div class="box"></div>');
			}
		$('.sketchboard').append('<br />');
		}
	}
	//Colorear
	var paint = function(){
		$('.box').on('mouseenter',function(){
			$(this).css('background-color','#d2d2d2');
		});
	}
	//Boton de reinicio
  var reset = function(){
			$('.box').remove();
			$('br').remove();
			createBoard(size);
			paint()
		}

  $('#reset').click(function(){
    reset();
  });

	var size = 16;
	createBoard(size);
	paint();
	});
