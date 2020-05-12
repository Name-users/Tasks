var file =new ActiveXObject('Scripting.FileSystemObject');
string =""
/*for (var i=0;i<1000000;i++)
	string+="a"*/
sub1=""
for (var i=0;i<100;i++)
	sub1+="a"
//z = file.OpenTextFile("string.txt",8); // Запись в txt
//z.WriteLine(string);
m = file.OpenTextFile("sub2.txt",8); // Запись в txt
m.WriteLine(sub1);