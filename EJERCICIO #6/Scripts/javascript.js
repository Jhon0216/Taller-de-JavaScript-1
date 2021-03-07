var n1,n2;
n1 = parseInt(prompt('Ingrese un numero'));
n2 = 1;
if(n1<0){
	while(n1<0){
		n1 = parseInt(prompt('Ingrese un numero mayor a cero'));
	}
}

    while(n1>1){
		n2 = n1 * n2;
		n1 = n1 - 1;
	}
	
	document.write('El factorial es: ' + n2);