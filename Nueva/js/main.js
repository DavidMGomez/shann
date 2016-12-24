jQuery(function($) {
    var cont = 0;
    var arrImagenes = ['mislider.jpg', 'mislider2.jpg', 'mislider3.jpg'];

	$(function(){
		$('#main-slider.carousel').carousel({
			interval: 10000,
			pause: false
		});
		
		var imagenActual = 'fondo-1.jpg';
		var tiempo = 10000;
		var id_contenedor = 'main-slider.carousel';
		var randImage = arrImagenes[cont];
		console.log(randImage);
		imagenActual = randImage;
		cambiarImagenFondo(imagenActual, id_contenedor);
		setInterval(function () {

		    var randImage = arrImagenes[cont];
		    console.log(randImage);
		    imagenActual = randImage;
		    cambiarImagenFondo(imagenActual, id_contenedor);
		    cont++;

		    if (cont == arrImagenes.length)
		    { cont = 0;}
		}, tiempo)
		
	});


	

	function cambiarImagenFondo(nuevaImagen, contenedor) {
	    var contenedor = $('#' + contenedor);
	    //cargar imagen primero
	    var tempImagen = new Image();
	    $(tempImagen).load(function () {
	       
	        contenedor.css('backgroundImage', 'url(' + "/Images/dark_tint.png" + ') ,url(' + tempImagen.src + ')');
            
	        contenedor.fadeIn(500);
	    });
	    tempImagen.src = 'images/' + nuevaImagen;
	}


	$("#previa").click(function (event) {
	    event.preventDefault();
	    if (cont == 0) {
	        cont = arrImagenes.length - 1;
	    }
	    else
	    {
	        cont--;
	    }
	   
	    var nuevaImagen = arrImagenes[cont];

	    cambiarImagenFondo(nuevaImagen, 'main-slider.carousel');
	    
	});


	$("#siguiente").click(function (event) {
	    event.preventDefault();
	    if (cont == arrImagenes.length-1) {
	        cont = 0;
	    }
	    else {
	        cont++;
	    }

	    var nuevaImagen = arrImagenes[cont];

	    cambiarImagenFondo(nuevaImagen, 'main-slider.carousel');

	});





	//Ajax contact
	var form = $('.contact-form');
	form.submit(function () {
		$this = $(this);
		$.post($(this).attr('action'), function(data) {
			$this.prev().text(data.message).fadeIn().delay(3000).fadeOut();
		},'json');
		return false;
	});

	

	//scrollspy
	$('[data-spy="scroll"]').each(function () {
		var $spy = $(this).scrollspy('refresh')
	})

	//PrettyPhoto
	$("a.preview").prettyPhoto({
		social_tools: false
	});

	//Isotope
	$(window).load(function(){
		$portfolio = $('.portfolio-items');
		$portfolio.isotope({
			itemSelector : 'li',
			layoutMode : 'fitRows'
		});
		$portfolio_selectors = $('.portfolio-filter >li>a');
		$portfolio_selectors.on('click', function(){
			$portfolio_selectors.removeClass('active');
			$(this).addClass('active');
			var selector = $(this).attr('data-filter');
			$portfolio.isotope({ filter: selector });
			return false;
		});
	});
});
