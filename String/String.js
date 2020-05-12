var file =new ActiveXObject('Scripting.FileSystemObject'); //возможность открыть файл
var str = file.OpenTextFile('string.txt') 
str = str.ReadAll() //считываем весь файл
var substr = file.OpenTextFile('sub2.txt')
substr = substr.ReadAll()
//Реализация BF
bfcount=0
bffirst="BF first 10: "
bfc=0

startbf = new Date().getTime();
for (var i=0;i<=str.length-substr.length;i++){
	if (bfunction(i)){
		bfcount++
		if (bfc<10) {bffirst=bffirst+(i+1)+" ";bfc++}
	}
}
endbf = new Date().getTime();

function bfunction(l){
	var count=0;
	for (var n=0;n<substr.length;n++)
		if (str.charAt(l+n)==substr.charAt(n)) count++
	if (count==substr.length) return true
	return false
	
}
z = file.OpenTextFile("result.txt",8); // Запись в txt
z.WriteLine("Bf found: "+bfcount);
z.WriteLine(bffirst)
z.WriteLine("Time BF: "+ (endbf-startbf))
//Конец BF

//Реализация H1 без 2 и квадрата
H1substr=0
h1count=0
h1coliz=0
h1first="HF1 first 10: "
H3substr=0
pow=1
h1c=0
sumh1=0
for (var n=substr.length-1;n>=0;n--){
	H1substr=H1substr+substr.charCodeAt(n)
	H3substr=H3substr+substr.charCodeAt(n)*pow
	pow=pow*2
}

for (var n=0;n<substr.length;n++)
	sumh1=sumh1+str.charCodeAt(n)
	

starth1 = new Date().getTime();
for (var i=0;i<=str.length-substr.length;i++){
	if (i!=0) 
		sumh1=sumh1-str.charCodeAt(i-1)+str.charCodeAt(i+substr.length-1)
	if (sumh1==H1substr){
		h1coliz++
		if(bfunction(i)){
			h1count++
			h1coliz--
			if (h1c<10) {h1first=h1first+(i+1)+" ";h1c++}
		}
	}
}
endh1 = new Date().getTime();

if (h1coliz<0) 
	h1coliz=0
z.WriteLine("H1 found: "+h1count);
z.WriteLine("Kolizi: "+h1coliz)
z.WriteLine(h1first)
z.WriteLine("Time H1: "+ (endh1-starth1))
//Конец H1

//Реализация H2 кадрат
H2substr=0
h2count=0
h2coliz=0
h2first="HF2 first 10: "
h2c=0
sumh2=0
for (var i=0;i<substr.length;i++)
	H2substr=H2substr+substr.charCodeAt(i)*substr.charCodeAt(i)

for (var n=0;n<substr.length;n++)
		sumh2=sumh2+str.charCodeAt(n)*str.charCodeAt(n)

starth2 = new Date().getTime();
for (var i=0;i<=str.length-substr.length;i++){
	if (i!=0)
		sumh2=sumh2+str.charCodeAt(i+substr.length-1)*str.charCodeAt(i+substr.length-1)-str.charCodeAt(i-1)*str.charCodeAt(i-1)
	if (sumh2==H2substr){
		h2coliz++
		if(bfunction(i)){
			h2count++
			h2coliz--
			if (h2c<10){h2first=h2first+(i+1)+" ";h2c++}
		}
	}
}
endh2 = new Date().getTime();

if (h2coliz<0) 
	h2coliz=0
z.WriteLine("H2 found: "+h2count);
z.WriteLine("Kolizi: "+h2coliz)
z.WriteLine(h2first)
z.WriteLine("Time h2: "+ (endh2-starth2))
//конец H2

//Реализация H3
h3count=0
h3coliz=0
h3first="HF3 first 10: "
h3c=0
sumh3=0
q=1
for (var n=substr.length-1;n>=0;n--){
	sumh3=sumh3+str.charCodeAt(n)*q
	q=q*2
}
q=q/2

starth3= new Date().getTime();
for (var i=0;i<=str.length-substr.length;i++){
	if (i!=0) sumh3=(sumh3-str.charCodeAt(i-1)*q)*2+str.charCodeAt(i+substr.length-1)
	if (sumh3==H3substr){
		h3coliz++
		if(bfunction(i)){
			h3count++
			h3coliz--
			if(h3c<10) {h3first=h3first+(i+1)+" ";h3c++}
		}
	}
}
endh3 = new Date().getTime();

if (h3coliz<0) 
	h3coliz=0
z.WriteLine("H3 found: "+h3count);
z.WriteLine("Kolizi: "+h3coliz)
z.WriteLine(h3first)
z.WriteLine("Time h3: "+ (endh3-starth3))
z.WriteLine("***********************************")
z.WriteLine()
	
	
	
	