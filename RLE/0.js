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
				if (count>255) result=result+"#(255)"+str.charAt(i)
					else result=result+"#("+count+")"+str.charAt(i)
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
	if (result.charAt(i)!="#"){
		dresult=dresult+result.charAt(i)
	}
	else {
		if (result.charAt(i+1)!="(") {
			var cou=result.charCodeAt(i+1)
			for (var j=0;j<cou;j++)
				dresult=dresult+"#"
			i=i+2
		}
		else{
			i=i+2
			var count=""
			while(result.charAt(i)!=")"){
				count=count+result.charAt(i)
				i++
			}
			i++
			for(var l=0;l<count;l++)
				dresult=dresult+result.charAt(i)
		}
	}
}
//WScript.echo(dresult)
z = file.OpenTextFile("result.txt",8); // Запись в txt
z.WriteLine("Start string: "+str);
z.WriteLine("Cod string ESCAPE: "+result);
z.WriteLine("DCod string ESCAPE: "+dresult);
//JUMP кодирование
var countr=0
var counto=1
var minres=""
var resultJ=""
for (var i =0; i<str.length;i++){
	if ((str.charAt(i)!=str.charAt(i+1))&&(counto==1)){
		countr++;
		minres=minres+str.charAt(i)
	}
	if (str.charAt(i)==str.charAt(i+1)) {
		counto++; 
		if (countr>0) {
				resultJ=resultJ+"("+minres.length+")"+minres 
				countr=0;minres=""
		}
	}
		else if (countr==0) {
			while(counto>0){
			if (counto>255) resultJ=resultJ+"(255)"+str.charAt(i);
				else resultJ=resultJ+"("+counto+")"+str.charAt(i);
			counto=counto-255
			}
			counto=1
		}
}
if (str.length==1){
	minres=""
	resultJ=resultJ+"(1)"+str.charAt(0)
}
if (minres.length>0) //проверка на остаток
	resultJ=resultJ+"("+minres.length+")"+minres

//JUMP декодирование
var dresultJ=""
var s=1
while(s<resultJ.length){
	var coun=""
	var mres=""
	while(resultJ.charAt(s)!=")"){
		coun=coun+resultJ.charAt(s)
		s++
	}
	s++
	while((resultJ.charAt(s)!="(")&&(s<resultJ.length)){
		mres=mres+resultJ.charAt(s)
		s++
	}
	if (mres.length==coun){dresultJ=dresultJ+mres; mres="";coun=0}
		else{
			for (var n=0;n<coun;n++)
				dresultJ=dresultJ+mres
			mres=""
			coun=0
		}
	s++
}
z.WriteLine("Cod string JUMP: "+resultJ);
z.WriteLine("DCod string JUMP: "+dresultJ);
z.WriteLine("**************************************");