

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
  //Modo Color
  var color = function(){
    var colors = ["red","orange","green","yellow","grey","blue","lightblue",
  "pink","brown","purple"]
    var color = Math.floor(Math.random()*10)
    return colors[color];
  }
	//Colorear
	var paint = function(mode){
    if(mode){
      $('.box').on('mouseenter',function(){
        $(this).css('background-color',color());
      });
      } else {
  		$('.box').on('mouseenter',function(){
  			$(this).css('background-color','#d2d2d2');
      });
	   }
   }
	//Reinicio
  var reset = function(modePaint){
			$('.box').remove();
			$('br').remove();
			createBoard(size);
			paint(modePaint);
		}
  // Botones
  $('#reset').click(function(){
    reset();
  });

  $('#change').click(function(){
    size = prompt("Elige el nuevo tamaño (de 1 a 64)");
    if(size > 40){
      alert("Advertencia: Tamaños muy grandes pueden volver lenta la carga de esta página");
    }
    reset();
  });
  $('#multi').click(function(){
    reset(true);
  })
	var size = 16;
	createBoard(size);
	paint(false);
	});
