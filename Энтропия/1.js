str = WScript.StdIn.ReadLine();
alph=new Array();
for (i=0;i<str.length;i++)
alph[str.charAt(i)]=0;
for (i=0; i<str.length;i++)
alph[str.charAt(i)]++;
//вывод алфавита
/*for (i in alph)
WScript.Echo(i);*/

index=0;
povtor= new Array();

for (i=0;i<str.length;i++)
povtor[i]=0;
for (symbl in alph)
{
	for (i=0;i<str.length;i++)
	{
		if (symbl===str.charAt(i))
		{
			povtor[index]++
		}
	}
	index++;
}
H=0;
count=0;
for (i=0;i<povtor.length;i++)
	if (povtor[i] != 0) {povtor[i]=povtor[i]/str.length; count++;}
if (count != 1)
for (i=0;i<povtor.length;i++)
	if (povtor[i] != 0) H=H+povtor[i]*(Math.log(povtor[i])/Math.log(count));

WScript.Echo(H*(-1));












/*str = WScript.StdIn.ReadLine();
alph=new Array();
for (i=0;i<str.length;i++)
alph[str.charAt(i)]=0;
for (i=0; i<str.length;i++)
alph[str.charAt(i)]++;
//вывод повторов
for (i=0;i<str.length;i++)
WScript.Echo(alph[str.charAt(i)]);
//вывод алфавита
for (i in alph)
WScript.Echo(i);

index=0;
povtor= new Array();

for (i=0;i<str.length;i++)
povtor[i]=0;
for (symbl in alph)
{
	for (i=0;i<str.length;i++)
	{
		if (symbl===str.charAt(i))
		{
			povtor[index]++
			//ПОЧЕМУ НЕ ЗАХОДИТ СЮДА?
		}
	}
	index++;
}
WScript.Echo("*****")
for (i=0;i<povtor.length;i++)
	if (povtor[i] != 0) WScript.Echo(povtor[i]);*/


	