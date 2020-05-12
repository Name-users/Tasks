var file =new ActiveXObject('Scripting.FileSystemObject'); //возможность открыть файл
var str = file.OpenTextFile('14k.txt') 
str = str.ReadAll()
var sub = file.OpenTextFile('sub.txt')
sub = sub.ReadAll()
/*
str="abcxabcxabc"
sub="abc"*/
var endindex = sub.length - 1
alph = [], 
l = str.length, 
i = 0
j=0 
move=-1
result = "Firs 10: "
vxod=0;
count=0
for (i=0; i < endindex+1; i++)
    alph[sub.charAt(i)] = endindex - i;
    i = 0;
start = new Date().getTime();
while (i < str.length) {
    for (j = endindex; j >= 0; j--)
        if (sub.charAt(j) != str.charAt(i + j)) {
            break;
        }
    if (j < 0) {
    i++;
	vxod++
		if (count<10){
		result=result+i+" "
		count++
		}
    }
    else {
        move = alph[str.charAt(i + j)];
				if (!move){
				move = endindex + 1;	
			}
            i += move;
    }
}
end = new Date().getTime();
		
WScript.echo(result)
WScript.echo("Count: "+vxod)
WScript.echo("Time: "+(end-start))