var n1,P;
n1 = prompt('Ingrese un numero'); 
n1=parseInt(n1);

j=2;
P=true;

while(j<n1){
	if(n1%j == 0){
		P=false;
	} j++;
}

if(P == true){
	document.write('El numero ' + n1 + ' es primo');
}else {
	document.write('El numero ' + n1 + ' no es primo');
}