var file =new ActiveXObject('Scripting.FileSystemObject'); //возможность открыть файл
var string = file.OpenTextFile('example.txt') 
string = string.ReadAll() //считываем весь файл
str=[]
str=string.split(' ')
checkskob=0
for (p=0;p<str.length;p++){ //проверка на скобки
	if (str[p]=='(')
		checkskob++
	if (str[p]==')')
		checkskob--
}
sumbls="()+-*/^"
sumb=[]
stec=[]
sumb[sumbls.charAt(0)]=0; // (
sumb[sumbls.charAt(1)]=1  // )
sumb[sumbls.charAt(2)]=2  // +
sumb[sumbls.charAt(3)]=2  // -
sumb[sumbls.charAt(4)]=3  // *
sumb[sumbls.charAt(5)]=3  // /
sumb[sumbls.charAt(6)]=4  // ^
result=""
rubish=""
res=[]
if (checkskob==0){
	
for (i=0;i<str.length;i++){
	if (str[i]=='('){
		stec.push(str[i])
		continue
		}
	if (str[i]==')') {
		while(stec[stec.length-1]!='('){
			res.push(stec.pop())
		}
		rubish=stec.pop()
		continue
		}
	if (!sumb[str[i]]){
		res.push(str[i])
	}
	else {
		if (stec.length==0){
			stec.push(str[i])
			continue
		}
		else{
			
				if (sumb[str[i]]<=sumb[stec[stec.length-1]]){
					var n=stec.length
					while (stec.length!=0){
						if (stec[stec.length-1]=='(')
							break
						res.push(stec.pop())
					}
					stec.push(str[i]) 
				}
				else{
					stec.push(str[i])
				}
			}
		}
	}
while (stec.length!=0){
	res.push(stec.pop())
}

for (var s=0;s<res.length;s++) // копим результирующую строку 
	result+=res[s]

for (var q=0; q<res.length;q++) {
	var sign=sumb[res[q]]
	if (!sign)
		stec.push(res[q])
	else {
		var val2=Number(stec.pop())
		var val1=Number(stec.pop())
		var val3=0
		switch (res[q]){
			case '+':
				val3=val1+val2
			break;
			case '-':
				val3=val1-val2
			break;
			case '*':
				val3=val1*val2
			break;
			case '/':
				if (val2!=0)
					val3=val1/val2
				else {WScript.echo("Del 0"); break;}
			break;
			case '^':
				val3=val1
				for (var qw=0;qw<val2-1;qw++){
					val3=val3*val1
				}
			break;
		}
		stec.push(val3)
	}
}
z = file.OpenTextFile("result.txt",8); // Запись в txt
z.WriteLine(string+" = "+stec[0]);
z.WriteLine(result)
}
else {
	z = file.OpenTextFile("result.txt",8);
	z.WriteLine("Error: check for parentheses");
}
