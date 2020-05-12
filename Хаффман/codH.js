var file =new ActiveXObject('Scripting.FileSystemObject'); //возможность открыть файл
var string = file.OpenTextFile('string.txt') 
string = string.ReadAll()
z = file.OpenTextFile("result.txt",8); // Запись в txt
//z.WriteLine(string+" = "+stec[0]);
//z.WriteLine(result)
//string="aabcccdddd"
//string="ab"
alph=[]
for (var i = 0; i<string.length;i++)
	alph[string.charAt(i)]=0
for (var i = 0; i<string.length;i++)
	alph[string.charAt(i)]++
infiniteLoop=true
//min1=Number.MAX_VALUE
//min2=Number.MAX_VALUE
index1=""
index2=""
res=[]
stroc=""
for (var n in alph) //строю дерево
		if (alph[n]>0) stroc+=n+"="+alph[n]+" "
WScript.echo(stroc)
while (infiniteLoop) //бесконечный цикл
{
	var min1=Number.MAX_VALUE
	var min2=-1
	var stroca=""
	for (var l in alph)
	{
		if (alph[l]>0) //прошли значит не участвовали
		{
			if (alph[l]<min1) 
			{
				min2=min1;
				index2=index1;
				min1=alph[l];
				index1=l;
			}
			else
			{
				if (alph[l]<min2)
				{
					min2=alph[l]
					index2=l
				}
			}
		}
		else continue
	}
	var posihn=true
	for (var l in alph) //поиск их расположения, чтобы присвоить 1 или 0
	{
		if ((l==index1)&&posihn){znach1="1"; znach2="0";posihn=false;}
		if ((l==index2)&&posihn){znach1="0"; znach2="1";posihn=false;}
	}
	var index=index1+index2
	/*if (index.length==2) 
	{
		res[index1]=znach1
		res[index2]=znach2
	}
	else
	{*/
		if (index1.length==1) res[index1]=znach1
		else
		for (var i = 0; i<index1.length;i++)
		{
			res[index1.charAt(i)]=res[index1.charAt(i)]+znach1
		}
		if (index2.length==1) res[index2]=znach2
		else
		for (var i = 0; i<index2.length;i++)
		{
			res[index2.charAt(i)]=res[index2.charAt(i)]+znach2
		}
		
	//}
	alph[index1]=-1 //делаю, чтобы понять, что уже использовал
	alph[index2]=-1
	alph[index]=min1+min2
	for (var n in alph) //строю дерево
		if (alph[n]>0) stroca+=n+"="+alph[n]+" "
	WScript.echo(stroca)
	if (min1+min2==string.length)
		break
	
}

for (var l in res) //разворачиваю строку
{
var str=res[l]
var str1=""
for (var i=str.length-1;i>=0;i--)
	str1+=str.charAt(i)
res[l]=str1
}

resultString="" //создание закодированной строки
for(var i = 0; i<string.length;i++)
	resultString+=res[string.charAt(i)]

z.WriteLine(string+" = "+resultString)
for (var l in res)
z.WriteLine(l+" "+res[l])

poisc=""
dString="" //раскодирую строку
for (var i =0; i<resultString.length;i++)
{
	poisc+=resultString.charAt(i)
	for (var l in res)
		if (poisc===res[l])
		{
			dString+=l
			poisc=""
		}
}
z.WriteLine("Dcode string: "+dString)
WScript.echo(string==dString)












