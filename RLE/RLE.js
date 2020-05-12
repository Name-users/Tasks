var file =new ActiveXObject('Scripting.FileSystemObject'); //возможность открыть файл
var str = file.OpenTextFile('string.txt') 
str = str.ReadAll()
//str = WScript.StdIn.ReadLine();
var count=1;
var result=""
var dresult=""
//ESCAPE кодирование
for (var i=0; i<str.length;i++){
	if (str.charAt(i)!="#"){
		if (str.charAt(i)!=str.charAt(i+1)){ 
			while (count>3){
				if (count>255) result=result+"#"+String.fromCharCode(255)+str.charAt(i)
					else result=result+"#"+String.fromCharCode(count)+str.charAt(i)
				count=count-255;
			}
			if (count<4){
				for(var x=0;x<count;x++)
					result=result+str.charAt(i)
				count=1
			}
		}
		else count++
	}
	if (str.charAt(i)=="#") {
		if (str.charAt(i+1)!="#") {
			if (count<=255){
				result=result+"#"+String.fromCharCode(count)+"#";
				count=1;
			}
			else{
				while (count>0){
					if (count>255) result=result+"#"+String.fromCharCode(255)+"#"
						else result=result+"#"+String.fromCharCode(count)+"#"
						count=count-255;
				}
				count=1
			}
		}
		else count++;
	}
}
WScript.echo(result)
//ESCAPE декодирование
for (var i= 0;i<result.length;i++){
	if (result.charAt(i)=="#"){
		i++
		var count = result.charCodeAt(i)
		i++
		for (var n=0;n<count;n++)
			dresult=dresult+result.charAt(i)
	}
	else 
		dresult=dresult+result.charAt(i)
}
z = file.OpenTextFile("result.txt",8); // Запись в txt
z.WriteLine("Start string: "+str);
//z.WriteLine("Cod string ESCAPE: "+result);
z.WriteLine("DCod string ESCAPE: "+dresult);

//JUMP кодирование
var countr=0
var counto=1
var minres=""
var minres2=""
var resultJ=""

for (var i =0; i<str.length;i++){
	if ((str.charAt(i)!=str.charAt(i+1))&&(counto==1)){
		countr++;
		minres=minres+str.charAt(i)
		if (100-countr<2) {
			resultJ=resultJ+String.fromCharCode(100-minres.length)+minres
			countr=0
			minres=""
		}
	}
	if (str.charAt(i)==str.charAt(i+1)) {
		counto++;
		if (countr>0) {
				resultJ=resultJ+String.fromCharCode(100-minres.length)+minres 
				countr=0;
				minres=""
		}
	}
		else if (countr==0) {
			while(counto>0){
			if (counto>154) resultJ=resultJ+String.fromCharCode(100+154)+str.charAt(i);
				else resultJ=resultJ+String.fromCharCode(100+counto)+str.charAt(i);
			counto=counto-154
			}
			counto=1
		}
}
if (str.length==1){
	minres=""
	resultJ=resultJ+String.fromCharCode(100-1)+str.charAt(0)
}
if (minres.length>0) //проверка на остаток
	resultJ=resultJ+String.fromCharCode(100-minres.length)+minres

//JUMP декодирование
var dresultJ=""
var s=0
while(s<resultJ.length){
	var coun=resultJ.charCodeAt(s)
	var mres=""
	if (coun>100){
		for (var i=0;i<coun-100;i++)
			dresultJ=dresultJ+resultJ.charAt(s+1)
		s=s+2
	}
	else{
		
		for(var i=0;i<100-coun;i++)
			dresultJ=dresultJ+resultJ.charAt(s+1+i)
		s=s+100-coun+1
	}
}
WScript.echo(resultJ)
//z.WriteLine("Cod string JUMP: "+resultJ);
z.WriteLine("DCod string JUMP: "+dresultJ);
z.WriteLine("**************************************");
//-10