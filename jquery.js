

$(document).ready(function(){
	//Funciones
	//Crear caja
	var createBoard = function(size){
    var $sb = $('.sketchboard');
		for(var i = 0; i < size; i++){
			for(var j = 0; j < size; j++){
			$($sb).append('<div class="box"></div>');
			}
		$($sb).append('<br />');
		}
    $(".box").css({"height" : divSize(size) + "px", "width" : divSize(size) + "px"});
	}
  //Modo Color
  var color = function(){
    var rand = function(){ return Math.floor(Math.random()*256) }
    return "rgb(" + rand() + "," + rand() + "," + rand() + ")";
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
  //Tamaño
  var divSize = function(size){
    var s = 800 / size;
    return s;
  };
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
