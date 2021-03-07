var nr;
nr=prompt('Ingrese un numero(1-12)','');
nr=parseInt(nr);
 
var x=0;

 if(nr<=12){
for (x = 1; x <= 10; x++){
document.write('<li>');
tabel=nr*x;
document.write(nr + "x" + x + "=" + tabel);
document.write("</li>");
}
}else {
	document.write('Solo se permite hasta la tabla 12');
}


 