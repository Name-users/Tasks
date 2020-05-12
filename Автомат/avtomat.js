var file =new ActiveXObject('Scripting.FileSystemObject'); //возможность открыть файл
var str = file.OpenTextFile('14k.txt') 
str = str.ReadAll()
var t = file.OpenTextFile('sub.txt')
t = t.ReadAll()
//t="abaxabaz"
m=t.length
alph=new Array()
//определяем алфавит
for (i=0;i<m;i++)
	alph[t.charAt(i)]=0
del=new Array(m+1)
for (j=0;j<=m;j++)
	del[j]=new Array()

for (i in alph)
	del[0][i]=0

for (j=0;j<m;j++){
	prev=del[j][t.charAt(j)]
	del[j][t.charAt(j)]=j+1
	for (i in alph)
		del[j+1][i]=del[prev][i]
}
/*
for (j=0;j<=m;j++){
	out=""
	for (i in alph)
		out+=del[j][i]+" "
	WScript.echo(out)
}
*/
start=new Date()
vxod=0
var count=0;
var posishn=0
rcount=0
result="First 10: "
for (var i=0; i<str.length;i++){
	var sumb=str.charAt(i)
	if (sumb in alph)
		posishn=del[posishn][sumb]
	else posishn=0
	if (posishn==t.length){
		vxod++
	if (rcount<10){
		rcount++
		result+=(i-t.length+2)+" "
	}
	}
}
end=new Date()
WScript.echo(vxod)
WScript.echo("Time: "+(end-start))
WScript.echo(result)