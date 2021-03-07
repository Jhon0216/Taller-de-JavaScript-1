restaFechas = function(f1,f2)
 {
 var aFecha1 = f1.split('/');
 var aFecha2 = f2.split('/');
 var fFecha1 = Date.UTC(aFecha1[2],aFecha1[1]-1,aFecha1[0]);
 var fFecha2 = Date.UTC(aFecha2[2],aFecha2[1]-1,aFecha2[0]);
 var dif = fFecha2 - fFecha1;
 var dias = Math.floor(dif / (1000 * 60 * 60 * 24));
 return dias;
 }
var f1 = '07/03/2021';
var f2 = '24/12/2021';
window.alert('Los dias que hay entre hoy y el 24 de diciembre son: ' + restaFechas(f1,f2));