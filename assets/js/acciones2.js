$( document ).ready(function() {



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
});