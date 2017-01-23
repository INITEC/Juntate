$( document ).ready(function() {

	var rangoPrimitivo = -1;


	function SetValues(){
	 	$("#product-name-detail").html("Audífono");

	 	//Cantidad de unidades en Barra
	 	var cantidadUnidades = 2;
	 	$(".cantidad-bar-init").html(cantidadUnidades);
	 	$("#value-qty").html(cantidadUnidades);

	 	//Tabla Juntémonos
	 	//Cantidad -- Precio
	 	var precioRango=[29.90,22.43,18.83,15.23];
	 	var cantidadRango=["1","12","25","100"];


	 	$("#qty-val1").html(cantidadRango[0]);
	 	$("#price-val1").html(precioRango[0].toFixed(2));

	 	$("#qty-val2").html(cantidadRango[1]);
	 	$("#price-val2").html(precioRango[1].toFixed(2));

	 	$("#qty-val3").html(cantidadRango[2]);
	 	$("#price-val3").html(precioRango[2].toFixed(2));	 	
	 	
	 	$("#qty-val4").html(cantidadRango[3]);
	 	$("#price-val4").html(precioRango[3].toFixed(2));



	 	var colorBack = ["rgba(255,64,0,1)","rgba(255,153,0,1)","rgba(51,122,183,1)","rgba(154,46,254,1)"];
	 	var ancho;
	 	cantInicial = cantidadUnidades;
	 	if(cantInicial >= cantidadRango[0] && cantInicial < cantidadRango[1]){
		   	numeroRango = 0;
		    ancho = (cantInicial /cantidadRango[1])*(1/3);
		    ancho = ancho*100;			 
	 	}
	 	if(cantInicial >= cantidadRango[1] && cantInicial < cantidadRango[2]){
		   	numeroRango = 1;
		    ancho = (cantInicial -cantidadRango[1])/(cantidadRango[2]-cantidadRango[1])* (1/3)+(1/3);
		    ancho = ancho*100;			 			    
	 	}
	 	if(cantInicial >= cantidadRango[2] && cantInicial < cantidadRango[3]){
		    numeroRango = 2;		    
		    ancho = (cantInicial -cantidadRango[2])/(cantidadRango[3]-cantidadRango[2])* (1/3)+(2/3);
		    ancho = ancho*100;			    		    
	 	}	 		
	 	if(cantInicial >= cantidadRango[3]){
		    numeroRango = 3;
		    ancho = 100;
	 	}

		$(".bar-detail").css("width", (ancho)+"%");
		$(".bar-detail").css("background-color", colorBack[numeroRango]);

		$(".precio-actual-buy").html(precioRango[numeroRango]);
		$(".tiempoRestante").html("05:20:50");

		$("#progress-buy-init").css("width", (ancho)+"%");
		$("#progress-buy-init").css("background-color", colorBack[numeroRango]);
	}





	function cambioValores(){
			//Barra
			var cantidadRango =
				[
					$( "#qty-val1").html()*1,
					$( "#qty-val2").html()*1,
					$( "#qty-val3").html()*1,
					$( "#qty-val4").html()*1,
				];
			var precioRango =
				[
					$( "#price-val1").html()*1,
					$( "#price-val2").html()*1,
					$( "#price-val3").html()*1,
					$( "#price-val4").html()*1,
				];



			var cantidad = $("#option-product-qty").val()*1;
	 		var cantInicial = $("#value-qty").html()*1;

	 		var total = cantInicial + cantidad;

	 		var colorAdd;
	 		var numeroRango;


	 		var colorBackCero = ["rgba(255,64,0,1)","rgba(255,153,0,1)","rgba(51,122,183,1)","rgba(154,46,254,1)"];
	 		var colorBackNext = ["rgba(255,64,0,.7)","rgba(255,153,0,.7)","rgba(51,122,183,.7)","rgba(154,46,254,.7)","rgba(1,1,1,1)"];

	 		var ancho;

	 		var anchoDiferenciaMeta;

	 		var diferenciaMeta;
	 		if(total >= cantidadRango[0] && total < cantidadRango[1]){
			    numeroRango = 0;
			    ancho = (total /cantidadRango[1])*(1/3);
			    ancho = ancho*100;
			    diferenciaMeta = cantidadRango[1]-total;
			    anchoDiferenciaMeta = 100/3 - ancho;
	 		}
	 		if(total >= cantidadRango[1] && total < cantidadRango[2]){
			    numeroRango = 1;
			    ancho = (total -cantidadRango[1])/(cantidadRango[2]-cantidadRango[1])* (1/3)+(1/3);
			    ancho = ancho*100;
			    diferenciaMeta = cantidadRango[2]-total;
			    anchoDiferenciaMeta = 200/3 - ancho;

	 		}
	 		if(total >= cantidadRango[2] && total < cantidadRango[3]){
			    numeroRango = 2;
			    ancho = (total -cantidadRango[2])/(cantidadRango[3]-cantidadRango[2])* (1/3)+(2/3);
			    ancho = ancho*100;
			    diferenciaMeta = cantidadRango[3]-total;
			    anchoDiferenciaMeta = 300/3 - ancho;

	 		}	 		
	 		if(total >= cantidadRango[3]){
			    numeroRango = 3;
			    ancho = 100;
			    diferenciaMeta = 0;
			    anchoDiferenciaMeta = 0;
	 		}


	 		if(cantInicial >= cantidadRango[0] && cantInicial < cantidadRango[1]){
			    anchoInicial = (cantInicial /cantidadRango[1])*(1/3);
			    anchoInicial = anchoInicial*100;			 
	 		}
	 		if(cantInicial >= cantidadRango[1] && cantInicial < cantidadRango[2]){
			    anchoInicial = (cantInicial -cantidadRango[1])/(cantidadRango[2]-cantidadRango[1])* (1/3)+(1/3);
			    anchoInicial = anchoInicial*100;			 			    
	 		}
	 		if(cantInicial >= cantidadRango[2] && cantInicial < cantidadRango[3]){
			    anchoInicial = (cantInicial -cantidadRango[2])/(cantidadRango[3]-cantidadRango[2])* (1/3)+(2/3);
			    anchoInicial = anchoInicial*100;			    		    
	 		}	 		
	 		if(cantInicial >= cantidadRango[3]){
			    numeroRango = 3;
			    anchoInicial = 100;
	 		}


			$(".notbar-progress").css("width", (ancho)+"%");
			if(ancho<80){
				$(".next-price1").html("");
				$(".next-price2").html("S/. "+ precioRango[numeroRango].toFixed(2));
			}else{
				$(".next-price1").html("S/. "+ precioRango[numeroRango].toFixed(2) +"&nbsp;");
				$(".next-price2").html("");				
			}

			$("#progress-buy-init").css("background-color", colorBackCero[numeroRango]);
			$("#progress-buy-init").css("width", ancho + "%" );
			$("#cantidad-bar-total").html(total);

			$(".add-bar").html(diferenciaMeta);
			$(".add-bar").css("width", anchoDiferenciaMeta+"%");
			$(".add-bar").css("background-color", colorBackNext[numeroRango+1]);

			var ahorro;
			var precioActual;
			/*precioActual = $(".precio-actual-buy").html()*1;*/
			ahorro = cantidad * (precioRango[0] - precioRango[numeroRango]);
			$("#descuento-actual-buy").html("S/. " + ahorro.toFixed(2));

			$(".precio-actual-buy").html("S/. " + precioRango[numeroRango].toFixed(2));

			//Efecto
			if(rangoPrimitivo != numeroRango){
	    		$('.effect-here').toggleClass('zoom-change-price');
	    		//$('.effect-here').css("width", "50%");					    					
			}

    		rangoPrimitivo = numeroRango;		

	}



	SetValues();
	cambioValores();
	$( "#option-product-qty" ).change(function() {
		cambioValores();
    });




	var searchNombres = ["Audífono","Batería","USB"];
	var searchCantidadInicial = [2,15,36];
	var searchRango = [[1,12,25,100],[1,12,25,100],[1,12,25,100]];
	var searchPrecio = [[29.90,22.43,18.83,15.23],[6.90,4.90,3.95,3.09],[23.90,17.45,14.56,12.10]];
	var searchTiempo = ["4d","8h","19h"];
	var colorBackCero = ["rgba(255,64,0,1)","rgba(255,153,0,1)","rgba(51,122,183,1)","rgba(154,46,254,1)"];
	var colorBackNext = ["rgba(255,64,0,.7)","rgba(255,153,0,.7)","rgba(51,122,183,.7)","rgba(154,46,254,.7)","rgba(1,1,1,1)"];	
	
	function setValuesSearch(idProduct){
		var numeroProducto = idProduct.replace("#code", "");


	 	cantInicial = searchCantidadInicial[numeroProducto-1];
	 	cantidadRango = searchRango[numeroProducto-1];
	 	precioRango = searchPrecio[numeroProducto-1];
	 	tiempoRango = searchTiempo[numeroProducto-1];

	 	if(cantInicial >= cantidadRango[0] && cantInicial < cantidadRango[1]){
		   	numeroRango = 0;
		    ancho = (cantInicial /cantidadRango[1])*(1/3);
		    ancho = ancho*100;			 
	 	}
	 	if(cantInicial >= cantidadRango[1] && cantInicial < cantidadRango[2]){
		   	numeroRango = 1;
		    ancho = (cantInicial -cantidadRango[1])/(cantidadRango[2]-cantidadRango[1])* (1/3)+(1/3);
		    ancho = ancho*100;			 			    
	 	}
	 	if(cantInicial >= cantidadRango[2] && cantInicial < cantidadRango[3]){
		    numeroRango = 2;		    
		    ancho = (cantInicial -cantidadRango[2])/(cantidadRango[3]-cantidadRango[2])* (1/3)+(2/3);
		    ancho = ancho*100;			    		    
	 	}	 		
	 	if(cantInicial >= cantidadRango[3]){
		    numeroRango = 3;
		    ancho = 100;
	 	}
		$( idProduct + " .bar-progress").css("width", (ancho)+"%");
		$( idProduct + " .notbar-progress").css("width", (ancho)+"%");
		$( idProduct + " .bar-progress").css("background-color", colorBackCero[numeroRango]);
		$( idProduct + " .next-price").html("S/. " + precioRango[numeroRango]);

		$( idProduct + " .price-base-bar").html("S/. " + precioRango[0].toFixed(2));
		$( idProduct + " .price-end-bar").html("S/. " + precioRango[3].toFixed(2));

		$( idProduct + " .price-end-bar").html("S/. " + precioRango[3].toFixed(2));		

		$( idProduct + " .product-price-value").html("S/. " + [precioRango[numeroRango].toFixed(2)]);		
		$( idProduct + " .product-descuento-value").html((((precioRango[0]-precioRango[numeroRango])/precioRango[0])*100).toFixed(0));		
		$( idProduct + " .product-tiempo-value").html(tiempoRango);		

		$( idProduct + " .product-price").html("S/. "+ precioRango[numeroRango].toFixed(2));		
		$( idProduct + " .old-price").html("S/. "+precioRango[0].toFixed(2));		

	}



	setValuesSearch("#code1");
	setValuesSearch("#code2");
	setValuesSearch("#code3");


	$(".progress-juntate-search").hover(function(){
		progressEntrar("#"+$(this).attr("id"));
	}, function(){
		progressSalir("#"+$(this).attr("id"));
	});
	
	function setNextAnchoBar(idProduct){
		var numeroProducto = idProduct.replace("#code", "")*1;
	 	cantInicial = searchCantidadInicial[numeroProducto-1];
	 	cantidadRango = searchRango[numeroProducto-1];
	 	precioRango = searchPrecio[numeroProducto-1];

	 	if(cantInicial >= cantidadRango[0] && cantInicial < cantidadRango[1]){
		   	numeroRango = 1;
		    ancho = 1/3;
		    ancho = ancho*100;			 
	 	}
	 	if(cantInicial >= cantidadRango[1] && cantInicial < cantidadRango[2]){
		   	numeroRango = 2;
		    ancho = 2/3;
		    ancho = ancho*100;			 			    
	 	}
	 	if(cantInicial >= cantidadRango[2] && cantInicial < cantidadRango[3]){
		    numeroRango = 3;		    
		    ancho = 1;
		    ancho = ancho*100;			    		    
	 	}	 		
	 	if(cantInicial >= cantidadRango[3]){
		    numeroRango = 3;
		    ancho = 100;
	 	}
		$( idProduct + " .bar-progress").css("width", (ancho)+"%");
		$( idProduct + " .notbar-progress").css("width", (ancho)+"%");
		$( idProduct + " .bar-progress").css("background-color", colorBackCero[numeroRango]);
		$( idProduct + " .next-price").html("S/. " + precioRango[numeroRango]);

	}


	function progressEntrar(idProduct){
		var numeroProducto = idProduct.replace("#code", "");		
		setNextAnchoBar(idProduct);

		$( idProduct + " .text-price-end").css("display", "block");
		$( idProduct + " .price-base-bar").css("display", "none");
		$( idProduct + " .price-end-bar").css("display", "none");

	}
	
	function progressSalir(idProduct){
		var numeroProducto = idProduct.replace("#code", "");		
		setValuesSearch(idProduct);

		$( idProduct + " .text-price-end").css("display", "none");
		$( idProduct + " .price-base-bar").css("display", "block");
		$( idProduct + " .price-end-bar").css("display", "block");		
	}










	var FechaFin = [2017,2 - 1,8,6,0,0];
	function tiempoRestanteAction(){
	    var fecha = new Date(FechaFin[0],FechaFin[1],FechaFin[2],FechaFin[3],FechaFin[4],FechaFin[5]);
	    var hoy=new Date();
	    var dias=0;
	    var horas=0;
	    var minutos=0;
	    var segundos=0;
	    if (fecha>hoy){
	        var diferencia= (fecha.getTime()-hoy.getTime())/1000;
	        dias=Math.floor(diferencia/86400);
	        diferencia = diferencia-(86400*dias);
	        horas=Math.floor(diferencia/3600);
	        diferencia=diferencia-(3600*horas);
	        minutos=Math.floor(diferencia/60);
	        diferencia=diferencia-(60*minutos);
	        segundos=Math.floor(diferencia);

	        text = dias +'d ' + horas + 'h ' + minutos + 'm ' + segundos + 's';
			$(".tiempoRestante").html(text);
	    }else{
	        text = dias +'d ' + horas + 'h ' + minutos + 'm ' + segundos + 's';
			$(".tiempoRestante").html(text);	        
	    }
	}
	setInterval(tiempoRestanteAction,1000);

});