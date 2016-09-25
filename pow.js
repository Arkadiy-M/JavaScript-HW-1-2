function IsNumeric(input)
{
    return (input - 0) == input && (''+input).trim().length > 0;
}
function pow (a,b) {
var result=1;
	for (var i = 1; i <= b; i++){
		result *= a;
	}
	console.log ('Результат POW:', result);
}
alert ('Первая часть ДЗ 1-2');
var num, exp;
console.log(IsNumeric(12));
do{
	num = prompt ('Введите число:');
}
while(!IsNumeric(num));
	
do{
	exp = prompt ('В какую степень:');
}
while(!IsNumeric(num));
pow (num, exp);
