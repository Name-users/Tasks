WScript.echo("Input text")
str = WScript.StdIn.ReadLine();
WScript.echo("Input outText")
T = WScript.StdIn.ReadLine();
var count=0;
var result1=0;
var copyT = []
for (var j=0;j<T.length;j++ )
{
copyT[j]=str.charAt(j);
}
//012345
//abcabd
//ab
//for (var i=0; i<str.length/T.length;i=i++)
//{
	/*if (str.charAt(i)==T.charAt(i%T.length)) count++;
		else count=0;
	if (count==T.length)
	{
		count=0;
		result1++;
	}*/
	//for ()
		//var j=0
		//while(str.charAt(i+j)==T.charAt(i)
//}
while (vhod>0)
{
	for (var j=0;j<T.length;j++)
	{
		if (copyT[j]==T.charAt(j)) count++;
			else count=0
		if (count = T.length){count=0;result++}
	}
	for (var n=0;n<copyT.length-1;i++)
		copyT[n+1]=copyT[n]
	copyT[T.length-1]=str.charAt(1+)
}
for (var i=0; i<copyT.length;i++)
	WScript.echo(copyT[i])
WScript.echo(result1)
