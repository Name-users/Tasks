var file =new ActiveXObject('Scripting.FileSystemObject'); //возможность открыть файл
var Gary = file.OpenTextFile('Gary.txt') 
Gary = Gary.ReadAll()
Gary=Gary.toLowerCase()
var str = file.OpenTextFile('string.txt')
str = str.ReadAll() //считываем весь файл
//strCopy=str.toLowerCase()
//str = WScript.StdIn.ReadLine();
shift=Number(WScript.StdIn.ReadLine());

alph=[]
GT=[]
LT=[]
alphString="abcdefghijklmnopqrstuvwxyz0123465789()., \"\'<>[]{}\\/*-:"
for(var i = 0; i<alphString.length;i++){ //буквы по порядку
	GT[alphString.charAt(i)]=0
	LT[alphString.charAt(i)]=0
}
for (var i =0; i<Gary.length;i++){
	if (Gary.charAt(i) in GT)
		GT[Gary.charAt(i)]+=1
}

for (var l in GT){
	GT[l]=GT[l]/Gary.length
}
shift=shift%alphString.length
function WorkWithString(str,shift){
	var result=""
	for (var i=0;i<str.length;i++){
		var index=0
		var sumbol=str.charAt(i)
		var reg=false
		if (sumbol == sumbol.toUpperCase()){
			reg=true
			sumbol=sumbol.toLowerCase()
		}
		for (var n=0;n<alphString.length;n++)
			if (sumbol==alphString.charAt(n)){
				index=n; 
				break
			}
		if (sumbol.toLowerCase() == sumbol.toUpperCase()){
			reg=false
		}
		sumbol=FShift(index,shift)
		if ((reg))
			sumbol=sumbol.toUpperCase()
		result+=sumbol

	}
	return result
}
result=WorkWithString(str,shift)
WScript.echo("Result "+result)


function FShift(local,localshift){
	var length=alphString.length
	if (localshift<0){
		//local=(length-(Math.abs(local+localshift))%length)%length
		local=local+localshift
		if (local<0)
			local+=length
	}
	else 
		local=(local+localshift)%(alphString.length)
	return alphString.charAt(local)
}

resCopy=result.toLowerCase()
for (var i =0; i<resCopy.length;i++){
	if (resCopy.charAt(i) in LT)
		LT[resCopy.charAt(i)]+=1
}
for (var l in LT)
	LT[l]=LT[l]/result.length

newshift=Number.MAX_VALUE
Sum=Number.MAX_VALUE

for (var sh=1;sh<alphString.length;sh++){ //длинна алфавита со спец симвалами
	var sum=0
	for (var i=0; i<alphString.length;i++){ //бежим по алфавиту
		//var sumb=alphString.charAt((i+sh)%alphString.length) //получаем символ из всего алфавита со сдвигом
		var sumb=FShift(i,sh)
		sum=sum+(GT[sumb]-LT[l])*(GT[sumb]-LT[l])
		sum+=Math.pow((GT[sumb]-LT[alphString.charAt(i)]),2)
		
	}
	//WScript.echo(sum)
	if (sum<Sum){
		Sum=sum
		newshift=sh
	}
}
newshift=newshift%alphString.length
WScript.echo("New shift "+newshift)
WScript.echo("Dresult "+WorkWithString(result,newshift))
